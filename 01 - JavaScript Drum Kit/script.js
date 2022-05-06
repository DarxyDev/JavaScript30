allKeys = document.querySelectorAll(".key");
allKeys.forEach(element => {
    element.addEventListener('click', onActive);
})
document.addEventListener('keydown', onActive);

function onActive(element){ 
    const dKey = element.key.charCodeAt(0) - 32;
    const audio = getAudioByKey(dKey);
    console.log(audio);
    audio.play();
}

const audioSet = document.getElementsByTagName('audio');
function getAudioByKey(key){
    for(let i = 0; i < audioSet.length; i++) {
        if(audioSet[i].getAttribute('data-key') == key) return audioSet[i];
    }
}