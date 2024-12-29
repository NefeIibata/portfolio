document.querySelector('.about-left').addEventListener('mousemove', function (e) {
    let x = (e.clientX / window.innerWidth) - 0.5;
    let y = (e.clientY / window.innerHeight) - 0.5;

    const sphere = document.querySelector('.sphere');
    sphere.style.transform = `rotateX(${y * 40}deg) rotateY(${x * 40}deg)`;
});
