// splash screen 
window.addEventListener("load", () => {
      const splash = document.querySelector(".splash");
      const content = document.querySelector("nav");

      // Keep splash for 2.5s then hide
      setTimeout(() => {
        splash.classList.add("hide");
        content.classList.add("show");
        document.body.style.overflow = "auto"; // enable scrolling again
      }, 2500);
});

const sideMenu = document.querySelector("#sideMenu");

function openMenu(){
    sideMenu.style.right = "0";
}

function closeMenu(){
    sideMenu.style.right = "-300px";
}

window.addEventListener("scroll", function(){
    const nav = document.querySelector("nav");
    const navLinks = document.querySelector("nav ul");
    if(this.scrollY > 50){
        nav.classList.add("bg-white", "bg-opacity-50",'backdrop-blur-lg', 'shadow-sm');
        navLinks.classList.remove('bg-white', 'bg-opacity-50','shadow-sm');
    }
    else{
        nav.classList.remove("bg-white", "bg-opacity-50",'backdrop-blur-lg', 'shadow-sm');
        navLinks.classList.add('bg-white', 'bg-opacity-50','shadow-sm');
    }
});

// Dark and Light mode toggle
const modeToggle = document.querySelector('.mode');
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    modeToggle.innerHTML = document.body.classList.contains('dark') ? '<img src="./images/sun_icon.png" class="w-6" alt="">' : '<img src="./images/moon_icon.png" class="w-6" alt="">';
});