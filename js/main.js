// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-slate-900/90', 'shadow-lg');
        navbar.classList.remove('glass'); 
        // We might want to keep glass but make it darker
        navbar.style.backdropFilter = "blur(20px)";
        navbar.style.background = "rgba(15, 23, 42, 0.9)";
    } else {
        navbar.classList.add('glass');
        navbar.classList.remove('bg-slate-900/90', 'shadow-lg');
        navbar.style.backdropFilter = "blur(12px)";
        navbar.style.background = "rgba(15, 23, 42, 0.6)";
    }
});

// Simple form handling (just a visual feedback for now)
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalText = btn.innerText;
        
        btn.innerText = 'Sending...';
        btn.disabled = true;
        
        setTimeout(() => {
            btn.innerText = 'Sent Successfully!';
            btn.classList.add('bg-green-600');
            btn.classList.remove('bg-blue-600');
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.disabled = false;
                btn.classList.add('bg-blue-600');
                btn.classList.remove('bg-green-600');
                form.reset();
            }, 3000);
        }, 1500);
    });
});
