let parcelAdd = document.querySelector('#parcel-add');
let parcelVideo = document.querySelector('#parcel-video');
let babelAdd = document.querySelector('#babel-add');
let babelVideo = document.querySelector('#babel-video');
let jsAdd = document.querySelector('#js-add');
let jsVideo = document.querySelector('#js-video');

let vidJS = document.querySelector('#vid_js');
let vidParcel = document.querySelector('#vid_parcel');
let vidBabel = document.querySelector('#vid_babel');

let titleVidParcel = document.querySelector('.detalle-add h3'); 


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
            titleVidParcel.innerHTML = 'OCULTAR VIDEO';
        }else{
            element.classList.remove(classNameB);
            element.classList.add(className);
            titleVidParcel.innerHTML = 'MOSTRAR VIDEO';
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


// YouTube iFrames


let vb = document.getElementById('vbabel');
let ib = document.getElementById('ibabel');

if (ib != null) {
ib.addEventListener("click", event => {
    event.preventDefault();
    ib.setAttribute('style','display:none');
    let divbabel = document.createElement("div");
    divbabel.classList.add('video-fluido');
    let iframebabel = document.createElement("iframe");
    iframebabel.setAttribute('src', 'https://www.youtube.com/embed/ahh65GQz74g')
    iframebabel.classList.add('video-fluido-item');
    divbabel.append(iframebabel);
    vb.append(divbabel);
})
}

let vj = document.getElementById('vjavascript');
let ij = document.getElementById('ijavascript');

if (ij != null) {
ij.addEventListener("click", event => {
    event.preventDefault();
    ij.setAttribute('style','display:none');
    let divjavascript = document.createElement("div");
    divjavascript.classList.add('video-fluido');
    let iframejavascript = document.createElement("iframe");
    iframejavascript.setAttribute('src', 'https://www.youtube.com/embed/_y9oxzTGERs')
    iframejavascript.classList.add('video-fluido-item');
    divjavascript.append(iframejavascript);
    vj.append(divjavascript);
})
}

let vp = document.getElementById('vparcel');
let ip = document.getElementById('iparcel');

if (ip != null) {
ip.addEventListener("click", event => {
    event.preventDefault();
    ip.setAttribute('style','display:none');
    let divparcel = document.createElement("div");
    divparcel.classList.add('video-fluido');
    let iframeparcel = document.createElement("iframe");
    iframeparcel.setAttribute('src', 'https://www.youtube.com/embed/OK6akGZCC88')
    iframeparcel.classList.add('video-fluido-item');
    divparcel.append(iframeparcel);
    vp.append(divparcel);
})
}
// youtube iframes
