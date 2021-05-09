import React, { useState, useEffect } from 'react';
import 'firebase/firestore';
import { useFirestore, useUser } from "reactfire";
import * as styled from "../Assets/Styles/Styled";
import patron from "../Assets/Images/patron.svg";
import { Link } from 'react-router-dom';



function Income(props) {
  /* state de income */
  const incDef = {
    category: 'non-category',
    currency: 'COP',
    created_at: new Date(),
    note: '',
    updated_at: new Date(),
    subtotal: 0,
  };
  const [income, setIncome] = useState(incDef);
  const [categories, setCategories] = useState([]);
  const { data: user } = useUser();
  
  const incomesRef = useFirestore().collection('users').doc(user.uid).collection('incomes');
  const categoriesRef = useFirestore().collection('users').doc(user.uid).collection('categories');
/*   const {data, status} = useFirestoreCollectionData(categoriesRef);
 */
  useEffect(() => {
    let isMounted = true;
    const getCategories = async () => {
      const { docs } = await categoriesRef.get();
      const allCategories = docs.map(doc => ({id: doc.id, ...doc.data()}))
      setCategories(allCategories);
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
    setIncome({
      ...income,
      [name]: value
    })
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!income.subtotal) {
      return;
    }
    const catExist = (await categoriesRef.where('name', '==', income.category).get()).empty;
    if (catExist) {
      await categoriesRef.doc().set({
        name: income.category,
        created_at: new Date(),
        updated_at: new Date()
      })
    }
    try {
      const subtotal = (await incomesRef.doc('total').get()).data()
      await incomesRef.doc('total').update({
        total: subtotal.total + income.subtotal,
        updated_at: new Date(),
      })
    } catch (e) {
      await incomesRef.doc('total').set({
        total: income.subtotal,
        created_at: new Date(),
        updated_at: new Date(),
      })
    }

    let month = new Date().toLocaleString('default', { month: 'short' });
    setIncome({...income, created_at: new Date(), updated_at: new Date()});
    await incomesRef.doc('months').collection(month).doc().set(income);
    setIncome(incDef);
  }

  return (
    <React.Fragment>
      <styled.BodySectionIn>
        <styled.ContainerHome>
          <styled.UlRow>
              <styled.Col><styled.BarsIn /><Link to="/"><styled.AddIconBack size="2.3rem" /></Link></styled.Col>
          </styled.UlRow>
          <styled.IconBack><img src={patron} alt="Patron background" /></styled.IconBack>      
          <form>
            <styled.UlRow>
              <styled.Col13>
                <styled.Label htmlFor="subtotal">Nuevo ingreso</styled.Label>
                <styled.InputIn id='subtotal' name="subtotal" value={income.subtotal} onChange={changeValue} type="number" pattern="[0-9]*" />
              </styled.Col13>
              <styled.Col13>
                <styled.Label htmlFor="category">Categoría</styled.Label>
                <styled.InputIn id='category' name="category" onChange={changeValue} type="text" list='categories' />
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
                <styled.Label htmlFor="note">Nota</styled.Label>
                <styled.Textarea id='note' name="note" value={income.note} onChange={changeValue} rows="1" />
              </styled.Col13>
            </styled.UlRow>
              <styled.ButtonIn onClick={onSubmit}>Agregar</styled.ButtonIn>
          </form>
        </styled.ContainerHome>
      </styled.BodySectionIn>
      
      {/* <!-- Saldo section --> */}
      <styled.SaldoSection>
          <styled.ContainerHome>
              <styled.UlRow>
                  <styled.Col12><div><h3>Saldo Abril 2021</h3></div></styled.Col12>
                  <styled.Col12>
                      <styled.SaldoNumber><h3>$ 0 COP</h3></styled.SaldoNumber>
                  </styled.Col12>
              </styled.UlRow>
          </styled.ContainerHome>
      </styled.SaldoSection>
    </React.Fragment>
  )
}
export default Income;
