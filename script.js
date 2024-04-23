// Function to change background color
function changeBackgroundColor() {
    const colors = ['#ff7f7f', '#7fccff', '#7fff7f', '#ff7fff', '#ffff7f'];
    let currentColorIndex = 0;
    setInterval(() => {
        document.body.style.backgroundColor = colors[currentColorIndex];
        currentColorIndex++;
        if (currentColorIndex >= colors.length) currentColorIndex = 0;
    }, 4000);
}

// Function to animate images
function animateImages() {
    const imgs = document.querySelectorAll('.image-container img');
    imgs.forEach(img => {
        let x = Math.floor(Math.random() * (window.innerWidth - img.width));
        let y = Math.floor(Math.random() * (window.innerHeight - img.height));
        img.style.left = x + 'px';
        img.style.top = y + 'px';
    });
}

window.onload = function() {
    changeBackgroundColor();
    setInterval(animateImages, 5000); // Change image positions every 5 seconds
};
