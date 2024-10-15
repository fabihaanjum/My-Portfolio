document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.skill').forEach(skill => {
        const percentage = skill.getAttribute('data-percentage');
        skill.querySelector('.skill-percentage').style.setProperty('--percentage', percentage + '%');
    });
});

