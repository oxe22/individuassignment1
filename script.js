// Current Year in Footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Real-time Clock
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const dateString = now.toLocaleDateString();
    
    const timeDisplays = document.querySelectorAll('#time-display');
    timeDisplays.forEach(display => {
        display.textContent = `${dateString} | ${timeString}`;
    });
}
setInterval(updateTime, 1000);
updateTime();

// Image Slider (if multiple images)
const images = ['designer.jpg', 'designer2.jpg', 'designer3.jpg']; // Add your image filenames
let currentImageIndex = 0;
const mainImage = document.getElementById('main-image');
const imageCounter = document.getElementById('image-counter');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function updateImage() {
    if (images.length > 1) {
        mainImage.src = `images/${images[currentImageIndex]}`;
        imageCounter.textContent = `${currentImageIndex + 1}/${images.length}`;
    } else {
        document.querySelector('.image-controls').style.display = 'none';
    }
}

prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
});

nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
});

updateImage();

// Accordion
const accordionBtns = document.querySelectorAll('.accordion-btn');
accordionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        const content = btn.nextElementSibling;
        content.classList.toggle('show');
    });
});

// Progress Bar Animation
function animateProgressBar() {
    const progress = document.querySelector('.progress');
    const progressText = document.getElementById('progress-text');
    let width = 25;
    const targetWidth = 100; // Set your target percentage
    
    const interval = setInterval(() => {
        if (width >= targetWidth) {
            clearInterval(interval);
        } else {
            width++;
            progress.style.width = `${width}%`;
            progress.textContent = `${width}%`;
            progressText.textContent = `I've completed ${width}% of my journey to becoming a professional designer`;
        }
    }, 50);
}

// Start animation when the steps page is loaded
if (document.querySelector('.progress-bar')) {
    setTimeout(animateProgressBar, 1000);
}

// Resource Search and Filter
if (document.getElementById('resource-search')) {
    const searchInput = document.getElementById('resource-search');
    const searchBtn = document.getElementById('search-btn');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const resourceCards = document.querySelectorAll('.resource-card');
    
    // Search functionality
    searchBtn.addEventListener('click', filterResources);
    searchInput.addEventListener('keyup', filterResources);
    
    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterResources();
        });
    });
    
    function filterResources() {
        const searchTerm = searchInput.value.toLowerCase();
        const filterValue = document.querySelector('.filter-btn.active').dataset.filter;
        
        resourceCards.forEach(card => {
            const cardText = card.textContent.toLowerCase();
            const cardCategory = card.dataset.category;
            
            const matchesSearch = cardText.includes(searchTerm);
            const matchesFilter = filterValue === 'all' || cardCategory === filterValue;
            
            if (matchesSearch && matchesFilter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
}

// Newsletter Form
if (document.getElementById('newsletter-form')) {
    const newsletterForm = document.getElementById('newsletter-form');
    const formMessage = document.getElementById('form-message');
    
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('newsletter-email').value;
        
        // Simulate form submission
        formMessage.textContent = 'Thank you for subscribing!';
        formMessage.className = 'success';
        formMessage.style.display = 'block';
        
        // Reset form
        newsletterForm.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    });
}

// CTA Button Animation
if (document.getElementById('cta-button')) {
    const ctaButton = document.getElementById('cta-button');
    
    ctaButton.addEventListener('click', () => {
        window.location.href = 'steps.html';
    });
    
    // Add pulse animation
    setInterval(() => {
        ctaButton.style.transform = 'scale(1.05)';
        setTimeout(() => {
            ctaButton.style.transform = 'scale(1)';
        }, 500);
    }, 3000);
}

// Timeline Item Details
const detailBtns = document.querySelectorAll('.details-btn');
detailBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const content = btn.parentElement.querySelector('p');
        content.classList.toggle('show-details');
        
        if (content.classList.contains('show-details')) {
            btn.textContent = 'Hide Details';
        } else {
            btn.textContent = 'View Details';
        }
    });
});