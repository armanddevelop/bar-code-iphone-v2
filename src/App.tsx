import {Formik,Form} from 'formik';
import * as Yup from 'yup';
import { TextInputs,SelectOptions  } from './Components';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import dataInputs from './data/data-inputs.json';


const FormFields={
  costumerName:"",
  phoneNumber:"",
  imeiFail:"",
  email:"",
  address:"",
  province:"",
  suburb:"",
  town:"",
  postalCode:"",
  invoice:"",
  numberSap:"",
  imeiNew:"",
}
function FormIphoneV2() {
  const title = 'Codigo de Barras de Iphone';

  return (
    <Container maxWidth='sm'>
      <Box
      sx={{
        width: 500,
        maxWidth: '100%'
      }}
      >
        <h1>{title}</h1>
        <Formik
          initialValues={FormFields}
          onSubmit={(values)=>console.log("Estos son los valres del formulario ", values)}
        >
          {
            ({handleReset})=>(
              <Form noValidate>
                {dataInputs.map(({name,label,type,options,placeholder})=>{
                  if(type === "input"){
                    return <TextInputs
                              key={name}
                              name={name}
                              label={label}
                              variant="outlined"
                          />
                  }
                  if(type === "select"){
                    return <SelectOptions
                              name={name}
                              label={label}
                              options={options}
                              placeholder={placeholder}
                            />
                  }
                  return <></>
                })}
                <Button color="primary" variant="contained" fullWidth type="submit" size="medium">Enviar</Button>
                <Button sx={{mt:2}} onClick={handleReset} color="primary" variant="contained" fullWidth  size="medium">Borrar formulario</Button>
              </Form>
            )
          }
        </Formik>
      </Box>
    </Container>
  );
}

export default FormIphoneV2;
