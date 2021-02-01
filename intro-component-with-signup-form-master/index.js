// const form=document.getElementById('form');
// const firstName=document.getElementById('first-name');
// const lastname=document.getElementById('last-name');
// const password=document.getElementById('password');
// const email=document.getElementById('email');


// form.addEventListener('submit',(e) => {
//     e.preventDefault();
//     checkInputs();
// });

// function checkInputs(){
// //get the values from the inputs
// const firstnameValue=firstName.Value;
// // const lastnameValue=lastname.Value.trim();
// // const passwordValue=password.Value.trim();
// // const emailValue=email.Value.trim();

// if(firstnameValue ===''){
// //  setErrorFor(firstname,'name cannot be empty');
//  console.log(firstnameValue);
// }
// else{
//     // setSuccessFor(firstname);

// }



// function setErrorFor(input,message){
//     const formControl=input.parentElement;
//     const small=formControl.querySelector('small');
//     small.innerText=message; 
//     formControl.className=' form-control error';
// }
// function setSuccessFor(firstname){

// }

// const form=document.querySelector('#form');
// const input=document.querySelectorAll('.form-control');
// form.addEventListener('submit' ,(e)=>{
//     e.preventDefault();
//     inputs.foreach(input=>{
//         console.log(input.value);
//     })
// })


const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const button = document.querySelector('button');
let inputValue = [firstName.value,lastName.value,email.value,password.value];
const validateFirstName =  document.querySelector('.form-control');
const validateLastName =  document.querySelector('.form-control');

button.addEventListener('click',function(e){
e.preventDefault();
if(firstName.value===''){
    console.log("dev");
    validateFirstName.classList.add('error');

}else{
    validateFirstName.classList.remove('error');
    validateFirstName.classList.add('success');
}

if(lastName.value===''){
    console.log("bholu");
    validateLastName.classList.add('error');
}
else{
    validateLastName.classList.remove('error');
     validateLastName.classList.add('success');
}

})