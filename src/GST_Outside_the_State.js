import PreviewSection from "./Preview_Section_1";
import Form from "./Form";
import './App.css';
const GST_Outside_the_State=(props)=>{
    const{d,setd,sellerdetails,setsellerdetails,shipingdetails,setshipingdetails,buyerdetails,setbuyerdetails,checkvalue,setcheckvalue,otherdeatils,setotherdetails,bankdeatils,setbankdetails,signature,setsignature,terms,setterms,hsncode_percentage}=props;
      


    return(
      <div style={{backgroundColor:"skyblue",width:"100%",minHeight:"100vh"}}>

      <div style={{width:"50%", height:"100vh",position:"fixed",left:"0",top:0,overflowY: "auto",overflowX:"hidden",margin:0}} class="preview">
      <div style={{border:"2px solid black",padding:"2px",backgroundColor:"white",borderRadius:"10px",margin:"20px 5px"}}>
      <PreviewSection d={d} sellerdetails={sellerdetails} buyerdetails={buyerdetails} shipingdetails={shipingdetails} otherdeatils={otherdeatils} bankdeatils={bankdeatils} signature={signature} terms={terms} hsncode_percentage={hsncode_percentage} />
      </div>
      </div>
  {/* ----------------------------------Preview Section------------------------------------- */}
  
  
  
      {/* ------------------------------Form Section------------------------------------------ */}
       <div style={{width:"50%" ,height:"100vh",position:"fixed",right:"0",top:0, overflowY:"auto",margin:0}} class="form">
    <div style={{border:"2px solid black",backgroundColor:"white",borderRadius:"10px",margin:"20px 5px"}}>
      <Form d={d} setd={setd} sellerdetails={sellerdetails} setsellerdetails={setsellerdetails} shipingdetails={shipingdetails} setshipingdetails={setshipingdetails} buyerdetails={buyerdetails} setbuyerdetails={setbuyerdetails} checkvalue={checkvalue} setcheckvalue={setcheckvalue} otherdeatils={otherdeatils} setotherdetails={setotherdetails} bankdeatils={bankdeatils} setbankdetails={setbankdetails} signature={signature} setsignature={setsignature} terms={terms} setterms={setterms} hsncode_percentage={hsncode_percentage}/>
     </div>
     </div>
      </div>
  
    );
  
  }
export default GST_Outside_the_State;