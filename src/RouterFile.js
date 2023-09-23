import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Home";
import Form_Page1 from "./Form_Page1";
import GST_Inside_the_State from './GST_Inside_the_State'
import GST_Outside_the_State from "./GST_Outside_the_State";
import { useState,useEffect } from "react";
import LoginPage from "./LoginPage";
import PP from "./PrintPreview";
const RouterFile=()=>{
      const [d,setd]=useState([{quantity:null,rate:null}]);
      const [sellerdetails,setsellerdetails]=useState([{company_name:"",address_Line1:"",address_Line2:"",address_Line3:"",city:"",state:"",zipcode:""}]);
      const [shipingdetails,setshipingdetails]=useState([{company_name:"",address_Line1:"",address_Line2:"",address_Line3:"",city:"",state:"",zipcode:""}]);
      const [buyerdetails,setbuyerdetails]=useState([{company_name:"",address_Line1:"",address_Line2:"",address_Line3:"",city:"",state:"",zipcode:""}]);
      const [checkvalue,setcheckvalue]=useState(false);
      const [otherdeatils,setotherdetails]=useState([{}]);
      const [bankdeatils,setbankdetails]=useState([{}]);
      const [signature,setsignature]=useState(null);
      const [terms,setterms]=useState([{}]);
      const [countryvalue,setcountryvalue]=useState('');
      const hsncode_percentage=[{hsncode:8205,rate:18},{hsncode:8202,rate:12}];
      const [type,settype]=useState('');
      useEffect(()=>{
        settype('');
    },[countryvalue])
    return(
<BrowserRouter>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/form_page1" element={<Form_Page1 countryvalue={countryvalue} setcountryvalue={setcountryvalue} type={type} settype={settype}/>} />
    <Route path="/GST_Invoice_Inside_the_State" element={<GST_Inside_the_State d={d} setd={setd} sellerdetails={sellerdetails} setsellerdetails={setsellerdetails} shipingdetails={shipingdetails} setshipingdetails={setshipingdetails} buyerdetails={buyerdetails} setbuyerdetails={setbuyerdetails} checkvalue={checkvalue} setcheckvalue={setcheckvalue} otherdeatils={otherdeatils} setotherdetails={setotherdetails} bankdeatils={bankdeatils} setbankdetails={setbankdetails} signature={signature} setsignature={setsignature} terms={terms} setterms={setterms} hsncode_percentage={hsncode_percentage} />}/>
    <Route path="/GST_Invoice_Outside_the_State" element={<GST_Outside_the_State d={d} setd={setd} sellerdetails={sellerdetails} setsellerdetails={setsellerdetails} shipingdetails={shipingdetails} setshipingdetails={setshipingdetails} buyerdetails={buyerdetails} setbuyerdetails={setbuyerdetails} checkvalue={checkvalue} setcheckvalue={setcheckvalue} otherdeatils={otherdeatils} setotherdetails={setotherdetails} bankdeatils={bankdeatils} setbankdetails={setbankdetails} signature={signature} setsignature={setsignature} terms={terms} setterms={setterms} hsncode_percentage={hsncode_percentage} />}/>
    <Route path='/print_preview' element={<PP d={d} sellerdetails={sellerdetails} buyerdetails={buyerdetails} shipingdetails={shipingdetails} otherdeatils={otherdeatils} bankdeatils={bankdeatils} signature={signature} terms={terms} hsncode_percentage={hsncode_percentage}/>}></Route>
    <Route path='/login' element={<LoginPage/>}/>
</Routes>
</BrowserRouter>
    );
}
export default RouterFile;