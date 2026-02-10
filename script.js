document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const popupOverlay = document.getElementById('popupOverlay');
    const standardPopup = document.getElementById('standardPopup');
    const finalPopup = document.getElementById('finalPopup');
    const popupText = document.getElementById('popupText');
    const closePopupBtns = document.querySelectorAll('.close-popup');
    
    let noClickCount = 0;
    let teaseCount = 0;
    const MAX_TEASES = 5;

    // Create background hearts
    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.getElementById('hearts').appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 300);

    const slideshowPopup = document.getElementById('slideshowPopup');
    const slideshowImage = document.getElementById('slideshowImage');
    const slideshowCaption = document.getElementById('slideshowCaption');
    
    // New popups
    const sundariPopup = document.getElementById('sundariPopup');
    const cilmanadiPopup = document.getElementById('cilmanadiPopup');
    const firePopup = document.getElementById('firePopup');
    const fireText = document.getElementById('fireText');
    const fireContainer = document.getElementById('fireAnimationContainer');
    
    // Love Letter Elements
    const reasonPopup = document.getElementById('reasonPopup');
    const moodBtn = document.getElementById('moodBtn');
    const sendLetterBtn = document.getElementById('sendLetterBtn');
    const reason1 = document.getElementById('reason1');
    const reason2 = document.getElementById('reason2');
    const reason3 = document.getElementById('reason3');
    
    // Navbar links
    const navKunjava = document.getElementById('navKunjava');
    const navSundari = document.getElementById('navSundari');
    const navCilmanadi = document.getElementById('navCilmanadi');
    const navFire = document.getElementById('navFire');
    const navSoulmate = document.getElementById('navSoulmate');

    // Soulmate Scanner Elements
    const scannerPopup = document.getElementById('scannerPopup');
    const scannerStatus = document.getElementById('scannerStatus');
    const scannerProgress = document.getElementById('scannerProgress');
    const scannerResult = document.getElementById('scannerResult');
    const scannerCloseBtn = document.getElementById('scannerCloseBtn');
    const scanLine = document.querySelector('.scan-line');

    let currentSlide = 0;
    const slides = [
        "images/nammal-1.jpeg",
        "images/nammal-2.jpeg",
        "images/nammal-3.jpeg"
    ];
    
    let fireInterval;
    let crackerInterval;

    // Navbar Logic
    if (navKunjava) {
        navKunjava.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    if (navSundari) {
        navSundari.addEventListener('click', (e) => {
            e.preventDefault();
            showPopup('sundari');
        });
    }

    if (navCilmanadi) {
        navCilmanadi.addEventListener('click', (e) => {
            e.preventDefault();
            showPopup('cilmanadi');
        });
    }

    if (navFire) {
        navFire.addEventListener('click', (e) => {
            e.preventDefault();
            startFireSequence();
        });
    }

    if (navSoulmate) {
        navSoulmate.addEventListener('click', (e) => {
            e.preventDefault();
            startScannerSequence();
        });
    }

    function startScannerSequence() {
        showPopup('scanner');
        scannerStatus.innerText = "Initializing biometric scan...";
        scannerProgress.style.width = '0%';
        scannerResult.style.display = 'none';
        scannerCloseBtn.style.display = 'none';
        scanLine.style.display = 'block';
        
        const scannerImg = document.querySelector('.scanner-image');
        if (scannerImg) {
            scannerImg.classList.remove('scanned');
        }

        // Fast video motion image cycling
        const scanImages = [
            "images/image-1.png",
            "images/image-2.png",
            "images/image-3.png"
        ];
        let imgIdx = 0;
        scannerImageInterval = setInterval(() => {
            if (scannerImg) {
                scannerImg.src = scanImages[imgIdx];
                imgIdx = (imgIdx + 1) % scanImages.length;
            }
        }, 100); // 100ms for fast motion

        const statuses = [
            { p: 10, t: "Analyzing genetic compatibility..." },
            { p: 30, t: "Checking vibe levels..." },
            { p: 50, t: "Confirming heart synchronization..." },
            { p: 70, t: "Analyzing smile chemistry..." },
            { p: 90, t: "Almost there, hold still..." },
            { p: 100, t: "Scan complete!" }
        ];

        let i = 0;
        const interval = setInterval(() => {
            if (i < statuses.length) {
                scannerProgress.style.width = statuses[i].p + '%';
                scannerStatus.innerText = statuses[i].t;
                i++;
            } else {
                clearInterval(interval);
                clearInterval(scannerImageInterval);
                finishScanner();
            }
        }, 600);
    }

    function finishScanner() {
        scanLine.style.display = 'none';
        scannerStatus.innerText = "Processing results...";
        
        const scannerImg = document.querySelector('.scanner-image');
        if (scannerImg) scannerImg.src = "images/image-3.png"; // Lock on the final image

        setTimeout(() => {
            scannerStatus.innerText = "Warning: Love levels exceeding limits!";
            if (scannerImg) scannerImg.classList.add('scanned');
            
            setTimeout(() => {
                scannerResult.style.display = 'block';
                scannerCloseBtn.style.display = 'inline-block';
                createConfetti(); // Reuse existing confetti
                createCracker(); // Or reuse cracker for extra spice
            }, 800);
        }, 1000);
    }

    function startFireSequence() {
        showPopup('fire');
        fireText.innerText = "Oh you have lost the fire right......... inna pidicho";
        fireText.classList.remove('spark-text-anim');
        fireContainer.innerHTML = '';
        
        // Start Fire Emojis
        fireInterval = setInterval(() => {
            const fire = document.createElement('div');
            fire.innerText = '🔥';
            fire.className = 'fire-emoji';
            fire.style.left = Math.random() * 100 + '%';
            fire.style.animationDuration = (Math.random() * 0.5 + 0.5) + 's';
            fireContainer.appendChild(fire);
            
            setTimeout(() => fire.remove(), 1000);
        }, 100);

        // Sequence to Spark
        setTimeout(() => {
            clearInterval(fireInterval);
            fireText.innerText = "Here is the spark ✨";
            fireText.classList.add('spark-text-anim');
            
            // Start Crackers
            crackerInterval = setInterval(createCracker, 300);

            // Auto Close after 7 seconds total (3s for fire + 4s for crackers)
            setTimeout(() => {
                hidePopup();
            }, 4000); 
        }, 3000);
    }

    function createCracker() {
        const x = Math.random() * 100;
        const y = Math.random() * 80 + 10;
        const colors = ['#ff0', '#f0f', '#0ff', '#0f0', '#ff4d4d'];
        
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'cracker-particle';
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            particle.style.left = x + '%';
            particle.style.top = y + '%';
            
            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 100 + 50;
            particle.style.setProperty('--tx', Math.cos(angle) * velocity + 'px');
            particle.style.setProperty('--ty', Math.sin(angle) * velocity + 'px');
            
            fireContainer.appendChild(particle);
            setTimeout(() => particle.remove(), 1000);
        }
    }

    // Growing Yes Logic
    let yesScale = 1;

    // No Button Logic
    noBtn.addEventListener('click', () => {
        noClickCount++;
        
        // Growing Yes Mechanic
        yesScale += 0.2;
        yesBtn.style.transform = `scale(${yesScale})`;

        // Change No Button Text
        const noTexts = ["Are you sure?", "Really?", "Think again!", "Last chance!", "Surely not?", "You might regret this!"];
        if (noClickCount <= noTexts.length) {
            noBtn.innerText = noTexts[noClickCount - 1];
        } else {
            noBtn.innerText = "Just click Yes!";
        }

        if (noClickCount === 1) {
            updatePopupButtons();
            popupText.innerText = "Are you sure? 🥺";
            showPopup('standard');
        } else if (noClickCount === 2) {
            updatePopupButtons();
            popupText.innerText = "Please think about it again! 🌹";
            showPopup('standard');
            // Apply shake to the popup itself when it shows
            standardPopup.classList.add('shake');
            setTimeout(() => standardPopup.classList.remove('shake'), 600);
        } else if (noClickCount === 3) {
            // Explicitly show slideshow on 3rd click
            currentSlide = 0;
            updateSlide();
            showPopup('slideshow');
        } else if (noClickCount > 3) {
             // For subsequent clicks, keep showing slideshow or just grow button huge
             // If we want to force Yes, we can make it huge
             yesScale += 0.5; // Grow faster
             yesBtn.style.transform = `scale(${yesScale})`;
        }
    });

    window.changeSlide = function(n) {
        currentSlide += n;
        if (currentSlide >= slides.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        updateSlide();
    };

    function updateSlide() {
        slideshowImage.src = slides[currentSlide];
        
        if (currentSlide === slides.length - 1) {
            slideshowCaption.innerText = "Will you please reconsider? 🥺";
        } else {
            slideshowCaption.innerText = "Please think about it again, honey.";
        }
    }

    function showPopup(type) {
        popupOverlay.style.display = 'flex';
        setTimeout(() => popupOverlay.classList.add('active'), 10);
        
        // Hide all popups first
        standardPopup.classList.remove('show');
        finalPopup.classList.remove('show');
        if (slideshowPopup) slideshowPopup.classList.remove('show');
        if (sundariPopup) sundariPopup.classList.remove('show');
        if (cilmanadiPopup) cilmanadiPopup.classList.remove('show');
        if (firePopup) firePopup.classList.remove('show');

        if (type === 'standard') {
            standardPopup.classList.add('show');
        } else if (type === 'slideshow') {
            slideshowPopup.classList.add('show');
        } else if (type === 'sundari') {
            sundariPopup.classList.add('show');
        } else if (type === 'cilmanadi') {
            cilmanadiPopup.classList.add('show');
        } else if (type === 'fire') {
            firePopup.classList.add('show');
        } else if (type === 'reason') {
            reasonPopup.classList.add('show');
        } else if (type === 'scanner') {
            scannerPopup.classList.add('show');
        } else {
            finalPopup.classList.add('show');
            // Add pulse to the final button
            const finalBtn = finalPopup.querySelector('.btn-yes');
            if (finalBtn) finalBtn.classList.add('pulse');
        }
    }

    function hidePopup() {
        popupOverlay.classList.remove('active');
        
        // Clear fire animations
        clearInterval(fireInterval);
        clearInterval(crackerInterval);
        if (fireContainer) fireContainer.innerHTML = '';

        setTimeout(() => {
            popupOverlay.style.display = 'none';
            standardPopup.classList.remove('show');
            finalPopup.classList.remove('show');
            if (slideshowPopup) slideshowPopup.classList.remove('show');
            if (sundariPopup) sundariPopup.classList.remove('show');
            if (cilmanadiPopup) cilmanadiPopup.classList.remove('show');
            if (firePopup) firePopup.classList.remove('show');
            if (reasonPopup) reasonPopup.classList.remove('show');
            if (scannerPopup) scannerPopup.classList.remove('show');
        }, 300);
    }

    // Mood Button triggers Reason Popup
    if (moodBtn) {
        moodBtn.addEventListener('click', () => {
             // Close final popup first then show reason popup
            finalPopup.classList.remove('show');
            showPopup('reason');
        });
    }

    // Send Letter Logic
    if (sendLetterBtn) {
        sendLetterBtn.addEventListener('click', () => {
            const r1 = reason1.value || "Because you are awesome!";
            const r2 = reason2.value || "Because I can't resist you!";
            const r3 = reason3.value || "Because I love you!";
            
            const subject = encodeURIComponent("Why I said Yes! ❤️");
            const body = encodeURIComponent(
                `Hey Ajay,\n\nHere are the 3 reasons why I said YES:\n\n1. ${r1}\n2. ${r2}\n3. ${r3}\n\nWith all my love,\nYour Valentine 💋`
            );
            
            const mailtoLink = `mailto:ajay.govarthanan@gmail.com?subject=${subject}&body=${body}`;
            
            window.location.href = mailtoLink;
            
            // Optional: Close popup after clicking
            setTimeout(hidePopup, 1000);
        });
    }

    function updatePopupButtons() {
        const container = document.getElementById('popupButtons');
        container.innerHTML = ''; // Clear existing
        
        const btn = document.createElement('button');
        btn.className = 'btn btn-yes close-popup';
        btn.innerText = '😭';
        btn.onclick = hidePopup;
        container.appendChild(btn);
    }

    // Teasing logic: move button away on 3rd attempt
    noBtn.addEventListener('mouseover', () => {
        if (noClickCount >= 2 && teaseCount < MAX_TEASES) {
            const yesRect = yesBtn.getBoundingClientRect();
            const yesCenter = {
                x: yesRect.left + yesRect.width / 2,
                y: yesRect.top + yesRect.height / 2
            };
            
            const radius = 75;
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * radius;
            
            const x = yesCenter.x + Math.cos(angle) * dist - noBtn.offsetWidth / 2;
            const y = yesCenter.y + Math.sin(angle) * dist - noBtn.offsetHeight / 2;
            
            // Final screen constraint check
            const boundedX = Math.max(10, Math.min(window.innerWidth - noBtn.offsetWidth - 10, x));
            const boundedY = Math.max(10, Math.min(window.innerHeight - noBtn.offsetHeight - 10, y));
            
            noBtn.style.position = 'fixed';
            noBtn.style.left = boundedX + 'px';
            noBtn.style.top = boundedY + 'px';
            noBtn.style.zIndex = '1000';
            
            teaseCount++;
            
            // Add a little shake effect to the button when it moves
            noBtn.classList.add('shake');
            setTimeout(() => noBtn.classList.remove('shake'), 300);
        }
    });

    // Yes Button Logic
    yesBtn.addEventListener('click', () => {
        showPopup('final');
        createConfetti();
        // Trigger heart animation
        const heartImg = document.querySelector('.heart-reveal-image');
        if (heartImg) {
            heartImg.classList.remove('heart-reveal-active');
            void heartImg.offsetWidth; // Trigger reflow
            heartImg.classList.add('heart-reveal-active');
        }
    });

    function createConfetti() {
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
        const confettiCount = 100;

        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
            confetti.style.opacity = Math.random();
            confetti.style.transform = `scale(${Math.random()})`;
            
            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 5000);
        }
    }

    closePopupBtns.forEach(btn => {
        btn.addEventListener('click', hidePopup);
    });
});
