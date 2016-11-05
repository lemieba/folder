$(document).ready(function() {
  $("#register").click(function() {
    var name = $("#name").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var cpassword = $("#cpassword").val();

    // // Get a reference to the database service
    //  var database = firebase.database();
    // var writeUserData = function(userId, name, email, password) {
    //   firebase.database().ref('users/' + userId).set({
    //     username: name,
    //     email: email,
    //     password : password,
    //   });
    // };

    if (name == '' || email == '' || password == '' || cpassword == '') {
      alert("Please fill all fields...!!!!!!");
    } else if ((password.length) < 8) {
      alert("Password should atleast 8 character in length...!!!!!!");
    } else if (!(password).match(cpassword)) {
      alert("Your passwords don't match. Try again?");
    } else {
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
      var database = firebase.database();
      var user = firebase.auth().currentUser;
      firebase.database().ref('users/' + user.uid).set({
        username: name,
        email: email,
      });
        //  $("form")[0].reset();
    }
  });
});
