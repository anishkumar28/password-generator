import { useCallback, useState } from "react"


function App() {
 const [length, setLength] = useState(8);
 const [numAllowed, setNumAllowed] = useState(false);
 const [charAllowed, setCharAllowed] = useState(false);
 const [password, setPassword] = useState("");

 const passwordGenerator = useCallback(() => {
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(numAllowed) str += "0123456789"
  if(charAllowed) str += "#@*&%$"

  for(let iterator = 1; iterator<= Array.length; iterator++){
    let char = Math.floor(Math.random() * str.length + 1);
    pass = str.charAt(char);
  }

  setPassword(pass);

 }, [length, numAllowed, charAllowed, setPassword]);


  return (
    <>
      
    </>
  )
}

export default App
