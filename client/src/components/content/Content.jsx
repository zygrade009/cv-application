import "./content.css";
import Modal from "../utils/modal/Modal";
import Preview from "../preview/Preview";
import PersonelDeatails from "../personelDetails/PersonelDeatails";
import EducationDetails from "../educationalDetails/EducationDetails";
import { useState } from "react";
import ProfessionalDetails from "../profDetails/ProfessionalDetails";
function Content(){
  const [personelDetails,setPersonelDetails]=useState({ Name: "Rachel Green", Email: "racheg@gmail.com", Phone: "123-456-7890" });

  const [school,setSchool]=useState([
    { id: crypto.randomUUID(), School: "Universidad Nacional José C. Paz", Degree: "Licenciatura en Informática",Date: "01/01/2021",Show: false },
    { id: crypto.randomUUID(), School: "Universidad Nacional General Sarmiento", Degree: "Licenciatura en Informática", Date: "01/02/2022", Show: false }
  ]);

  function onSchoolChange(e, id) {
    setSchool(school.map(singleSchool => 
      singleSchool.id === id ? { ...singleSchool, [e.target.name]: e.target.value } : singleSchool
    ));
  }
  
  function addSchool() {
    setSchool([...school, { id: crypto.randomUUID(), School: "", Degree: "", StartDate: "", EndDate: "", Location: "", Show: true }]);
  }
  
  
  function removeSchool(id) {
    setSchool(school.filter(singleSchool => singleSchool.id !== id));
  }
  
  console.log("after rendering",personelDetails);
  const handlePersonel=(e)=>{
    e.preventDefault();
    setPersonelDetails({
      name:e.target.name.value,
      email:e.target.email.value,
      number:e.target.phone.value
    })
  }
  return (
    <div className="content-container">
        <div className="left-content">
            <Modal>
              <div className="content-title">Personel Details</div>    
              <PersonelDeatails handlePersonel={handlePersonel}/>
            </Modal>
            <Modal>
                <div className="content-title">Eductional Experience</div>
                <EducationDetails/>
            </Modal>
            <Modal>
                <div className="content-title">Professional Experience</div>
                <ProfessionalDetails/>
            </Modal>
        </div>
        <div className="right-content">
           <Modal>
            <Preview/>
           </Modal>
        </div>
    </div>
  )
}

export default Content;