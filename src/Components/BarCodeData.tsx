import { BarCode } from ".";
import { Container } from "@mui/material";

export const BarCodeData = ({userData}:any) => {
  const options={
    background: '#ccffff'
  }
  const userInfo = Object.values(userData);
  return (
    <Container maxWidth='sm'>
      {
          userInfo.map((info:any, idx:number)=>{
            return <BarCode value={info} options={options} key={idx}/>
          })
        }
    </Container>
  );
};
