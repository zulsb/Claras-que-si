import React, { useState } from 'react';
import { useFirestore, useUser } from 'reactfire';

function AddCategory(props) {
  const { data: user } = useUser();
  const categoriesRef = useFirestore().collection('users').doc(user.uid).collection('categories');
  const catDef = {
    name: '',
    created_at: new Date(),
    updated_at: new Date(),
  }
  const [category, setCategory] = useState(catDef);

  const changeValue = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCategory({
      ...category,
      [name]: value
    })
  }
  const addCategory = async () => {
    if (!category.name) {
      return
    }
    await categoriesRef.doc().set(category);
  };

  return(
    <React.Fragment>
      <form>
        <label for="name-category">Nombre categoria</label>
        <input id="name-category" name="name" type="text" onChange={changeValue} />
        <button onClick={addCategory}>Agregar</button>
      </form>
    </React.Fragment>
  )
}
export default AddCategory;
