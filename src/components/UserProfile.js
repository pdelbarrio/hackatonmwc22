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

  const avatar = "https://thispersondoesnotexist.com/image";

  return (
    <div className="profile">
      <div className="profile-avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="profile-email-fullname">
        <div className="profile-section">
          <span className="profile-title-email">Email</span>
          <div>{email}</div>
        </div>
        <div className="profile-section">
          <span className="profile-title">Fullname</span>
          <div>{fullname}</div>
        </div>
      </div>
      <div className="profile-description">
        <div className="profile-section">
          <span className="profile-title">Description</span>
          <div>{description}</div>
        </div>
      </div>
      <div className="profile-country-city">
        <div className="profile-section">
          <span className="profile-title-country">Country</span>
          <div>{country}</div>
        </div>
        <div className="profile-section">
          <span className="profile-title">City</span>
          <div>{city}</div>
        </div>
      </div>
      <div className="profile-experience-sector">
        <div className="profile-section">
          <span className="profile-title-experience">Experience</span>
          <div>{experience} years</div>
        </div>
        <div className="profile-section">
          <span className="profile-title">Sector</span>
          <div>{sector}</div>
        </div>
      </div>
      <div className="profile-skills">
        <span className="profile-title">Skills</span>
        <div className="profile-skills-border">
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

      <div className="footer">
        <button type="submit" onClick={props.prev}>
          Back
        </button>
      </div>
    </div>
  );
}
