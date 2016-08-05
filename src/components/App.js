import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './Navbar';
import Vast from './Vast';
import Controls from './Controls';
import Events from './Events';

const App = () => (
  <div>
    <MuiThemeProvider>
      <div>
        <Navbar />
        <Vast />
        <Controls />
        <Events />
      </div>
    </MuiThemeProvider>
  </div>
);

export default App;
