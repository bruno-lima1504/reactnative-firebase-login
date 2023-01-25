import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'

let firebaseConfig = {
    apiKey: "AIzaSyClVjdqLoo9Q22D6wcZFKNuFyIC_Ei7D2k",
    authDomain: "meuapp-fbd0b.firebaseapp.com",
    databaseURL: "https://meuapp-fbd0b-default-rtdb.firebaseio.com",
    projectId: "meuapp-fbd0b",
    storageBucket: "meuapp-fbd0b.appspot.com",
    messagingSenderId: "647117893427",
    appId: "1:647117893427:web:80a493785db7e60ac65846",
    measurementId: "G-DNHYR99BWV"
  };
  
 if(!firebase.app.lenght){
    firebase.initializeApp(firebaseConfig);
}

 export default firebase