import List from "./list"
import TaskModal from "./TaskModal"

const taskList = [
  {
    id: 1,
    task: 'Jugar',
    limit: '13:00',
    description:'Jugar futbol',
    done:false
  },
  {
    id: 2,
    task: 'Cantar',
    limit: '15:00',
    description:'Cantar Luis Miguel',
    done:false
  },
  {
    id: 3,
    task: 'Correr',
    limit: '17:00',
    description:'Correr en la unidad deportiva',
    done:false
  },
];

function App() {
  return(
    <div className="container">
    <h1>To do list</h1>
    <hr/>
    <List taskList={taskList}/>
    <hr />
    <div className="text-end">
      <TaskModal taskList={taskList}/>
      <button 
      className="btn btn-outline-primary"
      data-bs-target='#taskModal'
      data-bs-toggle='modal'
      >
        <i className="bi bi-plus-lg"></i>
        ADD
      </button>
    </div>
    </div>
  )
  
}

export default App
