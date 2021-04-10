import React , { useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  makeStyles,
  Container,
  Card,
  Select,
  MenuItem,
} from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';


const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  root: {
    alignItems: "center" ,
  },
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: theme.spacing(3),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "75%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const Covid = () => {
  const classes = useStyles();
  const [baseImage, setBaseImage] = useState("");
  const [doctorRating, setRating] = useState(1) ;

  const uploadImage = async (e) => {
    //console.log(e.target.files[0]) ;
    const file = e.target.files[0];
    const base64file = await convertBase64(file) ;
    console.log(base64file) ;
    setBaseImage(base64file) ;
  };
  
  const convertBase64 = (file) => {
    return new Promise((resolve,reject)=>{
      const fileReader = new FileReader() ;
      fileReader.readAsDataURL(file) ;
  
      fileReader.onload = ()=>{
        resolve(fileReader.result);
      };
  
      fileReader.onerror = (error)=>{
        reject(error) ;
      };
  
    });
  };
  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Card className={classes.paper} variant="outlined">
        <div className={classes.paper}>
          <Typography component="h1" variant="h3">
            COVID Recovery Guide
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  // autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>

              <Grid item xs={12} sm={3}>
                <TextField
                  type="number"
                  variant="outlined"
                  required
                  fullWidth
                  id="age"
                  label="Age"
                  name="age"
                  autoComplete="age"
                />
              </Grid>
              <Grid item xs={12} sm={9}>
                <TextField
                  autoComplete="occupation"
                  name="occupation"
                  variant="outlined"
                  required
                  fullWidth
                  id="occupation"
                  label="Occupation"
                  // helperText="Name of Hospital/Institution for taking vaccine. "
                  // autoFocus
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="locationAddress"
                  name="locationAddress"
                  variant="outlined"
                  fullWidth
                  id="locationAddress"
                  label="Address Line"
                  // helperText="Name of Hospital/Institution for taking vaccine. "
                  // autoFocus
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  autoComplete="locationCity"
                  name="locationCity"
                  variant="outlined"
                  required
                  fullWidth
                  id="locationCity"
                  label="City"
                  // helperText="Name of Hospital/Institution for taking vaccine. "
                  // autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  autoComplete="locationState"
                  name="locationState"
                  variant="outlined"
                  required
                  fullWidth
                  id="locationState"
                  label="State"
                  // helperText="Name of Hospital/Institution for taking vaccine. "
                  // autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  autoComplete="locationPincode"
                  name="locationPincode"
                  variant="outlined"
                  required
                  type="number"
                  fullWidth
                  id="locationPincode"
                  label="Pincode"
                  // helperText="Name of Hospital/Institution for taking vaccine. "
                  // autoFocus
                />
              </Grid>
              
              <Grid item xs={12} sm={7}>
                <TextField
                  autoComplete="doctorName"
                  name="doctorName"
                  variant="outlined"
                  required
                  fullWidth
                  id="doctorName"
                  label="Doctor Name"
                  helperText="Referred for treatment."
                  // autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={5}>
                <TextField
                  autoComplete="doctorPhone"
                  name="doctorPhone"
                  variant="outlined"
                  type="number"
                  fullWidth
                  id="doctorName"
                  label="Doctor Contact No."
                  // helperText="Referred for treatment."
                  // autoFocus
                />
              </Grid>

              <Grid item xs={12} sm={5}>
                <TextField
                  autoComplete="hospitalName"
                  name="hospitalName"
                  variant="outlined"
                  required
                  fullWidth
                  id="hospitalName"
                  label="Hospital Name"
                  helperText="Visited for treatment/consultaion."
                  // autoFocus
                />
              </Grid>
              <Grid item xs={7}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="hospitalAddress"
                  label="Hospital Address"
                  name="hospitalAddress"
                  helperText="Address of Hospital/Institution visited for consulting doctor. "
                  autoComplete="hospitalAddress"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="symptoms"
                  name="symptoms"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  id="symptoms"
                  label="Symptoms"
                  helperText="Symptoms/Conditions due to COVID. "
                  // autoFocus
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="medicinesTaken"
                  name="medicinesTaken"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  id="medicinesTaken"
                  label="Medicines Taken"
                  helperText="Medicines prescribed for treatment."
                  // autoFocus
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="treatment"
                  name="treatment"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  id="treatment"
                  label="Treatment Procedure"
                  helperText="Briefly describe the treatment procedure."
                  // autoFocus
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="comments"
                  name="comments"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={5}
                  id="comments"
                  label="Additional Comments"
                  // helperText="Medicines taken to overcome symptoms."
                  // autoFocus
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    autoComplete="recoveryPeriod"
                    name="recoveryPeriod"
                    variant="outlined"
                    fullWidth
                    type="number"
                    id="recoveryPeriod"
                    label="Recovery Period"
                    helperText="Number of days for full recovery."
                    // autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Typography component="legend">Doctor Rating</Typography>
                  <Rating
                    name="doctorRating"
                    id="doctorRating"
                    value={doctorRating}
                    size="large"
                    onChange={(event, newValue) => {
                      setRating(newValue);
                    }}
                  />
                </Grid>
              </Grid>              
              
              <Grid item xs={12} sm={6}>
                Please upload COVID PCR Report for Verification:
              </Grid>
              <Grid item xs={12} sm={6}>
                <input 
                  type="file"
                  onChange={(e) => {
                    uploadImage(e);
                  }}
                />
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit
            </Button>
            {/* <Grid container justify="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid> */}
          </form>
        </div>
        <Box mt={5}></Box>
      </Card>  
    </Container>
    
  );
};
