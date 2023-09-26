import ReactDOM  from 'react-dom/client';
import GST_Inside_the_State from './GST_Inside_the_State';
const Button=(props)=>{

    
    return(
        <>
        <button className={props.s} onClick={props.clickHandle}>
            <figure>
                <img src={props.img}></img>
                <figcaption><a onClick={props.clickHandle}>{props.lable}</a></figcaption>
            </figure>
        </button>
        
        </>


    );
}
export default Button;