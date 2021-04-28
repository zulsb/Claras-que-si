import React, { useState } from 'react';
import 'firebase/firestore';
import { useFirestore, useFirestoreCollectionData, useUser } from "reactfire";

function Icome(props) {
  /* state de icome */
  const icDef = {
    category: 'non-category',
    currency: 'COP',
    created_at: new Date(),
    note: '',
    updated_at: new Date(),
    subtotal: 0,
  };
  const [icome, setIcome] = useState(icDef);
  const { data: user } = useUser();
  const icomesRef = useFirestore().collection('users').doc(user.uid).collection('icomes');
  const {data, status} = useFirestoreCollectionData(icomesRef);
  /* Sumar los subtotales para el total/balance/saldo */
  if (status === 'success') {
    const balance = data.reduce((a, b) => a + b.subtotal, 0)
    console.log('balance', balance);
  }

  const changeValue = (event) => {
    let { name, value } = event.target;
    if (name === 'subtotal') {
      value = parseInt(value, 10);
    }
    setIcome({
      ...icome,
      [name]: value
    })
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!icome.subtotal) {
      return;
    }
    console.log(icome);
    setIcome({...icome, created_at: new Date(), updated_at: new Date()});
    await icomesRef.doc().set(icome);
    setIcome(icDef);
  }

  return (
    <React.Fragment>
      <form>
        <label htmlFor="subtotal">Nuevo ingreso: </label>
        <input id='subtotal' name="subtotal" value={icome.subtotal} onChange={changeValue} type="number" pattern="[0-9]*" />
        <label htmlFor="category">Categoria: </label>
        <input id='category' name="category" onChange={changeValue} type="text" />
        <label htmlFor="note">Nota: </label>
        <textarea id='note' name="note" value={icome.note} onChange={changeValue} cols="30" rows="10" />
        <button onClick={onSubmit}>Agregar</button>
      </form>
    </React.Fragment>
  )
}
export default Icome;
