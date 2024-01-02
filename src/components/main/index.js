export default function Home(){
  const [typed, setTyped]=useState("");
  const [isSame, setIsSame]=useState(false);
  const para="This is the text div";

  const setTypedFunc=(event)=>{
    const text=event.target.value;
    setTyped(text);
    if(text===para){
      setIsSame(true);
    }else{
      setIsSame(false);
    }
  }
  return (
    <>
      <div>{para}</div>
      <input onChange={setTypedFunc} /> 
      {isSame && `both para and typed are same :)`}
    </>
  )
}