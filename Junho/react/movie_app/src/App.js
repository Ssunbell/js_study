import {useState} from 'react'

function App() {
  const [toDo, settoDo] = useState('');
  const [toDos,settoDos] = useState([]);
  const onChange = (event) => settoDo(event.target.value)
  const onSubmit = (event) => {
    event.preventDefault()
    if (toDo===''){
      return
    }
    settoDo('')
    settoDos(currentArray => [toDo,...currentArray])
  }
  return (
    <div className="App">
      <h1>My To Dos {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type='text' placeholder='Write your to do..'/>
        <button>Add To Do</button>
      </form>
      <hr/>
      <ul>
        {toDos.map((item,idx) => (<li key={idx}>{item}</li>))}
      </ul>
    </div>
  );
}

export default App;
