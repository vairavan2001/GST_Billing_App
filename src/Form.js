import './App.css'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Form=(props)=>{
    const{d,setd,sellerdetails,setsellerdetails,shipingdetails,setshipingdetails,buyerdetails,setbuyerdetails,checkvalue,setcheckvalue,otherdeatils,setotherdetails,bankdeatils,setbankdetails,signature,setsignature,terms,setterms,hsncode_percentage}=props;
    const HandleChange=(e,size)=>{
        setd(()=>d.map((list,index)=>(index===size?{...list,id:size+1,[e.target.name]:e.target.value}:list)));
    };
    
    const AddListCount=(e)=>{
      e.preventDefault();
      setd([...d,{quantity:null,rate:null}]);
    }
    
    useEffect(()=>{
        const arr=[...d]
        arr.map((list,index)=>(list.id=index+1));
        setd(arr);
    },[d])
    
    useEffect(()=>{
        if(checkvalue==true){
            setbuyerdetails(shipingdetails);
        }
    },[buyerdetails])
    
    useEffect(()=>{
        if(checkvalue==true){
            setbuyerdetails(shipingdetails);
        }
    },[shipingdetails])
    
    const RemoveList=(e)=>{
        e.preventDefault();
        var confirm=window.confirm("Please confirm if you want to delete this item")
        if(confirm){
        const arr=[...d];
        arr.splice(e.target.id,1);
        setd(arr);
        }
        }
    
    const CheckIn=(e)=>{
        if(e.target.checked===true){ 
        setcheckvalue(true);
        setbuyerdetails([shipingdetails]);
        }
        else{
            setcheckvalue(false);
            setbuyerdetails([{company_name:"",address_Line1:"",address_Line2:"",address_Line3:"",city:"",state:"",zipcode:""}]);
        }
    }
    const navigate = useNavigate();
    const PrintPreview=(e)=>{
        e.preventDefault(); 
        navigate('/print_preview');
    }
    return(
   <div>
    <form style={{padding:"20px"}} method='post' onSubmit={(e)=>PrintPreview(e)}>
        <div style={{padding:"15px",borderRadius:"10px", backgroundColor:"transparent",boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)"}}>
        <p><b>Seller</b></p> <hr style={{position:"relative" ,top:"-25px",width:"80%",marginTop:0,marginLeft:"7vh"}}/>
        <lable>Company Name   <span class="redstar">*</span>  </lable><input id="scm" value={sellerdetails[0]?.company_name} onChange={(e)=>setsellerdetails(sellerdetails.map((list,index)=>({...list,company_name:e.target.value})))} required autoFocus/>
        <table style={{width:"100%",padding:"0px"}}>
        <tr><td><lable> Address Line 1 <span class="redstar">*</span></lable></td><td><input type="text" id="sad1" value={sellerdetails[0]?.address_Line1} onChange={(e)=>setsellerdetails(sellerdetails.map((list,index)=>({...list,address_Line1:e.target.value})))} required/></td>
        <td><lable> Address Line 2 <span class="redstar">*</span></lable></td><td><input type="text" id="sad2" value={sellerdetails[0]?.address_Line2} onChange={(e)=>setsellerdetails(sellerdetails.map((list,index)=>({...list,address_Line2:e.target.value})))} required/></td></tr>
        <tr><td><lable> Address Line 3 </lable></td><td> <input type="text" id="sad3" value={sellerdetails[0]?.address_Line3} onChange={(e)=>setsellerdetails(sellerdetails.map((list,index)=>({...list,address_Line3:e.target.value})))}/></td>
        <td><lable> City <span class="redstar">*</span></lable></td><td><input type="text" id="scity" value={sellerdetails[0]?.city} onChange={(e)=>setsellerdetails(sellerdetails.map((list,index)=>({...list,city:e.target.value})))} required/></td></tr>
        <tr><td><lable> State <span class="redstar">*</span></lable></td><td><input type="text" id="sstate" value={sellerdetails[0]?.state} onChange={(e)=>setsellerdetails(sellerdetails.map((list,index)=>({...list,state:e.target.value})))} required/></td>
        <td><lable>Zip Code <span class="redstar">*</span></lable></td><td><input type="text" id="szipcode" value={sellerdetails[0]?.zipcode} onChange={(e)=>setsellerdetails(sellerdetails.map((list,index)=>({...list,zipcode:e.target.value})))} required/></td></tr>
        </table>
        </div>
        <div style={{padding:"15px",borderRadius:"10px", backgroundColor:"transparent",boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",marginTop:"30px"}}>
        <p><b>Ship To</b></p> <hr style={{position:"relative" ,top:"-25px",width:"78%",marginTop:0,marginLeft:"9vh"}}/>
        <lable>Company Name   <span class="redstar">*</span>  </lable><input id="scm"  value={shipingdetails[0]?.company_name} onChange={(e)=>setshipingdetails(shipingdetails.map((list,index)=>({...list,company_name:e.target.value})))} required />
        <table style={{width:"100%",padding:"0px"}}>
        <tr><td><lable> Address Line 1 <span class="redstar">*</span></lable></td><td><input type="text" id="sad1" value={shipingdetails[0]?.address_Line1} onChange={(e)=>setshipingdetails(shipingdetails.map((list,index)=>({...list,address_Line1:e.target.value})))} required/></td>
        <td><lable> Address Line 2 <span class="redstar">*</span></lable></td><td><input type="text" id="sad2" value={shipingdetails[0]?.address_Line2}  onChange={(e)=>setshipingdetails(shipingdetails.map((list,index)=>({...list,address_Line2:e.target.value})))} required/></td></tr>
        <tr><td><lable> Address Line 3 </lable></td><td> <input type="text" id="ad3" value={shipingdetails[0]?.address_Line3} onChange={(e)=>setshipingdetails(shipingdetails.map((list,index)=>({...list,address_Line3:e.target.value})))}/></td>
        <td><lable> City <span class="redstar">*</span></lable></td><td><input type="text" id="scity" value={shipingdetails[0].city} onChange={(e)=>setshipingdetails(shipingdetails.map((list,index)=>({...list,city:e.target.value})))} required/></td></tr>
        <tr><td><lable> State <span class="redstar">*</span></lable></td><td><input type="text" id="sstate" value={shipingdetails[0]?.state} onChange={(e)=>setshipingdetails(shipingdetails.map((list,index)=>({...list,state:e.target.value})))} required/></td>
        <td><lable>Zip Code <span class="redstar">*</span></lable></td><td><input type="text" id="szipcode" value={shipingdetails[0]?.zipcode} onChange={(e)=>setshipingdetails(shipingdetails.map((list,index)=>({...list,zipcode:e.target.value})))} required/></td></tr>
        </table>
        </div>
        <div style={{padding:"15px",borderRadius:"10px", backgroundColor:"transparent",boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",marginTop:"30px"}}>
        <p><b>Buyer</b></p> <hr style={{position:"relative" ,top:"-25px",width:"80%",marginTop:0,marginLeft:"7vh"}}/>
        <div style={{marginBottom:"15px"}}><lable>Same details in ship to <input style={{margin:"0",verticalAlign:"middle"}}type="checkbox" checked={checkvalue} onClick={(e)=>CheckIn(e)} id="check"></input></lable></div>
        <lable>Company Name   <span class="redstar">*</span>  </lable><input id="bcm"  value={buyerdetails[0]?.company_name} disabled={checkvalue} onChange={(e)=>setbuyerdetails(buyerdetails.map((list,index)=>({...list,company_name:e.target.value})))} required/>
        <table style={{width:"100%",padding:"0px"}}>
        <tr><td><lable> Address Line 1 <span class="redstar">*</span></lable></td><td><input type="text" id="bad1" disabled={checkvalue} value={buyerdetails[0]?.address_Line1} onChange={(e)=>setbuyerdetails(buyerdetails.map((list,index)=>({...list,address_Line1:e.target.value})))} required/></td>
        <td><lable> Address Line 2 <span class="redstar">*</span></lable></td><td><input type="text" id="bad2" disabled={checkvalue} value={buyerdetails[0]?.address_Line2} onChange={(e)=>setbuyerdetails(buyerdetails.map((list,index)=>({...list,address_Line2:e.target.value})))} required/></td></tr>
        <tr><td><lable> Address Line 3</lable></td><td> <input type="text" id="ad3" value={buyerdetails[0]?.address_Line3} disabled={checkvalue} onChange={(e)=>setbuyerdetails(buyerdetails.map((list,index)=>({...list,address_Line3:e.target.value})))}/></td>
        <td><lable> City <span class="redstar">*</span></lable></td><td><input type="text" id="bcity" value={buyerdetails[0]?.city} disabled={checkvalue} onChange={(e)=>setbuyerdetails(buyerdetails.map((list,index)=>({...list,city:e.target.value})))} required/></td></tr>
        <tr><td><lable> State <span class="redstar">*</span></lable></td><td><input type="text" id="bstate" value={buyerdetails[0]?.state} disabled={checkvalue} onChange={(e)=>setbuyerdetails(buyerdetails.map((list,index)=>({...list,state:e.target.value})))} required/></td>
        <td><lable>Zip Code <span class="redstar">*</span></lable></td><td><input type="text" id="bzipcode" value={buyerdetails[0]?.zipcode} disabled={checkvalue} onChange={(e)=>setbuyerdetails(buyerdetails.map((list,index)=>({...list,zipcode:e.target.value})))} required/></td></tr>
        </table>     
        </div>
        <div style={{padding:"15px",borderRadius:"10px", backgroundColor:"transparent",boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",marginTop:"30px"}}>
        <p><b>Billing Products</b></p> <hr style={{position:"relative" ,top:"-25px",width:"72%",marginTop:0,marginLeft:"15vh"}}/>
        <table style={{width:"100%"}}>
        {d.map((list,index)=>(
        <div style={{padding:"15px",borderRadius:"10px", backgroundColor:"transparent",boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",marginBottom:"20px"}}>
          <button  class="redborder" id={index} onClick={(e)=>RemoveList(e)}>X</button>
           <tr key={index}>
            <td style={{width:"20%"}}><lable>Product <span class="redstar">*</span></lable></td><td style={{width:"35%"}}><input type="text" value={list?.name}  name="name" id={"product__name"+index} onChange={(e)=>{HandleChange(e,index)} } required/></td>
            <td style={{width:"25%"}}><lable>HSN/SAC <span class="redstar">*</span></lable></td><td style={{width:"35%"}}>
            <select name="hsn" style={{width:"100%" , height:"30px", borderRadius:"5px" }} id={"hsn"+index} value={list?.hsn} onChange={(e)=>HandleChange(e,index)} required>
                <option selected disabled>Select</option>
                {hsncode_percentage.map((list,index)=>(
                    <>
                    <option value={list.hsncode}>{list.hsncode}</option>
                    </>

                )
                )
                }
            </select>
            </td>
            </tr>
            <tr>
            <td><lable>Quantity <span class="redstar">*</span></lable></td><td><input name="quantity" type="number" min="0"  onChange={(e)=>HandleChange(e,index) } id={"quantity"+index} value={list?.quantity} required /></td>
            <td><lable>Rate <span class="redstar">*</span></lable></td><td><input name="rate" type="text"  onChange={(e)=>HandleChange(e,index) } id={"rate"+index} value={list?.rate} required /></td>
            </tr>
            </div>
        )
        )
        }
        </table>
        <div style={{textAlign:"center",width:"100%"}}>
        <button class="addbutton" target="_self" onClick={(e)=>(AddListCount(e))}>+</button>
        </div>
        </div>
        <div style={{padding:"15px",borderRadius:"10px", backgroundColor:"transparent",boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",marginTop:"30px"}}>            
        <p><b>Other Details</b></p> <hr style={{position:"relative" ,top:"-25px",width:"74.5%",marginTop:0,marginLeft:"12.5vh"}}/>
        <table style={{width:"100%",padding:"0px",marginTop:"0px"}}>
            <tr>
                <td style={{width:"20%",padding:0,margin:0}}><label>Invoice No <span class="redstar">*</span></label></td>
                <td style={{width:"35%",padding:0,margin:0}}><input type="text" value={otherdeatils[0].invoice_no} onChange={(e)=>setotherdetails(prelist=>prelist.map((list,index)=>({...list,invoice_no:e.target.value})))} required/></td>
                <td style={{width:"25%",padding:0,margin:0}}><label>Invoice Date <span class="redstar">*</span></label></td>
                <td style={{width:"35%",paddingRight:"10px"}}><input type="date" style={{width:"100%" , height:"30px", borderRadius:"5px" }} value={otherdeatils[0].invoice_date} onChange={(e)=>setotherdetails(prelist=>prelist.map((list,index)=>({...list,invoice_date:e.target.value})))} required /></td>
                
            </tr>
            
            <tr>
                <td style={{width:"20%"}}><label>Challan No <span class="redstar">*</span></label></td>
                <td style={{width:"35%"}}><input type="text" value={otherdeatils[0].challan_no} onChange={(e)=>setotherdetails(prelist=>prelist.map((list,index)=>({...list,challan_no:e.target.value})))} required /></td>
                <td style={{width:"25%"}}><label>Challan Date <span class="redstar">*</span></label></td>
                <td style={{width:"35%",paddingRight:"10px"}}><input type="date" style={{width:"100%" , height:"30px", borderRadius:"5px" }} value={otherdeatils[0].challan_date} onChange={(e)=>setotherdetails(prelist=>prelist.map((list,index)=>({...list,challan_date:e.target.value})))} required/></td>
            </tr>

            <tr>
                <td style={{width:"20%"}}><label>P.O.No</label></td>
                <td style={{width:"35%"}}><input type="text" value={otherdeatils[0].p_o_no} onChange={(e)=>setotherdetails(prelist=>prelist.map((list,index)=>({...list,p_o_no:e.target.value})))} /></td>
                <td style={{width:"25%"}}><label>Delivery Date</label></td>
                <td style={{width:"35%",paddingRight:"10px"}}><input type="date" style={{width:"100%" , height:"30px", borderRadius:"5px" }} value={otherdeatils[0].delivery_date} onChange={(e)=>setotherdetails(prelist=>prelist.map((list,index)=>({...list,delivery_date:e.target.value})))}/></td>
            </tr>

            <tr>
                <td style={{width:"20%"}}><label>Reverse Charages<span class="redstar">*</span></label></td>
                <td style={{width:"35%",paddingRight:"25px"}}><select style={{width:"100%" , height:"30px", borderRadius:"5px"}} value={otherdeatils[0].reverse_charges} onChange={(e)=>setotherdetails(prelist=>prelist.map((list,index)=>({...list,reverse_charges:e.target.value})))} required >
                    <option disabled selected>Select</option>
                    <option>Yes</option>
                    <option>No</option>
                    </select></td>
                <td style={{width:"25%"}}><label>L.R.No</label></td>
                <td style={{width:"35%"}}><input type="text" value={otherdeatils[0].l_r_no} onChange={(e)=>setotherdetails(prelist=>prelist.map((list,index)=>({...list,l_r_no:e.target.value})))}/></td>
            </tr>

            <tr>
                <td style={{width:"25%"}}><label>Due Date</label></td><td style={{width:"25%"}}> <input type="date" style={{width:"100%" , height:"30px", borderRadius:"5px"}}value={otherdeatils[0].due_date} onChange={(e)=>setotherdetails(prelist=>prelist.map((list,index)=>({...list,due_date:e.target.value})))} /></td>
                
            </tr>
        </table>
        </div>
        <div style={{padding:"15px",borderRadius:"10px", backgroundColor:"transparent",boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",marginTop:"30px"}}>
        <p><b>Bank Details</b></p> <hr style={{position:"relative" ,top:"-25px",width:"74.5%",marginTop:0,marginLeft:"12.5vh"}}/>
        <table style={{width:"100%",padding:"0px"}}>
            <tr>
                <td style={{padding:0,margin:0}}><lable>Bank Name <span class="redstar">*</span></lable></td>
                <td style={{padding:0,margin:0}}><input type="text" value={bankdeatils[0].bank_name} onChange={e=>setbankdetails(prelist=>prelist.map((list,index)=>({...list,bank_name:e.target.value})))} required /></td>
                <td style={{padding:0,margin:0}}>Branch Name <span class="redstar">*</span></td>
                <td style={{padding:0,margin:0}}><input type="text" value={bankdeatils[0].branch_name} onChange={e=>setbankdetails(prelist=>prelist.map((list,index)=>({...list,branch_name:e.target.value})))}required /></td>
            </tr>

            <tr>
                <td><lable>Account Number <span class="redstar">*</span></lable></td>
                <td><input type="text" value={bankdeatils[0].account_number} onChange={e=>setbankdetails(prelist=>prelist.map((list,index)=>({...list,account_number:e.target.value})))} required/></td>
                <td>IFSC Code <span class="redstar">*</span></td>
                <td><input type="text" value={bankdeatils[0].ifsc_code} onChange={e=>setbankdetails(prelist=>prelist.map((list,index)=>({...list,ifsc_code:e.target.value})))} required /></td>
            </tr>
        </table>
        </div>
        <div style={{padding:"15px",borderRadius:"10px", backgroundColor:"transparent",boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",marginTop:"30px"}}>
        <p><b>Signature</b></p> <hr style={{position:"relative" ,top:"-25px",width:"77%",marginTop:0,marginLeft:"10vh"}}/>
        <input type="file" accept='.jpg' style={{border:0,marginLeft:"40%",marginTop:"15px"}} id="signature" onChange={(e)=>setsignature(URL.createObjectURL(e.target.files[0]))}></input>
        </div>

        <div style={{padding:"15px",borderRadius:"10px", backgroundColor:"transparent",boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",marginTop:"30px"}}>
        <p><b>Teams & Conditions</b></p> <hr style={{position:"relative" ,top:"-25px",width:"68.5%",marginTop:0,marginLeft:"18.5vh"}}/>
        {terms.map((list,index)=>(
            <>
            <input key={index} id={index} type="text" value={list?.text} onChange={(event)=>{setterms(prelist=>prelist.map((list,index)=>index==event.target.id?{...list,text:event.target.value}:list))}} style={{width:"85%",margin:0,marginLeft:"20px",padding:0,marginBottom:"10px",paddingLeft:"10px",paddingRight:"26px"}} /><button id={index} class="crossbutton" onClick={(event)=>{event.preventDefault();setterms(prelist=>prelist.filter((list,index)=>index!=event.target.id))}}>X</button>
            </>
        ))
        } 
        <div style={{textAlign:"center",width:"100%"}}>
        <button class="AddButton" onClick={(e)=>{e.preventDefault();setterms(prelist=>[...prelist,{}])}}>Add</button>          
        </div>
        </div>
    
    <div style={{textAlign:"center",width:"100%"}}>
    <button style={{height:"auto",marginBottom:"30px",backgroundColor:"DodgerBlue",border:"2px solid DodgerBlue",fontSize:"20px",fontFamily:"cursive",color:"white",padding:"5px",borderRadius:"20px",marginTop:"35px"}} type="submit">Preview</button>
    </div>
    </form>
    </div>
);
}
export default Form;