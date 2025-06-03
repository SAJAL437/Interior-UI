import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import Bhk from "./Bhk";
import BHKsType from "./BHKsType";
import RoomDesign from "./RoomDesign";
import Package from "./Package";
import Quotes from "./Quotes";

const steps = ["BHKs", "Room To Design", "Package", "GetQuote"];

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();

  const querySearch = new URLSearchParams(location.search);
  const stepFromQuery = parseInt(querySearch.get("step")) || 0;

  const [activeStep, setActiveStep] = React.useState(stepFromQuery);

  // Sync state to URL on step change
  React.useEffect(() => {
    navigate(`?step=${activeStep}`, { replace: true });
  }, [activeStep, navigate]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      Math.min(prevActiveStep + 1, steps.length)
    );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <BHKsType />;
      case 1:
        return <RoomDesign />;
      case 2:
        return <Package />;
      case 3:
        return <Quotes />;
      default:
        return <Typography>Invalid Step</Typography>;
    }
  };

  return (
    <div className="px-10 lg:px-20 pt-10">
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you're finished
          </Typography>
        ) : (
          <>
            <div className="mt-10">{renderStepContent(activeStep)}</div>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Button onClick={handleNext}>Next</Button>
            </Box>
          </>
        )}
      </Box>
    </div>
  );
}
