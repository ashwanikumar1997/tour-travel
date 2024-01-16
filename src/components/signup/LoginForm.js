/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:47:35
 * @modify date 2019-09-03 10:47:35
 * @desc [description]
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";
import Appicon from "../../assets/logo/HimalayanTour&TravelLogo.png";
import { useDispatch } from "react-redux";
import {
  Button,
  Container,
  Typography,
  Box,
  Grid,
  CssBaseline,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { login as authLogin } from "../../reducers/authSlice";

export function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        to="https://inimisttech.com/"
        target="https://inimisttech.com/"
      >
        inimistTechnologies
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const dispatch = useDispatch();
 

  function onSubmit(e) {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
      // source: 'web'
    };

    const response = loginUser(user);
    response.then((res) => {
      let userData = {
        admin: res.admin,
        name: res.name,
        email: res.email,
      };

      dispatch(authLogin(userData));
      if (res.accountType === "Agency Admin") {
        window.location = "/agency/himalayan-tour-and-travel";
      } else {
        window.location = "/";
      }
    });
  }
  return (
    <div style={{marginTop:"100px",backgroundColor:"#ffff",borderRadius:"8px", display:"flex", flexWrap:"wrap"}}>
      <ThemeProvider theme={defaultTheme} >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={Appicon} alt="app-icon" style={{ height: "180px" }} />
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>

          <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
            <TextFieldGroup
              placeholder="Enter Email Address"
              label={"Email"}
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
            />
            <TextFieldGroup
              placeholder="Enter Password"
              label={"Password"}
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Enjoy OurServices
                </Link>
              </Grid>
              <br />
              <Grid item>
                <Link to="/register" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </div>
  );
}



export default Login;
