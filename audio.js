onload = () => {
    let fireSound = new Audio("sounds/bonfire-audio.wav");
    fireSound.volume = 1;
    fireSound.play();

    setTimeout(() => {
        close();
    }, 10000);
};
