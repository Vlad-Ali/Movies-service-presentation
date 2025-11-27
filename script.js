(function(){
    const previewBtn = document.getElementById('previewBtn');

    previewBtn.addEventListener('click', () => {
        document.body.classList.toggle('glow');
        previewBtn.textContent = document.body.classList.contains('glow') ? 'Glow: ON' : 'Preview glow';
    });

    document.addEventListener('DOMContentLoaded', () => {
        const imgs = Array.from(document.querySelectorAll('img'));
        imgs.forEach(img => {
            if (img.complete) img.classList.add('loaded');
            else img.addEventListener('load', () => img.classList.add('loaded'));
        });
    });

    document.addEventListener('keydown', (e) => {
        if ((e.key === 'g' || e.key === 'G') && (e.ctrlKey || e.metaKey)) {
            document.body.classList.toggle('glow');
        }
    });

})();

const viewer = document.getElementById("imgViewer");
const viewerImg = document.getElementById("viewerImg");

document.querySelectorAll(".screens img").forEach(img => {
    img.addEventListener("click", () => {
        viewerImg.src = img.src;
        viewer.classList.add("active");
    });
});

viewer.addEventListener("click", () => {
    viewer.classList.remove("active");
});
