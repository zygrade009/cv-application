import { useState } from "react";

function ProfessionalDetails({ handleClick }) {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [isActive, setActive] = useState(0);

  return (
    (isActive) ? (
      <div className="form-container">
        <form method="post" className="form-container" onSubmit={handleClick}>
          <label htmlFor="job-title">Job Title</label>
          <input
            type="text"
            id="job-title"
            value={position}
            onChange={(e) => {
              setPosition(e.target.value);
            }}
          />
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={(e) => {
              setCompany(e.target.value);
            }}
          />
          <label htmlFor="start-date">Start date</label>
          <input
            type="date"
            id="startdate"
            value={startDate}
            onChange={(e) => {
              setStartDate(e.target.value);
            }}
          />
          <label htmlFor="end-date">End date</label>
          <input
            type="date"
            id="enddate"
            value={endDate}
            onChange={(e) => {
              setEndDate(e.target.value);
            }}
          />
          <label htmlFor="description">Description</label>
          <textarea
            id="textarea"
            rows={10}
            cols={20}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
          <button type="submit" className="save">Save</button>
        </form>
        <button className="cancel" onClick={()=>setActive(0)}>cancel</button>
        <button className="add">Add</button>
      </div>
    ) : <div>
        <button onClick={()=>setActive(1)}>Show me</button>
    </div>
  );
}

export default ProfessionalDetails;