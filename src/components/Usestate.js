import React ,{ useState} from 'react'
import'./style.css'


const Usestate = () => {
const[newdata, setNewdata]=useState(0)




  return (
    <>
    <div className="container-fluid d-flex flex-column h-100 justify-content-center align-items-center my-custom-margin">
      <div className="text-center wrapper">
        {newdata}
        
      </div>
    
      <div className="d-flex">
   
        <button className='glow-on-hover mx-3' onClick={() => setNewdata(newdata + 1)} >Increment</button>
        <button  className='glow-on-hover' onClick={() => newdata>0?setNewdata(newdata - 1):setNewdata(0)} >Decrement</button>
      </div>
    </div>
  </>
  
  )
}

export default Usestate