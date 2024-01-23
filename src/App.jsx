import { useCallback, useEffect, useRef, useState } from "react"


function App() {
 const [length, setLength] = useState(8);
 const [numAllowed, setNumAllowed] = useState(false);
 const [charAllowed, setCharAllowed] = useState(false);
 const [password, setPassword] = useState("");
 const passwordRef = useRef(null )

 const passwordGenerator = useCallback(() => {
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(numAllowed) str += "0123456789"
  if(charAllowed) str += "#@*&%$"

  for(let iterator = 1; iterator<=length; iterator++){
    let char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char);
  }

  setPassword(pass);

 }, [length, numAllowed, charAllowed, setPassword]);

 const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,24)
  window.navigator.clipboard.writeText(password)
 }, [password])

 useEffect(() => {
  passwordGenerator()
 }, [length, numAllowed, charAllowed, passwordGenerator])


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className = "flex shadow rounded-lg overflow-hidden mb-8">
          <input 
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}/>
          <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-black">copy</button>
        </div>
        <div className="flex text-sm gap-x-4">
          <div className="flex items-center gap-x-1">
            <input type="range" min={6} max={24} value={length} className="cursor-pointer" onChange={(e) => {setLength(e.target.value)}} />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
          <input 
            type="checkbox"
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}/>
             <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
          <input 
            type="checkbox"
            defaultChecked={numAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}/>
             <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
