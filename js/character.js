document.addEventListener('DOMContentLoaded', () => {
    const hackee = document.querySelector('.character');
    let bottom = 0;
    let gravity = 0.9;
    let isJumping = false;

    function jump() {
        if (isJumping) return;
        let timerUpId = setInterval( function() {
            if (bottom > 250) {
                clearInterval(timerUpId);

                let timerDownId = setInterval( function() {
                    if (bottom < 10) {
                        clearInterval(timerDownId);
                        isJumping = false; 
                    }
                    bottom -= 5;
                    hackee.style.bottom = bottom + 'px';
                }, 20)
            }
            isJumping = true; // can only jump once she reaches to bottom
            bottom += 30;
            bottom *= gravity;
            hackee.style.bottom = bottom + 'px';
        }, 20);
    }

    // assign functions to keycodes
    function control(e) {
        if (e.keyCode === 38) { // up arrow
            jump();
        }
    }

    document.addEventListener('keydown', control);
});