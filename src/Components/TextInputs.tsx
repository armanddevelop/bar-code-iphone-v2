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
  const {name,label,variant} = props;
  const [field] = useField(props);
  //console.log("this is the value of field ", field);
  return(
    <TextFiled
      fullWidth
      variant= {variant}
      label={label}
      id={name}
      margin="normal"
      {...field}
    />
  )
};
