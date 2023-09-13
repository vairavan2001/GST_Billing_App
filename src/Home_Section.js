import './App.css';
import { useNavigate } from 'react-router-dom';
const Home_Section=()=>{
    const navigate = useNavigate();
return(
<div className="home_section">
<h1 style={{fontFamily:"Lato", color:"rgb(160,82,45)",marginTop:"15%",marginLeft:"25%",fontWeight:"lighter",fontSize:"45px"}}>" Effortless GST Invoicing, Every Time "</h1>
<button className='home_button' onClick={(e)=>{e.preventDefault();navigate('/form_page1')}}>Try Now</button>
</div>
)
}
export default Home_Section;