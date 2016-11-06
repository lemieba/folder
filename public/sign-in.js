$(document).ready(function() {

  $("#signin").click(signIn);
  function signIn(){
    var username = $("#username").val();
    var password = $("#password").val();
    // var password = document.getElementById("password").value;

    // Get a database reference to our posts

    var db = firebase.database();
    var ref = db.ref("users/");

    // console.log(db1);
    //console.log(ref);


    // Attach an asynchronous callback to read the data at our posts reference
    ref.on("value", function(snapshot) {
      var stuff = snapshot.val();
      var checker = false;
      for(var uname in stuff){
        if(uname == username){
          checker = true;
        }
      }
      if(checker){
        if (stuff[username].password == password){
          window.location.href = "/home.html#" + username;
        }
        else{
          alert("Incorrect Password. Please try again.")
        }
      }else{
        alert("The username " + username + " doesnot exist. Please sign Up.")
      }

    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  }

});
