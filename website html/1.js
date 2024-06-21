document.addEventListener("DOMContentLoaded", function() {
    var footer = document.getElementById('footer');

    window.addEventListener('scroll', function() {
        console.log("Scrolling...");
        if (isFooterVisible()) {
            console.log("Footer is visible!");
            footer.classList.remove('hidden');
        } else {
            console.log("Footer is not visible.");
            footer.classList.add('hidden');
        }
    });

    function isFooterVisible() {
        return window.innerHeight >= document.body.offsetHeight - window.scrollY;
    }
});
