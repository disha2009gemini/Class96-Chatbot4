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

document.getElementById("user_name").innerHTML = 'Welcome ' + user_name + "!";

function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose: "adding user"
});
window.location = "kwitter_page.html";
localStorage.setItem("room_name", room_name);
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this_id);'>#" + Room_names + "</div><hr>"
      document.getElementById("output").innerHTML += row;
    //End code
    });});}

getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name", user_name);
  localStorage.removeItem("room_name", room_name);
  window.location = "index.html";
}
