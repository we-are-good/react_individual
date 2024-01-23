import './App.css';
import { useState } from 'react';
import ListIn from './component/ListIn.jsx';
import DoneListIn from './component.jsx/DoneListIn.jsx';

function App() {
  const [toDoList, setToDoList] = useState([
    {index : 1, context : "let", project : "Javascript", isDone : false,},
    {index : 2, context : "let", project : "JSX", isDone : false,},
    {index : 3, context : "let", project : "UX", isDone : false}
  ]);
  const [alreadyDoneList, setalreadyDoneList] =useState([])

  const [context, setContext] = useState('')
  const [project, setProject] = useState('')

  const contextHandle = (event) => {
    setContext(event.target.value);
  }
  const projectHandle = (event) => {
    setProject(event.target.value);
  }

  const newListUp = () => {
    const newList={
    index: toDoList.length+1,
    context: context,
    project: project,
    isDone: false,}
    setToDoList([...toDoList, newList])
  }

  const removeList = (item) => {
    const lessList = toDoList.filter((toDoList) => toDoList.index !== item)
    const alreadyLessList = alreadyDoneList.filter((toDoList) => toDoList.index !== item)
    setToDoList(lessList);
    setalreadyDoneList(alreadyLessList);
  }

  const completedList = (item) => {
    const doneListToToDoList = toDoList.filter((toDoList) => toDoList.index === item);
    doneListToToDoList[0].isDone = true;
    const shiftTodoList = toDoList.filter((toDoList) => toDoList.index !== item);

    setalreadyDoneList([...alreadyDoneList, ...doneListToToDoList]);
    setToDoList(shiftTodoList)
  }

  const shiftCompletedList = (item) => {
    const reAdditionList = alreadyDoneList.filter((toDoList) => toDoList.index === item)
    reAdditionList[0].isDone = false;
    const shiftDoneList = alreadyDoneList.filter((toDoList) => toDoList.index !== item)
    
    setToDoList([...toDoList, ...reAdditionList])
    setalreadyDoneList(shiftDoneList)
  }

  return (
    <div className='top-app-style'>
      <div className='header-app-style'>
        <header>
          <div className='header-name'>
          <div> My Todo List</div>
          <div> React</div>
          </div>
        </header> 
        
            <div className='section-name'>
              Addition
            </div>
          <div className='app-style'>

              <div className='total-style'>
                <div className='contents-style'>
                  <div className='input-data-style'>
                    <input type="text" placeholder='제목'
                      value = {context}
                      onChange={contextHandle}/>
                  </div>
                  <div className='input-data-style'>
                      <input type="text" placeholder='내용'
                        value = {project}
                        onChange={projectHandle}/>
                  </div>
                  <div className="input-data-style">
                    <button onClick= {() => {newListUp()
                      setContext("")
                      setProject("")}}>
                      추가하기</button>
                  </div>
                </div >
              </div>
          </div>

            <div className='section-name'>
              working
            </div>

      {toDoList.map((list) => {
      return ( <ListIn 
          key = {list.index}
          list={list} 
          removeList={removeList} 
          completedList={completedList}/>
      )})}
      
      <div className='section-name'>
        Done
      </div>

      {alreadyDoneList.map((list) => {return (
        <DoneListIn 
        key={list.index}
        list = {list} 
        removeList={removeList}
        shiftCompletedList={shiftCompletedList}
        />
        )})}
       </div>
    </div>
  );
}


export default App;
