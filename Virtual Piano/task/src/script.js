let keys = ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyW', 'KeyE', 'KeyT', 'KeyY', 'KeyU']
document.addEventListener('keypress', function(e){
    if (keys.includes(e.code)) {
        console.log(e.key.toUpperCase());
        let audio = new Audio('sound/'+e.code.replace("Key","")+'.mp3');
        audio.play();
    }
    else {
        console.log('Another key was pressed.');
    }
});