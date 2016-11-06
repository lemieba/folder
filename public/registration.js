$(document).ready(function() {
  var databaseRef = firebase.database();
  $("#signup").click(signUp);
  function signUp(){
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    console.log('success');
    console.log(username);
    databaseRef.ref('users/' + username +"/").set({
      email: email,
      password: password,
    });
    // databaseRef.child("users/"+ username).set({email:email, password:password});
    window.location.href = "/home.html#" + username;
    return false;
  }

});
