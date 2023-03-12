const icon = document.getElementById('icon');
const p_details = document.querySelector('.profile_details');
p_details.classList.add('disabled');
icon.addEventListener('click',function(){
    console.log('disabled');
    p_details.classList.toggle('disabled');
    return false;
    
})
let coursenam = document.querySelector("#cnam")
let coursecred =document.querySelector("#cred")
// mandatory fields
const variable= document.querySelector('#sub').addEventListener('click',function myfunc(){
    if (coursenam.value.length === 0 && coursecred.value.length === 0){
        alert("Please fill the mandatory details");
    }else if (coursenam.value.length === 0){
        alert("Please fill the Course Name field")
    }else if (coursecred.value.length === 0){
        alert("Please fill the Course Credits field")
    }else{
        location.href='newCO.html';
    }
})

//image Preview
let inpFile=document.getElementById("inpFile");
        // console.log(inpFile);
    let previewContainer=document.getElementById("image-preview");
    let previewImage=previewContainer.querySelector(".image-preview__image");
    let previewDefaultText=previewContainer.querySelector(".image-preview__default-text");

    inpFile.addEventListener("change", function() {
        let file=this.files[0];
    if(file) {
        let reader = new FileReader();
        previewDefaultText.style.display="none";
        previewImage.style.display="block";
        reader.addEventListener("load", function(){
            previewImage.setAttribute("src", this.result);

        });
        reader.readAsDataURL(file);
    }
    else {
        previewDefaultText.style.display=null;
        previewImage.style.display=null;
        previewImage.setAttribute("src", "");
    }
    });

// tags Functionality
document.querySelector('#tags_input').onkeyup=parse;
function parse(){
    // e.preventDefault()
    console.log("print");
    var tag_input = document.getElementById("tags_input");
    var tags = document.getElementById("tags");
    
    var input_val = tag_input.value.trim();
    var no_comma_val = input_val.replace(/,/g, ""); // removes all the commas
    no_comma_val = no_comma_val.replace(/ /g,""); //removes all the spaces

    // console.log( tag_input+" "+tags+" "+input_val+" "+no_comma_val);
    //get last character from string input_val.slice(-1)
    if(input_val.slice(-1) === "," && no_comma_val.length>0){
        var new_tag = complie_tag(no_comma_val);
        tags.appendChild(new_tag);
        tag_input.value = "";
    }
}
function complie_tag(tag_content){
    var tag = document.createElement("button");
    tag.setAttribute("id","newtags");
    var remove = document.createElement("button");
    remove.setAttribute("type", "button");
    remove.setAttribute("class","btn-close btn-close-white");
    remove.setAttribute("id","tag_remove");
    remove.setAttribute("aria-label","Close");
    // <button type="button" class="btn-close btn-close-white" aria-label="Close"></button>

    var text = document.createElement("span");
    text.innerHTML = tag_content;
    remove.onclick = function(){
        this.parentNode.remove();
    }
   
    tag.appendChild(text);
    tag.appendChild(remove);
    return tag;
}

//get coursename
document.querySelector('#sub').onclick = () =>{
    var course = document.querySelector('#cnam').value;
    localStorage.setItem('Course',course);
}   