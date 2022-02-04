import { useBarcode } from "react-barcodes";
interface BarCodeProps{
  value:string,
  options:OptionsBarCode
}
interface OptionsBarCode{
  background:string,
  displayValue?:boolean,
  textAlign?:string
}
export const BarCode =({value,options}:BarCodeProps)=>{
  const{background }= options;
  const { inputRef } = useBarcode({
    value: value === "" ? "NoData" : value ,
    options: {
      background,
    }
  });
  return <img ref={inputRef} alt="prueba"/>;
}