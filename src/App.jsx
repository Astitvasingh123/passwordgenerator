import { useCallback, useState ,useEffect} from 'react'


 function App() {
   const [length,setlength] = useState(8)
   const [number,setnumber] =useState(false)
   const [character,setcharacter] =useState(false)
   const [password,setpassword]= useState("")

   const passwordgenerator  = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number) str+="0123456789"
    if(character) str+="~!@#$%^&*(){}"

    for (let i=1;i<=length;i++)
    {
      let char =Math.floor(Math.random()*str.length+1)
      pass +=str.charAt(char)
    }
    setpassword(pass)
   },[length,number,character,setpassword] )


  useEffect(()=>{ passwordgenerator()},[length,number,character,passwordgenerator])
  
  return (
    <>
    { 
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>


      <h1 className='text-white text-center py-2 '>Password generator</h1>


      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
        type='text'
        value={password}
        className='outline-npne w-full py-1 px-3 my-1 rounded'
        placeholder='password'
        readOnly
        />
        <button className='outline-none bg-blue-700 text-white px-4 py-2 my-1 rounded shrink-0'>copy</button>
      </div>


      <div className='flex text-sm gap-x-2 '>
        <div className='flex items-center gap-x-1'>
          <input
          type='range'
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setlength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>


        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={number}
          id='numberInput'
          onChange={()=>{
            setnumber((prev)=>!prev);
          }}
        />
        <label htmlFor='numberInput'>Numbers</label>
        </div>


        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={character}
          id='characterInput'
          onChange={()=>{
            setcharacter((prev)=>!prev);
          }}
        />
        <label htmlFor='characterInput'>Character</label>
        </div>
        </div>     
     
     </div>
      
    }
    </>
    )
}


export default App
