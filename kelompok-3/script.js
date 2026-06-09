const teamData = [
    {
        nama: "Inna Putri Meida",
        nim: "23051130027",
        avatar: "https://ui-avatars.com/api/?name=Inna+Putri&background=0d6efd&color=fff&size=256"
    },
    {
        nama: "Rajendriya D",
        nim: "23051130010",
        avatar: "https://ui-avatars.com/api/?name=Rajendriya+D&background=0d6efd&color=fff&size=256"
    },
    {
        nama: "Rigel Nadimaisy. A",
        nim: "23051130024",
        avatar: "https://ui-avatars.com/api/?name=Rigel+Nadimaisy&background=0d6efd&color=fff&size=256"
    },
    {
        nama: "Muhammad Damar. Z. A",
        nim: "23051130033",
        avatar: "https://ui-avatars.com/api/?name=Muhammad+Damar&background=0d6efd&color=fff&size=256"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const teamContainer = document.getElementById("team-container");

    if (teamContainer) {
        teamData.forEach(member => {
            const card = document.createElement("div");
            card.className = "team-card";
            card.innerHTML = `
                <div class="team-avatar-wrapper">
                    <img src="${member.avatar}" alt="Foto Profil ${member.nama}">
                </div>
                <h3>${member.nama}</h3>
                <p class="nim">NIM. ${member.nim}</p>
            `;
            teamContainer.appendChild(card);
        });
    }

    // JavaScript Logic Toggle Hamburger Menu Navbar
    const menuToggleBtn = document.getElementById("mobile-menu-btn");
    const navMenuLinks = document.getElementById("nav-menu-links");

    if (menuToggleBtn && navMenuLinks) {
        menuToggleBtn.addEventListener("click", () => {
            menuToggleBtn.classList.toggle("open");
            navMenuLinks.classList.toggle("active");
        });

        const links = navMenuLinks.querySelectorAll("a");
        links.forEach(link => {
            link.addEventListener("click", () => {
                menuToggleBtn.classList.remove("open");
                navMenuLinks.classList.remove("active");
            });
        });
    }

    // JavaScript Handler Modal Pop-up Gambar
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const closeModalBtn = document.querySelector(".close-modal");
    const triggers = document.querySelectorAll(".modal-trigger");

    triggers.forEach(trigger => {
        trigger.addEventListener("click", function () {
            const targetImageSrc = this.getAttribute("data-img");
            if (modal && modalImg) {
                modal.style.display = "block";
                modalImg.src = targetImageSrc;
            }
        });
    });

    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Handler Animasi IntersectionObserver
    const animatedElements = document.querySelectorAll('.welcome-header, .about-glass-card, .team-card, .video-glass-container, .btn-youtube-wrapper, .media-glass-box, .glass-pill, .hero-mockup-img');

    const intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                intersectionObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.02,
        rootMargin: "0px 0px -10px 0px"
    });

    animatedElements.forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
        element.style.transition = "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
        intersectionObserver.observe(element);
    });
});