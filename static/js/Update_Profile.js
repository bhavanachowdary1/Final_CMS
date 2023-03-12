const icon = document.getElementById('icon');
const p_details = document.querySelector('.profile_details');
p_details.classList.add('disabled');
icon.addEventListener('click',function(){
    console.log('disabled');
    p_details.classList.toggle('disabled');
    return false;
    
})