import React from "react";

export default function UserProfile(props) {
  const {
    email,
    fullname,
    description,
    country,
    city,
    experience,
    sector,
    skills,
  } = props.data;

  let r = (Math.random() + 1).toString(36).substring(7);
  const avatar = "https://thispersondoesnotexist.com/image";
  // const avatar = `https://eu.ui-avatars.com/api/?name=${fullname}`;
  // const avatar = `https://robohash.org/${r}`;

  return (
    <div className="profile">
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>

      <div className="profile-main">
        <div className="profile-section">
          <span className="profile-title">Email</span>
          <div>{email}</div>
        </div>
        <div className="profile-section">
          <span className="profile-title">Fullname</span>
          <div>{fullname}</div>
        </div>
        <div className="profile-section">
          <span className="profile-title">Description</span>
          <div>{description}</div>
        </div>
        <div className="profile-section">
          <span className="profile-title">Country</span>
          <div>{country}</div>
        </div>
        <div className="profile-section">
          <span className="profile-title">City</span>
          <div>{city}</div>
        </div>
        <div className="profile-section">
          <span className="profile-title">Experience</span>
          <div>{experience} years</div>
        </div>
        <div className="profile-section">
          <span className="profile-title">Sector</span>
          <div>{sector}</div>
        </div>
        <div>
          <span className="profile-title">Skills</span>
          <div className="profile-skills">
            <ul className="tags-profile">
              {skills.map((skill, i) => {
                return (
                  <li className="tag-list" key={i}>
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer">
        <button type="submit" onClick={props.prev}>
          Back
        </button>
      </div>
    </div>
  );
}
