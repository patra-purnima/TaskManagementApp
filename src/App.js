import './App.css';
import CustomButton from './Component/CustomButton';
import CustomInput from './Component/CustomInput';
import Header from './Component/Header';
import Card from './Component/Card';
import { useState } from 'react';
import DatePicker from "react-date-picker";




function App() {

const [add, setAdd]=useState(false);
const [Tasks, setTasks]=useState([]);
const [popup, setPopup] = useState({show: false, id: null,});
const [singleTask, setSingleTask]=useState('');
const [singleDes, setSingleDes]=useState('');
const [Date, setDate]=useState('');
const [Confirm,setConfirm]=useState('');

const UpdateTask =(id)=>
{
    setTasks(
        Tasks.map((t)=>(
            t.id==id? {...t,complete:true}:t
        ))
    )

}

const deleteTask = (id) => {
    setPopup({
        show: false,
        id: null,
      });
    setTasks(
        Tasks.filter((t)=>(
            t.id==id?false:true
        ))
    )



  {
     alert('Ok! Delete complete');
};
}




const addToCard =()=>
{
    const id= Tasks.length==0?1:Tasks.length+1;
    const taskDetail=
    {
        id:id,
        task:singleTask,
        des:singleDes,
        date:Date,
        complete:false

    }
    
    setTasks(
        [...Tasks,taskDetail]
    )

}

const ClearInput =()=>
{
    setSingleTask('');
    setSingleDes('');
    setDate('');
}


const handleCustomTask =(event)=>
{
    setSingleTask(event.target.value);
}

const handleCustomDes =(event)=>
{
    setSingleDes(event.target.value);
}
const onDateChange =(event)=>
{
    setDate(event.target.value);
}


const handleInput =()=>
{
    setAdd(!add )
}


    return ( 
        
        <div className='main'>
            <div className='inputSection'>
               <Header handleInput={handleInput}  />
                {add==true ?
                    <>
                    <CustomInput  value={singleTask}  placeHolder='Enter Task' name='Title' change={handleCustomTask}  /> 
                    <CustomInput   value={singleDes} placeHolder='Enter Description' name='Description' change={handleCustomDes}  />
                    
                    <label>Duedate</label>


                    <input type="date" value={Date} onChange={onDateChange}/>

                    <div className='btnwrapper'>
                    <CustomButton color='White' bg='#1877F2'  name='Add Task' click={addToCard} />
                    <CustomButton color='White' bg='red'  name='Cancle'   click={ClearInput} />
                    
                </div>
                    </>:null
                }
               
               
            </div>

            <div className='cardSection'>
               {
                Tasks.map((t)=>
                ( 
                    <Card title={t.task} des={t.des}   key={t.id} date={t.date} delete={()=>deleteTask(t.id)}  
                       update={()=>UpdateTask(t.id)}  complete={t.complete}   />
                ))
               }
            </div>
        </div>
     );
}

export default  App;