import { useEffect, useState } from 'react';
import './App.css'
const PreviewSection=(props)=>{
    const{sellerdetails,d,buyerdetails,shipingdetails,otherdeatils,bankdeatils,signature,terms,hsncode_percentage}=props;

    const[quantitycount,setquantitycount]=useState(0);
    const[totalamount,settotalamount]=useState(0);
    const[gstpercentage,setgstpercentage]=useState(0);
    useEffect(()=>{
        var total_quantity=0;
        d.map((list,index)=>{
            if(list.quantity===null){
                total_quantity+=0;
            }
            else{
            total_quantity+=parseInt(list.quantity);
            }
        })
        setquantitycount(total_quantity);
    },[d])
    

    useEffect(()=>{
        var total=0;
        d.map((list,index)=>{
            if(list.rate!=null & list.quantity!=null){
                total+=parseInt(list.rate*list.quantity);
            }
        })
        settotalamount(total);
    },[d])

    useEffect(()=>{
        var percentage=0;
        d.map((listd,indexd)=>{
            if(listd.quantity!=null & listd.rate!=null){
            hsncode_percentage.map((listh,indexh)=>{
                if(listd.hsn==listh.hsncode){
                    percentage+=listh.rate;
                }
            })
            }
        })
        setgstpercentage(percentage);
    },[d])

return(
    <>
              <div>
              <h4 style={{textAlign:"center",fontWeight:"bold"}}>Tax Invoice</h4>
              <table style={{border:"1px solid black",width:"50%",borderCollapse:"collapse"}}>
              <tr>
              <td style={{padding:"15px 5px", lineHeight:"2px",borderBottom:"1px solid black"}}>
              <h3 id="company_name">{sellerdetails[0]?.company_name}</h3>
              <p id="address1">{sellerdetails[0]?.address_Line1}</p>
              <p id="address2">{sellerdetails[0]?.address_Line2}</p>
              <p id="address3">{sellerdetails[0]?.address_Line3}</p>
              <p id="city">{sellerdetails[0]?.city},{sellerdetails[0]?.state}-{sellerdetails[0].zipcode}</p>
              </td>
              </tr>
              <tr>
              <td style={{padding:"15px 5px", lineHeight:"2px",borderBottom:"1px solid black"}}>
              <p style={{marginTop:"0"}}>Consignee (Ship to)</p>
              <h3 id="shippingcompany_name">{shipingdetails[0]?.company_name}</h3>
              <p id="shippingaddress1">{shipingdetails[0]?.address_Line1}</p>
              <p id="shippingaddress2">{shipingdetails[0]?.address_Line2}</p>
              <p id="shippingaddress3">{shipingdetails[0]?.address_Line3}</p>
              <p id="shippingcity">{shipingdetails[0]?.city+","}{shipingdetails[0]?.state+"-"}{shipingdetails[0]?.zipcode}</p>
                  </td>
              </tr>
              <tr>
              <td style={{padding:"15px 5px", lineHeight:"2px"}}>
              <p style={{marginTop:"0"}}>Buyer (Billed to)</p>
              <h3 id="buyercompany_name">{buyerdetails[0]?.company_name}</h3>
              <p id="buyeraddress1">{buyerdetails[0]?.address_Line1}</p>
              <p id="buyeraddress2">{buyerdetails[0]?.address_Line2}</p>
              <p id="buyeraddress3">{buyerdetails[0]?.address_Line3}</p>
              <p id="buyercity">{buyerdetails[0]?.city},{buyerdetails[0]?.state}-{buyerdetails[0]?.zipcode}</p>
                  </td>
              </tr>
              </table>
              <table style={{float:"right",position:"absolute",top:"61px",right:0,border:"1px solid black",width:"49.5%",borderCollapse:"collapse"}}>
                <tr>
                    <td style={{borderBottom:"1px solid black",borderRight:"1px solid black",width:"12%",padding:"5px 2px"}}>Invoice No</td>
                    <td style={{borderBottom:"1px solid black",borderRight:"1px solid black",padding:"5px 2px"}}><b>{otherdeatils[0]?.invoice_no}</b></td>
                    <td style={{borderBottom:"1px solid black",borderRight:"1px solid black",width:"12%",padding:"5px 2px"}}>Invoice Date</td>
                    <td style={{borderBottom:"1px solid black",padding:"5px 2px"}}><b>{otherdeatils[0]?.invoice_date}</b></td>
                </tr>

                <tr>
                    <td style={{borderBottom:"1px solid black",borderRight:"1px solid black",width:"12%",padding:"5px 2px"}}>Challan No</td>
                    <td style={{borderBottom:"1px solid black",borderRight:"1px solid black",padding:"5px 2px"}}>{otherdeatils[0]?.challan_no}</td>
                    <td style={{borderBottom:"1px solid black",width:"12%",padding:"5px 2px",borderRight:"1px solid black"}}>Challan Date</td>
                    <td style={{borderBottom:"1px solid black",padding:"5px 2px"}}>{otherdeatils[0]?.challan_date}</td>
                </tr>

                <tr>
                    <td style={{borderBottom:"1px solid black",borderRight:"1px solid black",width:"12%",padding:"5px 2px"}}>P.O.No</td>
                    <td style={{borderBottom:"1px solid black",borderRight:"1px solid black",padding:"5px  2px"}}>{otherdeatils[0]?.p_o_no}</td>
                    <td style={{borderBottom:"1px solid black",width:"12%",padding:"5px 2px",borderRight:"1px solid black"}}>Delivery Date</td>
                    <td style={{borderBottom:"1px solid black",padding:"5px 2px"}}>{otherdeatils[0]?.delivery_date}</td>
                </tr>

                <tr>
                    <td style={{borderBottom:"1px solid black",borderRight:"1px solid black",width:"12%",padding:"5px 2px"}}>Reverse Charges</td>
                    <td style={{borderBottom:"1px solid black",borderRight:"1px solid black",padding:"5px 2px"}}>{otherdeatils[0]?.reverse_charges}</td>
                    <td style={{borderBottom:"1px solid black",width:"12%",padding:"5px 2px",borderRight:"1px solid black"}}>L.R.NO</td>
                    <td style={{borderBottom:"1px solid black",padding:"5px 2px"}}>{otherdeatils[0]?.l_r_no}</td>
                </tr>

                <tr>
                    <td style={{borderBottom:"1px solid black",borderRight:"1px solid black",width:"12%",padding:"5px 2px"}}>Due Date</td>
                    <td style={{borderBottom:"1px solid black",borderRight:"1px solid black",padding:"5px 2px"}}>{otherdeatils[0]?.due_date}</td>
                    <td style={{borderBottom:"1px solid black",width:"12%",padding:"5px 2px",borderRight:"1px solid black"}}>E-Way No</td>
                    <td style={{borderBottom:"1px solid black",padding:"5px 2px"}}>{otherdeatils[0]?.e_way_no}</td>
                </tr>

              </table>
              <table style={{borderCollapse: "collapse",border:"1px solid black",width:"100%",marginTop:"80px"}}>
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
                  
                  <tr key={index} className='htable'>
                  <td style={{borderRight:"1px solid black",textAlign:"center"}}>{list?.id}</td>
                  <td style={{borderRight:"1px solid black",textAlign:"left",paddingLeft:"5px"}} id={"previewname"+index}><b>{list?.name}</b></td>
                  <td style={{borderRight:"1px solid black",textAlign:"center"}} id={"previewhsn"+index}>{list?.hsn}</td>
                  <td style={{borderRight:"1px solid black",textAlign:"right",paddingRight:"5px"}} id={"previewquantity"+index}><b>{list?.quantity}</b></td>
                  <td style={{borderRight:"1px solid black",textAlign:"right",paddingRight:"5px"}} id={"previewrate"+index}>{list?.rate}</td>
                  <td style={{borderRight:"1px solid black",textAlign:"right",paddingRight:"5px"}}><b>{parseFloat((list?.quantity)*(list?.rate)).toFixed(2)}</b></td>
                  </tr>
              ))}
                <tr>
                    <td style={{borderRight:"1px solid black"}}></td>
                    <td style={{borderRight:"1px solid black",textAlign:"right",paddingRight:"5px"}}><b>CGST</b></td>
                    <td style={{borderRight:"1px solid black"}}></td>
                    <td style={{borderRight:"1px solid black"}}></td>
                    <td style={{borderRight:"1px solid black"}}></td>
                    <td style={{borderRight:"1px solid black",textAlign:"right",paddingRight:"5px"}}className='gtable'><b>{parseFloat(totalamount*((gstpercentage/2)/100)).toFixed(2)}</b></td>
                </tr>
                <tr>
                    <td style={{borderRight:"1px solid black"}}></td>
                    <td style={{borderRight:"1px solid black",textAlign:"right",paddingRight:"5px"}}><b>SGST</b></td>
                    <td style={{borderRight:"1px solid black"}}></td>
                    <td style={{borderRight:"1px solid black"}}></td>
                    <td style={{borderRight:"1px solid black"}}></td>
                    <td style={{borderRight:"1px solid black",textAlign:"right",paddingRight:"5px"}} className='gtable'><b>{parseFloat(totalamount*((gstpercentage/2)/100)).toFixed(2)}</b></td>
                </tr>
                
                <tr>
                    <td style={{borderRight:"1px solid black",borderTop:"1px solid black"}}></td>
                    <td style={{borderRight:"1px solid black",textAlign:"right",paddingRight:"5px",borderTop:"1px solid black"}}><b>Total</b></td>
                    <td style={{borderRight:"1px solid black",borderTop:"1px solid black"}}></td>
                    <td style={{borderRight:"1px solid black",borderTop:"1px solid black",textAlign:"right",paddingRight:"5px"}} className='gtable'><b>{quantitycount}</b></td>
                    <td style={{borderRight:"1px solid black",borderTop:"1px solid black"}}></td>
                    <td style={{borderRight:"1px solid black",borderTop:"1px solid black",textAlign:"right",paddingRight:"5px"}} className='gtable'><b>{(totalamount+(totalamount*((gstpercentage)/100)))}</b></td>
                </tr>
              </tbody>
              </table>
              <div style={{width:"100%",padding:"5px",margin:0,height:"60px"}}>
              
              </div>
              <table style={{width:"100%", borderCollapse:'collapse', border:"1px solid black" }}>
                <thead>
                    <tr>
                    <th style={{border:"1px solid black"}}>HSN/SAC</th>
                    <th style={{border:"1px solid black"}}>Taxable Value</th>
                    <th style={{border:"1px solid black",padding:"0",width:"25%"}}>Central Tax
                        <div style={{borderTop:"1px solid black",width:"40%",borderRight:"1px solid black",height:"25px",marginTop:"19px" }}>Rate</div>
                        <div style={{borderTop:"1px solid black",width:"60%",marginBottom:0,height:"25px",float:"right",marginTop:"-26px"}}>Amount</div>
                    </th>
                    <th style={{border:"1px solid black",padding:"0" ,width:"25%"}}>State Tax
                        <div style={{borderTop:"1px solid black",width:"40%",borderRight:"1px solid black",height:"25px",marginTop:"19px" }}>Rate</div>
                        <div style={{borderTop:"1px solid black",width:"60%",marginBottom:0,height:"25px",float:"right",marginTop:"-26px"}}>Amount</div>
                    </th>
                    <th style={{border:"1px solid black"}}>Total Tax Amount</th>
                    </tr>
                </thead>
                <tbody>
                        { d.map((list,index)=>(
                            <tr key={index} className='htable'>
                                <td style={{textAlign:"center",borderRight:"1px solid black"}}>{list.hsn}</td>
                                <td style={{textAlign:"right",paddingRight:"5px",borderRight:"1px solid black"}}>{(list.quantity * list.rate)}</td>
                                <td style={{padding:0,margin:0,height:"50px"}}>
                                <div style={{borderRight:"1px solid black",height:"50px",margin:0,padding:0}}>
                                <div style={{width:"40%",borderRight:"1px solid black",height:"100%",textAlign:"right",margin:0,paddingRight:"0.5px"}}><span style={{position:"relative",top:"30px",marginRight:"5px"}}>{hsncode_percentage.map((l,i)=>(l.hsncode==list.hsn?l.rate/2+"%":null))}</span></div>
                                <div style={{width:"60%",float:"right",marginTop:"-50px",height:"100%",textAlign:"right"}}><span style={{position:"relative",top:"30px",marginRight:"5px"}}>{hsncode_percentage.map((l,i)=>(l.hsncode==list.hsn?((list.quantity * list.rate)*((l.rate/2)/100)).toFixed(2):null))}</span></div>
                                </div>
                                </td>
                                <td style={{padding:0,margin:0,height:"50px"}}>
                                <div style={{borderRight:"1px solid black",height:"50px",margin:0,padding:0}}>
                                <div style={{width:"40%",borderRight:"1px solid black",height:"100%",textAlign:"right",margin:0,padding:0}}><span style={{position:"relative",top:"30px",marginRight:"5px"}}>{hsncode_percentage.map((l,i)=>(l.hsncode==list.hsn?l.rate/2+"%":null))}</span></div>
                                <div style={{width:"60%",float:"right",marginTop:"-50px",height:"100%",textAlign:"right"}}><span style={{position:"relative",top:"30px",marginRight:"5px"}}>{hsncode_percentage.map((l,i)=>(l.hsncode==list.hsn?((list.quantity * list.rate)*((l.rate/2)/100)).toFixed(2):null))}</span></div>
                                </div>
                                </td>
                                <td style={{textAlign:"right",paddingRight:"5px"}}>{hsncode_percentage.map((l,i)=>(l.hsncode==list.hsn?((list.quantity*list.rate)+(list.quantity*list.rate)*(l.rate/100)):null))}</td>
                            </tr>
                        ))
                        }
                    
                    <tr>
                        <td style={{border:"1px solid black"}}>Total</td>
                        <td style={{border:"1px solid black",textAlign:"right", paddingRight:"5px",margin:0}} className='gtable'><b>{totalamount.toFixed(2)}</b></td>
                        <td style={{padding:0,height:"50px",borderTop:"1px solid black"}}>
                            <div style={{height:"50px",margin:0,padding:0}}>
                            <div style={{width:"40%",borderRight:"1px solid black",height:"100%"}}></div>
                            <div style={{width:"60%",float:"right",marginTop:"-50px",height:"100%",textAlign:"right",borderRight:"1px solid black"}} className='gtable'><span style={{position:"relative",top:"30px",marginRight:"5px"}}><b>{parseFloat(totalamount*((gstpercentage/2)/100)).toFixed(2)}</b></span></div>
                            </div>
                        </td>
                        <td style={{padding:0,margin:0,height:"50px",borderTop:"1px solid black"}}>
                            <div style={{height:"50px",margin:0,padding:0}}>
                            <div style={{width:"40%",borderRight:"1px solid black",height:"100%",textAlign:"right",margin:0,padding:0}}></div>
                            <div style={{width:"60%",float:"right",marginTop:"-50px",height:"100%",textAlign:"right"}} className='gtable'><span style={{position:"relative",top:"30px",marginRight:"5px"}}><b>{parseFloat(totalamount*((gstpercentage/2)/100)).toFixed(2)}</b></span></div>
                            </div>
                        </td>
                        <td style={{border:"1px solid black",textAlign:"right", paddingRight:"5px"}} className='gtable'><b>{(totalamount+parseFloat((totalamount*((gstpercentage)/100)).toFixed(2))).toFixed(2)}</b></td>
                    </tr>
                </tbody>
              </table>
        <table style={{width:"100%",height:"120px",border:"1px solid black",marginTop:"10px",borderCollapse:"collapse"}}>
              <tr>
              <td style={{margin:"0",padding:0,width:"60%"}}>
                <table style={{padding:0,margin:0}}>
                <tr>
                <th style={{padding:5,margin:0}}>Bank Details</th>
                <th></th>
                </tr>
                <tr>
                <td style={{padding:5,margin:0}}>Bank Name:</td>
                <td style={{padding:5,margin:0}}>{bankdeatils[0].bank_name}</td>
                </tr>
                <tr>
                <td style={{padding:5,margin:0}}>Branch Name:</td>
                <td style={{padding:5,margin:0}}>{bankdeatils[0].branch_name}</td>
                </tr>
                <tr style={{padding:5,margin:0}}>
                <td style={{padding:5,margin:0}}>Account Number:</td>
                <td style={{padding:5,margin:0}}>{bankdeatils[0].account_number}</td>
                </tr>
                <tr>
                <td style={{padding:5,margin:0}}>IFSC Code:</td>
                <td style={{padding:5,margin:0}}>{bankdeatils[0].ifsc_code}</td>
                </tr>
                </table>
              </td>
              <td style={{borderLeft:"1px solid black",margin:0,padding:0}}>
                <img alt="Authorised Signature" src={signature} style={{border:"2px solid black",height:"75px",width:"150px",marginLeft:"20%",marginTop:"10%"}}/>
                <p style={{textAlign:"center"}}><b>Authorised Signature</b></p>
              </td>
              </tr>
        </table>

        <table style={{width:"100%",height:"120px",border:"1px solid black",marginTop:"10px",marginBottom:"10px"}}>
              <tr>
                <th style={{margin:0,textAlign:"left",padding:0}}>Teams & Conditions</th>
            </tr>
                    {terms.map((list,index)=>(
                        <>
                        <tr key={index}>
                        <td style={{padding:0}}>
                        {(index+1)+". "}{list.text}
                        </td>
                        </tr>
                        </>
                    ))
                    }
        </table> 
    <p style={{textAlign:"center"}}><b>This is a computer generated invoice</b></p>
    </div>
    </>
)
}
export default PreviewSection;