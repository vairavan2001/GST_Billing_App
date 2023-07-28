import {createRef, useRef, useState} from 'react';
import './App.css'

const GST_Inside_the_State=()=>{
      const [d,setd]=useState([{}]);
      const [sellerdetails,setsellerdetails]=useState([{}]);
      const [shipingdetails,setshipingdetails]=useState([{}]);
      const [buyerdetails,setbuyerdetails]=useState([{}]);
      
      const ProductName=(e,size)=>{
        setd(()=>d.map((list,index)=>(index===size?{...list,id:size+1,name:e.target.value}:list)));
    };
    const ListHsn=(e,size)=>{
        setd(()=>d.map((list,index)=>(index===size?{...list,hsn:e.target.value}:list)));
    }
    
    const ListQuantity=(e,size)=>{
        setd(()=>d.map((list,index)=>(index===size?{...list,quantity:e.target.value}:list)));
    }
    
    const ListRate=(e,size)=>{
        setd(()=>d.map((list,index)=>(index===size?{...list,rate:e.target.value}:list)));
    }
    
    const AddListCount=(e)=>{
      e.preventDefault();
      setd([...d,{}]);
    }
      return(
        <>
        <div style={{width:"49%", height:"100vh",border:"2px solid red",position:"fixed",left:"0" }}>
              <h4 style={{textAlign:"center"}}>Tax Invoice</h4>
              <table style={{border:"1px solid black",height:"50%"}}>
              <tr>
              <td style={{padding:"0", lineHeight:"2px",width:"50vh",borderBottom:"1px solid black"}}>
              <h3 id="company_name">{sellerdetails[0].company_name}</h3>
              <p id="address1">{sellerdetails[0].address_Line1}</p>
              <p id="address2">{sellerdetails[0].address_Line2}</p>
              <p id="address3">{sellerdetails[0].address_Line3}</p>
              <p id="city">{sellerdetails[0].city},{sellerdetails[0].state}-{sellerdetails[0].zipcode}</p>
              </td>
              </tr>
              <tr>
              <td style={{padding:"0", lineHeight:"2px",width:"50vh",borderBottom:"1px solid black"}}>
              <p style={{marginTop:"0"}}>Consignee (Ship to)</p>
              <h3 id="shippingcompany_name">{shipingdetails[0].company_name}</h3>
              <p id="shippingaddress1">{shipingdetails[0].address_Line1}</p>
              <p id="shippingaddress2">{shipingdetails[0].address_Line2}</p>
              <p id="shippingaddress3">{shipingdetails[0].address_Line3}</p>
              <p id="shippingcity">{shipingdetails[0].city},{shipingdetails[0].state}-{shipingdetails[0].zipcode}</p>
                  </td>
              </tr>
              <tr>
              <td style={{padding:"0", lineHeight:"2px",width:"50vh"}}>
              <p style={{marginTop:"0"}}>Buyer (Billed to)</p>
              <h3 id="buyercompany_name">{buyerdetails[0].company_name}</h3>
              <p id="buyeraddress1">{buyerdetails[0].address_Line1}</p>
              <p id="buyeraddress2">{buyerdetails[0].address_Line2}</p>
              <p id="buyeraddress3">{buyerdetails[0].address_Line3}</p>
              <p id="buyercity">{buyerdetails[0].city},{buyerdetails[0].state}-{buyerdetails[0].zipcode}</p>
                  </td>
              </tr>
              </table>
              <table style={{borderCollapse: "collapse",border:"1px solid black",width:"100%",marginTop:"20px"}}>
                  <thead>
                  <tr style={{height:"50px"}}>
                      <th style={{border:"1px solid black",width:"2%"}}>SI No.</th>
                      <th style={{border:"1px solid black", width:"40%"}}>Description of Goods</th>
                      <th style={{border:"1px solid black",width:"20%"}}>HSN/SAC</th>
                      <th style={{border:"1px solid black",width:"10%"}}>Quantity</th>
                      <th style={{border:"1px solid black",width:"8%"}}>Rate</th>
                      <th style={{border:"1px solid black",width:"20%"}}>Total</th>
                  </tr>
                  </thead>
                  <tbody>
              {d.map((list,index)=>(
                  
                  <tr key={index}>
                  <td>{list?.id}</td>
                  <td id={"previewname"+index}>{list?.name}</td>
                  <td id={"previewhsn"+index}>{list?.hsn}</td>
                  <td id={"previewquantity"+index}>{list?.quantity}</td>
                  <td id={"previewrate"+index}>{list?.rate}</td>
                  <td>{(list?.quantity)*(list?.rate)}</td>
                  </tr>
              ))}
              </tbody>
              </table>
              </div>
    {/* ----------------------------------Preview Section------------------------------------- */}
    
    
    <div style={{width:"49%" ,border:"2px solid black",position:"absolute",right:"0"}}>
        <form style={{padding:"20px"}}>
            <p><b>Seller</b></p> <hr style={{position:"relative" ,top:"-25px",width:"80vh",marginTop:0,marginLeft:"7vh"}}/>
            <lable>Company Name  </lable><input id="cm"  value={sellerdetails[0].company_name} onChange={(e)=>setsellerdetails(sellerdetails.map((list,index)=>({...list,company_name:e.target.value})))} />
            <table style={{width:"100%",padding:"0px"}}>
            <tr><td><lable> Address Line 1</lable></td><td><input type="text" id="ad1" value={sellerdetails[0].address_Line1} onChange={(e)=>setsellerdetails(sellerdetails.map((list,index)=>({...list,address_Line1:e.target.value})))}/></td>
            <td><lable> Address Line 2 </lable></td><td><input type="text" id="ad2" value={sellerdetails[0].address_Line2} onChange={(e)=>setsellerdetails(sellerdetails.map((list,index)=>({...list,address_Line2:e.target.value})))}/></td></tr>
            <tr><td><lable> Address Line 3 </lable></td><td> <input type="text" id="ad3" value={sellerdetails[0].address_Line3} onChange={(e)=>setsellerdetails(sellerdetails.map((list,index)=>({...list,address_Line3:e.target.value})))}/></td>
            <td><lable> City </lable></td><td><input type="text" id="city" value={sellerdetails[0].city} onChange={(e)=>setsellerdetails(sellerdetails.map((list,index)=>({...list,city:e.target.value})))}/></td></tr>
            <tr><td><lable> State </lable></td><td><input type="text" id="state" value={sellerdetails[0].state} onChange={(e)=>setsellerdetails(sellerdetails.map((list,index)=>({...list,state:e.target.value})))}/></td>
            <td><lable>Zip Code</lable></td><td><input type="text" id="zipcode" value={sellerdetails[0].zipcode} onChange={(e)=>setsellerdetails(sellerdetails.map((list,index)=>({...list,zipcode:e.target.value})))}/></td></tr>
            </table>
            <p><b>Ship To</b></p> <hr style={{position:"relative" ,top:"-25px",width:"78vh",marginTop:0,marginLeft:"9vh"}}/>
            <lable>Company Name  </lable><input id="cm"  value={shipingdetails[0].company_name} onChange={(e)=>setshipingdetails(shipingdetails.map((list,index)=>({...list,company_name:e.target.value})))} />
            <table style={{width:"100%",padding:"0px"}}>
            <tr><td><lable> Address Line 1</lable></td><td><input type="text" id="ad1" value={shipingdetails[0].address_Line1} onChange={(e)=>setshipingdetails(shipingdetails.map((list,index)=>({...list,address_Line1:e.target.value})))}/></td>
            <td><lable> Address Line 2 </lable></td><td><input type="text" id="ad2" value={shipingdetails[0].address_Line2} onChange={(e)=>setshipingdetails(shipingdetails.map((list,index)=>({...list,address_Line2:e.target.value})))}/></td></tr>
            <tr><td><lable> Address Line 3 </lable></td><td> <input type="text" id="ad3" value={shipingdetails[0].address_Line3} onChange={(e)=>setshipingdetails(shipingdetails.map((list,index)=>({...list,address_Line3:e.target.value})))}/></td>
            <td><lable> City </lable></td><td><input type="text" id="city" value={shipingdetails[0].city} onChange={(e)=>setshipingdetails(shipingdetails.map((list,index)=>({...list,city:e.target.value})))}/></td></tr>
            <tr><td><lable> State </lable></td><td><input type="text" id="state" value={shipingdetails[0].state} onChange={(e)=>setshipingdetails(shipingdetails.map((list,index)=>({...list,state:e.target.value})))}/></td>
            <td><lable>Zip Code</lable></td><td><input type="text" id="zipcode" value={shipingdetails[0].zipcode} onChange={(e)=>setshipingdetails(shipingdetails.map((list,index)=>({...list,zipcode:e.target.value})))}/></td></tr>
            </table>
    
            <p><b>Buyer</b></p> <hr style={{position:"relative" ,top:"-25px",width:"80vh",marginTop:0,marginLeft:"7vh"}}/>
            <lable>Company Name  </lable><input id="cm"  value={buyerdetails[0].company_name} onChange={(e)=>setbuyerdetails(buyerdetails.map((list,index)=>({...list,company_name:e.target.value})))} />
            <table style={{width:"100%",padding:"0px"}}>
            <tr><td><lable> Address Line 1</lable></td><td><input type="text" id="ad1" value={buyerdetails[0].address_Line1} onChange={(e)=>setbuyerdetails(buyerdetails.map((list,index)=>({...list,address_Line1:e.target.value})))}/></td>
            <td><lable> Address Line 2 </lable></td><td><input type="text" id="ad2" value={buyerdetails[0].address_Line2} onChange={(e)=>setbuyerdetails(buyerdetails.map((list,index)=>({...list,address_Line2:e.target.value})))}/></td></tr>
            <tr><td><lable> Address Line 3 </lable></td><td> <input type="text" id="ad3" value={buyerdetails[0].address_Line3} onChange={(e)=>setbuyerdetails(buyerdetails.map((list,index)=>({...list,address_Line3:e.target.value})))}/></td>
            <td><lable> City </lable></td><td><input type="text" id="city" value={buyerdetails[0].city} onChange={(e)=>setbuyerdetails(buyerdetails.map((list,index)=>({...list,city:e.target.value})))}/></td></tr>
            <tr><td><lable> State </lable></td><td><input type="text" id="state" value={buyerdetails[0].state} onChange={(e)=>setbuyerdetails(buyerdetails.map((list,index)=>({...list,state:e.target.value})))}/></td>
            <td><lable>Zip Code</lable></td><td><input type="text" id="zipcode" value={buyerdetails[0].zipcode} onChange={(e)=>setbuyerdetails(buyerdetails.map((list,index)=>({...list,zipcode:e.target.value})))}/></td></tr>
            </table>     
    
            <p><b>Billing Products</b></p> <hr style={{position:"relative" ,top:"-25px",width:"68.5vh",marginTop:0,marginLeft:"18.5vh"}}/>
            <table style={{width:"100%"}}>
            {d.map((list,index)=>(
            <div style={{marginBottom:"20px",width:"100%",padding:"0"}}>
                <tr key={index}>
                <td style={{width:"20%"}}><lable>Product </lable></td><td style={{width:"35%"}}><input type="text" value={list?.name}  name="name" id={"product__name"+index} onChange={(e)=>{ProductName(e,index)} }/></td>
                <td style={{width:"25%"}}><lable>HSN/SAC </lable></td><td style={{width:"35%"}}>
                <select name="HSN/SAC" style={{width:"100%" ,border:"2px solid grey", height:"30px", borderRadius:"5px" }} id={"hsn"+index} value={list?.hsn} onChange={(e)=>ListHsn(e,index)}>
                    <option value="8202">8202</option>
                    <option value="8205">8205</option>
                </select>
                </td>
                </tr>
                <tr>
                <td><lable>Quantity</lable></td><td><input name="Quantity" type="number" min="0"  onChange={(e)=>ListQuantity(e,index) } id={"quantity"+index} value={list?.quantity}/></td>
                <td><lable>Rate</lable></td><td><input name="Rate" type="text"  onChange={(e)=>ListRate(e,index) } id={"rate"+index} value={list?.rate} /></td>
                </tr>
                </div>
            )
            )
            }
            </table>
            <button style={{marginLeft:"50vh" ,marginTop:"5%", border:"1px solid grey", borderRadius:"5px",width:"5vh",height:"5vh", background:"white" ,color:"grey",fontSize:"30px"}} target="_self" onClick={(e)=>(AddListCount(e))}>+</button>
        </form>
        </div>
    {/* ------------------------------Form Section------------------------------------------ */}
        
        </>
    
      );
    
    }
export default GST_Inside_the_State;