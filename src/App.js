import './App.css';
import Button from './Button';
import GST_Inside_the_State from './GST_Inside_the_State';
import ReactDOM  from 'react-dom/client';
import GST_Outside_the_State from './GST_Outside_the_State';
const GST_Inside=()=>{
  const root =ReactDOM.createRoot(document.getElementById("root"))
  root.render(<GST_Inside_the_State/>)
}
const GST_Outside=()=>{
  const root =ReactDOM.createRoot(document.getElementById("root"));
  root.render(<GST_Outside_the_State/>);
}
function App() { 
  return (
    <>
    <Button  lable="GST Inside the State" s="home"  img="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/TamilNadu_Logo.svg/1200px-TamilNadu_Logo.svg.png" clickHandle={GST_Inside}/>
    <Button  lable="GST Outside the State" s="home" img="https://www.logopeople.in/wp-content/uploads/2013/01/government-of-india.jpg" clickHandle={GST_Outside} />
    </>
  );
}

export default App;
