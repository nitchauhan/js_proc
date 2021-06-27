console.log("hi it is my cv")



//record the ddta

const data = [
    {
        name: 'nissstin',
        age: 21,
        city: 'ahemdabad',
        language: 'python',
        framework: 'flast',
        image: 'https://randomuser.me/api/portraits/men/70.jpg'

    },
    {
        name: 'rohandas',
        age: 21,
        city: 'ahemdabad',
        language: 'python',
        framework: 'flast',
        image: 'https://randomuser.me/api/portraits/men/71.jpg'
    },
    {
        name: 'nit chauhan',
        age: 31,
        city: 'syurat',
        language: 'java',
        framework: 'flast',
        image: 'https://randomuser.me/api/portraits/men/80.jpg'
    },
    {
        name: 'ggnit',
        age: 21,
        city: 'ahemdabad',
        language: 'java',
        framework: 'flast',
        image: 'https://randomuser.me/api/portraits/men/76.jpg'
    },
    {
        name: 'nitin',
        age: 21,
        city: 'ahemdabad',
        language: 'python',
        framework: 'flast',
        image: 'https://randomuser.me/api/portraits/men/77.jpg'
    },
    {
        name: 'nitinchauhan',
        age: 21,
        city: 'ahemdabad',
        language: 'python',
        framework: 'flast',
        image: 'https://randomuser.me/api/portraits/men/78.jpg'
    },
    {
        name: 'ninc',
        age: 21,
        city: 'ahemdabad',
        language: 'python',
        framework: 'flast',
        image: 'https://randomuser.me/api/portraits/women/79.jpg'
    },
    {
        name: 'nin',
        age: 21,
        city: 'ahemdabad',
        language: 'python',
        framework: 'flast',
        image: 'https://randomuser.me/api/portraits/women/70.jpg'
    },
]


//cv iterator

function cviterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex<profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    };
}


const candidate = cviterator(data);
nextcv();
goBack();
//button

const next = document.getElementById('next');
next.addEventListener('click', nextcv);

function nextcv() {
    const currentcandidate = candidate.next().value;
    let image = document.getElementById('imge');
    let profile = document.getElementById('profile');
    if(currentcandidate != undefined){

    image.innerHTML = ` <img src ='${currentcandidate.image}'>`;

    profile.innerHTML = `<ul class="list-group">
        <ul class="list-group">
                <li class="list-group-item">Name: ${currentcandidate.name}</li>
                <li class="list-group-item">${currentcandidate.age}years old now</li>
                <li class="list-group-item">lives in${currentcandidate.city}</li>
                <li class="list-group-item">primaryli works on${currentcandidate.language}</li>
                <li class="list-group-item">with ${currentcandidate.framework}</li>
        </ul>`
}
else{
    alert('end of candidate appliactions');
    window.location.reload();

}
}
//back-button


const back = document.getElementById('back');
back.addEventListener('onclick',goBack());
function goBack() {
    // e.preventDefault?
    const currentcandidate = candidate.next().value;
    let image = document.getElementById('imge');
    let profile = document.getElementById('profile');
    if(currentcandidate != undefined){

    image.innerHTML = ` <img src ='${currentcandidate.image}'>`;

    profile.innerHTML = `<ul class="list-group">
        <ul class="list-group">
                <li class="list-group-item">Name: ${currentcandidate.name}</li>
                <li class="list-group-item">${currentcandidate.age}years old now</li>
                <li class="list-group-item">lives in${currentcandidate.city}</li>
                <li class="list-group-item">primaryli works on${currentcandidate.language}</li>
                <li class="list-group-item">with ${currentcandidate.framework}</li>
        </ul>`
}
else{
    alert('end of candidate appliactions');
    // prompt("enter your name")+("cc")
    window.location.reload();

}
}

  