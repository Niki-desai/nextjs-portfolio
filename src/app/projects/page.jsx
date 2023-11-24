"use client";

import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import projects from "./../../components/projects/data";
import Link from "next/link";

const page = () => {
  useEffect(() => {
    projects.map((project) => {
      console.log(project.projectName);
    });
  }, []);

  //   console.log("ProjectData", JSON.stringify(ProjectData));
  return (
    <>
      <div className="min-h-screen bg-fuchsia-200">
        <div className="items-center justify-center  mt-9 overflow-hidden">
          <div class="grid grid-cols-3 gap-7 rounded-lg  p-4">
            {/* <div className="relative h-somescreen flex items-center justify-center bg-fuchsia-200 mt-12 "> */}
            {/* <div className="grid grid-cols-3 gap-7 p-4 "> */}
            {projects &&
              projects.map((project) => (
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {project.projectName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.projectDescription}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link href={project.link}>
                      <Button size="small">Go to Project</Button>
                    </Link>
                    {/* <Button size="small">Learn More</Button> */}
                  </CardActions>
                </Card>
              ))}
            {/* </div> */}
            {/* </div>  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

//  {/* <div className="relative h-somescreen flex items-center justify-center bg-fuchsia-200 mt-12 ">
//         <div className="grid grid-cols-3 gap-7 p-4 ">
//           {projects &&
//             projects.map((project) => (
//               <Card sx={{ maxWidth: 345 }}>
//                 <CardMedia
//                   sx={{ height: 140 }}
//                   image="/static/images/cards/contemplative-reptile.jpg"
//                   title="green iguana"
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="div">
//                     {project.projectName}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {project.projectDescription}
//                   </Typography>
//                 </CardContent>
//                 <CardActions>
//                   <Button size="small">Share</Button>
//                   {/* <Button size="small">Learn More</Button> */}
//                 </CardActions>
//               </Card>
//             ))}
//         </div>
//       </div> */}
