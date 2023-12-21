console.log("Dit is een test");


// vars
var work1 = document.querySelector("#first");
var projectbutton1 = document.querySelector("#projectbutton1");
var projectbutton2 = document.querySelector("#projectbutton2");
var extraInfo1 = document.querySelector("#extraInfo1");
var extraInfo2 = document.querySelector("#extraInfo2");

// eventlisteners
projectbutton1.addEventListener("click", extraInfo1Toggle);
projectbutton2.addEventListener("click", extraInfo2Toggle);

console.log(projectbutton2);
console.log(extraInfo2);


// functions
function testDit(){
    console.log("Test voor JS");
    work1.classList.toggle("yay");

}

function extraInfo1Toggle(){
    console.log("Hiding extra info");
    extraInfo1.classList.toggle("hidden");
}

function extraInfo2Toggle(){
    console.log("Hiding or showing extra info");
    extraInfo2.classList.toggle("hidden");
}

// test voor progress bar
