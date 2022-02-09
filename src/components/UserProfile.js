import React from 'react';

export default function UserProfile(props) {
 
  const { email, fullname, description, country, city, experience, sector, skills } = props.data;
 
  // const avatar = "https://thispersondoesnotexist.com/image";
  // const avatar = `https://eu.ui-avatars.com/api/?name=${fullname}`;
  const avatar = "https://robohash.org/whatever";

  return (
  <div className='form'>
      <div className='avatar'>
        <img src={avatar} alt="" />
      </div>
      <div>
        <span>Email:</span> {email}
      </div>
      <div>
      <span>Fullname:</span> {fullname}
      </div>
      <div>
      <span>Description:</span> {description}
      </div>
      <div>
      <span>Country:</span> {country}
      </div>
      <div>
      <span>City:</span> {city}
      </div>
      <div>
      <span>Experience:</span> {experience}
      </div>
      <div>
      <span>Sector:</span> {sector}
      </div>
      <div>
      <span>Skills:</span> {skills}
      </div>


      <div className='footer'>
        <button type="submit" onClick={props.prev}>Back</button>
    </div>
    
  </div>);
}
