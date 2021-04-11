import React, { useState, useContext } from "react";
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  makeStyles,
  Container,
  Card,
  MenuItem,
} from "@material-ui/core";
import { GlobalContext } from "../../../../context/GlobalState";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  root: {
    alignItems: "center",
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

export const Vaccine = () => {
  const classes = useStyles();
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [age, setAge] = useState(null);
  const [occupation, setOccupation] = useState("");
  const [locationAddress, setLocationAdress] = useState("");
  const [locationCity, setLocationCity] = useState("");
  const [locationState, setLocationState] = useState("");
  const [locationPinCode, setlocationPinCode] = useState("");
  const [vaccineTaken, setVaccineTaken] = useState("");
  const [dosesTaken, setDosesTaken] = useState("");
  const [hospital, setHospital] = useState("");
  const [hospitalAddress, setHospitalAddress] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [medicinesTaken, setMedicinesTaken] = useState("");
  const [comments, setComments] = useState("");

  // const [baseImage, setBaseImage] = useState("");
  const { addVaccineData, token, addFile } = useContext(GlobalContext);
  // console.log("Token auth: ", token);
  var base64file = "";
  const uploadImage = async (e) => {
    //console.log(e.target.files[0]) ;
    const file = e.target.files[0];
    const data = new FormData();
    data.append("file", file);
    const newEntry = {
      file,
    };
    const response = addFile(newEntry);
    addFile(response);

    base64file = await convertBase64(file);
    // setBaseImage(base64file);
    // console.log("Token64: ", base64file);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const submit = (e) => {
    e.preventDefault();
    const newEntry = {
      // id: Math.floor(Math.random() * 100000000),
      // base64file,
      fname,
      lname,
      age,
      occupation,
      vaccineTaken,
      dosesTaken,
      hospital,
      hospitalAddress,
      symptoms,
      medicinesTaken,
      comments,
      locationAddress,
      locationCity,
      locationPinCode,
      locationState,
      base64file,
    };
    const response = addVaccineData(newEntry, token);
    addVaccineData(response);
  };

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Card className={classes.paper} variant="outlined">
        <div className={classes.paper}>
          <Typography component="h1" variant="h3">
            Vaccine Review
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="fname"
                  variant="outlined"
                  required
                  fullWidth
                  id="fname"
                  label="First Name"
                  onChange={(e) => setFName(e.target.value)}

                  // autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lName"
                  label="Last Name"
                  name="lName"
                  autoComplete="lname"
                  onChange={(e) => setLName(e.target.value)}
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
                  onChange={(e) => setAge(e.target.value)}
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
                  onChange={(e) => setOccupation(e.target.value)}
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
                  onChange={(e) => setLocationAdress(e.target.value)}
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
                  onChange={(e) => setLocationCity(e.target.value)}
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
                  onChange={(e) => setLocationState(e.target.value)}
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
                  onChange={(e) => setlocationPinCode(e.target.value)}
                  // helperText="Name of Hospital/Institution for taking vaccine. "
                  // autoFocus
                />
              </Grid>

              <Grid item xs={12} sm={3}>
                <TextField
                  autoComplete="vaccineTaken"
                  name="vaccineTaken"
                  variant="outlined"
                  required
                  fullWidth
                  id="vaccineTaken"
                  label="Vaccine Taken"
                  onChange={(e) => setVaccineTaken(e.target.value)}
                  // helperText="Name of Vaccine taken."
                  // autoFocus
                  select
                >
                  <MenuItem value="CoviShield">Covishield</MenuItem>
                  <MenuItem value="Covaxin">Covaxin</MenuItem>
                  <MenuItem value="Pfizer">Pfizer</MenuItem>
                  <MenuItem value="AstraZeneca">AstraZeneca</MenuItem>
                  <MenuItem value="Moderna">Moderna</MenuItem>
                  <MenuItem value="Johnson &amp; Johnson's">
                    Johnson &amp; Johnson's
                  </MenuItem>
                  {/* <MenuItem value="1">1</MenuItem> */}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  type="number"
                  autoComplete="dosesTaken"
                  name="dosesTaken"
                  variant="outlined"
                  required
                  fullWidth
                  id="dosesTaken"
                  label="Doses Taken"
                  onChange={(e) => setDosesTaken(e.target.value)}
                  // helperText="Name of Hospital/Institution for taking vaccine. "
                  // autoFocus
                  select
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="hospital"
                  name="hospital"
                  variant="outlined"
                  required
                  fullWidth
                  id="hospital"
                  label="Hospital Name"
                  helperText="Name of Hospital/Institution for taking vaccine. "
                  onChange={(e) => setHospital(e.target.value)}
                  // autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="hospitalAddress"
                  label="Hospital Address"
                  name="hospitalAddress"
                  helperText="Address of Hospital/Institution visited for taking vaccine. "
                  autoComplete="hospitalAddress"
                  onChange={(e) => setHospitalAddress(e.target.value)}
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
                  helperText="Symptoms/Conditions after taking vaccine. "
                  onChange={(e) => setSymptoms(e.target.value)}
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
                  helperText="Medicines taken to overcome symptoms."
                  onChange={(e) => setMedicinesTaken(e.target.value)}
                  // autoFocus
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="comments"
                  name="comments"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={2}
                  id="comments"
                  label="Additional Comments"
                  onChange={(e) => setComments(e.target.value)}
                  // helperText="Medicines taken to overcome symptoms."
                  // autoFocus
                />
              </Grid>

              <Grid item xs={12} sm={12}>
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
              onClick={submit}
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
