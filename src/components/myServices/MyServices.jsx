import React from "react";
import "./../../custom-styles.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const MyServices = () => {
  return (
    <>
      <div className="h-somescreen flex  justify-center items-center  bg-fuchsia-200 mt-12 ">
        <div>
          <div className="flex flex-col items-center mb-20 text-4xl font-bold">
            {" "}
            My Services
          </div>
          <div className="flex  justify-evenly ">
            <div>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  {/* <CardMedia
                  component="img"
                  height="10"
                  width="10"
                  image="/images/Rocketship.png"
                  alt="green iguana"
                  className="bg-black"
                /> */}
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Front-end Development...
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      frontend development using React.js and Next.js, creating
                      dynamic applications with proficiency in Redux and Hooks
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            <div className="mx-2">
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  {/* <CardMedia
                  component="img"
                  height="10"
                  width="10"
                  image="/images/Rocketship.png"
                  alt="green iguana"
                  className="bg-black"
                /> */}
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Back-end Development
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Backend development utilizing frameworks like Node.js and
                      Express.js, crafting robust APIs and scalable systems,
                      adept in database management and optimization.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            {/* <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
             
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Back-end Development
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyServices;
