import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Github from './Github';
import Header from './Components/Header';

class App extends React.Component {

  constructor(props){
    super(props);
  }

  

  static defaultProps = {
    clientID: '27UIER4gWlruH76SVHc1Xts6Bwl7iUF6',
    domain: 'dev-sax926ea.au.auth0.com'
  }

  componentDidMount(){

  }

  render() {
    return (
      <div className="App">
        <Header />
        <Github />
      </div>
    );
  }
}

export default App;
