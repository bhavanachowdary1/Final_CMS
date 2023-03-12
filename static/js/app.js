const icon = document.getElementById('icon');
const p_details = document.querySelector('.profile_details');
p_details.classList.add('disabled');
icon.addEventListener('click',function(){
    console.log('disabled');
    p_details.classList.toggle('disabled');
    return false;
    
})

// const search = document.getElementById('inputbox');
// // console.log(search)
// search.addEventListener('input',function(){
//     filtering(search.value)
//     // console.log(search.value)
// })

async function filtering(search){
    const data= await fetch('./data.json');
    const jsondata= await data.json();
    let matches=jsondata.filter(match=>{
        let regex = new RegExp(`^${search}`,'gi');
        return match.coursename.match(regex)
    })
    displayData(matches)
}


async function fetchdata(){
    const data= await fetch('./data.json');
    const jsondata= await data.json();
    // console.log(jsondata);
    return jsondata;
}
// console.log(fetchdata())

function display(){
    fetchdata().then(response=>{
    displayData(response)
         })
    }

function displayData(args){
    let card = document.getElementById('row');
    card.innerHTML=''
    for(let i=0; i<args.length; i++){
        // console.log(args[i])
        card.innerHTML+=` 
        <div class="col-md-6 col-lg-4">
                <div class="card h-100 w-100">
                <img src="${args[i].image}" alt="image" >
                <div class="card-body">
                    <h5 class="card-title" style="text-align: center;">${args[i].coursename}</h5>
                    <p class="card-text">${args[i].startedon}</p>
                    <a href="#" class="btn btn-primary">Edit course</a>
                </div>
            </div> 
        </div>` 
    }
}
