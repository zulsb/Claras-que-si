import React from 'react';
import { useFirestore, useFirestoreCollectionData, useUser } from 'reactfire';

function History({factor}) {
  let month = new Date().toLocaleString('default', { month: 'short' });
  const { data: user } = useUser();
  const historyRef = useFirestore().collection('users').doc(user.uid).collection(factor).doc('months').collection(month);
  const {data: history, status} = useFirestoreCollectionData(historyRef);
  const options = {  day: 'numeric', month: 'numeric', year: 'numeric'};
  return (
    <React.Fragment>
    { status === 'success' &&
      <React.Fragment>
        {
          history.map((h) => 
            <div style={{width: '80%', margin: '0.2rem auto', minHeight: '20px', color: 'white', display: 'flex', justifyContent: 'space-between'}} key={h.NO_ID_FIELD}>
              {<p>{new Date(h.created_at.seconds*1000).toLocaleString(options)}</p>}
              <p style={{textAlign: 'left'}}>{h.category === 'non-category' ? 'Sin categoria' : h.category}</p>
              <p>{h.subtotal}</p>
            </div>
          )
        }
      </React.Fragment>
    }
    </React.Fragment>
  )
}
export default History;
