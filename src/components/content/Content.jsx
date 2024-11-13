
import PersonelDeatails from "../PersonelDeatails";
import EducationDetails from "../EducationDetails";
import { useState } from "react";
import ProfessionalDetails from "../ProfessionalDetails";
import Preview from "../Preview";
import "../../styles/forms.css"
import "../../styles/content.css"
function Content(){
  const [personalDetails, setPersonalDetails] = useState({})
  const [educationalDetails, setEducationalDetails] = useState({})
  const [professionalDetails, setProfessionalDetails] = useState({})
  
  const handlePersonalDetailsChange = (formValues) => {
    setPersonalDetails({
      name: formValues['name'],
      email: formValues['email'],
      phone: formValues['phone'],
    })
  }

  const handleEducationalDetailsChange = (formValues) => {
    setEducationalDetails({
      degree: formValues['degree'],
      school: formValues['school'],
      startDate: formValues['start date'],
      endDate: formValues['end date'],
    })
  }


  const handleProfessionalDetailsChange = (formValues) => {
    setProfessionalDetails({
      jobTitle: formValues['job title'],
      company: formValues['company'],
      jobStartDate: formValues['start date'],
      jobEndDate: formValues['end date'],
      jobDescription: formValues['description']
    });
  }

  console.log("after rendering");

  return (
    <div className='app-container'>
    <div className="forms-section">
      <div className="forms-container">
        <PersonelDeatails onFormSubmit={handlePersonalDetailsChange}/>
        <EducationDetails onFormSubmit={handleEducationalDetailsChange}/>
        <ProfessionalDetails onFormSubmit={handleProfessionalDetailsChange}/>
      </div>
    </div>
    <Preview
      personalDetails={personalDetails}
      educationalDetails={educationalDetails}
      professionalDetails={professionalDetails}
    />
  </div>
  )
}

export default Content;