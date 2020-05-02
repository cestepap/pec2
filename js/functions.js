let parcelAdd = document.querySelector('#parcel-add');
let parcelVideo = document.querySelector('#parcel-video');
let babelAdd = document.querySelector('#babel-add');
let babelVideo = document.querySelector('#babel-video');
let jsAdd = document.querySelector('#js-add');
let jsVideo = document.querySelector('#js-video');


let vidJS = document.querySelector('#vid_js');
let vidParcel = document.querySelector('#vid_parcel');
let vidBabel = document.querySelector('#vid_babel');



function toggle(id, className){
    var element = document.getElementById(id);
    if(element.classList.contains(className))
    {
        element.classList.remove(className);
    }else{
        element.classList.add(className);
    }
}

function switchClass(id, className, classNameB){
        var element = document.getElementById(id);
        if(element.classList.contains(className))
        {
            element.classList.remove(className);
            element.classList.add(classNameB);
        }else{
            element.classList.remove(classNameB);
            element.classList.add(className);
        }
    }

if (parcelAdd != null) {
    parcelAdd.addEventListener("click", event => {
        event.preventDefault();
        toggle(parcelVideo.id, 'toggle-content')
        switchClass(vidParcel.id, 'fa-plus-circle', 'fa-minus-circle');

    })
}

if (babelAdd != null) {
    babelAdd.addEventListener("click", event => {
        event.preventDefault();
        toggle(babelVideo.id, 'toggle-content')
        switchClass(vidBabel.id, 'fa-plus-circle', 'fa-minus-circle');

    })
}

if (jsAdd != null) {
    jsAdd.addEventListener("click", event => {
        event.preventDefault();
        toggle(jsVideo.id, 'toggle-content');
        switchClass(vidJS.id, 'fa-plus-circle', 'fa-minus-circle');
    })
}
