import {useState,useEffect} from 'react'
const aPI_Base='http://localhost:3001'


function App() {

 const[todos,setTodos]=useState(()=>[])
 const[popupActive,setPopupActive]=useState(false)  
const[newTodo,setNewTodo]=useState("");

  useEffect(()=>{
    getTodos();
    
  },[])

 const completeTodo=async (id)=>{

  const data=await fetch(`${aPI_Base}/todo/complete/${id}`,{method:"PUT"}).then(res=>res.json());
  setTodos(prev=>(prev.map(x=>{
      if(x._id===data._id){
        x.complete=data.complete
      }
      return x;
  })))
  
 }

 const deleteTodo=async (id)=>{

  const data=await fetch(`${aPI_Base}/todo/delete/${id}`,{method:"DELETE"}).then(res=>res.json());
  setTodos(prev=>prev.filter(x=>x._id!==data._id))
 }
 

 useEffect(()=>{
  console.log(todos)
 },[todos])
  const getTodos=()=>{
  fetch(`${aPI_Base}/todos`)
    .then(res=>res.json())
    .then(data=>setTodos(data))
    .catch(err=>console.error("Error: ", err))
    
  }

  return (
    <div className="App">
      
      <h1>Welcome, Tesfa</h1>
      <h4>Your Tasks</h4>
      <div className='todos'>
        {todos.map(todo=>{

          return(<div className={"todo " +(todo.complete ? "is-complete" : "")} key={todo._id} onClick={()=>completeTodo(todo._id)}>
          <div className="checkbox">
               </div>
               <div className="text">{todo.text}</div>
                <div className="delete-todo" onClick={()=>deleteTodo(todo._id)}>x</div>                          
        </div>)

        })}
        
       
      </div>
    </div>
  )
}

export default App
