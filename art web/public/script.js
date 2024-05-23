// Function to reveal elements on scroll
function revealOnScroll() {
  revealElements('.reveal', 150);
}

// Function to reveal elements when they come into view
function revealElements(selector, offset) {
  const elements = document.querySelectorAll(selector);
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    if (elementPosition < window.innerHeight - offset) {
      element.classList.add('active');
    } else {
      element.classList.remove('active'); // Ensure element is hidden when not in viewport
    }
  });
}

// Function to fade in elements when they come into view
function fadeInElements(elementSelector, offset) {
  const elements = document.querySelectorAll(elementSelector);
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    if (elementPosition < window.innerHeight - offset) {
      element.style.opacity = 1;
    } else {
      element.style.opacity = 0; // Set opacity to 0 if not in viewport
    }
  });
}

// Function to fade in logo when it comes into view
function fadeInLogo() {
  const logoElement = document.querySelector('.fadein img');
  const elementPosition = logoElement.getBoundingClientRect().top;
  if (elementPosition < window.innerHeight - 100) {
    logoElement.style.opacity = 1;
  } else {
    logoElement.style.opacity = 0; // Optional: Set opacity to 0 if not in viewport
  }
}

// Call the function to reveal elements on scroll
document.addEventListener('DOMContentLoaded', function () {
  revealOnScroll(); // Call on page load to handle initial position
  window.addEventListener('scroll', revealOnScroll); // Call on scroll to handle dynamic position
});

// Call the function to fade in logo on page load and scroll
document.addEventListener('DOMContentLoaded', function () {
  fadeInLogo(); // Call on page load to handle initial position
  window.addEventListener('scroll', fadeInLogo); // Call on scroll to handle dynamic position
});

// Call the function to fade in other elements on page load and scroll
document.addEventListener('DOMContentLoaded', function () {
  fadeInElements('.your-element-selector', 150); // Call on page load to handle initial position
  window.addEventListener('scroll', function() {
    fadeInElements('.your-element-selector', 150); // Call on scroll to handle dynamic position
  });
});




// Load navbar and footer using jQuery
$(function() {
  $("#navbar-placeholder").load("/public/navbar.html");
  $("#footer-placeholder").load("/public/footer.html");
});

// Close navbar on body click or tap
document.addEventListener("DOMContentLoaded", function() {
  document.body.addEventListener('click', closeNavbar);
  document.body.addEventListener('touchstart', closeNavbar);

  function closeNavbar(event) {
    if (window.innerWidth < 991) {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show') && !event.target.classList.contains('nav-link')) {
        document.querySelector('.navbar-toggler').click();
      }
    }
  }
});

// Function to handle card click event
function handleCardClick(event) {
  const cardId = event.target.id;
  window.location.href = `/subPage/subpage.html#${cardId}`;
}

// Add click event listener to each card
document.querySelectorAll('.send').forEach(card => {
  card.addEventListener('click', handleCardClick);
});

// Subpage script
document.addEventListener("DOMContentLoaded", function() {
  // Function to get card details from hash
  function getCardDetailsFromHash() {
    const hash = window.location.hash.substring(1);
    const cardDetails = {
      'card1': { title: 'Girl in Digital Harmony', content: 'A simple digital artwork portraying the peaceful presence of a girl, using vibrant colors and clean lines to convey her beauty and calmness.', imageUrl: '/arts/img22.png' },
      'card2': { title: 'Shadows of Tokyo: A Tokyo Ghoul Sketch', content: "A raw and evocative sketch capturing the essence of Tokyo Ghoul's dark and mysterious world, showcasing the interplay between humanity and monstrosity amidst the urban landscape of Tokyo", imageUrl: '/arts/img2.jpg'},
      'card3': { title: 'Innocence Captured: A Realistic Portrait of a Puppy', content: 'A hyper-realistic portrait of a young puppy, emphasizing its innocence and playful curiosity through meticulous detail and expressive elements.', imageUrl: '/arts/img4.jpg'},
      'card4': { title: 'Divine Bonds: Realistic Sketch of Bal Ram and Hanuman', content: 'A masterfully crafted sketch portraying the iconic figures of Bal Ram and Hanuman from Hindu mythology with striking realism, capturing their strength, determination, and divine presence in intricate detail.', imageUrl: '/arts/img6.jpg'},
      'card5': { title: "In the Jungle's Embrace: Realistic Tiger Sketch", content: "A serene sketch portraying a tiger nestled within the embrace of a tree's branches, illustrating the harmonious relationship between the majestic creature and its lush jungle habitat.", imageUrl: '/arts/img31.jpg'},
      'card6': { title: 'Majestic Grace: A Realistic Horse Sketch', content: 'A detailed sketch capturing the essence of a horse through its profile, emphasizing the graceful contours and unique features that define its beauty and spirit.', imageUrl: '/arts/img8.jpg' },
      'card7': { title: 'Innocence Unleashed: Sketch of a Dog', content: 'A heartwarming sketch capturing the innocence and purity of a dog, its gentle eyes and playful demeanor portrayed with tender strokes, evoking a sense of joy and companionship.', imageUrl: '/arts/dog.jpg' },
      'card8': { title: 'Silent Observer: Realistic Tiger Sketch', content: 'A captivating sketch portraying the quiet dignity of a tiger, poised and observant, capturing the essence of its strength and majesty with lifelike detail and expressive strokes.', imageUrl: '/arts/tiger1.jpg' },
      // Add more entries for additional cards
    };

    const { title, content, imageUrl, detail } = cardDetails[hash];
    const artTitleElement = document.querySelector('.art-info h1');
    const artImageElement = document.querySelector('.art-image');
    const artDescriptionElement = document.querySelector('.art-info p:nth-of-type(1)');
    const artDetailsElement = document.querySelector('.art-info p:nth-of-type(2)');

    artTitleElement.textContent = title;
    artImageElement.src = imageUrl;
    artDescriptionElement.textContent = content;
    artDetailsElement.textContent = detail;
  }

  // Call function to reveal elements on scroll
  window.addEventListener('scroll', function() {
    revealElements('.fadein img', 100);
    revealOnScroll();
  });

  // Call function to get card details from hash
  getCardDetailsFromHash();
});


// parallex
// Adjust these values as needed
let initialX = 0;
let initialY = 0;
let leftMovementFactor = 0.5;

window.addEventListener('load', function() {
  const parallax = document.querySelector('.parallax');
  initialX = 0;
  initialY = 0;
});

window.addEventListener('scroll', function() {
  const parallax = document.querySelector('.parallax');
  let scrollPosition = window.pageYOffset;
  let scrollSpeed;

  // Determine scroll speed based on media query
  if (window.matchMedia("(max-width: 1031px)").matches) {
    // Adjust scroll speed for smaller screens
    scrollSpeed = 7;
  } else {
    // Default scroll speed for larger screens
    scrollSpeed = 2;
  }

  let newX = initialX - scrollPosition / scrollSpeed;
  let newY = initialY - scrollPosition / scrollSpeed;
  newX -= leftMovementFactor * scrollPosition;

  parallax.style.backgroundPosition = `${newX}px ${newY}px`;
});





//left, right and center fade text

let fadeTriggered = false; // Flag to track if fade effect is triggered

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;

    const leftElement = document.querySelector('.fadein-left');
    const rightElement = document.querySelector('.fadein-right');
    const centerElement = document.querySelector('.fadein-center');

    const triggerOffset = window.innerHeight * 0.7; // Adjust the offset as needed

    // Check if elements are within the viewport
    const leftInView = leftElement.getBoundingClientRect().top <= triggerOffset;
    const rightInView = rightElement.getBoundingClientRect().top <= triggerOffset;
    const centerInView = centerElement.getBoundingClientRect().top <= triggerOffset;

    // Fade in elements when they enter the viewport
    if (leftInView) {
        leftElement.classList.add('show');
    } else {
        leftElement.classList.remove('show'); // Fade out when not in viewport
    }

    if (rightInView) {
        rightElement.classList.add('show');
    } else {
        rightElement.classList.remove('show'); // Fade out when not in viewport
    }

    if (centerInView) {
        if (!fadeTriggered) {
            setTimeout(function() {
                centerElement.classList.add('show');
                fadeTriggered = true; // Set flag to true to prevent multiple triggers
            }, 200); // Delay for 2 seconds
        }
    } else {
        centerElement.classList.remove('show'); // Fade out when not in viewport
        fadeTriggered = false; // Reset the flag
    }
});

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('contact-link').addEventListener('click', function (event) {
      event.preventDefault();
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('cta-button').addEventListener('click', function (event) {
      event.preventDefault();
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('service-link').addEventListener('click', function (event) {
      event.preventDefault();
      document.getElementById('content3').scrollIntoView({ behavior: 'smooth' });
  });
});


