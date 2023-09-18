import { useEffect, useState } from 'react';
import './App.css'
import { useNavigate } from 'react-router-dom';
const Form_Page1=(props)=>{
    const{countryvalue,setcountryvalue,type,settype}=props;
const countryList = [ "Afghanistan", "Åland Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas (the)", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia (Plurinational State of)", "Bonaire, Sint Eustatius and Saba", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory (the)", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Cayman Islands (the)", "Central African Republic (the)", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands (the)", "Colombia", "Comoros (the)", "Congo (the Democratic Republic of the)", "Congo (the)", "Cook Islands (the)", "Costa Rica", "Croatia", "Cuba", "Curaçao", "Cyprus", "Czechia", "Côte d'Ivoire", "Denmark", "Djibouti", "Dominica", "Dominican Republic (the)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Falkland Islands (the) [Malvinas]", "Faroe Islands (the)", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories (the)", "Gabon", "Gambia (the)", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See (the)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea (the Democratic People's Republic of)", "Korea (the Republic of)", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic (the)", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands (the)", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia (Federated States of)", "Moldova (the Republic of)", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands (the)", "New Caledonia", "New Zealand", "Nicaragua", "Niger (the)", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands (the)", "Norway", "Oman", "Pakistan", "Palau", "Palestine, State of", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines (the)", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Republic of North Macedonia", "Romania", "Russian Federation (the)", "Rwanda", "Réunion", "Saint Barthélemy", "Saint Helena, Ascension and Tristan da Cunha", "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin (French part)", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten (Dutch part)", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "South Sudan", "Spain", "Sri Lanka", "Sudan (the)", "Suriname", "Svalbard and Jan Mayen", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan (Province of China)", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands (the)", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates (the)", "United Kingdom of Great Britain and Northern Ireland (the)", "United States Minor Outlying Islands (the)", "United States of America (the)", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela (Bolivarian Republic of)", "Viet Nam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"];                  
const Navigate = useNavigate();
const NextButton=()=>{
    if(type=='Intra-State Transactions Goods and Services'){
        Navigate('/GST_Invoice_Inside_the_State')}
        else if(type=='Inter-State Transactions Goods and Services'){
        Navigate('/GST_Invoice_Outside_the_State')
        }
        else{
        document.getElementById("message").innerHTML="Service is not available for this country at the moment";
        }
    }
    
return(
    <div className='form_page1'>
        <p id="message" style={{color:"red",textAlign:"center",fontWeight:"bold",width:"100%"}}></p>
        <div style={{width:"100%",padding:0,margin:0,marginBottom:"10px"}}>
       <div className='form_page1_lable'><label>State</label></div>
       <div className='form_page1_input'>
        <select value={countryvalue} onChange={(e)=>{setcountryvalue(e.target.value)}}>
            <option value='' selected disabled>Select</option>
            {countryList.map((list,index)=>{
                return(
                <option value={list}>{list}</option>
                );
            }
        
        )}
        </select>
        </div>
        </div>
        {countryvalue==='India'?
        (
        <div style={{width:"100%",padding:0,margin:0,marginBottom:"10px",border:"none"}}>
        <div className='form_page1_lable'>
        <lable>Invoice Type</lable>
        </div>
        <div className='form_page1_input'>
        <select value={type} onChange={(e)=>settype(e.target.value)}>
            <option value='' selected disabled>Select</option>
            <option value={'Intra-State Transactions Goods and Services'}>Intra-State Transactions Goods and Services</option>
            <option value={'Inter-State Transactions Goods and Services'}>Inter-State Transactions Goods and Services</option>
        </select>
        </div>
        </div>
        )
        :null}
        <div style={{textAlign:"center"}}>
            <button style={{height:"auto",marginBottom:"10px",backgroundColor:"DodgerBlue",border:"2px solid DodgerBlue",fontSize:"20px",fontFamily:"cursive",color:"white",padding:"10px",borderRadius:"25px",marginTop:"15px"}} onClick={()=>NextButton()}>Next</button>
        </div>
    </div>
)
}
export default Form_Page1
