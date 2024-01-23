
const ListIn = ({list, removeList, completedList}) => {
    return (
    <div className='app-style'>
      <div className='total-style'>
      <div className='contents-style'>
      <div className='input-data-style'>
        {list.context}
      </div>
      
      <div className='input-data-style'>
      { list.project } : { list.isDone }
      </div>
  
      <div className='input-data-style'>
      <button key = {list.index} 
        onClick = {() => {
        removeList(list.index)}}>
        삭제하기
      </button>
      </div>
  
      <div className='input-data-style'>
      <button onClick = {() => {
      completedList(list.index)
      }}> 완료 </button>
      </div>
      </div>
      </div>
      </div>)}
 
 
 export default ListIn;