// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add animation class when element is in viewport
function animateSkills() {
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        if (isInViewport(skill)) {
            skill.classList.add('animate__animated', 'animate__fadeInUp');
        }
    });
}

// Event listener for scroll to trigger animation
window.addEventListener('scroll', animateSkills);
