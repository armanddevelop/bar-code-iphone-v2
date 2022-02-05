import { Button } from "@mui/material";
import { BarCode } from ".";


export const BarCodeData = ({userData,setRederCodeBar}:any) => {
  const options={
    background: '#ccffff',
    marginRight: 20
  }
  const userInfo = Object.values(userData);
  const setRenderBarCode =()=>{
    setRederCodeBar(false);
  }
  return (
    <>
      {
        userInfo.map((info:any, idx:number)=>{
          return <BarCode value={info} options={options} key={idx}/>
        })
      }
      <Button sx={{mt:2}} onClick={setRenderBarCode} color="primary" variant="contained" fullWidth  size="medium">Regresar</Button>
    </>
  );
};
