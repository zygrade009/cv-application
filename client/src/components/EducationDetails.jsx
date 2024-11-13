import {useState} from "react"
import "./education.css"
function EducationDetails({handleClick}) {
  const [isActive,setActive]=useState(0);  
  return (
     (isActive)?
     <div className="form-container">
            <form method="post" onSubmit={handleClick} className="form-container">
                  <label htmlFor="school">School Name</label>
                  <input type="text" htmlFor="school"/> 
                  <label htmlFor="title">title of study</label>
                  <input type="text" htmlFor="title"/>
                  <label htmlFor="dateof">Date of Study</label>
                  <input type="date" name="" id="" />
                  <button type="submit" className="save">Save</button>
            </form>
      <button className="cancel" onClick={()=>{setActive(0)}}> cancel </button>
      <button className="add">Add</button>
    </div>
    :
     <div>
        <button onClick={()=>{setActive(1)}}> show me </button>
     </div>
  );
}

export default EducationDetails