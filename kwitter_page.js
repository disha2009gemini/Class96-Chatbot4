const firebaseConfig = {
    apiKey: "AIzaSyB9uBgKXpjbcOreiUET-uHYrP133I3_7Z8",
    authDomain: "class94-chatbot.firebaseapp.com",
    databaseURL: "https://class94-chatbot-default-rtdb.firebaseio.com",
    projectId: "class94-chatbot",
    storageBucket: "class94-chatbot.appspot.com",
    messagingSenderId: "703802582318",
    appId: "1:703802582318:web:a191f25f0a83107d4d46bf"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name", user_name);
  room_name = localStorage.getItem("room_name", room_name);

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });

    document.getElementById("msg").value = "";
}