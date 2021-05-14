import React from 'react';
import { useFirestore, useFirestoreCollectionData, useUser } from 'reactfire';
import DeleteCategory from './DeleteCategory';
import EditCategory from './EditCategory';

function Categories(props) {
  const { data: user } = useUser();
  const categoriesRef = useFirestore().collection('users').doc(user.uid).collection('categories');
  const { data: categories, status} = useFirestoreCollectionData(categoriesRef);
  return (
    <React.Fragment>
      { status === 'success' &&
        categories.map((doc) => 
          <div key={doc.NO_FIELD_ID}>
            <span>{doc.name}</span>
            <EditCategory id={doc.NO_FIELD_ID}></EditCategory>
            <DeleteCategory id={doc.NO_FIELD_ID}></DeleteCategory>
          </div>
        )
      }
    </React.Fragment>
  )
}
export default Categories;
