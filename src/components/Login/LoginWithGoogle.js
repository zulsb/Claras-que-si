import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebaseConfig';
import { Buttonline } from '../Assets/Styles/Styled';


const firebaseApp = firebase.initializeApp(firebaseConfig);

class LoginWithGoogle extends Component {
  render() {
    const { signInWithGoogle, props } = this.props;
    return (
      <div>
      <Buttonline onClick={signInWithGoogle}>{props} with google</Buttonline>
      </div>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(LoginWithGoogle);
