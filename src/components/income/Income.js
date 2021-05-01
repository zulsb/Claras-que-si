import React, { useState } from 'react';
import 'firebase/firestore';
import { useFirestore, useUser } from "reactfire";
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
  const { data: user } = useUser();
  const incomesRef = useFirestore().collection('users').doc(user.uid).collection('incomes');

  const changeValue = (event) => {
    let { name, value } = event.target;
    if (name === 'subtotal') {
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
        <input id='category' name="category" onChange={changeValue} type="text" />
        <label htmlFor="note">Nota: </label>
        <textarea id='note' name="note" value={income.note} onChange={changeValue} cols="30" rows="10" />
        <button onClick={onSubmit}>Agregar</button>
      </form>
      <LogOut></LogOut>
    </React.Fragment>
  )
}
export default Income;
