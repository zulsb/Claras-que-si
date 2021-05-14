import React from 'react';
import { useFirestore, useFirestoreCollectionData, useUser } from 'reactfire';
import * as styled from "../Assets/Styles/Styled";

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
        <styled.TitleHistory>
          <div><h4>Fecha</h4></div>
          <div><h4>Categoría</h4></div>
          <div><h4>Valor</h4></div>
        </styled.TitleHistory>
        {
          history.map((h) => 
            <styled.ContainerHistory key={h.NO_ID_FIELD}>              
                <div>
                  {<p>{new Date(h.created_at.seconds*1000).toLocaleString(options)}</p>}
                </div>              
                <div>
                  <p style={{textAlign: 'left'}}>{h.category === 'non-category' ? 'Sin categoria' : h.category}</p>
                </div>
                <div>
                  <p>$ {Intl.NumberFormat().format(h.subtotal)}</p>
                </div>
              
            </styled.ContainerHistory>
          )
        }
      </React.Fragment>
    }
    </React.Fragment>
  )
}
export default History;
