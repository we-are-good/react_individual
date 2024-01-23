
const DoneListIn = ({list, removeList, shiftCompletedList}) => {
    return (
    <div className='app-style'>
      <div className='total-style'>
      <div className='contents-style'>

      <div className='input-data-style'>
      {list.context}
      </div>
      <div className='input-data-style'>
      {list.project} : {list.isDone}
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
        shiftCompletedList(list.index)
      }}> 취소 </button>
      </div>

      </div>
      </div>

      </div>
  )}

  export default DoneListIn;
