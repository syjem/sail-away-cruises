document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".custom-header-menu-toggle");
  const mobileNavMenu = document.querySelector(
    ".custom-header-mobile-nav-menu "
  );

  menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("is-active");

    if (menuButton.classList.contains("is-active")) {
      mobileNavMenu.style.display = "flex";
    } else {
      mobileNavMenu.style.display = "none";
    }
  });
});
