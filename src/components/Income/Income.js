import React, { useState, useEffect } from 'react';
import 'firebase/firestore';
import { useFirestore, useFirestoreCollectionData, useUser } from "reactfire";
import LogOut from '../LogOut/LogOut'

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
  const {data, status} = useFirestoreCollectionData(categoriesRef);

  useEffect(() => {
    if (status === 'success') {
      const allCategories = data.map(doc => ({id: doc.NO_ID_FIELD, ...doc}))
      setCategories(allCategories);
    }
  }, [data, status])
  /* const getCategories = async () => {
    const { docs } = await categoriesRef.get();
    const allCategories = docs.map(doc => ({id: doc.id, ...doc.data()}))
    setCategories(allCategories);
  }; */

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
      <form>
        <label htmlFor="subtotal">Nuevo ingreso: </label>
        <input id='subtotal' name="subtotal" value={income.subtotal} onChange={changeValue} type="number" pattern="[0-9]*" />
        <label htmlFor="category">Categoria: </label>
        <input id='category' name="category" onChange={changeValue} type="text" list='categories' />
        <datalist id='categories'>
          {user && categories.map(cat => {
            if (cat.name !== 'non-category') {
              return <option key={cat.id} value={cat.name}>{cat.name}</option>
            }
            return (<option key={cat.id} value=""></option>);
          })}
        </datalist>
        <label htmlFor="note">Nota: </label>
        <textarea id='note' name="note" value={income.note} onChange={changeValue} cols="30" rows="10" />
        <button onClick={onSubmit}>Agregar</button>
      </form>
      <LogOut></LogOut>
    </React.Fragment>
  )
}
export default Income;
