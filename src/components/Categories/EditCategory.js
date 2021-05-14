import React from 'react';
import { useFirestore, useUser } from 'reactfire';

function EditCategory(props) {
  const { data: user } = useUser();
  const categoriesRef = useFirestore().collection('users').doc(user.uid).collection('categories');
  const catDef = {
    name: '',
  };
  let edit = false;
  const changeValue = (e) => {
    const { value } = e.target;
    catDef.name = value
  }
  const updateCategory = async () => {
    if (!catDef.name) {
      return;
    }
    await categoriesRef.doc(props.id).update({
      name: catDef.name,
      updated_at: new Date(),
    })
  };

  return(
    <React.Fragment>
      <button onClick={() => edit = true}>Edit</button>
      { edit &&
        <div>
          <input aria-label="name-category" name="name" type="text" onChange={changeValue} />
          <button onClick={updateCategory}></button>
        </div>
      }
    </React.Fragment>
  )
}
export default EditCategory;
