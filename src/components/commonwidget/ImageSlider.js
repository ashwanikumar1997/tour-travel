import { ImageApiUrl } from "../../functions/constants/apiConstants";
import * as React from "react";
import { MobileStepper, Button, Box, useTheme } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function ImageSlider({ tourImages, button=false }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tourImages.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tourImages.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  width: "100%",
                  height: "50%",
                  display: "flex",
                  overflow: "hidden",
                  objectFit: "cover",
                }}
                src={`${ImageApiUrl}${step.filename}`}
                alt={step.filename}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      {button ? (
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? "<" : ">"}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? ">" : "<"}
              Back
            </Button>
          }
        />
      ) : null}
    </Box>
  );
}

export default ImageSlider;
