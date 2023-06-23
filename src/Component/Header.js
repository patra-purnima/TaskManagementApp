import '../App.css';
import CustomButton from './CustomButton';
function Header(props) {
    return ( 
        <div className='header' >
            <h1>Task management</h1>
            <div className='btnWrapper' >
                <CustomButton  click={props.handleInput}  name='Create Task' bg='#1877F2' color='white' />

            </div>

        </div>
     );
}

export default Header;