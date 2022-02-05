import { useBarcode } from "react-barcodes";
interface BarCodeProps{
  value:string,
  options:OptionsBarCode
}
interface OptionsBarCode{
  background:string,
  displayValue?:boolean,
  textAlign?:string,
  marginRight?:number
}
export const BarCode =({value,options}:BarCodeProps)=>{
  const { inputRef } = useBarcode({
    value: value === "" ? "NoData" : value ,
    options: {...options}
  });
  return <img ref={inputRef} alt="prueba"/>;
}