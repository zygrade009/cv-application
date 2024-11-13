import SectionalForm from "./SectionalForm";
import { FaUser } from 'react-icons/fa';

function PersonelDeatails({onFormSubmit}) {
     const initialValues={
        'name' : "John",
        'email': "johndoe1234@gmail.com",
        'phone' : 9759300999,
     };

     const inputTypes={
         'name' : "text",
         'email' : "email",
         'phone' : "tel",
     }
     
     return (
        <SectionalForm
        sectionTitle={<><FaUser className='form-icon'/> Personal Details</>}
             initialValues={initialValues}
             inputTypes={inputTypes}
             onFormSubmit={onFormSubmit}
             startEditing={true}// so the first time rendering the page the form will be displayed for personal details section
        />
     );

}

export default PersonelDeatails;