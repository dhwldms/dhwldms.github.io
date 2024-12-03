window.onload = () => {
    const buttons = document.querySelectorAll('.vertical-buttons .button');
    
    buttons.forEach((button, index) => {
        setTimeout(() => {
            button.style.opacity = 1; // Make the button visible
            button.style.transform = 'translateY(0)'; // Move it to its original position
        }, 500 * index); // Delay each button's animation (500ms for each)
    });
};
