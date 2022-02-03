import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useField } from "formik";

interface SelectTextProps {
  name:string,
  label:string,
  [x:string]:any,
  options?: Array<Object>| Array<string>
}
export const SelectOptions = (props:SelectTextProps) => {
  const {label,options,placeholder, ...args} = props;
  const [field] = useField(args);
  //console.log("this is the value of field ", field);
  //console.log("esto vale options ", options);
  return (
    <FormControl fullWidth variant="standard">
      <InputLabel>{label}</InputLabel>
      <Select
        {...field}
      >
        <MenuItem disabled value="">
            <em>{placeholder}</em>
        </MenuItem>
      {
         options?.map(({id,label}:any)=>{
            return <MenuItem
                      key={id}
                      value={id}
                    >{label}</MenuItem>
          })
        }
      </Select>
    </FormControl>
  );
};
