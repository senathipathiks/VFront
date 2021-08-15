import './App.css';
import MainComponent from './components/MainComponent';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <MuiThemeProvider>
    <MainComponent/>
    
    </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
