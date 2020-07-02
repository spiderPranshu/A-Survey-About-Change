var form ;
var database;
var ref;
function setup(){
  var firebaseConfig = {
    apiKey: "AIzaSyD4bLchI8l-_t_bUkyIAKgZKtrECtMwJSM",
    authDomain: "a-survey-about-change-90376.firebaseapp.com",
    databaseURL: "https://a-survey-about-change-90376.firebaseio.com",
    projectId: "a-survey-about-change-90376",
    storageBucket: "a-survey-about-change-90376.appspot.com",
    messagingSenderId: "145588608877",
    appId: "1:145588608877:web:32d6b15d2897d0cb820464"
  };
  database = firebase.database();
  console.log(database);
  canvas = createCanvas(window.width,800);
  ref = database.ref('Details');
  form = new Form();  
  form.display();
  textSize(80);
  text("Thanks for attemting my quiz",400,720);

}
function draw(){
  background("green");
//  form.display();
}