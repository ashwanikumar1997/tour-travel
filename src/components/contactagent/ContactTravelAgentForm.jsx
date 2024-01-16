import React from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import { useForm } from "react-hook-form";
import { createBooking } from "../../utils/apiHelper";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  overflow: "auto",
  transform: "translate(-50%, -50%)",
  maxHeight: "450px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};



const ContactTravelAgentForm = ({ open, setOpen, setIsSuccess }) => {
  const { register, handleSubmit } = useForm();
  const { placeid } = useParams();

  const handleClose = () => setOpen(false);

  const submitTravelRequirement = (data) => {
       data.tourId = placeid
    createBooking(data).then((response)=>{
      console.log(response);
      // handleClose()
      // setIsSuccess(true)
    })
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div style={{ backgroundColor: "#0088cc", padding: "5px" }}>
                <h3>Tell Us Your Travel Requirements</h3>
              </div>
              <br />
              <form onSubmit={handleSubmit(submitTravelRequirement)}>
              <label>
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="full name"
                  {...register("full_name", { required: true })}
                />
                <label>
                  Email <span>(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="email address"
                  {...register("email_address")}
                />
                <label>Conatct Number</label>
                <input
                  type="text"
                  placeholder="contact number"
                  {...register("phone", { required: true })}
                />
                <br />
                {/* <label>Tour Start City</label>
<input
disabled={true}
  placeholder="Enter Tour Start City"
  {...register("tourstartcity")}
/> */}

{/* <label>Destination City</label>
<input
disabled={true}
  placeholder="Enter where you want to go"
  {...register("destinationcity")}
/> */}
                <label>Travel Date</label>
                <input
                  type="date"
                  placeholder="Enter travel date"
                  {...register("tour_date", { required: true })}
                />
                <br />
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Are your trip dates finalized?
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    {...register("trip_finalized", { required: true })}
                  >
                    <FormControlLabel
                      value={true}
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value={false}
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
                <br />
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <label>No. of persons</label>
                    <input
                      defaultValue={0}
                      type="number"
                      {...register("persons", { required: true })}
                    />
                    <label>Adults (12+ Yrs)</label>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <label>No. of children</label>
                    <input
                      defaultValue={0}
                      type="number"
                      {...register("children")}
                    />
                    <label>Children (2 -12 Yrs)</label>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <label>No. of Days</label>
                    <input
                      defaultValue={0}
                      type="number"
                      {...register("no_days", { required: true })}
                    />
                  </Grid>
                </Grid>

                <Button type="submit">Save</Button>
                <Button onClick={handleClose}>Close</Button>
              </form>
        </Box>
      </Modal>
    </>
  );
};

export default ContactTravelAgentForm;
