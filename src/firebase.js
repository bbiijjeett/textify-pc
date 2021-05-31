import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAu0ZLU8INdxE5ocVzf8k-UxPmv6KXabwU",
    authDomain: "textify-pc.firebaseapp.com",
    projectId: "textify-pc",
    storageBucket: "textify-pc.appspot.com",
    messagingSenderId: "817865612202",
    appId: "1:817865612202:web:d4a4d3b1eff9478d7069d3",
    measurementId: "G-KD6VQZHERP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const logOut = () => {
    auth.signOut().then(()=> {
      console.log('logged out')
    }).catch((error) => {
      console.log(error.message)
    })
  };
  
  

  export {auth,provider,logOut};
  export default db;