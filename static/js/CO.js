console.log("Hello World!!");
const icon = document.getElementById('icon');
const p_details = document.querySelector('.profile_details');
p_details.classList.add('disabled');
icon.addEventListener('click',function(){
    console.log('disabled');
    p_details.classList.toggle('disabled');
    return false;
    
})

// //get course name
// var course = localStorage.getItem('Course');
// console.log(course);
// document.querySelector('#cnam').textContent = `Add Content to ${course}`;
// // component.textContent=`Add a component to ${unit}`
// document.querySelector('#modul').textContent = `Add Modules to ${course}`;
// units.classList.add('disabled');//units is id

// // adding modules and units
// cont.classList.add('disabled');//cont is id
// document.querySelector('#btnGro').disabled = true;
// document.querySelector('#btnGrou').disabled = true;
// document.querySelector('#mnam').onkeyup = () => {
//     if (document.querySelector('#mnam').value.length > 0) {
//         document.querySelector('#btnGro').disabled = false;
//     }
//     else {
//         document.querySelector('#btnGro').disabled = true;
//     }
// }
// document.querySelector('#btnGro').onclick = function () {
//     if(!cont.classList.contains('disabled')){
//         cont.classList.add('disabled');
//         // document.querySelector('#headmod').value='';
//     }
//     const task = document.querySelector('#mnam').value;
//     console.log(task);

//     const li = document.createElement('li');
//     li.setAttribute('class', 'list-item fw-bold me-2');
//     li.setAttribute('style', 'width:100%;');
//     li.innerHTML = `${task}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill me-3 my-1 mx-5" id="edit" viewBox="0 0 16 16">
//     <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
//   </svg>
//   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill my-1" viewBox="0 0 16 16">
//     <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
//   </svg>`;
//     var addmod = document.querySelector('#admod');
//     addmod.append(li);
//     units.classList.remove('disabled');
//     document.querySelector('#uni').textContent = `Add Units to ${task}`;
//     const ul = document.createElement('ul');
//     ul.setAttribute('id', task);
//     addmod.appendChild(ul);
//     console.log(addmod);

//     document.querySelector('#headmod').textContent=`${task}`;
//     document.querySelector('#mnam').value = '';
//     addunits(task);
//     document.querySelector('#btnGro').disabled = true;
//     //Stop form from submit
//     return false;
// }
// function addunits(task) {
//     document.querySelector('#unam').onkeyup = () => {
//         if (document.querySelector('#unam').value.length > 0) {
//             document.querySelector('#btnGrou').disabled = false;
//         }
//         else {
//             document.querySelector('#btnGrou').disabled = true;
//         }
//     }
//     document.querySelector('#btnGrou').onclick = function () {
//         // <ul id="addGrou"></ul>
//         const unit = document.querySelector('#unam').value;
//         console.log(unit);
//         const li = document.createElement('li');
//         li.setAttribute('class', 'list-item');
//         li.innerHTML = unit;
//         document.getElementById(task).append(li);
//         var cont = document.querySelector('#cont');
//         cont.classList.remove('disabled');
//         document.querySelector('#AddAComponent').textContent = `Add a component to ${unit}`;
//         document.querySelector('#unam').value = '';
//         document.querySelector('#btnGrou').disabled = true;
//         //Stop form from submit
//         return false;
//     }
// }

// //toggle buttons
// var text = document.querySelector('#text');
// var video = document.querySelector('#video');
// var test = document.querySelector('#test');
// var mcq = document.querySelector('#mcq');
// var btntext = document.querySelector('#btntext');
// var btnvideo = document.querySelector('#btnvideo');
// var btntest = document.querySelector('#btntest');
// var btnmcq = document.querySelector('#btnmcq');
// const btnClose1 = document.querySelector("#close-btn1");
// const btnClose2 = document.querySelector("#close-btn2");
// const btnClose3 = document.querySelector("#close-btn3");
// const btnClose4 = document.querySelector("#close-btn4");
// var storemp3 = document.querySelector('#storemp3');
// storemp3.classList.add('disabled');
// btntext.onclick = ()=>{
//     text.classList.remove('disabled');
//     return false;
// }
// btnvideo.onclick = ()=>{
//     video.classList.remove('disabled');
//     return false;
// }
// btntest.onclick = ()=>{
//     test.classList.remove('disabled');
//     return false;
// }
// btnmcq.onclick = ()=>{
//     mcq.classList.remove('disabled');
//     return false;
// }

// const closebtn1 = function() {
//     text.classList.add('disabled');
// }

// const closebtn2 = function() {
//     video.classList.add('disabled');
// }

// const closebtn3 = function() {
//     test.classList.add('disabled');
// }
// const closebtn4 = function() {
//     mcq.classList.add('disabled');
// }

// btnClose1.addEventListener("click" , closebtn1);
// btnClose2.addEventListener("click" , closebtn2);
// btnClose3.addEventListener("click" , closebtn3);
// btnClose4.addEventListener("click" , closebtn4);

//for video
document.querySelector('#savemp4').onclick = () => {
    var input_video = document.querySelector('#id_Video').value;
    if(input_video.length===0){
        alert("Please enter the video link!");
    }
    else{
        var mp4 = input_video.replace("watch?v=","embed/") ;
        const iframe = document.createElement('iframe');
        iframe.setAttribute('width', '730');
        iframe.setAttribute('height', '315');
        iframe.setAttribute('src', mp4);
        console.log(iframe);
        document.getElementById("storemp4").appendChild(iframe);
    }
    // document.querySelector('#id_Video').value = '';
}

// //for text
// document.querySelector('#savemp3').onclick = () => {
//     var input_text = document.querySelector('#exampleFormControlTextarea1').value;
//     if(input_text.length===0){
//         alert("Please enter some text!");
//     }
//     else{
//         storemp3.classList.remove('disabled');
//         document.getElementById("storemp3").append(input_text);
//     }
//     document.querySelector('#exampleFormControlTextarea1').value = '';
// }