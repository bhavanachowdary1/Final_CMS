const icon = document.getElementById('icon');
const p_details = document.querySelector('.profile_details');
icon.addEventListener('click',function(){
    p_details.classList.toggle('disabled');
    return false;
})

const home =document.getElementById('home');
const catalog = document.getElementById('catalog');
const cc = document.getElementById('cc') 
home.addEventListener('click',function(){
    if(catalog.classList.contains('active')==false){
        catalog.classList.toggle('active');
    }
    return false;
})
catalog.addEventListener('click',function(){
    if(catalog.classList.contains('active')==false){
        catalog.classList.toggle('active');
    }
    return false;
})
cc.addEventListener('click',function(){
    if(cc.classList.contains('active')==false){
        cc.classList.toggle('active');
    }
    return false;
})

const profile = getElementById('profile');
profile.addEventListener('click',function(){
    location.href='cms/templates/cms/Update_Profile.html';
})