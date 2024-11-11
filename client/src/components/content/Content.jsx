import "./content.css";
import Modal from "../modal/Modal"
import Preview from "../preview/Preview";
// import { useState } from "react";
function Content() {
  // const [personelDetails,setPersonelDetails]=useState({});
  return (
    <div className="content-container">
        <div className="left-content">
            <Modal>
             
            </Modal>
            <Modal>
              <div className="content-title">Eductional Experience</div>
              <label htmlFor="school">School Name</label>
              <input type="text" htmlFor="school"/> 
              <label htmlFor="title">title of study</label>
              <input type="text" htmlFor="title"/>
              <label htmlFor="dateof">Date of Study</label>
              <input type="date" name="" id="" />
            </Modal>
            <Modal>
                <div className="content-title">Professional Experience</div>
                <label htmlFor="job-title">Job Title</label>
                <input type="text" htmlFor="job-title"/>
                <label htmlFor="compony">Compony</label>
                <input type="text" htmlFor="compony"/>
                <label htmlFor="start-date">Start date</label>
                <input type="date" name="" id="startdate" />
                <label htmlFor="end-date">End date</label>
                <input type="date" htmlFor="end-date" id="enddate" />
                <label htmlFor="description">Description</label>
                <textarea htmlFor="description" name="" id="textarea"></textarea>
            </Modal>
        </div>
        <div className="right-content">
           <Modal>
            <Preview/>
           </Modal>
        </div>
    </div>
  )
}

export default Content;