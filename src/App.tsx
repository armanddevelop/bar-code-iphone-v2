import { useState } from 'react';
import { FormDynamic,BarCodeData} from './Components';
function FormIphoneV2() {
  const [userData,setUserData] = useState({});
  const [renderCodeBar,setRenderCodeBar] = useState(false);
  return (
    <>
      {
        !renderCodeBar ? <FormDynamic
                          setUserData = {setUserData}
                          setRederCodeBar={setRenderCodeBar}
                         /> :
                        <BarCodeData userData={userData}/>
      }
    </>
  );
}

export default FormIphoneV2;
