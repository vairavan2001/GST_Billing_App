import './App.css'
import PreviewSection from './PreviewSection';
import Form from './Form';
const GST_Inside_the_State=(props)=>{
      const{d,setd,sellerdetails,setsellerdetails,shipingdetails,setshipingdetails,buyerdetails,setbuyerdetails,checkvalue,setcheckvalue,otherdeatils,setotherdetails,bankdeatils,setbankdetails,signature,setsignature,terms,setterms,hsncode_percentage}=props;
      
     

      return(
        <div style={{backgroundColor:"skyblue",width:"100%",minHeight:"100vh"}}>
        <div style={{width:"50%", height:"100vh",position:"fixed",left:"0",top:0,overflowY: "auto",overflowX:"hidden"}} class="preview">
        <div style={{boxShadow:"2px 2px 2px 2px rgb(0,0,0,1)",padding:"2px",backgroundColor:"white",borderRadius:"10px",margin:"20px 5px"}}>
        <PreviewSection d={d} sellerdetails={sellerdetails} buyerdetails={buyerdetails} shipingdetails={shipingdetails} otherdeatils={otherdeatils} bankdeatils={bankdeatils} signature={signature} terms={terms} hsncode_percentage={hsncode_percentage} />
        </div>
        </div>
    {/* ----------------------------------Preview Section------------------------------------- */}
    
   
        {/* ------------------------------Form Section------------------------------------------ */}
        <div style={{width:"50%" ,height:"100vh",position:"fixed",right:"0",top:"0", overflowY:"auto"}} class="form">
        <div style={{marginTop:"20px",marginBottom:"20px",boxShadow:"2px 2px 2px 2px rgb(0,0,0,1)",backgroundColor:"white",borderRadius:"10px",margin:"20px 5px"}}>
        <Form d={d} setd={setd} sellerdetails={sellerdetails} setsellerdetails={setsellerdetails} shipingdetails={shipingdetails} setshipingdetails={setshipingdetails} buyerdetails={buyerdetails} setbuyerdetails={setbuyerdetails} checkvalue={checkvalue} setcheckvalue={setcheckvalue} otherdeatils={otherdeatils} setotherdetails={setotherdetails} bankdeatils={bankdeatils} setbankdetails={setbankdetails} signature={signature} setsignature={setsignature} terms={terms} setterms={setterms} hsncode_percentage={hsncode_percentage}/>
        </div>
        </div>
        </div>
    
      );
    
    }
export default GST_Inside_the_State;