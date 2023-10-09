import { useEffect, useState } from 'react';
import { tesloApi } from '../../api/tesloApi';






export const RequestInfo = () => {

  const [requestInfo, setRequestInfo] = useState<unknown>();

  useEffect(() => {
    tesloApi.get('auth/private')
      .then(resp => setRequestInfo(resp.data) )
      .catch(() => setRequestInfo('Error'))

  },[]);



  return (
    <>
      <h2>Información</h2>
      <pre>
        { JSON.stringify(requestInfo, null, 2)}
      </pre>
    </>
  )
}