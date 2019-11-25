import React from 'react';

// Components
import Cards from './components/Cards';

class App extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Cards />
      </div>
    );

  }

}

export default App;
