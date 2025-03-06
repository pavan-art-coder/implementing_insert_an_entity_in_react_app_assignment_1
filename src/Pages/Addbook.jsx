import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Addbook(){
    const[title ,setTitle]=useState("");
    const[author ,setAuthor]=useState("");
    const[description,setDescription]=useState("");
    const navigate=useNavigate()
    

    const handlesumbit=(e)=>{
        e.preventDefault()
        alert(`Book Added ${title} by ${author}`)
        navigate('/')
    }
    return(
        <>
         <form onSubmit={handlesumbit}>
        <h1>Add Book</h1>
        <input 
         type="text"
         placeholder="Title"
         value={title}
         onChange={(e)=>setTitle(e.target.value)}
        />
        <input 
         type="text"
         placeholder="Author"
         value={author}
         onChange={(e)=>setAuthor(e.target.value)}        
        />
        <input 
         type="text"
         placeholder="description"
         value={description}
         onChange={(e)=>setDescription(e.target.value)}
        />
         <button type="submit" >Add</button>
      </form>

        
        
        </>
    )

}
export default Addbook