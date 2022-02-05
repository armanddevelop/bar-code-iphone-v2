import dataInputs from '../data/data-inputs.json';
const buildInitialFields:{ [key:string]: any } = {};
export const buildFields = ()=>{
  for (const field of dataInputs) {
    const{name,value}=field;
    buildInitialFields[name]= value;
  }
  return buildInitialFields;
}