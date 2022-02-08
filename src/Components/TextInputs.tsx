import { useField } from "formik";
import TextFiled from "@mui/material/TextField";
interface PropsTextInputs {
  name:string,
  label?:string,
  id?:string,
  [x:string]:any,
  variant?:"outlined"|"filled"| "standard"
}
export const TextInputs = (props:PropsTextInputs) => {
  const {name,label,variant,errors,isText} = props;
  let isError = false;
  if(!(Object.keys(errors).length === 0 && errors.constructor === Object)){
    isError = Boolean(errors[name]);
  }
  const [field] = useField(props);
  //console.log("this is the value of field ", field);
  return(
    <TextFiled
      fullWidth
      variant= {variant}
      label={label}
      id={name}
      margin="normal"
      error={isError}
      helperText={isError ? errors[name]: ""}
      type={!isText ? "number": "text"}
      inputProps={!isText ? { inputMode: 'numeric', pattern: '[0-9]*' } : {}}
      {...field}
    />
  )
};
