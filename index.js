// Import stylesheets

import './style.css';
import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/app';
import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/compat/app';
import { GoogleAuthProvider, getAuth } from 'firebase/compat/auth';
//import 'firebase/compat/firestore';
//import firebase from 'firebase';
//import { GoogleAuthProvider,
////getAuth,
//signInWithPopup,
//signOut,
//onAuthStateChanged,
//'firebase/auth';
//import { getFirestore, addDoc, collection } from 'firebase/firestore';
//import * as firebaseui from 'firebaseui';
//import * as firebase from 'firebase';

//document.getElementById('login').addEventListener('click', GoogleLogin);

//function GoogleLogin() {
// console.log('Login Btn Call');
// try {
//const app = initializeApp(firebaseConfig);
//console.log(app);
//var auth = getAuth(app);
//const app = firebase.initializeApp(firebaseConfig);
//const auth = firebase.auth();
//auth.onAuthStateChanged(user => {
// Check for user status
//});
//var db = getFirestore(app);
// } catch (e) {}
//var provider = new GoogleAuthProvider();
//var provider = firebase.auth.GoogleAuthProvider(app);
//var provider = new firebase.auth.GoogleAuthProvider();
//const auth = getAuth();
/*
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
    */
//}
//<script src="https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js"></script>

//<script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-auth.js"></script>

//<!-- TODO: Add SDKs for Firebase products that you want to use
//https://firebase.google.com/docs/web/setup#available-libraries -->

// Your web app's Firebase configuration
/*

let db, auth;
async function main() {
  const firebaseConfig = {
    apiKey: 'AIzaSyCVKn4k0QWRpEOJHgbl7ALgYUNV7o9kwGQ',
    authDomain: 'stvps-safe-app.firebaseapp.com',
    projectId: 'stvps-safe-app',
    storageBucket: 'stvps-safe-app.appspot.com',
    messagingSenderId: '628432699289',
    appId: '1:628432699289:web:5dacd9e8687b0add921d08',
  };
  try {
    if (firebaseConfig && firebaseConfig.apiKey) {
      initializeApp(firebaseConfig);
    }
    auth = getAuth();
    db = getFirestore();
  } catch (e) {}
}
main();


// Initialize Firebase
var firebase;
//firebase.initializeApp(firebaseConfig);
//initializeApp(firebaseConfig)
document.getElementById('dashboard').style.display = 'none';

document.getElementById('login').addEventListener('click', GoogleLogin);
document.getElementById('logout').addEventListener('click', LogoutUser);

let provider = new firebase.auth.GoogleAuthProvider();

function GoogleLogin() {
  console.log('Login Btn Call');
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      console.log(res.user);
      document.getElementById('LoginScreen').style.display = 'none';
      document.getElementById('dashboard').style.display = 'block';
      //showUserDetails(res.user);
      showForm(res.user);
    })
    .catch((e) => {
      console.log(e);
    });
}

function showUserDetails(user) {
  document.getElementById('userDetails').innerHTML = `
      <img src="${user.photoURL}" style="width:10%">
      <p>Name: ${user.displayName}</p>
      <p>Email: ${user.email}</p>
    `;
}

function showForm(user) {
  var domain = user.email.split('@')[1];
  console.log(domain);
  if (domain == 'stvps.co.uk') {
    //Show Form
    var html = '';
    html += '<form id="form">';
    html += '<label for="name">Name</label>';
    html += '<input type="text" name="name" />';
    html += '<br>';
    html += '<button type="submit" id="send">Send</button>';
    html += '</form>';
    document.getElementById('formDiv').innerHTML = html;

    var form = document.getElementById('form');
    var db = getFirestore();
    form.addEventListener('submit', async (e) => {
      // Prevent the default form redirect
      e.preventDefault();
      // Write a new message to the database collection "guestbook"
      addDoc(collection(db, 'messages'), {
        //text: input.value,
        //timestamp: Date.now(),
        //name: auth.currentUser.displayName,
        //userId: auth.currentUser.uid
        text: 'FirstTest',
        timestamp: Date.now(),
      });
      return false;
    });
  } else {
    //Show Not Authorised
    var html = '';
    html +=
      "You are not authorised to use this app.  It is only available to students at St Vincent's.";
    document.getElementById('formDiv').innerHTML = html;
  }
}

//Build function to send email here

function checkAuthState() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      document.getElementById('LoginScreen').style.display = 'none';
      document.getElementById('dashboard').style.display = 'block';
      showUserDetails(user);
    } else {
    }
  });
}

function LogoutUser() {
  console.log('Logout Btn Call');
  firebase
    .auth()
    .signOut()
    .then(() => {
      document.getElementById('LoginScreen').style.display = 'block';
      document.getElementById('dashboard').style.display = 'none';
    })
    .catch((e) => {
      console.log(e);
    });
}
checkAuthState();
*/
/*
https://docs.google.com/forms/d/e/1FAIpQLSdK7iRUbqJWlhBGD1HfRyaQ7ZoYmG8I8hgk1s_f2HSjhjg-4Q/viewform?usp=pp_url&entry.969926080=bgrear2.307@stvps.co.uk&entry.691698998=Brett+G'rear

*/

function submitForm(form) {}

// Write Javascript code!
//const appDiv = document.getElementById('app');
//appDiv.innerHTML = `<h1>JS Starter</h1>`;

/*
<script src="https://www.gstatic.com/firebasejs/ui/4.8.1/firebase-ui-auth.js"></script>
  <link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/4.8.1/firebase-ui-auth.css" />

*/

/*
<div id="formDiv">
        <form id="form">
          <label for="name">Name</label>
          <input type="text" name="name" />
          <br />
          <input type="button" id="send" value="Send" />
        </form>
      </div>
*/

/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
    <script src="https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js"></script>

    <script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-auth.js"></script>

    <!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

    <script>
      // Your web app's Firebase configuration
      const firebaseConfig = {
        apiKey: 'AIzaSyCVKn4k0QWRpEOJHgbl7ALgYUNV7o9kwGQ',
        authDomain: 'stvps-safe-app.firebaseapp.com',
        projectId: 'stvps-safe-app',
        storageBucket: 'stvps-safe-app.appspot.com',
        messagingSenderId: '628432699289',
        appId: '1:628432699289:web:5dacd9e8687b0add921d08',
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      document.getElementById('dashboard').style.display = 'none';

      document.getElementById('login').addEventListener('click', GoogleLogin);
      document.getElementById('logout').addEventListener('click', LogoutUser);

      let provider = new firebase.auth.GoogleAuthProvider();

      function GoogleLogin() {
        console.log('Login Btn Call');
        firebase
          .auth()
          .signInWithPopup(provider)
          .then((res) => {
            console.log(res.user);
            document.getElementById('LoginScreen').style.display = 'none';
            document.getElementById('dashboard').style.display = 'block';
            //showUserDetails(res.user);
            showForm(res.user);
          })
          .catch((e) => {
            console.log(e);
          });
      }

      function showUserDetails(user) {
        document.getElementById('userDetails').innerHTML = `
          <img src="${user.photoURL}" style="width:10%">
          <p>Name: ${user.displayName}</p>
          <p>Email: ${user.email}</p>
        `;
      }

      function showForm(user) {
        var domain = user.email.split('@')[1];
        console.log(domain);
        if (domain == 'stvps.co.uk') {
          //Show Form
          var html = '';
          html += '<form id="form">';
          html += '<label for="name">Name</label>';
          html += '<input type="text" name="name" />';
          html += '<br>';
          html += '<button type="submit" id="send">Send</button>';
          html += '</form>';
          document.getElementById('formDiv').innerHTML = html;
          
          var form = document.getElementById('form');
          var db = getFirestore();
          form.addEventListener('submit', async e => {
            // Prevent the default form redirect
            e.preventDefault();
            // Write a new message to the database collection "guestbook"
            addDoc(collection(db, 'messages'), {
              //text: input.value,
              //timestamp: Date.now(),
              //name: auth.currentUser.displayName,
              //userId: auth.currentUser.uid
              text: 'FirstTest',
              timestamp: Date.now()
            });
            return false;
          });

        } else {
          //Show Not Authorised
          var html = '';
          html +=
            "You are not authorised to use this app.  It is only available to students at St Vincent's.";
          document.getElementById('formDiv').innerHTML = html;
        }
      }

      //Build function to send email here

      function checkAuthState() {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            document.getElementById('LoginScreen').style.display = 'none';
            document.getElementById('dashboard').style.display = 'block';
            showUserDetails(user);
          } else {
          }
        });
      }

      function LogoutUser() {
        console.log('Logout Btn Call');
        firebase
          .auth()
          .signOut()
          .then(() => {
            document.getElementById('LoginScreen').style.display = 'block';
            document.getElementById('dashboard').style.display = 'none';
          })
          .catch((e) => {
            console.log(e);
          });
      }
      checkAuthState();
    </script>

    */
