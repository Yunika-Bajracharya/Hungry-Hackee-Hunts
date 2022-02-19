document.addEventListener('DOMContentLoaded', () => {
    const hackee = document.querySelector('.character');
    let right = 0;
    let bottom = 0;

    function jump() {
        if (bottom > 350) return;  
            bottom += 25;
            right += 50; 
            hackee.style.bottom = bottom + 'px';
            hackee.style.left =  right + 'px'; 
    }

    // assign functions to keycodes
    function control(e) {
        if (e.keyCode === 32) { // space bar
            jump();
        }
    }

    document.addEventListener('keydown', control);
});