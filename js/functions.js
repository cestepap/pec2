let parcelAdd = document.querySelector('#parcel-add');
let parcelVideo = document.querySelector('#parcel-video');
let babelAdd = document.querySelector('#babel-add');
let babelVideo = document.querySelector('#babel-video');
let jsAdd = document.querySelector('#js-add');
let jsVideo = document.querySelector('#js-video');

function toggle(id){
    var element = document.getElementById(id);
    if(element.classList.contains('toggle-content'))
    {
        element.classList.remove("toggle-content");
    }else{
        element.classList.add("toggle-content");
    }
}

if (parcelAdd != null) {
    parcelAdd.addEventListener("click", event => {
        event.preventDefault();
        toggle(parcelVideo.id)
    })
}

if (babelAdd != null) {
    babelAdd.addEventListener("click", event => {
        event.preventDefault();
        toggle(babelVideo.id)
    })
}

if (jsAdd != null) {
    jsAdd.addEventListener("click", event => {
        event.preventDefault();
        toggle(jsVideo.id)
    })
}