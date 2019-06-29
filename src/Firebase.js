import firebase from 'firebase/app'
import 'firebase/database'
const config = {
    apiKey: "AIzaSyCweI7KMbXyClaIOQ7za9ufqEA05JMz8vI",
    authDomain: "comments-react-janio.firebaseapp.com",
    databaseURL: "https://comments-react-janio.firebaseio.com",
    projectId: "comments-react-janio",
    storageBucket: "comments-react-janio.appspot.com",
    messagingSenderId: "787955368755",
    appId: "1:787955368755:web:9d6d06f461c9e64b"
  };
  firebase.initializeApp(config)

  export const database = firebase.database()
