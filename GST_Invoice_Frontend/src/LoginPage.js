import { useState } from "react";

const LoginPage=()=>{
    const [value,setvalue]=useState('Login');
    const [logincolor,setlogincolor]=useState('red')
    const [signupcolor,setsignupcolor]=useState('white')
    const[loginfont,setloginfont]=useState('white');
    const [signupfont,setsignupfont]=useState('black');
return(
    //<div style={{position:"absolute",top:"0",width:"100%",height:"100%",background:"skyblue"}}>
    <div style={{marginTop:"10%",width:"40%",marginLeft:"30%",borderRadius:"25px",background:"skyblue",padding:"0"}}>
        {value==="Login"?(<h1 style={{textAlign:"center"}}>Login Page</h1>):(<h1 style={{textAlign:"center"}}>SignUp Now</h1>)}
        <div style={{width:"60%",height:"45px",marginLeft:"20%",marginTop:"45px"}}>
            <button style={{width:"50%",height:"45px",borderRadius:"5px",backgroundColor:logincolor,border:"2px solid grey",textAlign:"center",fontSize:"20px",color:loginfont}} onClick={(e)=>{e.preventDefault();setvalue('Login');setlogincolor("red");setsignupcolor("white");setloginfont("white");setsignupfont("black")}}>Login</button>
            <button style={{width:"50%",height:"45px",borderRadius:"5px",backgroundColor:signupcolor,border:"2px solid grey",textAlign:"center",fontSize:"20px",color:signupfont}} onClick={(e)=>{e.preventDefault();setvalue('SignUp');setsignupcolor("red");setlogincolor("white");setloginfont("black");setsignupfont("white")}}>SignUp</button>
            {
                value==='Login'?(
                    <form>
                        <div style={{display:"block",width:"100%"}}>
                        <input type="email" placeholder="Email Address" style={{width:"98%",marginBottom:"20px",height:"45px",marginTop:"20px",fontSize:"20px"}}/>
                        <input type="password" placeholder="Password" style={{width:"98%",marginBottom:"20px",height:"45px",fontSize:"20px"}}/>
                        </div>
                    </form>
                ):(
                    <form>
                         <div style={{display:"block",width:"100%"}}>
                        <input type="email" placeholder="Email Address" style={{width:"98%",marginBottom:"20px",height:"45px",marginTop:"20px",fontSize:"20px"}}/>
                        <input type="password" placeholder="Password" style={{width:"98%",marginBottom:"20px",height:"45px",fontSize:"20px"}}/>
                        <input type="password" placeholder="Confirm Password" style={{width:"98%",marginBottom:"20px",height:"45px",fontSize:"20px"}}/>
                        </div>
                    </form>
                )

            }
        </div>
    </div>
   // </div>
);
}
export default LoginPage;