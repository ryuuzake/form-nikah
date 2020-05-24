import React from 'react';
import MarriageForm from './components/MarriageForm';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { amber, grey } from '@material-ui/core/colors';
import LandingPage from './components/LandingPage';
import FinishForm from './components/FinishForm';
import FormTable from './components/FormTable';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      'Helvetica',
      'Arial',
      'sans-serif'
    ].join(','),
    h5: {
      fontWeight: 600
    },
    body1: {
      fontWeight: 500
    }
  },
  palette: {
    primary: amber,
    secondary: grey
  },
});

function App() {
  const [isLanding, setIsLanding] = React.useState(0);
  const nextLanding = () => setIsLanding(isLanding + 1);
  const backLanding = () => setIsLanding(isLanding - 1);

  switch (isLanding) {
    case 1:
      return (
        <ThemeProvider theme={theme}>
          <MarriageForm handleLandingBack={backLanding} handleLandingNext={nextLanding} />
        </ThemeProvider>
      );
    case 2:
      return (
        <ThemeProvider theme={theme}>
          <FinishForm handleLanding={nextLanding} />
        </ThemeProvider>
      );
    case 3:
      return (
        <ThemeProvider theme={theme}>
          <FormTable handleLanding={nextLanding} />
        </ThemeProvider>
      );
    default:
      return (
        <ThemeProvider theme={theme}>
          <LandingPage handleLanding={() => setIsLanding(1)} />
        </ThemeProvider>
      );
  }
}

export default App;
