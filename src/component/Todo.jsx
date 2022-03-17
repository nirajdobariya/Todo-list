import React ,{useState} from 'react';
import './Todo.css';
import { Add, Delete , Remove } from '../action';
import { useSelector , useDispatch } from 'react-redux';

const Todo = () => {

  const [input, setInput] = useState('');
  // console.log("input",input)

  const dispatch = useDispatch();
  const list = useSelector((state) => state.Todolist.list);
 

  return (
    <>
      <h2>Notebook</h2>
      <div>
        <input type="text" className='text_box' onChange={(event) => setInput(event.target.value)} placeholder='Enter your note' value={input}/>
        <button className='add_btn' onClick={() => dispatch(Add(input), setInput(''))}>Add Todo List</button>
        <button  className='add_btn'  onClick={() => dispatch(Remove(), setInput(''))}>Clear all Todo</button>

      </div>
      <div>
          {
            list.map((element) => {
              return(
                    <div className='all_list' key={element.id}>
                         <h3>{element.data}</h3><button onClick={() => dispatch(Delete(element.id))}>Delete</button>
                    </div>
              )
            })
          }
          
      </div>
      
    </>
  )
}

export default Todo;