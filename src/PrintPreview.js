import PreviewSection from "./PreviewSection"
import './App.css'
const PrintPreview=(props)=>{
return(
    <>
    <PreviewSection d={props.d} sellerdetails={props.sellerdetails} buyerdetails={props.buyerdetails} shipingdetails={props.shipingdetails} otherdeatils={props.otherdeatils} bankdeatils={props.bankdeatils} signature={props.signature} terms={props.terms} hsncode_percentage={props.hsncode_percentage}/>
    <button style={{marginLeft:"50%",backgroundColor:"white",color:"black" ,fontFamily:"cursive",fontSize:"20px",marginBottom:"30px",border:"2px solid grey",borderRadius:"20px",padding:"10px"}} onClick={window.print}>Print</button>
    </>

)
}
export default PrintPreview