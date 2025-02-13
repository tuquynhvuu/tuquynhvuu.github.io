let projects = document.querySelectorAll('.project');

projects.forEach(project => {
    let detailsBox = project.querySelector('.project-details');
    let mediaBox = project.querySelector('.media-box');

    detailsBox.addEventListener('click', () => {
        let parent = detailsBox.parentNode;

        if (detailsBox.nextElementSibling === mediaBox) {
            parent.insertBefore(mediaBox, detailsBox);
        } else {
            parent.insertBefore(detailsBox, mediaBox);
        }
    });
});


// document.getElementById('nav-toggle').addEventListener('click', function() {
//     document.querySelector('nav ul').classList.toggle('show');
// });


const pastelToggle = document.getElementById('colorful-toggle');

pastelToggle.addEventListener('click', () => {
    document.body.classList.toggle('pastel-mode');
    const header = document.querySelector('header');
    const projects = document.querySelectorAll('.project');
    const details = document.querySelectorAll('.project-details');
    const descriptions = document.querySelectorAll('.description');
    const footer = document.querySelector('footer');
    const h1 = document.querySelector('main h1');
    const navLinks = document.querySelector('nav');

    header.classList.toggle('pastel-mode');
    projects.forEach(project => project.classList.toggle('pastel-mode'));
    details.forEach(detail => detail.classList.toggle('pastel-mode'));
    descriptions.forEach(description => description.classList.toggle('pastel-mode'));
    footer.classList.toggle('pastel-mode');
    h1.classList.toggle('pastel-mode');
    navLinks.classList.toggle('pastel-mode');

    pastelToggle.textContent = document.body.classList.contains('pastel-mode')
        ? 'Black and White Version'
        : 'Color Version';
});

