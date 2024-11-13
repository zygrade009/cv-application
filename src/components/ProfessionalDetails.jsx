import SectionalForm from "./SectionalForm";
import { FaBriefcase } from 'react-icons/fa';

function ProfessionalDetails({ onFormSubmit }) {

  const initialValues = {
    'job title': '',
    'company': '',
    'start date': '',
    'end date': '',
    'description':''
  };
  const inputTypes = {
    'job title': 'text',
    'company': 'text',
    'start date': 'date',
    'end date': 'date',
    'description':'text'
  } 
  return (
    <SectionalForm 
    sectionTitle={<><FaBriefcase className='form-icon' />Professional Experience</>}

            initialValues={initialValues}
            inputTypes={inputTypes}  
            onFormSubmit={onFormSubmit} 
        />
      );
}

export default ProfessionalDetails;