import React, { useState } from 'react';
import axios from 'axios';
import './Create.css';
const Create = () => {
  const [title,settitle] = useState("");
  const [type,settype]=useState("");
  const [brand , setbrand] = useState("");
  const [price,setprice] = useState("");
  const [rating,setrating] = useState("");
  const [Url,setUrl] = useState("");
  const [sucess,setSucess] =useState(false);
  const [msg , setMsg] = useState("");
  const [itemInfo , setitemInfo]=useState({});

  const handelItem = ()=>{
    axios.post("http://localhost:5000/product/",itemInfo).then((response)=>{
      console.log(itemInfo);


      settitle(response.data.firstName);
      settype(response.data.lastName);
      setbrand(response.data.email);
      setprice(response.data.mobilePhone);
      setrating(response.data.password);
      setUrl(response.data.country);
      setMsg(response.data.message);
      
      setSucess(true);
  }).catch((err)=>{
      console.log(err);
      setMsg(err.response.data.message)
      setSucess(false);

      
  })

}

  

 
  return (
    <div className='createGroub'>
    <div >
        
        <p className='title'>Add New Item</p>

    </div>
   

    <div className='inputTitle'>

    <input type="text" class="form-control" placeholder="Title" aria-label="Recipient's FisrtName" aria-describedby="basic-addon2" onChange={(e)=>{
setitemInfo({...itemInfo , title:e.target.value})

    }}/>  
    </div>
   

    <div className='inputType'>
    <input type="text" class="form-control" placeholder="Ttype" aria-label="Recipient's LastName" aria-describedby="basic-addon2" onChange={(e)=>{
setitemInfo({...itemInfo , type:e.target.value})

    }}/>  
    </div>
    <div className='inputBrand'>
    <input type="text" class="form-control" placeholder="Brand" aria-label="Recipient's Email" aria-describedby="basic-addon2" onChange={(e)=>{
setitemInfo({...itemInfo , brand:e.target.value})

    }}/>  
    </div>
    <div className='inputPrice'>
    <input type="text" class="form-control" placeholder="Price" aria-label="Recipient's mobilephone" aria-describedby="basic-addon2" onChange={(e)=>{
setitemInfo({...itemInfo , price:e.target.value})

    }}/>  
    </div>
    

    <div className='inputRating'>
        
    <input type="password" class="form-control" placeholder="Rate" aria-label="Recipient's password" aria-describedby="basic-addon2" onChange={(e)=>{
setitemInfo({...itemInfo , rating:e.target.value})
    }}/>  
    </div>
    <div className='inputUrl'>
    <input type="text" class="form-control" placeholder="Url" aria-label="Recipient's Country" aria-describedby="basic-addon2" onChange={(e)=>{
setitemInfo({...itemInfo , Url:e.target.value})

    }}/>  
    </div>
<div className='buttonCreate'>
<button class="btn btn-primary" type="submit" onClick={handelItem}>Submit</button>

{msg && <p className={sucess ? "sucess" : "failed"}>{msg}!!</p>}
</div>

</div>

)
}
export default Create;