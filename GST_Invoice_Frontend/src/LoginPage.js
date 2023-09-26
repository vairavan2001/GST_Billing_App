import { useState } from "react";

const LoginPage=()=>{
    const [value,setvalue]=useState('Login');
    const [logincolor,setlogincolor]=useState('linear-gradient(to right,#7EB1EC,#346EB0)')
    const [signupcolor,setsignupcolor]=useState('white')
    const[loginfont,setloginfont]=useState('white');
    const [signupfont,setsignupfont]=useState('black');
    const [loginborder,setloginborder]=useState('none');
    const [signupborder,setsignupborder]=useState('2px solid grey');
    const [credencials,setcredencials]=useState([{email:"",password:""}]);
    const [signupdetails,setsignupdetails]=useState([{email:"",password:"",confirmpassword:""}]);
return(
    <div style={{position:"absolute",top:"0",width:"100%",height:"100%"}} className="bg-color">
    <div style={{marginTop:"10%",width:"35%",marginLeft:"32.5%",borderRadius:"25px",background:"white",padding:"0"}}>
        {value==="Login"?(<h1 style={{textAlign:"center",paddingTop:"45px"}}>Login Form</h1>):(<h1 style={{textAlign:"center",paddingTop:"45px"}}>Signup Form</h1>)}
            <div style={{width:"70%",height:"45px",marginLeft:"15%",marginTop:"45px"}}>
            <button style={{width:"50%",height:"45px",borderRadius:"5px",background:logincolor,border:loginborder,textAlign:"center",fontSize:"20px",color:loginfont}} onClick={(e)=>{e.preventDefault();setvalue('Login');setlogincolor("linear-gradient(to right,#7EB1EC,#346EB0)");setsignupcolor("white");setloginfont("white");setsignupfont("black");setloginborder("none");setsignupborder("2px solid grey")}}>Login</button>
            <button style={{width:"50%",height:"45px",borderRadius:"5px",background:signupcolor,border:signupborder,textAlign:"center",fontSize:"20px",color:signupfont}} onClick={(e)=>{e.preventDefault();setvalue('SignUp');setsignupcolor("linear-gradient(to right,#7EB1EC,#346EB0)");setlogincolor("white");setloginfont("black");setsignupfont("white");setsignupborder("none");setloginborder("2px solid grey")}}>Signup</button>
            </div>
            {
                value==='Login'?(
                    <form method="post" onSubmit={null}>
                        <div style={{display:"block",width:"70%",marginLeft:"15%",textAlign:"center"}}>
                        <input type="email" placeholder="Email Address" style={{width:"98%",marginBottom:"20px",height:"45px",marginTop:"20px",fontSize:"20px"}} name="email" value={credencials[0]?.email} onChange={(e)=>setcredencials(arr=>arr.map((list,index)=>(index===0?{...list,[e.target.name]:e.target.value}:{...list})))}/>
                        <input type="password" placeholder="Password" style={{width:"98%",marginBottom:"5px",height:"45px",fontSize:"20px"}} name="password" value={credencials[0]?.password} onChange={(e)=>setcredencials(arr=>arr.map((list,index)=>(index===0?{...list,[e.target.name]:e.target.value}:{...list})))}/>
                        <div style={{textAlign:"left",marginBottom:"15px",}}><a style={{color:"#346EB0"}} href="">Forgot password?</a></div>
                        <button type="submit" style={{width:"100%",height:"45px",background:"linear-gradient(to right,#7EB1EC,#346EB0)",borderRadius:"5px",marginBottom:"45px",fontSize:"20px",color:"white",border:"none"}}>Login</button>
                        </div>
                    </form>
                ):(
                    <form>
                        <div style={{display:"block",width:"70%",marginLeft:"15%",textAlign:"center"}}>
                        <input type="email" placeholder="Email Address" style={{width:"98%",marginBottom:"20px",height:"45px",marginTop:"20px",fontSize:"20px"}} name="email" value={signupdetails[0].email} onChange={(e)=>setsignupdetails(arr=>arr.map((list,index)=>(index===0?{...list,[e.target.name]:e.target.value}:{...list})))}/>
                        <input type="password" placeholder="Password" style={{width:"98%",marginBottom:"20px",height:"45px",fontSize:"20px"}} name="password" value={signupdetails[0].password} onChange={(e)=>setsignupdetails(arr=>arr.map((list,index)=>(index===0?{...list,[e.target.name]:e.target.value}:{...list})))}/>
                        <input type="password" placeholder="Confirm Password" style={{width:"98%",marginBottom:"20px",height:"45px",fontSize:"20px"}} name="confirmpassword" value={signupdetails[0].confirmpassword} onChange={(e)=>setsignupdetails(arr=>arr.map((list,index)=>(index===0?{...list,[e.target.name]:e.target.value}:{...list})))}/>
                        <button type="submit" style={{width:"100%",height:"45px",background:"linear-gradient(to right,#7EB1EC,#346EB0)",borderRadius:"5px",marginBottom:"45px",fontSize:"20px",color:"white",border:"none"}}>Signup</button>
                        </div>
                    </form>
                )

            }
        </div>
    </div>
);
}
export default LoginPage;
