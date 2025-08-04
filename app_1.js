// ریحونستان - Enhanced Persian Poetry Garden with Pixel Art
class PoetryGarden {
    constructor() {
        this.currentPoet = null;
        this.pixelArtImages = [
            'https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/1539f419-3afe-4a66-bedc-a013c659c25f.png',
            'https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/185b3e67-f838-41a4-8984-41c72ce94c2c.png',
            'https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/14f74e40-0078-4b6d-bd0a-1f76458b3c3c.png',
            'https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/ffe07120-2356-45a4-a1cf-555b0c683633.png'
        ];
        
        this.poetryData = {
            "hafez": {
                "name": "حافظ شیرازی",
                "nameEn": "Hafez Shirazi",
                "bio": "لسان الغیب، استاد غزل فارسی",
                "backgroundImage": this.pixelArtImages[0],
                "poems": [
                    {
                        "title": "غزل عشق و آزادی",
                        "persian": "فاش میگویم و از گفته خود دلشادم\nبنده عشقم و از هر دو جهان آزادم\n\nچون گل ریحانه در باغ وجود می‌پیچم\nعاشقم و در این عشق، از همه شادم\n\nدر این باغ که ریحانه نامش گذارده\nهر نفس عطر محبت، دل را شادم",
                        "english": "Openly I speak, and of my words I am heart-glad\nI am love's servant, and of both worlds I am free\n\nLike sweet basil in the garden of existence I grow\nI am a lover, and in this love, I am joyful\n\nIn this garden that Rayhaneh has named\nEvery breath of love's fragrance brings joy to the heart"
                    },
                    {
                        "title": "غزل گل و می",
                        "persian": "گل در بر و می در کف و معشوق به کام است\nسلطان جهانم به چنین روز غلام است\n\nای ریحانه جان، در این باغ عشق\nهر نفس تو عطر بهشت تمام است\n\nچون آفتاب صبح که می‌تابد بر گل\nروی تو نور امید و آرام است",
                        "english": "Rose in hand and wine in cup, beloved by my side\nThe world's sultan is my slave on such a day\n\nO dear Rayhaneh, in this garden of love\nEach breath of yours is heaven's complete perfume\n\nLike the morning sun that shines upon the rose\nYour face is the light of hope and peace"
                    }
                ]
            },
            "rumi": {
                "name": "مولانا جلال‌الدین رومی",
                "nameEn": "Rumi",
                "bio": "عارف بزرگ و شاعر عشق الهی",
                "backgroundImage": this.pixelArtImages[1],
                "poems": [
                    {
                        "title": "عشق همه چیز است",
                        "persian": "عشق همه چیز است، ما فقط تکه‌هایی هستیم\nهر کجا هستی و هر چه می‌کنی، عاشق باش\n\nای ریحانه، تو عطر این باغ عشقی\nدر هر نفس تو، خدا را می‌یابم\n\nدر چشمان تو دریای بی‌کران است\nدر لبخند تو آسمان کران است",
                        "english": "Love is the whole thing, we are only pieces\nWherever you are, whatever you do, be in love\n\nO Rayhaneh, you are the fragrance of this garden of love\nIn every breath of yours, I find God\n\nIn your eyes lies an endless sea\nIn your smile lies the bounded sky"
                    }
                ]
            },
            "saadi": {
                "name": "سعدی شیرازی",
                "nameEn": "Saadi Shirazi",
                "bio": "شیخ اجل سعدی، صاحب گلستان و بوستان",
                "backgroundImage": this.pixelArtImages[2],
                "poems": [
                    {
                        "title": "غزل بهاری",
                        "persian": "بگذار تا بگریم چون ابر در بهاران\nک از سنگ گریه خیزد روز وداع یاران\n\nای ریحانه، تو بهار جاودان منی\nدر باغ قلب من، همیشه نوبهاران\n\nچون باد صبح که گل را به رقص می‌آورد\nتو آمدی و دل مرا کردی سرشاران",
                        "english": "Let me weep like spring clouds\nEven stones cry on the day friends depart\n\nO Rayhaneh, you are my eternal spring\nIn my heart's garden, always new spring\n\nLike the morning breeze that makes flowers dance\nYou came and filled my heart with joy"
                    }
                ]
            },
            "sepehri": {
                "name": "سهراب سپهری",
                "nameEn": "Sohrab Sepehri",
                "bio": "شاعر طبیعت و نقaش آسمان",
                "backgroundImage": this.pixelArtImages[3],
                "poems": [
                    {
                        "title": "زندگی زیباست",
                        "persian": "زندگی زیباست\nزندگی یک چشمه است و یک پنجره\nباید شست قلب را، باید شست قلب را\n\nای ریحانه، تو زیبایی خود زندگی\nدر چشمان تو، جهان تازه می‌شود\n\nباید رفت به باغچه کلمات\nو با دستان پاک، گل چید",
                        "english": "Life is beautiful\nLife is a spring and a window\nOne must wash the heart, wash the heart\n\nO Rayhaneh, you are the beauty of life itself\nIn your eyes, the world becomes new\n\nOne must go to the garden of words\nAnd with clean hands, pick flowers"
                    }
                ]
            },
            "khayyam": {
                "name": "عمر خیام",
                "nameEn": "Omar Khayyam",
                "bio": "ریاضی‌دان و شاعر، صاحب رباعیات",
                "backgroundImage": this.pixelArtImages[0],
                "poems": [
                    {
                        "title": "رباعی عشق",
                        "persian": "ای دل، اگر از درد جدایی درمانی\nگر عاشق شوی، آرامش جانی\n\nای ریحانه، در این کوتاه زندگی\nتو بهترین لحظه‌های زمانی",
                        "english": "O heart, if you seek cure from separation's pain\nIf you become a lover, you'll find soul's peace\n\nO Rayhaneh, in this brief life\nYou are the best moments of time"
                    }
                ]
            },
            "ferdowsi": {
                "name": "فردوسی",
                "nameEn": "Ferdowsi",
                "bio": "حماسه‌سرای بزرگ ایران، صاحب شاهنامه",
                "backgroundImage": this.pixelArtImages[1],
                "poems": [
                    {
                        "title": "از شاهنامه",
                        "persian": "نخست اندیشه کن، آنگاه گوی\nبه کردار نکو نامور شوی\n\nای ریحانه، تو نام نکو منی\nدر دل من، تو سرود عشق روی",
                        "english": "First think, then speak\nWith good deeds, become renowned\n\nO Rayhaneh, you are my good name\nIn my heart, you are love's melody"
                    }
                ]
            },
            "nizami": {
                "name": "نظامی گنجوی",
                "nameEn": "Nizami Ganjavi",
                "bio": "شاعر بزرگ عاشقانه، صاحب خمسه",
                "backgroundImage": this.pixelArtImages[2],
                "poems": [
                    {
                        "title": "از لیلی و مجنون",
                        "persian": "عشق است آنکه بر سر خود آرد کلاه\nعشق است آنکه گردد از خود بیگاه\n\nای ریحانه، تو عشق خالص منی\nدر راه تو، دل برده شاه راه",
                        "english": "Love is that which puts a crown on one's head\nLove is that which makes one forget oneself\n\nO Rayhaneh, you are my pure love\nOn your path, my heart has taken the royal road"
                    }
                ]
            }
        };
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.startEnhancedAnimations();
        this.createInteractiveElements();
        this.initializePixelArt();
        this.showWelcomeAnimation();
        this.setupAdvancedInteractions();
    }

    bindEvents() {
        // Enhanced poet card interactions with fixed navigation
        const poetCards = document.querySelectorAll('.poet-card');
        poetCards.forEach(card => {
            card.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const poetId = card.getAttribute('data-poet');
                console.log('Poet card clicked:', poetId); // Debug log
                if (poetId && this.poetryData[poetId]) {
                    this.showPoetryWithTransition(poetId);
                }
            });

            // Advanced hover effects
            card.addEventListener('mouseenter', (e) => {
                this.enhancePoetCard(e.currentTarget);
                this.createHoverParticles(e.currentTarget);
            });

            card.addEventListener('mouseleave', (e) => {
                this.normalizePoetCard(e.currentTarget);
            });
        });

        // Enhanced back button
        const backButton = document.querySelector('.back-button');
        if (backButton) {
            backButton.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.showGardenWithTransition();
            });
        }

        // Interactive glass card effects
        const glassCards = document.querySelectorAll('.interactive-glass');
        glassCards.forEach(card => {
            // Only add glass effects to non-poet cards to avoid interference
            if (!card.classList.contains('poet-card')) {
                card.addEventListener('mouseenter', (e) => this.enhanceGlassEffect(e.currentTarget));
                card.addEventListener('mouseleave', (e) => this.normalizeGlassEffect(e.currentTarget));
                card.addEventListener('mousemove', (e) => this.createGlassReflection(e));
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.currentPoet) {
                this.showGardenWithTransition();
            }
        });

        // Touch interactions for mobile
        this.setupTouchInteractions();
    }

    showPoetryWithTransition(poetId) {
        const poet = this.poetryData[poetId];
        if (!poet) {
            console.error('Poet not found:', poetId);
            return;
        }

        console.log('Showing poetry for:', poet.name); // Debug log
        this.currentPoet = poetId;
        
        // Create transition effect
        this.createTransitionOverlay(() => {
            // Hide main sections
            const dedicationSection = document.querySelector('.dedication-section');
            const heroSection = document.querySelector('.hero-section');
            const poetsSection = document.querySelector('.poets-section');
            
            if (dedicationSection) dedicationSection.style.display = 'none';
            if (heroSection) heroSection.style.display = 'none';
            if (poetsSection) poetsSection.style.display = 'none';
            
            // Show poetry section
            const poetrySection = document.getElementById('poetry-display');
            if (poetrySection) {
                poetrySection.classList.remove('hidden');
                poetrySection.style.display = 'block';
                
                // Change background dynamically
                this.changeBackgroundForPoet(poetId);
                
                // Update poet info
                const poetNameElement = document.getElementById('poet-name');
                const poetBioElement = document.getElementById('poet-bio');
                
                if (poetNameElement) poetNameElement.textContent = poet.name;
                if (poetBioElement) poetBioElement.textContent = poet.bio;
                
                // Load poems with enhanced animation
                this.loadPoemsWithAnimation(poet.poems);
                
                // Smooth scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
                
                // Add particles for this poet
                this.createPoetSpecificParticles(poetId);
            }
        });
    }

    showGardenWithTransition() {
        this.createTransitionOverlay(() => {
            // Show main sections
            const dedicationSection = document.querySelector('.dedication-section');
            const heroSection = document.querySelector('.hero-section');
            const poetsSection = document.querySelector('.poets-section');
            
            if (dedicationSection) dedicationSection.style.display = 'block';
            if (heroSection) heroSection.style.display = 'block';
            if (poetsSection) poetsSection.style.display = 'block';
            
            // Hide poetry section
            const poetrySection = document.getElementById('poetry-display');
            if (poetrySection) {
                poetrySection.classList.add('hidden');
                poetrySection.style.display = 'none';
            }
            
            // Reset background
            this.resetBackground();
            
            // Smooth scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            this.currentPoet = null;
        });
    }

    createTransitionOverlay(callback) {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle, rgba(33, 128, 141, 0.8), rgba(19, 52, 59, 0.9));
            z-index: 9999;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 2rem;
            font-weight: 600;
            pointer-events: auto;
        `;
        
        overlay.innerHTML = '✨ ریحونستان ✨';
        document.body.appendChild(overlay);
        
        // Fade in
        setTimeout(() => {
            overlay.style.opacity = '1';
        }, 10);
        
        // Execute callback and fade out
        setTimeout(() => {
            if (callback) callback();
            overlay.style.opacity = '0';
            setTimeout(() => {
                if (overlay.parentNode) {
                    document.body.removeChild(overlay);
                }
            }, 500);
        }, 800);
    }

    loadPoemsWithAnimation(poems) {
        const container = document.getElementById('poems-container');
        if (!container) return;
        
        container.innerHTML = '';
        
        poems.forEach((poem, index) => {
            const poemElement = document.createElement('div');
            poemElement.className = 'poem';
            poemElement.style.opacity = '0';
            poemElement.style.transform = 'translateY(50px) rotateX(10deg)';
            poemElement.style.transition = 'all 0.8s ease-out';
            
            poemElement.innerHTML = `
                <h4>${poem.title}</h4>
                <div class="poem-persian">${poem.persian.replace(/\n/g, '<br>')}</div>
                <div class="poem-english">${poem.english.replace(/\n/g, '<br>')}</div>
            `;
            
            container.appendChild(poemElement);
            
            // Enhanced stagger animation
            setTimeout(() => {
                poemElement.style.opacity = '1';
                poemElement.style.transform = 'translateY(0) rotateX(0)';
                
                // Add particle burst effect
                this.createPoemParticleBurst(poemElement);
            }, index * 300 + 500);
        });
    }

    enhancePoetCard(card) {
        card.style.transform = 'translateY(-12px) rotateX(5deg) rotateY(5deg) scale(1.05)';
        card.style.background = 'rgba(255, 255, 255, 0.25)';
        card.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4)';
        
        // Enhance pixel art element
        const pixelElement = card.querySelector('.animated-pixel');
        if (pixelElement) {
            pixelElement.style.transform = 'scale(1.3) rotate(10deg)';
            pixelElement.style.filter = 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.8)) brightness(1.3)';
        }
    }

    normalizePoetCard(card) {
        card.style.transform = 'translateY(0) rotateX(0) rotateY(0) scale(1)';
        card.style.background = 'rgba(255, 255, 255, 0.12)';
        card.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
        
        const pixelElement = card.querySelector('.animated-pixel');
        if (pixelElement) {
            pixelElement.style.transform = 'scale(1) rotate(0deg)';
            pixelElement.style.filter = 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))';
        }
    }

    enhanceGlassEffect(element) {
        element.style.background = 'rgba(255, 255, 255, 0.18)';
        element.style.backdropFilter = 'blur(12px)';
        element.style.webkitBackdropFilter = 'blur(12px)';
        element.style.border = '1px solid rgba(255, 255, 255, 0.25)';
        element.style.transform = 'translateY(-8px) translateZ(20px)';
        element.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
    }

    normalizeGlassEffect(element) {
        element.style.background = 'rgba(255, 255, 255, 0.12)';
        element.style.backdropFilter = 'blur(10px)';
        element.style.webkitBackdropFilter = 'blur(10px)';
        element.style.border = '1px solid rgba(255, 255, 255, 0.18)';
        element.style.transform = 'translateY(0) translateZ(0)';
        element.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
    }

    createGlassReflection(e) {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        
        // Create light reflection effect
        const gradientX = (x / rect.width) * 100;
        const gradientY = (y / rect.height) * 100;
        
        card.style.background = `
            radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.05) 100%),
            rgba(255, 255, 255, 0.12)
        `;
    }

    createHoverParticles(element) {
        const rect = element.getBoundingClientRect();
        const particleCount = 15;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: radial-gradient(circle, rgba(255, 255, 255, 0.9), rgba(33, 128, 141, 0.6));
                border-radius: 50%;
                pointer-events: none;
                z-index: 1000;
                left: ${rect.left + Math.random() * rect.width}px;
                top: ${rect.top + Math.random() * rect.height}px;
                animation: particleBurst 2s ease-out forwards;
            `;
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 2000);
        }
    }

    createPoemParticleBurst(poemElement) {
        const rect = poemElement.getBoundingClientRect();
        const particleCount = 20;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 3px;
                height: 3px;
                background: radial-gradient(circle, rgba(50, 184, 198, 0.8), rgba(255, 255, 255, 0.4));
                border-radius: 50%;
                pointer-events: none;
                z-index: 1000;
                left: ${rect.right}px;
                top: ${rect.top + rect.height / 2}px;
                animation: poemParticleFlow 3s ease-out forwards;
            `;
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 3000);
        }
    }

    changeBackgroundForPoet(poetId) {
        const poet = this.poetryData[poetId];
        if (poet && poet.backgroundImage) {
            const poetrySection = document.querySelector('.poetry-section');
            if (poetrySection) {
                poetrySection.style.backgroundImage = `url(${poet.backgroundImage})`;
                poetrySection.style.backgroundSize = 'cover';
                poetrySection.style.backgroundPosition = 'center';
                poetrySection.style.transition = 'background-image 1s ease-in-out';
            }
        }
    }

    resetBackground() {
        document.body.style.backgroundImage = `url(${this.pixelArtImages[0]})`;
    }

    createPoetSpecificParticles(poetId) {
        const colors = {
            'hafez': ['rgba(255, 20, 147, 0.8)', 'rgba(255, 105, 180, 0.6)'],
            'rumi': ['rgba(147, 51, 234, 0.8)', 'rgba(59, 130, 246, 0.6)'],
            'saadi': ['rgba(34, 197, 94, 0.8)', 'rgba(22, 163, 74, 0.6)'],
            'sepehri': ['rgba(59, 130, 246, 0.8)', 'rgba(147, 51, 234, 0.6)'],
            'khayyam': ['rgba(255, 215, 0, 0.8)', 'rgba(255, 165, 0, 0.6)'],
            'ferdowsi': ['rgba(255, 215, 0, 0.8)', 'rgba(255, 20, 147, 0.6)'],
            'nizami': ['rgba(255, 20, 147, 0.8)', 'rgba(147, 51, 234, 0.6)']
        };
        
        const poetColors = colors[poetId] || colors['hafez'];
        
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: ${2 + Math.random() * 4}px;
                height: ${2 + Math.random() * 4}px;
                background: ${poetColors[Math.floor(Math.random() * poetColors.length)]};
                border-radius: 50%;
                pointer-events: none;
                z-index: 100;
                left: ${Math.random() * window.innerWidth}px;
                top: ${Math.random() * window.innerHeight}px;
                animation: poetParticleFloat ${5 + Math.random() * 5}s infinite ease-in-out;
                animation-delay: ${Math.random() * 2}s;
            `;
            
            document.body.appendChild(particle);
            
            // Remove after animation completes
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 10000);
        }
    }

    startEnhancedAnimations() {
        // Enhanced floating particles
        this.createAdvancedFloatingParticles();
        
        // Animated dedication message with typing effect
        this.animateEnhancedDedicationMessage();
        
        // Advanced parallax effect
        this.createAdvancedParallaxEffect();
        
        // Liquid glass wave animations
        this.createLiquidGlassWaves();
        
        // Pixel art background cycling
        this.startPixelArtCycling();
    }

    createAdvancedFloatingParticles() {
        const particleCount = 40;
        const body = document.body;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            const size = 2 + Math.random() * 6;
            const hue = Math.random() * 360;
            
            particle.className = 'floating-particle';
            particle.style.cssText = `
                position: fixed;
                width: ${size}px;
                height: ${size}px;
                background: radial-gradient(circle, hsla(${hue}, 70%, 60%, 0.8), hsla(${hue}, 70%, 80%, 0.4));
                border-radius: 50%;
                pointer-events: none;
                z-index: 5;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: advancedFloat ${4 + Math.random() * 6}s infinite ease-in-out;
                animation-delay: ${Math.random() * 3}s;
                filter: blur(0.5px);
                box-shadow: 0 0 ${size * 2}px hsla(${hue}, 70%, 60%, 0.4);
            `;
            body.appendChild(particle);
        }
    }

    animateEnhancedDedicationMessage() {
        const dedicationCard = document.querySelector('.dedication-card');
        if (dedicationCard) {
            const messageLines = document.querySelectorAll('.dedication-message p');
            messageLines.forEach((line, index) => {
                const text = line.textContent;
                line.textContent = '';
                line.style.opacity = '1';
                
                setTimeout(() => {
                    this.typeTextWithEffect(line, text, 60);
                }, 2500 + (index * 2000));
            });
        }
    }

    typeTextWithEffect(element, text, speed) {
        let index = 0;
        const timer = setInterval(() => {
            if (index < text.length) {
                element.textContent += text[index];
                
                // Create typing particle effect
                if (Math.random() > 0.7) {
                    this.createTypingParticle(element);
                }
                
                index++;
            } else {
                clearInterval(timer);
                // Add completion glow effect
                element.style.textShadow = '0 0 20px rgba(33, 128, 141, 0.6)';
                setTimeout(() => {
                    element.style.textShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
                }, 1000);
            }
        }, speed);
    }

    createTypingParticle(element) {
        const rect = element.getBoundingClientRect();
        const particle = document.createElement('div');
        
        particle.style.cssText = `
            position: fixed;
            width: 2px;
            height: 2px;
            background: radial-gradient(circle, rgba(33, 128, 141, 0.9), transparent);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${rect.right - 10}px;
            top: ${rect.top + rect.height / 2}px;
            animation: typingSparkle 1s ease-out forwards;
        `;
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 1000);
    }

    createAdvancedParallaxEffect() {
        let ticking = false;
        
        const updateParallax = () => {
            const scrolled = window.pageYOffset;
            
            // Parallax for pixel art layers
            const pixelLayers = document.querySelectorAll('.pixel-layer');
            pixelLayers.forEach((layer, index) => {
                const speed = 0.3 + (index * 0.1);
                layer.style.transform = `translateY(${scrolled * speed}px) scale(${1 + scrolled * 0.0001})`;
            });
            
            // Parallax for floating panels
            const floatingPanels = document.querySelectorAll('.glass-panel');
            floatingPanels.forEach((panel, index) => {
                const speed = 0.2 + (index * 0.05);
                panel.style.transform += ` translateY(${scrolled * speed}px)`;
            });
            
            ticking = false;
        };
        
        const requestTick = () => {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        };
        
        window.addEventListener('scroll', requestTick);
    }

    createLiquidGlassWaves() {
        const waveCount = 3;
        const container = document.createElement('div');
        container.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 2;
            overflow: hidden;
        `;
        
        for (let i = 0; i < waveCount; i++) {
            const wave = document.createElement('div');
            wave.style.cssText = `
                position: absolute;
                width: 200%;
                height: 200%;
                background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.03) 0%, transparent 70%);
                border-radius: 50%;
                animation: liquidWave ${15 + i * 5}s infinite ease-in-out;
                animation-delay: ${i * 2}s;
                left: -50%;
                top: -50%;
            `;
            container.appendChild(wave);
        }
        
        document.body.appendChild(container);
    }

    startPixelArtCycling() {
        let currentImageIndex = 0;
        
        setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % this.pixelArtImages.length;
            
            if (!this.currentPoet) {
                document.body.style.backgroundImage = `url(${this.pixelArtImages[currentImageIndex]})`;
            }
        }, 20000); // Change every 20 seconds
    }

    initializePixelArt() {
        // Initialize pixel art animations
        const pixelElements = document.querySelectorAll('.animated-pixel');
        pixelElements.forEach((element, index) => {
            element.style.animationDelay = `${index * 0.5}s`;
        });
    }

    createInteractiveElements() {
        // Create interactive floating elements
        const floatingElements = document.querySelectorAll('.floating-pixel-element');
        floatingElements.forEach(element => {
            element.addEventListener('click', () => {
                this.createElementBurst(element);
            });
        });
    }

    createElementBurst(element) {
        const rect = element.getBoundingClientRect();
        const burstCount = 12;
        
        for (let i = 0; i < burstCount; i++) {
            const particle = document.createElement('div');
            const angle = (360 / burstCount) * i;
            
            particle.style.cssText = `
                position: fixed;
                width: 6px;
                height: 6px;
                background: radial-gradient(circle, rgba(255, 255, 255, 0.9), rgba(33, 128, 141, 0.7));
                border-radius: 50%;
                pointer-events: none;
                z-index: 1000;
                left: ${rect.left + rect.width / 2}px;
                top: ${rect.top + rect.height / 2}px;
                transform: rotate(${angle}deg);
                animation: elementBurst 2s ease-out forwards;
            `;
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 2000);
        }
    }

    setupAdvancedInteractions() {
        // Mouse movement glass distortion
        document.addEventListener('mousemove', (e) => {
            const cards = document.querySelectorAll('.interactive-glass:not(.poet-card)');
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const distance = Math.sqrt(
                    Math.pow(e.clientX - (rect.left + rect.width / 2), 2) +
                    Math.pow(e.clientY - (rect.top + rect.height / 2), 2)
                );
                
                if (distance < 200) {
                    const intensity = (200 - distance) / 200;
                    const blur = 10 + intensity * 5;
                    card.style.backdropFilter = `blur(${blur}px)`;
                    card.style.webkitBackdropFilter = `blur(${blur}px)`;
                }
            });
        });
    }

    setupTouchInteractions() {
        // Touch interactions for mobile devices
        let touchStartY = 0;
        
        document.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
        });
        
        document.addEventListener('touchmove', (e) => {
            const touchY = e.touches[0].clientY;
            const deltaY = touchY - touchStartY;
            
            // Create touch particles
            if (Math.abs(deltaY) > 10) {
                this.createTouchParticles(e.touches[0].clientX, e.touches[0].clientY);
            }
        });
    }

    createTouchParticles(x, y) {
        const particleCount = 5;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: radial-gradient(circle, rgba(50, 184, 198, 0.8), transparent);
                border-radius: 50%;
                pointer-events: none;
                z-index: 1000;
                left: ${x + (Math.random() - 0.5) * 40}px;
                top: ${y + (Math.random() - 0.5) * 40}px;
                animation: touchParticleFade 1.5s ease-out forwards;
            `;
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 1500);
        }
    }

    showWelcomeAnimation() {
        // Enhanced page entrance animation
        document.body.style.opacity = '0';
        document.body.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            document.body.style.transition = 'opacity 1.5s ease-out, transform 1.5s ease-out';
            document.body.style.opacity = '1';
            document.body.style.transform = 'scale(1)';
        }, 200);
        
        // Stagger animation for poet cards with enhanced effects
        const poetCards = document.querySelectorAll('.poet-card');
        poetCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(80px) rotateX(20deg)';
            
            setTimeout(() => {
                card.style.transition = 'all 1s cubic-bezier(0.23, 1, 0.32, 1)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) rotateX(0)';
                
                // Add entrance particle burst
                setTimeout(() => {
                    this.createHoverParticles(card);
                }, 300);
            }, 3500 + (index * 200));
        });
    }
}

// Initialize Enhanced Poetry Garden
document.addEventListener('DOMContentLoaded', () => {
    const garden = new PoetryGarden();
    
    // Add enhanced CSS animations
    const enhancedStyle = document.createElement('style');
    enhancedStyle.textContent = `
        @keyframes advancedFloat {
            0%, 100% { 
                transform: translateY(0) rotate(0deg) scale(1); 
                opacity: 0.4; 
            }
            25% { 
                transform: translateY(-30px) rotate(90deg) scale(1.1); 
                opacity: 0.8; 
            }
            50% { 
                transform: translateY(-60px) rotate(180deg) scale(1.2); 
                opacity: 1; 
            }
            75% { 
                transform: translateY(-30px) rotate(270deg) scale(1.1); 
                opacity: 0.8; 
            }
        }
        
        @keyframes particleBurst {
            0% { 
                transform: scale(1) translateY(0); 
                opacity: 1; 
            }
            100% { 
                transform: scale(0) translateY(-100px); 
                opacity: 0; 
            }
        }
        
        @keyframes poemParticleFlow {
            0% { 
                transform: translateX(0) scale(1); 
                opacity: 1; 
            }
            100% { 
                transform: translateX(-200px) scale(0.5); 
                opacity: 0; 
            }
        }
        
        @keyframes poetParticleFloat {
            0%, 100% { 
                transform: translateY(0) rotate(0deg); 
                opacity: 0.6; 
            }
            50% { 
                transform: translateY(-40px) rotate(180deg); 
                opacity: 1; 
            }
        }
        
        @keyframes typingSparkle {
            0% { 
                transform: scale(1); 
                opacity: 1; 
            }
            100% { 
                transform: scale(3) translateY(-20px); 
                opacity: 0; 
            }
        }
        
        @keyframes liquidWave {
            0%, 100% { 
                transform: translateX(-50%) translateY(-50%) rotate(0deg) scale(1); 
                opacity: 0.02; 
            }
            50% { 
                transform: translateX(-40%) translateY(-40%) rotate(180deg) scale(1.1); 
                opacity: 0.05; 
            }
        }
        
        @keyframes elementBurst {
            0% { 
                transform: rotate(var(--angle, 0deg)) translateX(0); 
                opacity: 1; 
            }
            100% { 
                transform: rotate(var(--angle, 0deg)) translateX(100px); 
                opacity: 0; 
            }
        }
        
        @keyframes touchParticleFade {
            0% { 
                transform: scale(1); 
                opacity: 1; 
            }
            100% { 
                transform: scale(2); 
                opacity: 0; 
            }
        }
        
        /* Enhanced glass effects */
        .interactive-glass {
            position: relative;
            overflow: hidden;
        }
        
        .interactive-glass::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(
                45deg,
                transparent,
                rgba(255, 255, 255, 0.1),
                transparent
            );
            transform: translateX(-100%) translateY(-100%) rotate(30deg);
            transition: transform 0.6s ease-out;
            pointer-events: none;
        }
        
        .interactive-glass:hover::after {
            transform: translateX(100%) translateY(100%) rotate(30deg);
        }
        
        /* Enhanced poem hover effects */
        .poem {
            position: relative;
            overflow: hidden;
        }
        
        .poem::after {
            content: '';
            position: absolute;
            top: 0;
            right: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                90deg,
                transparent,
                rgba(50, 184, 198, 0.1),
                transparent
            );
            transition: right 0.8s ease-out;
        }
        
        .poem:hover::after {
            right: 100%;
        }
        
        /* Responsive enhancements */
        @media (max-width: 768px) {
            .floating-pixel-element {
                width: 20px;
                height: 20px;
            }
            
            .floating-panels {
                opacity: 0.5;
            }
        }
    `;
    document.head.appendChild(enhancedStyle);
    
    // Add smooth scrolling enhancement
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Performance optimization for animations
    if (window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', (e) => {
            // Reduce animations on mobile for better performance
            const pixelElements = document.querySelectorAll('.animated-pixel');
            pixelElements.forEach(element => {
                element.style.animationDuration = '4s';
            });
        });
    }
});