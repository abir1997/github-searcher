import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Github from './Github';
import Header from './Components/Header';
import Auth0Lock from 'auth0-lock';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      idToken: '',
      profile: {}
    };
  }


  static defaultProps = {
    clientID: '27UIER4gWlruH76SVHc1Xts6Bwl7iUF6',
    domain: 'dev-sax926ea.au.auth0.com'
  }

  componentDidMount() {
    this.lock = new Auth0Lock(this.props.clientID, this.props.domain);

    this.lock.on('authenticated', (authResult) => {
      console.log(authResult);

      this.lock.getProfile(authResult.idToken, (err, profile) => {
        if(err){
          console.log(err);
          return;
        }
       // console.log(profile);

       this.setProfile(authResult.idToken, profile);

      });
    });
  }

  setProfile(idToken, profile){
    localStorage.setItem('idToken', idToken);
    localStorage.setItem('profile', JSON.stringify(profile));
    
    this.setState({
      idToken : localStorage.getItem('idToken'),
      profile : JSON.parse(localStorage.getItem('profile'))
    });
  }

  showLock() {
    this.lock.show();
  }

  render() {
    return (
      <div className="App">
        <Header
          onLogin={this.showLock.bind(this)} />
        <Github />
      </div>
    );
  }
}

export default App;
