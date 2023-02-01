import React, { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Resume from "./Component/Resume";
import { Add } from "@material-ui/icons";
import { Remove } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

function App(props) {
  const nav = useNavigate()
  function handleClick(e) {
    e.preventDefault();
    nav('/resume');
  }
  const [data, setData] = useState({
    FirstName: "",
    FatherName: "",
    LastName: "",
    Contact: "",
    AlternateNumber: "",
    email: "",
    Address: "",
    DOB: "",
    Nationality: "",
    Gender: "",
    Language: "",
    MaritalStatus: "",
    Skills: "",
    Hobbies: "",
    Fresher: "",
    collegeName: "",
    UniversityName: "",
    PassingYear: "",
    CGPA: "",
    Edu: "",
    BoardName: "",
    School: "",
    PassingYearr: "",
    Percentage: "",
    Strengths: "",
    ComputerSkill: "",
    PrevCompany: "",
    Designation: "",
    JobProfile: "",
    EndMonthandYear: "",
    StartMonthandYear: "",
    JobLocation: "",
    SecondPrevCompany: "",
    SecondDesignation: "",
    SecondJobProfile: "",
    Second_StartMonthandYear: "",
    Second_EndMonthandYear: "",
    SecondJobLocation: "",
    ThirdPrevCompany: "",
    ThirdDesignation: "",
    ThirdJobProfile: "",
    Third_StartMonthandYear: "",
    Third_EndMonthandYear: "",
    ThirdJobLocation: "",
    clgName: "",
    UniversityNameForDiploma: "",
    PassingYearrDiploma: "",
    diplomaCGPA: "",
    TwelthBoardName: "",
    TwelthSchool: "",
    TwelthPassingYearr: "",
    TwelthPercentage: "",
  });

  // Storing Data to Local Storage

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  // Getting data from local Storage

  useEffect(() => {
    const Getdata = JSON.parse(localStorage.getItem('data'));
    if (Getdata) {
      setData(Getdata);
    }
  }, []);



  let name, value;
  const EventHandler = (event) => {
    // console.log(event);
    name = event.target.name;
    value = event.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };

  // What to Display when user is Fresher or not

  if (data.Fresher === "No") {
    document.getElementById("SelectedNo").style.display = "initial";
  } else if (data.Fresher === "yes") {
    document.getElementById("SelectedNo").style.display = "none";
  }

  //When user clicks on Add Another Job Detail

  let Clicked_On_AddAnother_JobDetail = () => {
    document.getElementById("SecondExp").style.display = "initial";
    document.getElementById("Add_Another_Job").style.display = "none";
    document.getElementById("ClickedRemove").style.display = "initial";

  };

  //When user clicks on Add Another Job Detail Second time
  let Clicked_On_AddAnother_JobDetail_SecondTime = () => {
    document.getElementById("ThirdExp").style.display = "initial";
    document.getElementById("Add_sAnother_Job").style.display = "none";
    document.getElementById("ClickedRemoveSecondTime").style.display = "initial"

  }
  // When User Clicks on remove

  let ClickOnRemove = () => {
    document.getElementById("ClickedRemove").style.display = "none";
    document.getElementById("Add_Another_Job").style.display = "initial";
    document.getElementById("SecondExp").style.display = "none";

  };

  // When user Clicks on remove Second Time
  let ClickOnRemoveSecondTime = () => {
    document.getElementById("ThirdExp").style.display = "none";
    document.getElementById("Add_sAnother_Job").style.display = "initial";
    document.getElementById("ClickedRemoveSecondTime").style.display = "none"

  }

  // WHat to Display when User Choose his/her Education

  if (data.Edu === "Diploma") {
    document.getElementById("AfterDiploma").style.display = "initial";
    document.getElementById("Twelth").style.display = "none";
  } else if (data.Edu === "Twelth") {
    document.getElementById("AfterDiploma").style.display = "none";
    document.getElementById("Twelth").style.display = "initial";
  } else if (data.Edu === "Tenth") {
    document.getElementById("AfterDiploma").style.display = "none";
    document.getElementById("Twelth").style.display = "none";
  }
  return (
    <>
      <div className="text-sm mx-16">
        {/* Start of First Section */}

        <div className="FirstSection">
          <div className="heading text-center pt-4 font-normal m-0 bg-none leading-6 font-serif text-3xl text-[#777777] MainDiv">
            Make Your CV now
          </div>

          <div className="main-Form-Resume flex justify-around my-10 py-2">
            <div className=" firstName">
              <h3 className="py-2 heading">Enter your First Name </h3>
              <input
                onChange={EventHandler}
                type="text"
                value={data.FirstName}
                name="FirstName"
                placeholder="Enter Your Name"
                className="FirstName"
              />
            </div>
            <div className=" Father Name">
              <h3 className="py-2 heading">Enter your Father's Name </h3>
              <input
                onChange={EventHandler}
                type="text"
                value={data.FatherName}
                name="FatherName"
                placeholder="Enter Your Name"
                className="FirstName"
              />
            </div>
            <div className="firstName">
              <h3 className="py-2 heading">Enter your Last Name </h3>
              <input
                onChange={EventHandler}
                type="text"
                value={data.LastName}
                name="LastName"
                placeholder="Enter Your Name"
                className="FirstName"
              />
            </div>
          </div>

          <div className="main-Form-Resume flex justify-around my-10 py-2">
            <div className="Contact">
              <h3 className="py-2 heading">Contact Number </h3>
              <input
                onChange={EventHandler}
                type="number"
                value={data.Contact}
                name="Contact"
                placeholder="Enter Your Number"
                className="FirstName"
              />
            </div>
            <div className="Alternate Name">
              <h3 className="py-2 heading">Enter Your Alternate Number </h3>
              <input
                onChange={EventHandler}
                value={data.AlternateNumber}
                type="number"
                name="AlternateNumber"
                placeholder="Enter Your Name"
                className="FirstName"
              />
            </div>
            <div className="firstName">
              <h3 className="py-2 heading">Enter your E-mail</h3>
              <input
                onChange={EventHandler}
                value={data.email}
                type="email"
                name="email"
                placeholder="Your@Name.com"
                className="FirstName"
              />
            </div>
          </div>
          <div className="adress my-10 py-2 ml-12">
            <h3 className="py-2 heading">Enter your Address </h3>
            <input
              onChange={EventHandler}
              value={data.Address}
              name="Address"
              type="text"
              placeholder="Enter Your Address"
              className="FirstName InputAddress"
            />
          </div>
        </div>

        {/* End of First Section */}

        {/* Start of Second Section / Personal Detail */}

        <div className="personalDetail">
          <div className="heading text-center pt-4 font-normal m-0 bg-none leading-6 font-serif text-3xl text-[#777777]">
            Personal Detail
          </div>
          <div className="main-Form-Resume flex justify-around my-10 py-2">
            <div className=" firstName">
              <h3 className="py-2 heading">Enter your Date of Birth </h3>
              <input
                onChange={EventHandler}
                value={data.DOB}
                type="date"
                name="DOB"
                placeholder="Enter Your Name"
                className="FirstName"
              />
            </div>
            <div className=" firstName">
              <h3 className="py-2 heading">Nationality </h3>
              <input
                onChange={EventHandler}
                value={data.Nationality}
                type="text"
                name="Nationality"
                placeholder="Nationality"
                className="FirstName"
              />
            </div>
            <div className=" firstName">
              <h3 className="py-2 heading">Gender </h3>
              <select
                name="Gender"
                id="Gender"
                className="FirstName"
                value={data.Gender}
                onChange={EventHandler}
              >
                <option value="">Your Gender </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="SemiPersonal flex justify-around my-10 py-2 ">
            <div className=" firstName ">
              <h3 className="py-2 heading">Language Known </h3>
              <input
                onChange={EventHandler}
                value={data.Language}
                type="text"
                name="Language"
                placeholder="English/Hindi"
                className="FirstName"
              />
            </div>
            <div className=" firstName">
              <h3 className="py-2 heading">Marital Status </h3>
              <select
                name="MaritalStatus"
                id="GeMarital Statusnder"
                className="FirstName"
                value={data.MaritalStatus}
                onChange={EventHandler}
              >
                <option value="" selected>
                  MaritalStatus
                </option>
                <option value="Married">Married</option>
                <option value="Widowed">Widowed</option>
                <option value="Separated">Separated</option>
                <option value="Divorced">Divorced</option>
                <option value="Single">Single</option>
              </select>
            </div>
            <div className=" firstName ">
              <h3 className="py-2 heading">Skills </h3>
              <input
                onChange={EventHandler}
                value={data.Skills}
                type="text"
                name="Skills"
                placeholder="Skills"
                className="FirstName"
              />
            </div>
          </div>

          {/* Skills */}

          {/* <div className="SemiPersonal flex justify-evenly  my-10 py-2"> */}
          {/* <div className=" firstName ">
              <h3 className="py-2 heading">Skills </h3>
              <input
                onChange={EventHandler}
                value={data.Skills}
                type="text"
                name="Skills"
                placeholder="Skills"
                className="FirstName"
              />
            </div> */}

          {/* <div className=" firstName ">
              <h3 className="py-2 heading">Hobbies </h3>
              <input
                onChange={EventHandler}
                value={data.Hobbies}
                type="text"
                name="Hobbies"
                placeholder="Hobbies"
                className="FirstName"
              />
            </div> */}
          {/* </div> */}
          <div className=" firstName flex justify-center my-10 py-2">
            <div className="FresheerClass">
              <div className="Hobbiesss" id="Fresher">
                <h3 className="py-2 heading">Hobbies </h3>
                <input
                  onChange={EventHandler}
                  value={data.Hobbies}
                  type="text"
                  name="Hobbies"
                  placeholder="Hobbies"
                  className="FirstName Hobbies"
                />
              </div>

              <div className="Hobbies" id="Fresher">
                <h3 className="py-2 heading">Are you a Fresher </h3>
                <select
                  name="Fresher"
                  id="Fresher"
                  className="FirstName"
                  value={data.Fresher}
                  onChange={EventHandler}
                >
                  <option value selected>
                    Are you a Fresher?
                  </option>
                  <option value="yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>


              {/* Show Only when user Selects No */}

              {/* First Experiance */}

              <div
                id="SelectedNo"
                style={{ display: "none" }}
              >
                <div className="selectedNo">
                  <div className="firstTwo flex my-10 py-2 justify-between">
                    <div>
                      <h3 className="py-2 Experiance">
                        Enter Previous Company Name{" "}
                      </h3>
                      <input
                        onChange={EventHandler}
                        value={data.PrevCompany}
                        type="text"
                        name="PrevCompany"
                        placeholder="Previous Company"
                        className="FirstName ExpInput"
                      />
                    </div>
                    <div>
                      <h3 className="py-2 Experiance">City/Town </h3>
                      <input
                        onChange={EventHandler}
                        value={data.Designation}
                        type="text"
                        name="Designation"
                        placeholder="e.g : San Fr, CA"
                        className="FirstName ExpInput"
                      />
                    </div>
                  </div>

                  <div className="jobs flex justify-between">
                    <div>
                      <h3 className="py-2 Experiance">Job Profile </h3>
                      <input
                        onChange={EventHandler}
                        value={data.JobProfile}
                        type="text"
                        name="JobProfile"
                        placeholder="Enter Previous Company Profile"
                        className="FirstName ExpInput"
                      />
                    </div>
                    <div>
                      <h3 className="py-2 Experiance">Start Month and year </h3>
                      <input
                        onChange={EventHandler}
                        value={data.StartMonthandYear}
                        type="date"
                        name="StartMonthandYear"
                        placeholder="Skills"
                        className="FirstName ExpInput"
                      />
                    </div>
                    <div>
                      <h3 className="py-2 Experiance">End Month and year </h3>
                      <input
                        onChange={EventHandler}
                        value={data.EndMonthandYear}
                        type="date"
                        name="EndMonthandYear"
                        placeholder="Skills"
                        className="FirstName ExpInput"
                      />
                    </div>
                  </div>
                  <div className="PrevJobLoc firstName my-10 py-2 ">
                    <h3 className="py-2 Experiance">Job Location </h3>
                    <input
                      onChange={EventHandler}
                      value={data.JobLocation}
                      type="text"
                      name="JobLocation"
                      placeholder="State"
                      className="FirstName ExpInput"
                    />
                  </div>
                  <div className="AddExperiacne text-end">
                    <h3
                      className="py-2 Experiance cursor-pointer"
                      id="Add_Another_Job"
                      onClick={Clicked_On_AddAnother_JobDetail}
                    >
                      <span> <Add /> </span>  Add another Job Details
                    </h3>
                  </div>
                  <div className="AddExperiacne text-end">
                    <h3
                      className="py-2 Experiance cursor-pointer"
                      id="ClickedRemove"
                      style={{ display: "none" }}
                      onClick={ClickOnRemove}
                    >
                      <span> <Remove /> </span>  Remove
                    </h3>
                  </div>

                  {/* Second Experiance */}

                  <div id="SecondExp" style={{ display: "none" }}>
                    <div className="selectedNo">
                      <div className="firstTwo flex my-10 py-2 justify-between">
                        <div>
                          <h3 className="py-2 Experiance">
                            Enter Previous Company Name{" "}
                          </h3>
                          <input
                            onChange={EventHandler}
                            value={data.SecondPrevCompany}
                            type="text"
                            name="SecondPrevCompany"
                            placeholder="Previous Company"
                            className="FirstName ExpInput"
                          />
                        </div>
                        <div>
                          <h3 className="py-2 Experiance">City/Town </h3>
                          <input
                            onChange={EventHandler}
                            value={data.SecondDesignation}
                            type="text"
                            name="SecondDesignation"
                            placeholder="e.g : San Fr, CA"
                            className="FirstName ExpInput"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="jobs flex justify-between">
                      <div>
                        <h3 className="py-2 Experiance">Job Profile </h3>
                        <input
                          onChange={EventHandler}
                          value={data.SecondJobProfile}
                          type="text"
                          name="SecondJobProfile"
                          placeholder="Enter Previous Company Profile"
                          className="FirstName ExpInput"
                        />
                      </div>
                      <div>
                        <h3 className="py-2 Experiance">Start Month and year </h3>
                        <input
                          onChange={EventHandler}
                          value={data.Second_StartMonthandYear}
                          type="date"
                          name="Second_StartMonthandYear"
                          placeholder="Skills"
                          className="FirstName ExpInput"
                        />
                      </div>
                      <div>
                        <h3 className="py-2 Experiance">End Month and year </h3>
                        <input
                          onChange={EventHandler}
                          value={data.Second_EndMonthandYear}
                          type="date"
                          name="Second_EndMonthandYear"
                          placeholder="Skills"
                          className="FirstName ExpInput"
                        />
                      </div>
                    </div>
                    <div className="PrevJobLoc firstName my-10 py-2">
                      <h3 className="py-2 Experiance">Job Location </h3>
                      <input
                        onChange={EventHandler}
                        value={data.SecondJobLocation}
                        type="text"
                        name="SecondJobLocation"
                        placeholder="Your Job Location"
                        className="FirstName ExpInput"
                      />
                    </div>
                    <div className="AddExperiacne text-end">
                      <h3
                        className="py-2 Experiance cursor-pointer"
                        id="Add_sAnother_Job"
                        onClick={Clicked_On_AddAnother_JobDetail_SecondTime}
                      >
                        <span> <Add /> </span>  Add another Job Details
                      </h3>
                    </div>
                    <div className="AddExperiacne text-end">
                      <h3
                        className="py-2 Experiance cursor-pointer"
                        id="ClickedRemoveSecondTime"
                        style={{ display: "none" }}
                        onClick={ClickOnRemoveSecondTime}
                      >
                        <span> <Remove /> </span>  Remove
                      </h3>
                    </div>
                  </div>

                  {/* Third Experiance */}

                  <div id="ThirdExp" style={{ display: "none" }}>
                    <div className="selectedNo">
                      <div className="firstTwo flex my-10 py-2 justify-between">
                        <div>
                          <h3 className="py-2 Experiance">
                            Enter Previous Company Name{" "}
                          </h3>
                          <input
                            onChange={EventHandler}
                            value={data.ThirdPrevCompany}
                            type="text"
                            name="ThirdPrevCompany"
                            placeholder="Previous Company"
                            className="FirstName ExpInput"
                          />
                        </div>
                        <div>
                          <h3 className="py-2 Experiance">City/Town </h3>
                          <input
                            onChange={EventHandler}
                            value={data.ThirdDesignation}
                            type="text"
                            name="ThirdDesignation"
                            placeholder="e.g : San Fr, CA"
                            className="FirstName ExpInput"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="jobs flex justify-between">
                      <div>
                        <h3 className="py-2 Experiance">Job Profile </h3>
                        <input
                          onChange={EventHandler}
                          value={data.ThirdJobProfile}
                          type="text"
                          name="ThirdJobProfile"
                          placeholder="Enter Previous Company Profile"
                          className="FirstName ExpInput"
                        />
                      </div>
                      <div>
                        <h3 className="py-2 Experiance">Start Month and year </h3>
                        <input
                          onChange={EventHandler}
                          value={data.Third_StartMonthandYear}
                          type="date"
                          name="Third_StartMonthandYear"
                          placeholder="Skills"
                          className="FirstName ExpInput"
                        />
                      </div>
                      <div>
                        <h3 className="py-2 Experiance">End Month and year </h3>
                        <input
                          onChange={EventHandler}
                          value={data.Third_EndMonthandYear}
                          type="date"
                          name="Third_EndMonthandYear"
                          placeholder="Skills"
                          className="FirstName ExpInput"
                        />
                      </div>
                    </div>
                    <div className="PrevJobLoc firstName my-10 py-2">
                      <h3 className="py-2 Experiance">Job Location </h3>
                      <input
                        onChange={EventHandler}
                        value={data.ThirdJobLocation}
                        type="text"
                        name="ThirdJobLocation"
                        placeholder="Your Job Location"
                        className="FirstName ExpInput"
                      />
                    </div>
                  </div>
                </div>
                {/* End of third experiance */}
              </div>
            </div>
          </div>
        </div>
        {/* End of Second Section */}

        {/* Start of third Section / Education Detail */}

        <div className="ThirdEduDetail">
          <div className="heading text-center pt-4 font-normal m-0 bg-none leading-6 font-serif text-3xl text-[#777777]">
            Education Detail
          </div>
          <div className="firstName EducationDetails flex justify-evenly my-10 py-2">
            <div className=" firstName ml-4 ">
              <h3 className="py-2 heading">College Name(For Degree) </h3>
              <input
                onChange={EventHandler}
                value={data.collegeName}
                type="text"
                name="collegeName"
                placeholder="College Name"
                className="FirstName"
              />
            </div>
            <div className=" firstName ml-4 ">
              <h3 className="py-2 heading">University Name(For Degree) </h3>
              <input
                onChange={EventHandler}
                value={data.UniversityName}
                type="text"
                name="UniversityName"
                placeholder="University Name"
                className="FirstName"
              />
            </div>
            <div className=" firstName ml-4 ">
              <h3 className="py-2 heading">Passing Year </h3>
              <input
                onChange={EventHandler}
                value={data.PassingYear}
                type="text"
                name="PassingYear"
                placeholder="Passing Year"
                className="FirstName"
              />
            </div>
            <div className=" firstName ml-4 ">
              <h3 className="py-2 heading">CGPA </h3>
              <input
                onChange={EventHandler}
                value={data.CGPA}
                type="text"
                name="CGPA"
                placeholder="CGPA"
                className="FirstName"
              />
            </div>
          </div>
          {/* className="Hobbies" id="Fresher" */}
          <div className="Educationnn ">
            <h3 className="py-2 heading">After tenth? </h3>
            <select
              name="Edu"
              id="Edu"
              className="FirstName py-2"
              value={data.Edu}
              onChange={EventHandler}
            >
              <option value="Tenth" selected>
                After 10th?
              </option>
              <option value="Diploma">Diploma</option>
              <option value="Twelth">Twelth</option>
            </select>
          </div>

          {/* After diploma */}

          <div
            className="mainDiploma"
            id="AfterDiploma"
            style={{ display: "none" }}
          >
            <div className="firstName AfterDiplomaa flex justify-evenly my-10 py-2">
              <div className=" firstName ml-4 ">
                <h3 className="py-2 heading">College Name(For Diploma) </h3>
                <input
                  onChange={EventHandler}
                  value={data.clgName}
                  type="text"
                  name="clgName"
                  placeholder=" Board Name"
                  className="FirstName py-2"
                />
              </div>
              <div className=" firstName ml-4 ">
                <h3 className="py-2 heading">University Name(For Diploma)</h3>
                <input
                  onChange={EventHandler}
                  value={data.UniversityNameForDiploma}
                  type="text"
                  name="UniversityNameForDiploma"
                  placeholder="University Name"
                  className="FirstName py-2"
                />
              </div>
              <div className=" firstName ml-4 ">
                <h3 className="py-2 heading">Passing Year </h3>
                <input
                  onChange={EventHandler}
                  value={data.PassingYearrDiploma}
                  type="text"
                  name="PassingYearrDiploma"
                  placeholder="Passing Year"
                  className="FirstName py-2"
                />
              </div>
              <div className=" firstName ml-4  ">
                <h3 className="py-2 heading">CGPA </h3>
                <input
                  onChange={EventHandler}
                  value={data.diplomaCGPA}
                  type="text"
                  name="diplomaCGPA"
                  placeholder="CGPA"
                  className="FirstName py-2"
                />
              </div>
            </div>
          </div>

          {/*After Twelth  */}

          <div className="AfterTwelth" id="Twelth" style={{ display: "none" }}>
            <div className="firstName AfterTwelthR flex justify-evenly my-10 py-2">
              <div className=" firstName ml-4 ">
                <h3 className="py-2 heading">12th Education Board Name </h3>
                <input
                  onChange={EventHandler}
                  value={data.TwelthBoardName}
                  type="text"
                  name="TwelthBoardName"
                  placeholder=" Board Name"
                  className="FirstName"
                />
              </div>
              <div className=" firstName ml-4 ">
                <h3 className="py-2 heading">School Name</h3>
                <input
                  onChange={EventHandler}
                  value={data.TwelthSchool}
                  type="text"
                  name="TwelthSchool"
                  placeholder="School Name"
                  className="FirstName"
                />
              </div>
              <div className=" firstName ml-4 ">
                <h3 className="py-2 heading">Passing Year </h3>
                <input
                  onChange={EventHandler}
                  value={data.TwelthPassingYearr}
                  type="text"
                  name="TwelthPassingYearr"
                  placeholder="Passing Year"
                  className="FirstName"
                />
              </div>
              <div className=" firstName ml-4 ">
                <h3 className="py-2 heading">Percentage </h3>
                <input
                  onChange={EventHandler}
                  value={data.TwelthPercentage}
                  type="text"
                  name="TwelthPercentage"
                  placeholder="
                Percentage"
                  className="FirstName"
                />
              </div>
            </div>
          </div>

          {/* After 10th */}

          <div
            className="firstName flex justify-evenly my-10 py-2"
            id="AfterTenth"
          >
            <div className=" firstName ml-4 ">
              <h3 className="py-2 heading">10th Education Board Name </h3>
              <input
                onChange={EventHandler}
                value={data.BoardName}
                type="text"
                name="BoardName"
                placeholder=" Board Name"
                className="FirstName"
              />
            </div>
            <div className=" firstName ml-4 ">
              <h3 className="py-2 heading">School Name</h3>
              <input
                onChange={EventHandler}
                value={data.School}
                type="text"
                name="School"
                placeholder="School Name"
                className="FirstName"
              />
            </div>
            <div className=" firstName ml-4 ">
              <h3 className="py-2 heading">Passing Year </h3>
              <input
                onChange={EventHandler}
                value={data.PassingYearr}
                type="text"
                name="PassingYearr"
                placeholder="Passing Year"
                className="FirstName"
              />
            </div>
            <div className=" firstName ml-4 ">
              <h3 className="py-2 heading">Percentage - 10 </h3>
              <input
                onChange={EventHandler}
                value={data.Percentage}
                type="text"
                name="Percentage"
                placeholder="
                Percentage"
                className="FirstName"
              />
            </div>
          </div>
        </div>

        {/* End of third Section / Education Detail */}
      </div>
      <div className="btn text-center">
        <button onClick={(e) => { handleClick(e) }} className="Submit font-serif text-sm bg-[#337ab7] text-white px-10 py-2 text-center font-normal rounded-md">
          Get Resume
        </button>
      </div>
      <div className="Resume" style={{ display: "none" }}>
        <Resume
          fName={data.FirstName}
          fatherName={data.FatherName}
          lName={data.LastName}
          email={data.email}
          phoneNumber={data.Contact}
          AlternateNumber={data.AlternateNumber}
          Address={data.Address}
          CompanyName={data.PrevCompany}
          JobAddress={data.Designation}
          StartMonth={data.StartMonthandYear}
          EndMonth={data.EndMonthandYear}
          Title={data.JobProfile}
          location={data.JobLocation}
          SecondCompanyName={data.SecondPrevCompany}
          SecondJobAddress={data.SecondDesignation}
          SecondStartDate={data.Second_StartMonthandYear}
          SecondEndDate={data.Second_EndMonthandYear}
          SecondTitle={data.SecondJobProfile}
          SecondLocation={data.SecondJobLocation}
          ThirdPrevCompany={data.ThirdPrevCompany}
          ThirdDesignation={data.ThirdDesignation}
          Third_StartMonthandYear={data.Third_StartMonthandYear}
          Third_EndMonthandYear={data.Third_EndMonthandYear}
          ThirdJobProfile={data.ThirdJobProfile}
          ThirdJobLocation={data.ThirdJobLocation}
          collegeName={data.collegeName}
          clgDate={data.PassingYear}
          clgCGPA={data.CGPA}
          UniversityName={data.UniversityName}
          After10Board={data.BoardName}
          SchoolName={data.School}
          SchoolPassingYear={data.PassingYearr}
          tenthPercentage={data.Percentage}
          DiplomacollegeName={data.clgName}
          DiplomaUniversityName={data.UniversityNameForDiploma}
          DiplomaclgDate={data.PassingYearrDiploma}
          DiplomaclgCGPA={data.diplomaCGPA}
          TwelthBoard={data.TwelthBoardName}
          TwelthSchoolName={data.TwelthSchool}
          TwelthtenthPercentage={data.TwelthPercentage}
          TwelthSchoolPassingYear={data.TwelthPassingYearr}
          DOB={data.DOB}
          Nationality={data.Nationality}
          Gender={data.Gender}
          Language={data.Language}
          MaritialStatus={data.MaritalStatus}
          Skills={data.Skills}
          Hobbies={data.Hobbies}
        />
      </div>
    </>
  );
}

export default App;
