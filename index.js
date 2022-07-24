var nombre= document.getElementById("boton1");
var nombre2= document.getElementById("boton2");
var nombre3= document.getElementById("boton3");



nombre.addEventListener("click",function(event){
    displayFullName();
}) 
nombre2.addEventListener("click",function(event){
    displayFullName2();
}) 
nombre3.addEventListener("click",function(event){
    displayFullName3();
}) 
function displayFullName() {
   
    // Creating the XMLHttpRequest object
    var request = new XMLHttpRequest();

    // Instantiating the request object
    request.open("GET", "./inicio.html");
    // Defining event listener for readystatechange event
    request.onreadystatechange = function() {
        // Check if the request is compete and was successful
        if(this.readyState === 4 && this.status === 200) {
            // Inserting the response from server into an HTML element
            document.getElementById("todo").innerHTML = this.responseText;
        }
    };

    // Sending the request to the server
    request.send();
}

function displayFullName2() {
   
    // Creating the XMLHttpRequest object
    var request = new XMLHttpRequest();

    // Instantiating the request object
    request.open("GET", "./proyects.html");
    // Defining event listener for readystatechange event
    request.onreadystatechange = function() {
        // Check if the request is compete and was successful
        if(this.readyState === 4 && this.status === 200) {
            // Inserting the response from server into an HTML element
            document.getElementById("todo").innerHTML = this.responseText;
        }
    };

    // Sending the request to the server
    request.send();
}
function displayFullName3() {
   
    // Creating the XMLHttpRequest object
    var request = new XMLHttpRequest();

    // Instantiating the request object
    request.open("GET", "./contact.html");
    // Defining event listener for readystatechange event
    request.onreadystatechange = function() {
        // Check if the request is compete and was successful
        if(this.readyState === 4 && this.status === 200) {
            // Inserting the response from server into an HTML element
            document.getElementById("todo").innerHTML = this.responseText;
        }
    };

    // Sending the request to the server
    request.send();
}

displayFullName();
  