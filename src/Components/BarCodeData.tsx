import { BarCode } from ".";


export const BarCodeData = ({userData}:any) => {
  const options={
    background: '#ccffff',
    marginRight: 20
  }
  const userInfo = Object.values(userData);
  return (
    <>
      {
        userInfo.map((info:any, idx:number)=>{
          return <BarCode value={info} options={options} key={idx}/>
        })
      }
    </>
  );
};
