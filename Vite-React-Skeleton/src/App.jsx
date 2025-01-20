import { useState, useEffect } from 'react'
import { ReactComponent as Gear } from '../public/gear.svg'

const aPI_Base = 'http://localhost:3001'


function App() {

  const [todos, setTodos] = useState(() => [])
  const [popupActive, setPopupActive] = useState(false)
  const [newTodo, setNewTodo] = useState("");
  const [hoverState, setHoverState] = useState("")
  const [updatePopup, setUpdatePopup] = useState(false)
  const [updateTodo, setUpdateTodo] = useState("")
  const [idHolder,setIDholder]=useState("")
  useEffect(() => {
    getTodos();

  }, [])
  useEffect(() => {
    console.log(hoverState)
  }, [hoverState])

  const completeTodo = async id => {
    const data = await fetch(aPI_Base + '/todo/complete/' + id, { method: "PUT" }).then(res => res.json());

    setTodos(todos => todos.map(todo => {
      if (todo._id == id) {
        todo.complete = !todo.complete;
      }

      return todo;
    }));

  }

  const deleteTodo = async (event, id) => {
    event.stopPropagation()
    const data = await fetch(aPI_Base + '/todo/delete/' + id, { method: "DELETE" }).then(res => res.json());

    setTodos(todos => todos.filter(todo => todo._id !== data._id));

  }



  const getTodos = () => {
    fetch(`${aPI_Base}/todos`)
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch(err => console.error("Error: ", err))

  }
  const addTodo = async () => {
    const data = await fetch(aPI_Base + "/todo/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: newTodo
      })
    }).then(res => res.json());

    setTodos([...todos, data])
    setPopupActive(false)
    setNewTodo("")

  }

  const updateTaskToggle = (event, id) => {
    event.stopPropagation()
    setIDholder(id)
    todos.map(x => {
      x._id == id ? setUpdateTodo(x.text) : ""
    })

  }

  const updateTask = async (id) => {
    console.log(`${aPI_Base}/todo/update/${id}`)
    const data = await fetch(`${aPI_Base}/todo/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify({
        text: updateTodo
      })
    }).then(res => res.JSON)

    setTodos(prev => {
      return prev.map(x => {
        return x._id === id ? { ...x, text: updateTodo } : { ...x }
      })
    })
    setUpdateTodo("")
    setUpdatePopup(false)

  }
  return (
    <div className="App">

      <h1>Welcome, Tesfa</h1>
      <h4>Your Tasks</h4>
      <div className='todos'>
        {todos.map(todo => {

          return (<div className={"todo " + (todo.complete ? "is-complete " : "")} key={todo._id} onClick={() => completeTodo(todo._id)}
            onMouseEnter={() => setHoverState(todo._id)} onMouseLeave={() => setHoverState("")}>
            <div className="checkbox">
            </div>
            <div className="text">{todo.text}</div>
            <Gear onClick={(event) => {
              setPopupActive(false)
              setUpdatePopup(true)
              updateTaskToggle(event, todo._id)
            }} className="svg" style={{ visibility: (hoverState === todo._id ? 'visible' : 'hidden') }} opacity='0.8' fill="white" height={25} />
            <div className="delete-todo" style={{ visibility: (hoverState === todo._id ? 'visible' : 'hidden') }} onClick={(event) => deleteTodo(event, todo._id)}>x</div>

          </div>)

        })}


      </div>
      <div className='addPopup' onClick={() => {
        setUpdatePopup(false)
        setUpdateTodo("")
        setPopupActive(true)

      }}>+</div>


      {popupActive ? <div className='popup'> <div className='closePopup' onClick={() => setPopupActive(false)}> x</div>

        <div className='content'>

          <h3>Add Task</h3>
          <input type="text" className='add-todo-input' onChange={e => setNewTodo(e.target.value)}
            value={newTodo}
          />
          <div className='button' onClick={addTodo}>Create Task</div>
        </div>



      </div> : ""}

      {updatePopup ? <div className='popup'> <div className='closePopup' onClick={() => {

        setUpdatePopup(false)
        setUpdateTodo("")
      }}> x</div>

        <div className='content'>

          <h3>Modify Task</h3>
          <input type="text" className='add-todo-input' onChange={e => setUpdateTodo(e.target.value)}
            value={updateTodo}
          />
          <div className='button' onClick={() => updateTask(idHolder)}>Update Task</div>
        </div>



      </div> : ""}




    </div>
  )
}

export default App
