 let joinButtons = document.querySelectorAll(".joinBtn");

      joinButtons.forEach(function(button){
        button.addEventListener("click",function(){
            alert("Welcome to KORVA !")
        });
      });

let addWorkOut = document.querySelector(".add-workout-btn");
      
addWorkOut.addEventListener("click", function(){
    let workOutInput = document.querySelector(".workout-input");
    if (workOutInput.value.trim() === ""){
        return;
    }
    let workOutItem = document.createElement("div");
    workOutItem.classList.add("each-workout-item")
    workOutItem.innerHTML = workOutInput.value;
    let delBtn = document.createElement("button");
    let delIcon = document.createElement("i");
 

    let workOutList = document.querySelector(".right-workout");
    let emptyWorkOut = document.querySelector(".empty-workout");
    emptyWorkOut.style.display = "none";
    workOutList.appendChild(workOutItem);
    workOutItem.appendChild(delBtn);
    delBtn.appendChild(delIcon);
    delBtn.classList.add("deleteBtn");
    delIcon.classList.add("bi", "bi-trash");

    delBtn.addEventListener("click", function(){
        workOutItem.remove();

         if (workOutList.querySelector(".each-workout-item") === null){
        emptyWorkOut.style.display="flex";
        }
    });  
});

let nameError = document.createElement("p");
nameError.classList.add("form-error");

let emailError = document.createElement("p");
emailError.classList.add("form-error");

let subjectError = document.createElement("p");
subjectError.classList.add("form-error");

let messageError = document.createElement("p");
messageError.classList.add("form-error");

document.querySelector("#name").parentElement.appendChild(nameError);
document.querySelector("#email").parentElement.appendChild(emailError);
document.querySelector("#text").parentElement.appendChild(subjectError);
document.querySelector("#message").parentElement.appendChild(messageError);



let name = document.getElementById("name");

name.addEventListener("input", function(){

if (name.value.trim() === ""){
    nameError.textContent="Name is required";
}else if (name.value.trim().length < 3){
    nameError.textContent="Name is too short";
}else{
    nameError.textContent="";
}
});

let email = document.getElementById("email");
email.addEventListener("input", function(){
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailPattern.test(email.value)){
    emailError.textContent="Invalid email!";
}else {
    emailError.textContent="";
}
});

let subject = document.getElementById("text");
subject.addEventListener("input", function(){
if (subject.value.trim().length < 5){
    subjectError.textContent="Subject too short!"
}else{
    subjectError.textContent="";
}
});

let message = document.getElementById("message");
message.addEventListener("input", function(){
if (message.value.trim().length < 5){
    messageError.textContent="message too short!"
}else{
    messageError.textContent="";
}

});
let form = document.querySelector("form");
form.addEventListener("submit", function(event){

    event.preventDefault();

});