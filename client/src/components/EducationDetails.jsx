import {FaGraduationCap} from 'react-icons/fa'

import SectionalForm from "./SectionalForm";
function EducationDetails({onFormSubmit}) {
    const intialValues={
      'degree': '',
      'school': '',
      'start date': '',
      'end date': ''
    };
    const inputTypes = {
      'degree': 'text',
      'school': 'text',
      'start date': 'date',
      'end date': 'date'
    }
   return(
     <SectionalForm
     sectionTitle={<><FaGraduationCap className='form-icon'/>Educational Experience</>}
     initialValues={intialValues}
     inputTypes={inputTypes}  
     onFormSubmit={onFormSubmit} 
     />
   );
}

export default EducationDetails