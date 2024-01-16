import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import logo from "../../assets/images/logo@2x.png";
import { Link } from "react-router-dom";

export default function AlertUserNull({ userRole }) {
  const [open, setOpen] = React.useState(false);

  let userAgree = localStorage.getItem("userAgree");
  React.useEffect(() => {
    if (userRole === null ) {
      setTimeout(() => {
        setOpen(true);
      }, 10000);
    }
    return () => {
      clearTimeout();
    };
  }, [userRole]);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("userAgree", false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <div id="logo_normal" className="logo_container">
            <div className="logo_align">
              <div className="logo_wrapper">
                <img src={logo} alt="logo-brand" />
              </div>
            </div>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p>Please login for best experince</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Link to="/login">
            <Button onClick={handleClose}>Login</Button>
          </Link>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
