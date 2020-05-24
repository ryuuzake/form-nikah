import React from 'react';
import { Stepper, Step, StepConnector, Typography } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  step: {
    textAlign: 'center',
    color: amber[500],
  },
  stepper: {
    backgroundColor: "transparent",
    marginTop: theme.spacing(10),
  },
  connector: {
    padding: theme.spacing(0),
  },
  activeStep: {
    color: amber[50],
  }
}));

const TransparentConnector = withStyles({
  line: {
    borderLeftWidth: 0,
  },
})(StepConnector);

function VerticalStepper(props) {
  const classes = useStyles();
  const { activeStep } = props;
  const steps = ['Detail Pelaksanaan Pernikahan', 'Identitas Mempelai Pria',
                 'Identitas Mempelai Wanita', 'Identitas Orang Tua Pria',
                 'Identitas Orang Tua Wanita', 'Identitas Saksi'];

  return (
    <div className={classes.root}>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        className={classes.stepper}
        connector={<TransparentConnector className={classes.connector} />}
      >
        {steps.map((label, index) => {
          if (index === activeStep) 
            return (
              <Step key={index} className={classes.step}>
                <Typography variant="h6" className={classes.activeStep}>
                  {label}
                </Typography>
              </Step>
            );
          return (
            <Step key={index} className={classes.step}>
              <Typography variant="h6">
                {label}
              </Typography>
            </Step>
          );
        })}
      </Stepper>
    </div>
  )
}

export default VerticalStepper
