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
    skills: [],
    avatar: ""

  });

  const FormTitles = ["Personal Info", "Professional Info", "User Profile"];


const handleNextStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData}));    
    setStep((prev) => prev + 1);
}

const handleFinalStep = () => {    
    setStep(2);    
}

const handlePrevStep = (newData) => {
    setData((prev) => ({...prev, ...newData}));
    setStep((prev) => prev - 1);
}

const handlePrevLastStep = () =>{
    setStep(1);
}

const PageDisplay = [
  <PersonalInfo next={handleNextStep} data={data} />,
  <ProfessionalInfo next={handleFinalStep} prev={handlePrevStep} setData={setData} data={data}/>,
  <UserProfile prev={handlePrevLastStep} data={data} />
];


  return (
  <div className='form'>
    <div className='progress'>
        <div style={{width: step === 0 ? "33%" : step === 1 ? "66%" : "100%"}}></div>
    </div>
    <div className='form-container'>
        <div className='header'>
            <h1>{FormTitles[step]}</h1>
        </div>
        <div className='body'>{PageDisplay[step]}</div>      
    </div>
  </div>);
}
