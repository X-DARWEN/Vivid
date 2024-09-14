const firebaseConfig = {
    apiKey: "AIzaSyAxOuMJE0pcMKYENwkNhvdprUL-4MLy-qw",
    authDomain: "vivid-database.firebaseapp.com",
    databaseURL: "https://vivid-database-default-rtdb.firebaseio.com",
    projectId: "vivid-database",
    storageBucket: "vivid-database.appspot.com",
    messagingSenderId: "38462336735",
    appId: "1:38462336735:web:4a881b995a224a17c5436a",
    measurementId: "G-DEHWY0MZQQ"
  };

  // intialize firebase
  firebase.initializeApp(firebaseConfig);

  // reference your database
  var vividDB =  firebase.databaseURL().ref('Vivid')

