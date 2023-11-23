console.log("Dit is een test");


// vars
var work1 = document.querySelector("#first");

// eventlisteners
work1.addEventListener("click", testDit);

// functions
function testDit(){
    console.log("Test voor JS");
    work1.classList.toggle("yay");

}