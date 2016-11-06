$(document).ready(function() {
    var databaseRef = new Firebase("https://basic-add1a.firebaseio.com/");

    $("#save").click(collectData);
    
    /*$("#sign-in").click(function(){
          var email = document.getElementById("email").value;
          var password = document.getElementById("password").value;
          window.location.href = "homepage.html";
    });
     */

    function collectData(){
      var firtsname = document.getElementById("firstname").value;
      var lastname = document.getElementById("lastname").value;
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      var email = document.getElementById("email").value;

      firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user){
        console.log('success');

        
        var database = firebase.database();
        // var user = firebase.auth().currentUser;
        firebase.database().ref('users/' + user.uid).set({
          username: username,
          email: email,
        });
        databaseRef.child("users").push({firstname:firstname, lastname: lastname}); 

     window.location.href = "homepage.html";
      },function(error) {
     // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

       if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
       }
      else {
        alert(errorMessage);
      }
      console.log(error);
       
    });
   }


    /*
    function logIn(){
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      //window.location.href = "homepage.html";


      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // 
      });
      window.location.href = "homepage.html";

    }
   */
    

});
