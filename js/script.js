console.log("Dit is een test");


// vars
var work1 = document.querySelector("#first");
var projectbutton1 = document.querySelector("#projectbutton1");
var projectbutton2 = document.querySelector("#projectbutton2");
var extraInfo1 = document.querySelector("#extraInfo1");
var extraInfo2 = document.querySelector("#extraInfo2");

// var emailButton = document.querySelector("#email");
// var myEmail = "breukelentessa@gmail.com";



// functions
function extraInfo1Toggle() {
    console.log("Hiding extra info");
    extraInfo1.classList.toggle("hidden");
}

function extraInfo2Toggle() {
    console.log("Hiding or showing extra info");
    extraInfo2.classList.toggle("hidden");
}

// function copyMail() {
//     navigator.clipboard.writeText(myEmail);
//     alert("Copied my email adress: " + myEmail);
// }
// Eventlisteners stop each other from working, if the first one isnt read they all stop working. I need to figure out a way to specify which page the user is on, or make seperate js files for all my html files...
// eventlisteners
// emailButton.addEventListener("click", copyMail);
projectbutton1.addEventListener("click", extraInfo1Toggle);
projectbutton2.addEventListener("click", extraInfo2Toggle);

