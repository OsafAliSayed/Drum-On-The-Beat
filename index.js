window.addEventListener('keydown', e => {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    //if audio doesn't exist exit the function
    if (!audio) return;
    
    //reset audio before playing 
    audio.currentTime = 0;

    //play the audio and animation
    audio.play();
    key.classList.add("playing");
    
    // we can also use this code to undo the animation but the other is not dependent on transition time
    setTimeout(() => {
        key.classList.remove("playing");
    }, 70);
});

//this code can also be used for removing animation but leads to a bug
//getting all the keys, for each key we check for transition end
// const keys = document.querySelectorAll(".key");
// keys.forEach(key => key.addEventListener('transitionend', e => {
//     //skip the iteration that does'nt have animation
//     if(e.propertyName !== 'transform') return;

//     //remove playing class to undo animation
//     key.classList.remove("playing");
// }));