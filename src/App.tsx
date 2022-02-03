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
const validationSchema = Yup.object({
  costumerName: Yup.string().required("El nombre del cliente es requerido"),
  phoneNumber: Yup.string().min(10,"El numero telefonico debe ser de 10 digitos").required("El telefono es requerido"),
  imeiFail: Yup.string().min(15,"El IMEI debe de ser de 15 digitos").max(15,"El IMEI debe de ser de 15 digitos").required("El IMEI es requerido"),
  email: Yup.string().email("El email debe de ser valido").required("el email es requerido"),
  address: Yup.string().required("La direccion es requerida"),
  postalCode: Yup.string().min(5, "El codigo postal debe de ser de 5 digitos").required("El coidgo postal es requerido"),
  invoice: Yup.string().required("Folio Sertec es requerido"),
  numberSap:Yup.string().min(5,"El Folio SAP debe de ser de 5 digitos").max(5,"El Folio SAP debe de ser de 5 digitos").required("El Folio SAP es requerido"),
  imeiNew: Yup.string().min(15,"El IMEI debe de ser de 15 digitos").max(15,"El IMEI debe de ser de 15 digitos").required("El nuevo IMEI es requerido")
})
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
          onSubmit={(values)=>console.log("Estos son los valores del formulario ", values)}
          validationSchema={validationSchema}
        >
          {
            ({handleReset,errors})=>(
              <Form noValidate>
                {dataInputs.map(({name,label,type,options,placeholder,validations})=>{
                  if (type === "input") {
                    return <TextInputs
                              key={name}
                              name={name}
                              label={label}
                              variant="outlined"
                              errors={validations ? errors : {}}
                          />
                  }
                  if (type === "select") {
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
