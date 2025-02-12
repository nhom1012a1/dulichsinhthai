//Nút menu
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector(".close-btn");

    // Mở menu khi nhấn nút menu
    menuToggle.addEventListener("click", function () {
        sidebar.classList.add("active");
    });

    // Đóng menu khi nhấn nút X
    closeBtn.addEventListener("click", function () {
        sidebar.classList.remove("active");
    });

    // Đóng menu khi nhấn ngoài sidebar
    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
            sidebar.classList.remove("active");
        }
    });
});



// Nút mũi tên quay về đầu trang
const scrollToTopButton = document.getElementById('scrollToTop');
// Hiện nút khi cuộn xuống
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});
// Cuộn lên đầu trang khi bấm nút
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});