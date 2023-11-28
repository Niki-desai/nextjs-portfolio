import React from "react";
import "./../../custom-styles.css";
import Astro from "./../../../public/images/Astro.svg";
import Image from "next/image";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const About = () => {
  const [value, setValue] = React.useState("2");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {/* <div className="h-somescreen flex items-center justify-center bg-fuchsia-200 mt-12"> */}
      <div>
        <div class="grid grid-cols-6 gap-4 h-full w-full   rounded-lg shadow-md p-4">
          <div class=" col-span-2">
            <Image
              src={Astro}
              alt="Astro Image"
              width={500}
              height={500}
              className="pt-48"
            />
          </div>
          <div class="col-span-4 ">
            <h1>About Me</h1>
            <div className="mx-10 mt-5">
              <Box sx={{ width: "100%", typography: "body1" }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                    >
                      <Tab label="Personal Info" value="1" />
                      <Tab label="Qualifications" value="2" />
                      <Tab label="Skills" value="3" />
                    </TabList>
                  </Box>
                  <TabPanel value="1">
                    <div>
                      <div> Im starter</div>
                      <div>objective</div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <p>Nikita Desai</p>
                          <p>nikita.d10.nd@gmail.com</p>
                          <p></p>
                        </div>
                        <div>
                          <p>+91 8866089171</p>
                          <p>DOB - 10 Mar, 1999</p>
                          <p>Nikol, Ahmedabad - 382350</p>
                        </div>
                      </div>
                      <div>
                        <p>Language Skill</p>
                        <p>English, Hindi, Gujarati</p>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel value="2">
                    <div>
                      <h1>My Awesome journey</h1>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <p>Experience:</p>
                          <p>JB Solutions</p>
                          <p>September2022-May2023</p>
                          <br />
                          <br />
                          <p>Saeculum Solutions</p>
                          <p>June2023-Present</p>
                        </div>
                        <div>
                          <p>Education</p>
                          <p>L.D. College of Engineering</p>
                          <p>Bachelor in Engg (Civil) : 2016-2020</p>
                          <p>Schooling</p>
                          <p>Army public School</p>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel value="3">
                    <div>
                      <h1> Tools I Use </h1>
                      <div>
                        <h1>Skills</h1>
                        <p>HTML, CSS</p>
                        <p>Javascript</p>
                        <p>Frontend Development-React js, Next js</p>
                        <p>Back-end Development - Node js</p>
                        <p>DBMS-Mongo DB, RDBMS-SQL/MySQL </p>
                      </div>
                      <div>Tools</div>
                      <div className="flex flex-row mx-20 justify-around">
                        <img
                          className="cursor-pointer"
                          width={20}
                          src={"/images/linkedin-in.svg"}
                          alt={"img"}
                        />
                        <img
                          className="cursor-pointer"
                          width={20}
                          src={"/images/linkedin-in.svg"}
                          alt="img"
                        />
                        <img
                          className="cursor-pointer"
                          width={20}
                          src={"/images/linkedin-in.svg"}
                          alt="img"
                        />
                        <img
                          className="cursor-pointer"
                          width={20}
                          src={"/images/linkedin-in.svg"}
                          alt="img"
                        />
                        <img
                          className="cursor-pointer"
                          width={20}
                          src={"/images/linkedin-in.svg"}
                          alt="img"
                        />
                        <img
                          className="cursor-pointer"
                          width={20}
                          src={"/images/linkedin-in.svg"}
                          alt="img"
                        />
                      </div>
                    </div>
                  </TabPanel>
                </TabContext>
              </Box>
            </div>
          </div>

          {/* <div class="bg-green-200 col-span-1">
            2<div></div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default About;
