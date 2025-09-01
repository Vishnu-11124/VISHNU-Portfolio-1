// splash screen 
window.addEventListener("load", () => {
      const splash = document.querySelector(".splash");
      const content = document.querySelector(".content");

      // Keep splash for 2.5s then hide
      setTimeout(() => {
        splash.classList.add("hide");
        content.classList.add("show");
        document.body.style.overflow = "auto"; // enable scrolling again
      }, 2500);
});