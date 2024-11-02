// Function to handle when the LogIn button is clicked
function toggleLogIn() {
    var login = document.getElementById('js_login');
    var signup = document.getElementById('js_signup');

    // Check and change display status
    if (login.style.display === 'flex') {
        login.style.display = 'none'; // Hide LogIn if it’s currently displayed
    } else {
        login.style.display = 'flex'; // Display LogIn
        signup.style.display = 'none'; // Hide SignUp if it’s currently displayed
    }
}

// Function to handle when the SignUp button is clicked
function toggleSignUp() {
    var login = document.getElementById('js_login');
    var signup = document.getElementById('js_signup');

    // Check and change display status
    if (signup.style.display === 'flex') {
        signup.style.display = 'none'; // Hide SignUp if it’s currently displayed
    } else {
        signup.style.display = 'flex'; // Display SignUp
        login.style.display = 'none'; // Hide LogIn if it’s currently displayed
    }
}

function toggleMenu() {
    // In this function we can add a detail. Whenever i click on the ti-menu can change also the color of the navbar as a transparent black like the dropdown menu
    const dropdownMenu = document.getElementById("dropdown-menu");
    const navbar = document.querySelector(".header-mobile");

    dropdownMenu.classList.toggle("show");

    const isDarkMode = document.body.classList.contains('dark-theme');

    if(dropdownMenu.classList.contains("show")){
        navbar.style.backgroundColor = isDarkMode ? "#444" : "#000000e8";
    }else{
        navbar.style.backgroundColor = "";
    }
    
}

// Optional: Close the dropdown if a link inside it is clicked
document.querySelectorAll('#dropdown-menu a').forEach(link => {
    link.addEventListener('click', () => {
        const dropdownMenu = document.getElementById("dropdown-menu");
        dropdownMenu.classList.remove("show");
    });
});

// Theme toggle functionality
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    toggleButton.textContent = body.classList.contains('dark-theme') ? '🌜' : '🌞';
});
//Add a js script with a function that changes the color of the nav-bar each time we find a new color

        window.addEventListener('scroll' , function(){
            const headerNav = document.querySelector('.header-nav');

            if(window.scrollY > 0){
                headerNav.classList.add('scrolled');
            }else{
                headerNav.classList.remove('scrolled');
            }
        });
//This script controls the dynamic behavior of the nav links underline styling.
        //Get all nav links
        const navLinks = document.querySelectorAll('.nav li a');

        //Adding click event listener to each link
        navLinks.forEach(link => {
            link.addEventListener('click', function(event){
                //event.preventDefault();

            //Removing 'active' class from all links
            navLinks.forEach(link => link.classList.remove('active'));

            //Adding 'active' class only to the clicked link as being active
            this.classList.add('active');
            });
        });

        