import '../App.css';
import CustomButton from './CustomButton';

function Card(props) {
    return ( 
        <div className='Card'  style={{backgroundColor:props.complete===true &&' gray', color:props.complete===true && 'white'}} 
        >
        
            <h3> {props.title} </h3> 
            <p> {props.des}</p>
            <p>{props.date}</p>
            <div className='btnwrapper'>
                <CustomButton color='White' bg='red'  name='Update'  click={props.update}  />
                <CustomButton color='White' bg='red'  name='Delete'  click={props.delete}  />

                </div>
        </div>
     );
}

export default Card;