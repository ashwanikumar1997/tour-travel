/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:49:10
 * @modify date 2019-09-03 10:49:10
 * @desc [description]
 */
import React, { useState } from "react";
import { loginUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import { login as authLogin } from "../../reducers/authSlice";
import { registerUser } from "../../actions/authActions";
import Appicon from "../../assets/images/Himalayan Tour.png";
import { useDispatch } from "react-redux";
import {
  Button,
  Typography,
  Container,
  Box,
  Grid,
  CssBaseline,
  Checkbox,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Copyright } from "./LoginForm";
import TextFieldGroup from "../common/TextFieldGroup";

const defaultTheme = createTheme();

function Register(props) {
  const { errors } = props;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("");

  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: username,
      email: email,
      password: password,
      accountType: accountType,
    };

    registerUser(newUser)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert("Your account is created Now you can login");
          let { email, password } = newUser;
          let obj = {
            email: email,
            password: password,
          };
          const response = loginUser(obj);
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
      })
      .catch((err) => {
        dispatch({
          payload: err.response,
        });
        if (err.response.status === 309) {
          window.location = "/login";
        }
      });
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Link to="/">
          Home
          <img src="back_home.png" style={{ height: "30px", float: "left" }} />
        </Link>
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
              placeholder="Username"
              name="name"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              error={errors}
            />
            <TextFieldGroup
              placeholder="Email Address"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors}
            />
            <TextFieldGroup
              placeholder="Password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors}
            />
            <select
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
            >
              <option>--select Account Type--</option>
              <option>Personal</option>
              <option>Agency Admin</option>
            </select>

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
                <Link to="/login" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default Register;
