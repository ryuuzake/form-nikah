import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import VerticalStepper from './VerticalStepper';
import MarriageDetail from './MarriageDetail';
import GroomDetail from './GroomDetail';
import BrideDetail from './BrideDetail';
import GroomParentDetail from './GroomParentDetail';
import BrideParentDetail from './BrideParentDetail';
import WitnessDetail from './WitnessDetail';
import First from '../images/1.png';
import Second from '../images/2.png';
import Third from '../images/3.png';
import Fourth from '../images/4.png';
import Fifth from '../images/5.png';
import Sixth from '../images/6.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
      height: '100vh',
  },
  image: {
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
  },
  paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
  },
  form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
  },
  submit: {
      margin: theme.spacing(3, 0, 2),
  },
  stepperTitle: {
      color: 'white',
      fontWeight: 600,
      paddingTop: theme.spacing(24),
  },
  inputBase: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
}));

export default function MarriageForm(props) {
  const image = [First, Second, Third, Fourth, Fifth, Sixth];
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [values, setValues] = useState({
    date: null,
    location: null,
    nationality: null,
    maleFamilyName: null,
    maleShortName: null,
    maleBirthday: null,
    maleReligion: null,
    maleOccupation: null,
    maleAddress: null,
    maleMarried: '',
    maleExName: null,
    maleChildName: null,
    maleFatherFamilyName: null,
    maleFatherShortName: null,
    maleFatherBirthday: null,
    maleFatherReligion: null,
    maleFatherOccupation: null,
    maleFatherAddress: null,
    maleMotherFamilyName: null,
    maleMotherShortName: null,
    maleMotherBirthday: null,
    maleMotherReligion: null,
    maleMotherOccupation: null,
    maleMotherAddress: null,
    femaleFamilyName: null,
    femaleShortName: null,
    femaleBirthday: null,
    femaleReligion: null,
    femaleOccupation: null,
    femaleAddress: null,
    femaleMarried: '',
    femaleExName: null,
    femaleChildName: null,
    femaleFatherFamilyName: null,
    femaleFatherShortName: null,
    femaleFatherBirthday: null,
    femaleFatherReligion: null,
    femaleFatherOccupation: null,
    femaleFatherAddress: null,
    femaleMotherFamilyName: null,
    femaleMotherShortName: null,
    femaleMotherBirthday: null,
    femaleMotherReligion: null,
    femaleMotherOccupation: null,
    femaleMotherAddress: null,
    witnessOneFamilyName: null,
    witnessOneShortName: null,
    witnessOneBirthday: null,
    witnessOneReligion: null,
    witnessOneOccupation: null,
    witnessOneAddress: null,
    witnessTwoFamilyName: null,
    witnessTwoShortName: null,
    witnessTwoBirthday: null,
    witnessTwoReligion: null,
    witnessTwoOccupation: null,
    witnessTwoAddress: null,
  });

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleChange = e => {
    setValues({...values, [e.target.name]: e.target.value});
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={4} className={classes.image} style={{ backgroundImage: `url(${image[activeStep]})` }}>
        <Typography variant="h3" align="center" className={classes.stepperTitle}>
          Formulir Pencatatan Pernikahan
        </Typography>
        <VerticalStepper activeStep={activeStep} />
      </Grid>
      { {
          0: <MarriageDetail handleBack={props.handleLandingBack} handleNext={handleNext} handleChange={handleChange} values={values}/>,
          1: <GroomDetail handleBack={handleBack} handleNext={handleNext} values={values} handleChange={handleChange} />,
          2: <BrideDetail handleBack={handleBack} handleNext={handleNext} values={values} handleChange={handleChange} />,
          3: <GroomParentDetail handleBack={handleBack} handleNext={handleNext} values={values} handleChange={handleChange} />,
          4: <BrideParentDetail handleBack={handleBack} handleNext={handleNext} values={values} handleChange={handleChange} />,
          5: <WitnessDetail handleBack={handleBack} handleNext={props.handleLandingNext} values={values} handleChange={handleChange} />,
        }[activeStep] }
    </Grid>
  )
}
