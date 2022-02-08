import React, {useState} from 'react';
import PersonalInfo from './PersonalInfo';
import ProfessionalInfo from './ProfessionalInfo';
import UserProfile from './UserProfile';

export default function Form() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    email: "",
    fullname: "",
    description: "",
    country: "",
    // state: "",
    city: "",
    experience: "",
    sector: "",
    skills:""

  });

  const FormTitles = ["Personal Info", "Professional Info", "User Profile"]


const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData}));
    
    // if (final){
    //     submitData(newData)
    // }
    
    setStep((prev) => prev + 1);
}

const handlePrevStep = (newData) => {
    setData((prev) => ({...prev, ...newData}));
    setStep((prev) => prev - 1);
}

const PageDisplay = [
  <PersonalInfo next={handleNextStep} data={data} />,
  <ProfessionalInfo next={handleNextStep} prev={handlePrevStep} data={data}/>,
  <UserProfile prev={handlePrevStep} data={data} />
];


  return (
  <div className='form'>
    <div className='progress'>
        <div style={{width: step === 0 ? "50%" : "100%"}}></div>
    </div>
    <div className='form-container'>
        <div className='header'>
            <h1>{FormTitles[step]}</h1>
        </div>
        <div className='body'>{PageDisplay[step]}</div>
        <div className='footer'>
            {/* <button disabled={step == 0}
                onClick={() =>{
                    setStep((currStep) => currStep -1);
                }}>Prev</button>
            <button onClick={() =>{
                if (step === 1){
                    alert("FORM SUBMITED");
                    console.log(formData)
                }else{
                    setStep((currStep) => currStep + 1);
                }
            }}
            >
                {step === 1 ? "Submit" : "Next"}
            </button> */}
        </div>
    </div>
  </div>);
}
