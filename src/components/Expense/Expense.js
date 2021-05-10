import React, { useEffect, useState } from 'react';
import { useFirestore, useUser } from 'reactfire';
import * as styled from "../Assets/Styles/Styled";
import patron from "../Assets/Images/patron.svg";
import { Link } from 'react-router-dom';
import History from '../History/History';

function Expense(props) {
  const expDef = {
    category: 'non-category',
    currency: 'COP',
    created_at: new Date(),
    note: '',
    expense: true,
    updated_at: new Date(),
    subtotal: 0,
  }
  // const date = new Date();
  const [expense, setExpense] = useState(expDef);
  const [categories, setCategories] = useState([]);

  const { data: user } = useUser();
  const expenseRef = useFirestore().collection('users').doc(user.uid).collection('expenses');
  const categoriesRef = useFirestore().collection('users').doc(user.uid).collection('categories');

  useEffect(() => {
    let isMounted = true;
    const getCategories = async () => {
      const { docs } = await categoriesRef.get();
      if (docs) {
        const allCategories = docs.map(doc => ({id: doc.id, ...doc.data()}))
        setCategories(allCategories);
      }
    };
    if (isMounted) {
      getCategories();
    }
    return () => { isMounted = false }
  }, [categoriesRef])

  const changeValue = (event) => {
    let { name, value } = event.target;
    if (name === 'subtotal' && value) {
      value = parseInt(value, 10);
    }
    setExpense({
      ...expense,
      [name]: value
    })
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!expense.subtotal) {
      return;
    }
    const catExist = (await categoriesRef.where('name', '==', expense.category).get()).empty;
    if (catExist) {
      await categoriesRef.doc().set({
        name: expense.category,
        created_at: new Date(),
        updated_at: new Date()
      })
    }
    try {
      const subtotal = (await expenseRef.doc('total').get()).data()
      await expenseRef.doc('total').update({
        total: subtotal.total + expense.subtotal,
        updated_at: new Date(),
      })
    } catch (e) {
      await expenseRef.doc('total').set({
        total: expense.subtotal,
        created_at: new Date(),
        updated_at: new Date(),
      })
    }

    let month = new Date().toLocaleString('default', { month: 'short' });
    setExpense({...expense, created_at: new Date(), updated_at: new Date()});
    await expenseRef.doc('months').collection(month).doc().set(expense);
    setExpense(expDef);
  }

  return (
    <React.Fragment>
      <styled.BodySectionIn>
        <styled.ContainerHome>
          <styled.UlRow>
              <styled.Col><styled.BarsOu isExpenseBar={true} /><Link to="/"><styled.AddIconBack size="2.3rem" /></Link></styled.Col>
          </styled.UlRow>
          <styled.IconBack><img src={patron} alt="Patron background" /></styled.IconBack>      
          <form>
            <styled.UlRow>
              <styled.Col13>
                <styled.Label isExpenseLabel={true} htmlFor="subtotal">Nuevo egreso</styled.Label>
                <styled.InputIn isExpense={true} id='subtotal' name="subtotal" value={expense.subtotal} onChange={changeValue} type="number" pattern="[0-9]*" />
              </styled.Col13>
              <styled.Col13>
                <styled.Label isExpenseLabel={true} htmlFor="category">Categoría</styled.Label>
                <styled.InputIn isExpense={true} id='category' name="category" onChange={changeValue} type="text" list='categories' />
                <datalist id='categories'>
                  {user && categories.map(cat => {
                    if (cat.name !== 'non-category') {
                      return <option key={cat.id} value={cat.name}>{cat.name}</option>
                    }
                    return (<option key={cat.id} value=""></option>);
                  })}
                </datalist>
              </styled.Col13>
              <styled.Col13>
                <styled.Label isExpenseLabel={true} htmlFor="note">Nota</styled.Label>
                <styled.Textarea isExpense={true} id='note' name="note" value={expense.note} onChange={changeValue} rows="1" />
              </styled.Col13>
            </styled.UlRow>
              <styled.ButtonIn isExpenseButton={true} onClick={onSubmit}>Guardar</styled.ButtonIn>
          </form>
        </styled.ContainerHome>
      </styled.BodySectionIn>
      
      {/* <!-- Saldo section --> */}
      <styled.SaldoSection>
          <styled.ContainerHome>
              <styled.UlRow>
                  <styled.Col12><div><h3>Saldo actual</h3></div></styled.Col12>
                  <styled.Col12>
                      <styled.SaldoNumber><h3>$ 0 COP</h3></styled.SaldoNumber>
                  </styled.Col12>
              </styled.UlRow>
          </styled.ContainerHome>
      </styled.SaldoSection>
      <History factor='expenses'></History>
    </React.Fragment>
  )
}
export default Expense;
