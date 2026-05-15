document.addEventListener('DOMContentLoaded', () => {
    const reservationForm = document.getElementById('reservation-form');
    
    // 1. WhatsApp Reservation Logic
    if (reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const pax = document.getElementById('pax').value;
            
            // Updated with the actual restaurant WhatsApp number
            // Format: 62XXXXXXXXXXX (No +, -, or spaces)
            const phoneNumber = "6281999777283"; 
            
            // Format the message
            const message = `안녕하세요, 화문(Hwamoon) 예약을 요청합니다.
            
성함: ${name}
날짜: ${date}
시간: ${time}
인원: ${pax}명

확인 부탁드립니다. 감사합니다!`;
            
            // Encode message for URL
            const encodedMessage = encodeURIComponent(message);
            
            // WhatsApp API Link
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            
            // Open WhatsApp in a new tab
            window.open(whatsappUrl, '_blank');
        });
    }

    // 2. Scroll Animation (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-up');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Apply animation to section titles and menu items
    const animatedElements = document.querySelectorAll('.section-title, .menu-item');
    animatedElements.forEach(el => {
        // Initial state before intersection
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });
});

// Helper for smoother animation trigger
document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '0.5rem 5%';
        header.style.backgroundColor = 'rgba(26, 26, 26, 0.98)';
    } else {
        header.style.padding = '1rem 5%';
        header.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
    }
});
