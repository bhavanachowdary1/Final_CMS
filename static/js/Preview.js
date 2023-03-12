const icon = document.getElementById('icon');
const p_details = document.querySelector('.profile_details');
p_details.classList.add('disabled');
icon.addEventListener('click',function(){
    console.log('disabled');
    p_details.classList.toggle('disabled');
    return false;
    
})

//fetches data from the json file
async function Fetch() {
    const data = await fetch("Preview.json"); //status
    console.log(data);
    const coursedata = await data.json();
    console.log(coursedata);
    return coursedata;
}
console.log(Fetch().then(res => { console.log(res) }))
//using jquery to render the data in units.json file
let unitsData = $.getJSON({ url: 'units.json', async: false });
unitsData = JSON.parse(unitsData.responseText);

function CourseDetails() {
    Fetch().then(res => {
        console.log(res);
        for (let i = 0; i < res.length; i++) {
            if (res[i].CourseName === localStorage.getItem("Course")) {
                console.log(res[i].CourseName);
                document.querySelector('#pname').append(res[i].CourseName);
                document.querySelector('#pcredits').append(res[i].CourseCredits);
                document.querySelector('#des').append(res[i].Description);
                var tags = "";
                for(let tag=0; tag<res[i].Tags.length; tag++){
                    if(tag===res[i].Tags.length-1){
                        tags+=res[i].Tags[tag];
                    }
                    else{
                    tags+=res[i].Tags[tag]+", ";
                    }
                }
                document.querySelector('#ptags').append(tags);
                document.querySelector('#pdead').append(res[i].CourseDeadline);
                let blocks = document.getElementById('accordionExample');
                blocks.innerHTML = '';
                for (let bnames = 0; bnames < res[i].ModuleName.length; bnames++) {
                    // var unitdisplay = '';
                    var unitdisplay = addunits(res[i].CourseName,res[i].ModuleName[bnames]);
                    console.log(unitdisplay);
                    blocks.innerHTML += `<div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    ${res[i].ModuleName[bnames]}
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                    <ul>${unitdisplay}</ul>
                    </div></div></div>`;
                }
                break;
            }
        }
    })
}
CourseDetails()

//  <div class="accordion-item">
//     <h2 class="accordion-header" id="headingOne">
//        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
//                        Week1 Day1
//        </button>
//     </h2>
//    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
//        <div class="accordion-body">
//             <ul><li>Introduction</li>
//                 <li>Audio</li>
//                 <li>Video</li>
//                 </ul> </div>
//                 </div>
//                 </div>
function addunits(cnam,bnam) {
    var units = "";
    for (let i = 0; i < unitsData.length; i++) {
        const tempkeys = Object.keys(unitsData[i]);
        const temp = Object.values(unitsData[i]);
        for(let j=0; j<tempkeys.length; j++){
            if(cnam===tempkeys[j]){
                for (let k=0; k<temp[j].length; k++) {
                    console.log(temp[j][k]);
                    if(temp[j][k].ModuleName===bnam){
                        console.log(temp[j][k].UnitName);
                        const tempunit = Object.keys(temp[j][k].UnitName);
                        const tempcontent = Object.values(temp[j][k].UnitName);
                        for(let m=0; m<tempunit.length; m++){
                            units+=`<li>${tempunit[m]}</li>`;

                        }
                        break;
                    }
                }
            }
        }
    }
console.log(units);
return units;
}
