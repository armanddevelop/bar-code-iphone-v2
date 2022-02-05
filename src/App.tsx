import { Container } from '@mui/material';
import { useState } from 'react';
import { FormDynamic,BarCodeData} from './Components';
function FormIphoneV2() {
  const [userData,setUserData] = useState({});
  const [renderCodeBar,setRenderCodeBar] = useState(false);
  return (
    <Container maxWidth='sm'>
        {
          !renderCodeBar ? <FormDynamic
                              setUserData = {setUserData}
                              setRederCodeBar={setRenderCodeBar}
                          /> :
                          <BarCodeData
                            userData={userData}
                            setRederCodeBar={setRenderCodeBar}
                          />
        }
    </Container>
  );
}

export default FormIphoneV2;
