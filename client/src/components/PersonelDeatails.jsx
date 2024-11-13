import { useState } from "react";
import "./personel.css"
function PersonelDeatails({handlePersonel}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [isActive,setActive]=useState(0);
  return ( (isActive)?
      <div className="form-container">
          <form method="post" className="form-container" onSubmit={handlePersonel}>  
              <label htmlFor="Name">Name :</label>
              <input
                id="Name"
                type="text"
                value={name}
                name="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                maxLength={50}
              />
              <label htmlFor="email">Email :</label>
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label htmlFor="phone">Phone no :</label>
              <input
                id="phone"
                type="tel"
                value={number}
                name="phone"
                onChange={(e) => {
                  let phone=e.target.value;
                  setNumber(phone);
                }}
                pattern="[+]{1}[0-9]{11,14}"
                maxLength={10}
              />
              <button type="submit" className="save"> save </button>
            </form>
            <button className="cancel" onClick={()=>{setActive(0)}}>cancel</button>
       </div>

      :
      <div>
         <button onClick={()=>{setActive(1)}}>show me</button>
      </div>
  );
}

export default PersonelDeatails;