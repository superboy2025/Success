// Smooth scrolling to top functionality
        const scrollButton = document.getElementById('scrollButton');

        scrollButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Dynamic greeting based on time of day
        const heroHeader = document.querySelector('.hero h1');
        const hours = new Date().getHours();
        let greeting;

        if (hours < 12) {
            greeting = 'Good Morning!';
        } else if (hours < 18) {
            greeting = 'Good Afternoon!';
        } else {
            greeting = 'Good Evening!';
        }

        heroHeader.textContent = `${greeting} Welcome to My Professional Blog`;