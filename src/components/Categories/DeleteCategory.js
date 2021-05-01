import React from 'react';
import { useFirestore, useUser } from 'reactfire';

function DeleteCategory(props) {
  const { data: user } = useUser();
  const categoryRef = useFirestore().collection('users').doc(user.uid).collection('categories');
  const onDelete = async (e) => {
    e.preventDefault();
    if (window.confirm('Estas seguro?')) {
      await categoryRef.doc(props.id).delete();
    }
  };

  return (
    <button onClick={onDelete}>delete</button>
  )
}

export default DeleteCategory;
