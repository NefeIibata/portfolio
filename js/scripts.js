// document.querySelector('.about-left').addEventListener('mousemove', function (e) {
//     let x = (e.clientX / window.innerWidth) - 0.5;
//     let y = (e.clientY / window.innerHeight) - 0.5;

//     const sphere = document.querySelector('.sphere');
//     sphere.style.transform = `rotateX(${y * 20}deg) rotateY(${x * 20}deg)`;

//     const icons = document.querySelectorAll('.icon');
//     icons.forEach((icon, index) => {
//         const offset = 40 + (index * 20); 
//         icon.style.transform = `rotateY(calc(${index} * 40deg)) translateZ(${120 + offset}px) translateY(${y * 100 - offset}px)`;
//     });
// });


document.querySelector('.about-left').addEventListener('mousemove', function (e) {
    let x = (e.clientX / window.innerWidth) - 0.5;
    let y = (e.clientY / window.innerHeight) - 0.5;

    const sphere = document.querySelector('.sphere');
    sphere.style.transform = `rotateX(${y * 40}deg) rotateY(${x * 40}deg)`;
});