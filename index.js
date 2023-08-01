
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, 
        createUserWithEmailAndPassword, 
        signInWithEmailAndPassword, 
        signOut } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyDmCcE_vaDqWaULnMUsbeu3vuR-eTfXf70",
  authDomain: "login-signup-daccb.firebaseapp.com",
  databaseURL: "https://login-signup-daccb-default-rtdb.firebaseio.com",
  projectId: "login-signup-daccb",
  storageBucket: "login-signup-daccb.appspot.com",
  messagingSenderId: "531096139624",
  appId: "1:531096139624:web:52ed83caf446a0f76b48dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);

submitData.addEventListener('click', (e)=>{
    
    var name = document.getElementById('name').value; 
    var email = document.getElementById('email').value; 
    var optionId = document.getElementById('option-select').value; 
    var password = document.getElementById('psw').value;
    var ocupation = document.getElementById('job').value; 

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...user.uid
        set(ref(database, 'users/' + user.uid), {
            // agregar nombres y tipo de id 
            name: name,
            email: email,
            optionId: optionId,
            password: password, 
            ocupation: ocupation
        })
        .then(() => {
        // Data saved successfully!
        alert('User created succesfully')
        })
        .catch((error) => {
        // The write failed...
        alert(error)
        });

        
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert(errorMessage)
    });  


}); 