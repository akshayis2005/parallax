/**
 * WILD EARTH - Cinematic Wildlife Parallax Website
 * Core Interactivity, Parallax Engines, Modals, and Filters
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 0. ANIMAL DATABASE
  // ==========================================
  const animalData = [
    {
      id: "african-lion",
      name: "African Lion",
      scientificName: "Panthera leo",
      habitat: "African Savanna",
      location: "Sub-Saharan Africa",
      diet: "Carnivore",
      lifespan: "10 - 14 Years",
      conservationStatus: "Vulnerable",
      statusClass: "vulnerable",
      image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80",
      description: "Often referred to as the 'King of the Jungle', the African lion is a majestic big cat that is highly social, living in family groups called prides. Unlike other cats, they cooperatively hunt and raise their cubs together.",
      threats: "Habitat loss, human-wildlife conflict, illegal poaching, and prey depletion.",
      facts: [
        "Lions are the only big cat species that live in social family groups (prides).",
        "A lion's roar can be heard from up to 5 miles (8 kilometers) away.",
        "Females do about 90% of the pride's hunting, while males protect the territory."
      ],
      tags: ["mammals", "predators", "endangered"] // endangered category includes vulnerable/threatened for filter
    },
    {
      id: "bengal-tiger",
      name: "Bengal Tiger",
      scientificName: "Panthera tigris tigris",
      habitat: "Forests and Grasslands",
      location: "India, Bangladesh, Nepal, Bhutan",
      diet: "Carnivore",
      lifespan: "8 - 10 Years",
      conservationStatus: "Endangered",
      statusClass: "endangered",
      image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80",
      description: "The Bengal tiger is a solitary and powerful predator. Distinguished by its orange coat with dark vertical stripes, it possesses incredible stealth and strength, hunting deer, wild boar, and water buffalo in dense forests.",
      threats: "Poaching for skins and traditional medicine, habitat fragmentation, and climate change affecting the Sundarbans mangroove forests.",
      facts: [
        "No two tigers have the exact same stripe patterns; they are unique like human fingerprints.",
        "Tigers are excellent swimmers and often soak in rivers to cool down during hot days.",
        "A tiger's roar can temporarily paralyze or startle prey in close range."
      ],
      tags: ["mammals", "predators", "endangered"]
    },
    {
      id: "african-elephant",
      name: "African Elephant",
      scientificName: "Loxodonta africana",
      habitat: "Savanna and Forest",
      location: "Sub-Saharan Africa",
      diet: "Herbivore",
      lifespan: "60 - 70 Years",
      conservationStatus: "Endangered",
      statusClass: "endangered",
      image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=800&q=80",
      description: "The largest land mammal on Earth, the African elephant is a highly intelligent and emotional creature. They live in tight matriarchal families and serve as 'ecosystem engineers', carving paths and digging waterholes that other species rely on.",
      threats: "The illegal ivory trade (poaching), habitat loss due to agricultural expansion, and human-elephant conflict.",
      facts: [
        "An elephant's trunk has over 40,000 muscles and can lift heavy logs or pick up a single blade of grass.",
        "Elephants communicate over long distances using low-frequency infrasound vibrations felt through the ground.",
        "They have a highly developed brain and exhibit grief, empathy, and remarkable memory."
      ],
      tags: ["mammals", "endangered"]
    },
    {
      id: "polar-bear",
      name: "Polar Bear",
      scientificName: "Ursus maritimus",
      habitat: "Arctic Sea Ice",
      location: "Arctic Circle countries",
      diet: "Carnivore",
      lifespan: "15 - 20 Years",
      conservationStatus: "Vulnerable",
      statusClass: "vulnerable",
      image: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&w=800&q=80",
      description: "The largest land carnivore on Earth, polar bears are perfectly adapted to the freezing temperatures of the far north. They depend almost entirely on sea ice to hunt seals, their primary source of energy-rich blubber.",
      threats: "Rapid loss of sea ice habitat due to global warming, toxic chemical runoff, and industrial exploration in the Arctic.",
      facts: [
        "Polar bears actually have black skin under their fur, which helps them absorb warmth from the sun.",
        "Their fur is translucent and hollow, reflecting light to appear white while insulating them.",
        "They are talented swimmers and can sustain constant swimming for several days straight."
      ],
      tags: ["mammals", "predators", "endangered"]
    },
    {
      id: "giant-panda",
      name: "Giant Panda",
      scientificName: "Ailuropoda melanoleuca",
      habitat: "Mountain Forests",
      location: "South-Central China",
      diet: "Herbivore",
      lifespan: "15 - 20 Years",
      conservationStatus: "Vulnerable",
      statusClass: "vulnerable",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjH0f1yxzrR7ExzcCosvN-k8T2wQCXAwog4eASKtuLRU0Etg2hg0ovYyo&s=10",
      description: "The giant panda is a global symbol of wildlife conservation. Resident in high, misty bamboo forests of China, these peaceful bears spend nearly their entire day foraging and consuming vast quantities of bamboo.",
      threats: "Habitat fragmentation, developmental roads dividing breeding populations, and slow natural reproduction rates.",
      facts: [
        "Pandas spend up to 12 hours a day eating and consume up to 28-38 pounds of bamboo daily.",
        "They have an enlarged wrist bone that functions like an opposable thumb, helping them grasp bamboo stalks.",
        "Newborn pandas are incredibly tiny—about the size of a stick of butter, pink, and blind."
      ],
      tags: ["mammals", "endangered"]
    },
    {
      id: "gray-wolf",
      name: "Gray Wolf",
      scientificName: "Canis lupus",
      habitat: "Forests and Tundra",
      location: "North America, Europe, Asia",
      diet: "Carnivore",
      lifespan: "6 - 8 Years",
      conservationStatus: "Least Concern",
      statusClass: "concern",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsjOpJ6lexnGJbtCXq_fZIZ_TmCe0lxY6tEYU0lNUZ8g&s=10",
      description: "A highly social and intelligent apex predator, the gray wolf lives and hunts in tight family packs. They are known for their complex social hierachy, loyalty, and their ecological role in regulating prey populations to keep habitats healthy.",
      threats: "Historical hunting, human persecution, habitat loss, and hybridization with domestic dogs.",
      facts: [
        "Wolves communicate through facial expressions, scent marks, physical postures, and their iconic howls.",
        "A pack's territory can range from 50 to over 1,000 square miles, which they defend fiercely.",
        "They are built for travel, capable of trotting at 5 miles per hour for hours on end."
      ],
      tags: ["mammals", "predators"]
    },
    {
      id: "gorilla",
      name: "Gorilla",
      scientificName: "Gorilla beringei",
      habitat: "Tropical Forest",
      location: "Central and East Africa",
      diet: "Herbivore",
      lifespan: "35 - 40 Years",
      conservationStatus: "Critically Endangered",
      statusClass: "critically",
      image: "https://neprimateconservancy.org/wp-content/uploads/2026/04/Eastern-lowland-gorilla-shutterstock_2624976715-r-768x768.jpg",
      description: "Gorillas are gentle giants of the tropical jungle. Sharing more than 98% of their genetic code with humans, they live in structured family units led by a dominant male silverback, displaying complex emotions and tool use.",
      threats: "Poaching, habitat destruction from mining and agriculture, and highly infectious human diseases.",
      facts: [
        "Gorillas build brand new nests out of leaves and twigs on the ground or in trees to sleep in every single night.",
        "Silverback gorillas gain their silver saddle of fur around 12 years of age, indicating maturity.",
        "They have unique nose prints, just like human fingerprints, which researchers use to identify them."
      ],
      tags: ["mammals", "endangered"]
    },
    {
      id: "cheetah",
      name: "Cheetah",
      scientificName: "Acinonyx jubatus",
      habitat: "African Grasslands",
      location: "Africa, Small population in Iran",
      diet: "Carnivore",
      lifespan: "10 - 12 Years",
      conservationStatus: "Vulnerable",
      statusClass: "vulnerable",
      image: "https://plus.unsplash.com/premium_photo-1664304362237-8040f0ecac98?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlZXRhfGVufDB8fDB8fHww",
      description: "The cheetah is the fastest land mammal on the planet. Built for speed, its body features a flexible spine, large nasal passages, claws that act like athletic cleats, and a long tail that works like a boat rudder during high-speed turns.",
      threats: "Loss of grasslands habitat, conflict with livestock farmers, and illegal trade as exotic pets.",
      facts: [
        "Cheetahs can accelerate from 0 to 60 miles per hour (97 km/h) in just 3 seconds.",
        "Unlike other big cats, they cannot roar; they purr, chirp, hiss, and make high-pitched bird-like sounds.",
        "They have black 'tear tracks' running from the corners of their eyes to block the blinding glare of the sun."
      ],
      tags: ["mammals", "predators", "endangered"]
    },
    {
      id: "giraffe",
      name: "Giraffe",
      scientificName: "Giraffa camelopardalis",
      habitat: "African Savanna",
      location: "Sub-Saharan Africa",
      diet: "Herbivore",
      lifespan: "20 - 25 Years",
      conservationStatus: "Vulnerable",
      statusClass: "vulnerable",
      image: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=800&q=80",
      description: "The tallest land animal alive, the giraffe uses its towering height to browse nutritious leaves from acacia and combretum treetops. Their spotted camouflage coat helps them blend into woodland shadows.",
      threats: "Habitat fragmentation, poaching for bushmeat and skins, and ecological changes in grasslands.",
      facts: [
        "A giraffe's neck has only 7 vertebrae—the exact same number as a human neck, but each is elongated.",
        "Their tongues can grow up to 20 inches long and are dark blue-black to prevent sunburn while feeding.",
        "Giraffes sleep standing up most of the time in short bursts of 5 to 30 minutes a day."
      ],
      tags: ["mammals", "endangered"]
    },
    {
      id: "red-panda",
      name: "Red Panda",
      scientificName: "Ailurus fulgens",
      habitat: "Himalayan Forests",
      location: "Nepal, India, Bhutan, China, Myanmar",
      diet: "Omnivore",
      lifespan: "8 - 10 Years",
      conservationStatus: "Endangered",
      statusClass: "endangered",
      image: "https://npr.brightspotcdn.com/dims4/default/f08853f/2147483647/strip/true/crop/5568x3712+0+0/resize/1760x1174!/format/webp/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F27%2F9b%2Fad4623f347b2a631496e30bf7e4f%2F2023-05-10-sundara-red-panda-kyleshepherd-27.jpg",
      description: "The red panda is a small, arboreal mammal native to the mountain forests of the Himalayas. They are not closely related to giant pandas, instead occupying their own unique taxonomic family. They spend most of their lives in trees eating bamboo.",
      threats: "Severe deforestation, fragmentation of bamboo forests, accidental trapping in traps meant for other game, and poaching.",
      facts: [
        "Red pandas use their long, bushy ringed tails for balance and wrap them around themselves like blankets to stay warm.",
        "They have a false thumb—an extension of the wrist bone—which helps them climb down trees headfirst.",
        "The name 'Red Panda' is actually the original panda, named 48 years before the Giant Panda was discovered."
      ],
      tags: ["mammals", "endangered"]
    },
    {
      id: "blue-whale",
      name: "Blue Whale",
      scientificName: "Balaenoptera musculus",
      habitat: "Open Ocean",
      location: "All oceans of the world",
      diet: "Krill",
      lifespan: "80 - 90 Years",
      conservationStatus: "Endangered",
      statusClass: "endangered",
      image: "https://assets.worldwildlife.org/www-prd/images/Medium_WW1172346.2e16d0ba.fill-600x600.format-webp.webp",
      description: "The blue whale is the largest known animal to have ever lived on Earth—even bigger than the largest dinosaurs. These gentle marine giants migrate thousands of miles between cold polar feeding grounds and warm tropical calving lagoons.",
      threats: "Collisions with ocean cargo vessels (ship strikes), entanglement in commercial fishing nets, ocean noise pollution, and climate change.",
      facts: [
        "A blue whale's tongue alone can weigh as much as an entire adult elephant.",
        "Their heart is the size of a small car, and its heartbeat can be detected from over two miles away.",
        "They feed by gulping massive amounts of seawater and filtering out millions of tiny krill through baleen plates."
      ],
      tags: ["marine", "endangered"]
    },
    {
      id: "snow-leopard",
      name: "Snow Leopard",
      scientificName: "Panthera uncia",
      habitat: "Mountain Regions",
      location: "Central Asia Mountains",
      diet: "Carnivore",
      lifespan: "10 - 15 Years",
      conservationStatus: "Vulnerable",
      statusClass: "vulnerable",
      image: "https://assets.worldwildlife.org/www-prd/images/wwfcmsprodimagesSnow_.b7a42882.fill-375x500.format-webp.webp",
      description: "Often referred to as the 'Ghost of the Mountains', the snow leopard is an elusive, solitary cat. They are masterfully adapted to the rugged cold peaks of Central Asia, using their wide paws as natural snowshoes and their thick tails for balance and insulation.",
      threats: "Habitat degradation due to climate change shifting tree lines, poaching for fur and bones, and retaliatory hunting by livestock farmers.",
      facts: [
        "Snow leopards cannot roar due to different throat structures; instead, they growl, mew, and puff.",
        "They can leap up to 50 feet (15 meters) horizontally, using their long tails like a glider rudder.",
        "Their thick tails are nearly as long as their bodies and are wrapped around their faces to block freezing winds while sleeping."
      ],
      tags: ["mammals", "predators", "endangered"]
    }
  ];

  // ==========================================
  // 1. RANDOM WILDLIFE FACTS DATABASE
  // ==========================================
  const wildlifeFacts = [
    "A blue whale is the largest animal ever known to live on Earth, growing up to 100 feet long and weighing over 150 tons.",
    "A lion's roar can be heard from five miles away, helping them keep track of pride members and defend territory.",
    "Bengal tigers are excellent swimmers and often play or cool off in rivers and swamps, unlike most domestic cats.",
    "Gorillas share over 98% of their genetic DNA with humans, expressing complex emotions and using tools in the wild.",
    "African elephants communicate over miles using low-frequency vibrations that travel through the ground and are felt in other elephants' feet.",
    "Polar bears have black skin under their translucent fur. This black skin absorbs heat from the sun to keep them warm.",
    "Giant pandas spend up to 12 hours a day eating bamboo, which makes up 99% of their daily diet.",
    "Cheetahs are the fastest land animals, capable of reaching speeds of 70 miles per hour in short bursts.",
    "Red pandas wrap their long, bushy tails around themselves like blankets to stay warm in cold mountain forests.",
    "Snow leopards can leap up to 50 feet in a single bound, allowing them to traverse rocky mountain cliffs easily.",
    "Grey wolves howl not just to hunt, but to communicate with their pack and strengthen social bonds.",
    "A giraffe's tongue can be up to 20 inches long and is dark purple to prevent it from getting sunburned while eating leaves."
  ];

  // ==========================================
  // 2. DEVICE & REDUCED MOTION DETECTION
  // ==========================================
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ==========================================
  // 3. TOAST NOTIFICATION SYSTEM
  // ==========================================
  const toastContainer = document.getElementById('toastContainer');

  const showToast = (message, type = 'success') => {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icon = type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation';
    
    toast.innerHTML = `
      <i class="fa-solid ${icon}"></i>
      <span class="toast-message">${message}</span>
    `;
    
    toastContainer.appendChild(toast);
    
    // Trigger paint reflow to start transition
    setTimeout(() => {
      toast.classList.add('show');
    }, 50);

    // Auto-remove
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.remove();
      }, 400);
    }, 4000);
  };

  // ==========================================
  // 4. MOBILE HAMBURGER MENU
  // ==========================================
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-explore-btn');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('active');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
      });
    });
  }

  // ==========================================
  // 5. STICKY HEADER & SCROLLSPY ACTIVE LINKS
  // ==========================================
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  const updateHeaderAndNav = () => {
    const scrollY = window.scrollY;

    // Header transition after scrolling past 50px
    if (header) {
      if (scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Scrollspy navigation link highlighting
    let currentActiveSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentActiveSectionId = section.getAttribute('id');
      }
    });

    if (currentActiveSectionId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentActiveSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  };

  window.addEventListener('scroll', updateHeaderAndNav, { passive: true });

  // ==========================================
  // 6. INLINE NAVBAR SEARCH
  // ==========================================
  const searchToggle = document.getElementById('searchToggle');
  const navSearchBar = document.getElementById('navSearchBar');
  const navSearchInput = document.getElementById('navSearchInput');
  const navSearchBtn = document.getElementById('navSearchBtn');

  if (searchToggle && navSearchBar && navSearchInput) {
    searchToggle.addEventListener('click', () => {
      navSearchBar.classList.toggle('active');
      if (navSearchBar.classList.contains('active')) {
        navSearchInput.focus();
      }
    });

    const triggerSearch = () => {
      const query = navSearchInput.value.trim();
      if (query) {
        const searchBox = document.getElementById('animalSearchInput');
        if (searchBox) {
          searchBox.value = query;
          // Trigger the input event to filter cards
          searchBox.dispatchEvent(new Event('input'));
        }
        // Scroll smoothly to animal section
        const explorer = document.getElementById('animals');
        if (explorer) {
          explorer.scrollIntoView({ behavior: 'smooth' });
        }
        showToast(`Filtered animals matching "${query}"`, 'success');
        navSearchBar.classList.remove('active');
        navSearchInput.value = '';
      }
    };

    navSearchBtn.addEventListener('click', triggerSearch);
    navSearchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') triggerSearch();
    });
  }

  // ==========================================
  // 7. ADVANCED PARALLAX SYSTEM (SCROLL-BASED)
  // ==========================================
  const parallaxLayers = document.querySelectorAll('.parallax-layer');
  const habitatSections = document.querySelectorAll('.habitat-parallax-section');
  const finalCtaBg = document.querySelector('.final-cta-bg');

  let lastScrollY = window.scrollY;
  let ticking = false;

  const updateParallax = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    // 1. Hero Multi-Layer Parallax
    // Only perform heavy translation on desktop and if reduced-motion is disabled
    if (window.innerWidth > 768 && !prefersReducedMotion) {
      // Check if hero is visible in viewport
      const hero = document.getElementById('home');
      if (hero) {
        const heroHeight = hero.offsetHeight;
        if (scrollY < heroHeight) {
          parallaxLayers.forEach(layer => {
            const speed = parseFloat(layer.getAttribute('data-speed')) || 0;
            // translate3d uses GPU acceleration
            const yOffset = scrollY * speed;
            
            // Apply scale slightly when scrolling away from hero (scales Layer 6 and others)
            const scale = 1 + (scrollY / heroHeight) * 0.04;
            
            // Apply translation
            if (layer.classList.contains('layer-wildlife') || layer.classList.contains('layer-trees')) {
              layer.style.transform = `translate3d(0, ${yOffset}px, 0) scale(${scale})`;
            } else {
              layer.style.transform = `translate3d(0, ${yOffset}px, 0)`;
            }
          });

          // Text content scroll fade and move
          const heroContent = document.querySelector('.hero-cinematic-content');
          if (heroContent) {
            const textSpeed = parseFloat(heroContent.getAttribute('data-speed')) || 0.08;
            const textY = scrollY * textSpeed;
            const opacity = Math.max(0, 1 - scrollY / (heroHeight * 0.6));
            heroContent.style.transform = `translate3d(0, ${textY}px, 0) scale(${Math.max(0.9, 1 - scrollY / (heroHeight * 4))})`;
            heroContent.style.opacity = opacity;
          }
        }
      }
    } else if (window.innerWidth <= 768 && window.innerWidth > 480 && !prefersReducedMotion) {
      // Reduced parallax intensity for tablets
      parallaxLayers.forEach(layer => {
        const speed = parseFloat(layer.getAttribute('data-speed')) || 0;
        const yOffset = scrollY * speed * 0.4;
        layer.style.transform = `translate3d(0, ${yOffset}px, 0)`;
      });
    }

    // 2. Full-Screen Habitat Parallax Sections
    habitatSections.forEach(section => {
      const rect = section.getBoundingClientRect();
      // If section is in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        const bg = section.querySelector('.habitat-bg');
        if (bg) {
          const sectionOffset = rect.top; // Relative distance to top of viewport
          const speed = 0.25; // Constant speed offset
          const yTranslation = sectionOffset * speed;
          bg.style.transform = `translate3d(0, ${yTranslation}px, 0)`;
        }
      }
    });

    // 3. Wildlife at Risk Parallax Background
    const endangeredSection = document.getElementById('endangered');
    if (endangeredSection) {
      const rect = endangeredSection.getBoundingClientRect();
      if (rect.top < windowHeight && rect.bottom > 0) {
        const bg = endangeredSection.querySelector('.endangered-parallax-bg');
        if (bg) {
          const offset = rect.top * 0.15;
          bg.style.transform = `translate3d(0, ${offset}px, 0)`;
        }
      }
    }

    // 4. Final Section Zoom and Scroll Parallax
    if (finalCtaBg) {
      const ctaSection = document.getElementById('cta-final');
      if (ctaSection) {
        const rect = ctaSection.getBoundingClientRect();
        if (rect.top < windowHeight && rect.bottom > 0) {
          // Slow zoom effect combined with scroll position
          const visibleHeight = windowHeight - rect.top;
          const ratio = Math.min(1, Math.max(0, visibleHeight / (windowHeight + ctaSection.offsetHeight)));
          // Scale from 1 to 1.08
          const scale = 1 + ratio * 0.08;
          // Slow background translation
          const yTranslation = rect.top * 0.15;
          finalCtaBg.style.transform = `translate3d(0, ${yTranslation}px, 0) scale(${scale})`;
        }
      }
    }

    ticking = false;
  };

  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  };

  window.addEventListener('scroll', requestTick, { passive: true });
  // Call once on init to set correct placement
  updateParallax();

  // ==========================================
  // 8. MOUSE MOVEMENT PARALLAX (HERO ONLY)
  // ==========================================
  const heroSection = document.getElementById('home');
  let mouseX = 0;
  let mouseY = 0;
  let targetMouseX = 0;
  let targetMouseY = 0;

  // Lerp factor for smooth mouse ease
  const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

  if (heroSection && !isTouchDevice && !prefersReducedMotion) {
    window.addEventListener('mousemove', (e) => {
      // Normalize mouse coordinates from -1 to 1
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = (e.clientY / window.innerHeight) * 2 - 1;
    });

    const updateMouseParallax = () => {
      // Interpolate coordinates
      mouseX = lerp(mouseX, targetMouseX, 0.08);
      mouseY = lerp(mouseY, targetMouseY, 0.08);

      // Apply subtle translations based on mouse position. Deep layers move less, foreground moves more.
      const sky = document.querySelector('.layer-sky');
      const clouds = document.querySelector('.layer-clouds');
      const mountains = document.querySelector('.layer-mountains');
      const landscape = document.querySelector('.layer-landscape');
      const trees = document.querySelector('.layer-trees');
      const wildlife = document.querySelector('.layer-wildlife');
      const foreground = document.querySelector('.layer-foreground');

      // Check current scroll to prevent mouse-parallax calculation if hero is scrolled away
      if (window.scrollY < window.innerHeight) {
        // We accumulate both scroll yOffset and mouse x/y offsets
        const scrollY = window.scrollY;
        
        if (sky) sky.style.transform = `translate3d(${mouseX * 5}px, ${scrollY * 0.05 + mouseY * 2}px, 0)`;
        if (clouds) clouds.style.transform = `translate3d(${mouseX * 12}px, ${scrollY * 0.08 + mouseY * 5}px, 0)`;
        if (mountains) mountains.style.transform = `translate3d(${mouseX * 25}px, ${scrollY * 0.12 + mouseY * 10}px, 0)`;
        if (landscape) landscape.style.transform = `translate3d(${mouseX * 40}px, ${scrollY * 0.18 + mouseY * 15}px, 0)`;
        if (trees) trees.style.transform = `translate3d(${mouseX * 60}px, ${scrollY * 0.25 + mouseY * 22}px, 0) scale(${1 + (scrollY / window.innerHeight) * 0.04})`;
        if (wildlife) wildlife.style.transform = `translate3d(${mouseX * 80}px, ${scrollY * 0.32 + mouseY * 30}px, 0) scale(${1 + (scrollY / window.innerHeight) * 0.04})`;
        if (foreground) foreground.style.transform = `translate3d(${mouseX * 110}px, ${scrollY * 0.45 + mouseY * 40}px, 0)`;
      }

      requestAnimationFrame(updateMouseParallax);
    };

    // Kick off mouse animation loops
    updateMouseParallax();
  }

  // ==========================================
  // 9. ANIMAL CARDS GENERATION, FILTER, AND TILT
  // ==========================================
  const animalGrid = document.getElementById('animalGrid');
  const searchInput = document.getElementById('animalSearchInput');
  const filterTabs = document.querySelectorAll('.filter-tab');

  const renderAnimals = (data) => {
    if (!animalGrid) return;
    animalGrid.innerHTML = '';
    
    if (data.length === 0) {
      animalGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 4rem 0;">
          <i class="fa-solid fa-face-frown" style="font-size: 3rem; color: var(--color-primary); margin-bottom: 1.5rem;"></i>
          <h3 style="font-family: var(--font-header); font-size: 1.8rem; margin-bottom: 0.5rem;">No Animals Found</h3>
          <p style="color: var(--color-text-muted);">We couldn't find any creatures matching your criteria. Try adjusting your filters or search terms.</p>
        </div>
      `;
      return;
    }

    data.forEach(animal => {
      const card = document.createElement('div');
      card.className = 'animal-card reveal';
      card.setAttribute('data-id', animal.id);
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
      
      card.innerHTML = `
        <div class="animal-card-bg" style="background-image: url('${animal.image}');"></div>
        <div class="animal-card-overlay"></div>
        <div class="animal-card-info">
          <span class="card-tag">${animal.habitat}</span>
          <h3>${animal.name}</h3>
          <span class="scientific-name">${animal.scientificName}</span>
          
          <div class="card-specs">
            <div class="spec-item">
              <span>Diet</span>
              ${animal.diet}
            </div>
            <div class="spec-item">
              <span>Status</span>
              ${animal.conservationStatus}
            </div>
          </div>
          
          <p class="card-desc">${animal.description.substring(0, 85)}...</p>
          
          <button class="btn-card-explore" aria-label="Explore ${animal.name} details">
            Explore <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      `;

      animalGrid.appendChild(card);
      
      // Attach click to open details modal
      card.addEventListener('click', () => {
        openAnimalModal(animal.id);
      });

      // Attach 3D Card Tilt only for non-touch desktops
      if (!isTouchDevice && !prefersReducedMotion) {
        card.addEventListener('mousemove', handleCardTilt);
        card.addEventListener('mouseleave', resetCardTilt);
      }
    });

    // Re-observe newly created elements with reveal observer
    const newReveals = animalGrid.querySelectorAll('.reveal');
    newReveals.forEach(el => {
      el.classList.add('active'); // active instantly since grid already in view
    });
  };

  // 3D Card Tilt Math
  function handleCardTilt(e) {
    const card = e.currentTarget;
    const cardRect = card.getBoundingClientRect();
    
    // Mouse coords relative to card
    const x = e.clientX - cardRect.left;
    const y = e.clientY - cardRect.top;
    
    // Normalize to -0.5 to 0.5
    const normalizedX = (x / cardRect.width) - 0.5;
    const normalizedY = (y / cardRect.height) - 0.5;
    
    // Rotate values (max 8 degrees tilt)
    const rotateX = -normalizedY * 16;
    const rotateY = normalizedX * 16;
    
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  }

  function resetCardTilt(e) {
    const card = e.currentTarget;
    card.style.transform = `rotateX(0deg) rotateY(0deg) translateY(0)`;
  }

  // Filter and Search logic
  let activeCategory = 'all';
  let searchQuery = '';

  const filterAndSearchAnimals = () => {
    let filtered = animalData;

    // 1. Category Filter
    if (activeCategory !== 'all') {
      filtered = filtered.filter(animal => {
        if (activeCategory === 'endangered') {
          return animal.conservationStatus === 'Endangered' || 
                 animal.conservationStatus === 'Vulnerable' || 
                 animal.conservationStatus === 'Critically Endangered';
        }
        return animal.tags.includes(activeCategory);
      });
    }

    // 2. Search Query Filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(animal => 
        animal.name.toLowerCase().includes(query) || 
        animal.scientificName.toLowerCase().includes(query) || 
        animal.habitat.toLowerCase().includes(query) || 
        animal.diet.toLowerCase().includes(query) ||
        animal.location.toLowerCase().includes(query)
      );
    }

    renderAnimals(filtered);
  };

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      filterAndSearchAnimals();
    });
  }

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.getAttribute('data-filter');
      filterAndSearchAnimals();
    });
  });

  // Initial Animal Cards Draw
  renderAnimals(animalData);


  // ==========================================
  // 10. ANIMAL DETAILS MODAL SYSTEM
  // ==========================================
  const modalOverlay = document.getElementById('animalModal');
  const modalWrapper = modalOverlay ? modalOverlay.querySelector('.modal-wrapper') : null;
  const modalScrollArea = modalOverlay ? modalOverlay.querySelector('.modal-scroll-area') : null;
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalPrevBtn = document.getElementById('modalPrevBtn');
  const modalNextBtn = document.getElementById('modalNextBtn');

  let currentActiveAnimalId = '';

  const openAnimalModal = (animalId) => {
    const animalIndex = animalData.findIndex(a => a.id === animalId);
    if (animalIndex === -1) return;
    
    currentActiveAnimalId = animalId;
    const animal = animalData[animalIndex];
    
    if (!modalOverlay || !modalScrollArea) return;

    // Reset scroll of modal content panel back to top
    modalScrollArea.scrollTop = 0;

    // Compile facts HTML list
    const factsHtml = animal.facts.map(fact => `<li><i class="fa-solid fa-leaf"></i> <span>${fact}</span></li>`).join('');

    // Generate Modal Content HTML
    modalScrollArea.innerHTML = `
      <div class="modal-grid">
        <div class="modal-media">
          <img src="${animal.image}" alt="${animal.name} Wildlife Photography" class="modal-img">
          <div class="modal-media-overlay"></div>
        </div>
        <div class="modal-content-panel">
          <div class="modal-header-row">
            <span class="card-tag">${animal.location}</span>
            <h2>${animal.name}</h2>
            <span class="scientific">${animal.scientificName}</span>
          </div>

          <div class="modal-specs-grid">
            <div class="modal-spec-box">
              <h4>Habitat</h4>
              <p>${animal.habitat}</p>
            </div>
            <div class="modal-spec-box">
              <h4>Diet type</h4>
              <p>${animal.diet}</p>
            </div>
            <div class="modal-spec-box">
              <h4>Average Lifespan</h4>
              <p>${animal.lifespan}</p>
            </div>
            <div class="modal-spec-box">
              <h4>Conservation Status</h4>
              <span class="status-pill status-${animal.statusClass}">${animal.conservationStatus}</span>
            </div>
          </div>

          <p class="modal-body-desc">${animal.description}</p>

          <div class="modal-additional-sections">
            <div class="modal-sub-section">
              <h3>Key Threats</h3>
              <p>${animal.threats}</p>
            </div>
            <div class="modal-sub-section">
              <h3>Interesting Facts</h3>
              <ul>
                ${factsHtml}
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Disable scroll on main body

    // Sync button visibility or state
    modalPrevBtn.style.visibility = animalIndex === 0 ? 'hidden' : 'visible';
    modalNextBtn.style.visibility = animalIndex === animalData.length - 1 ? 'hidden' : 'visible';
  };

  const closeAnimalModal = () => {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
      currentActiveAnimalId = '';
    }
  };

  const navigateModal = (direction) => {
    const currentIndex = animalData.findIndex(a => a.id === currentActiveAnimalId);
    if (currentIndex === -1) return;

    let targetIndex = currentIndex;
    if (direction === 'next' && currentIndex < animalData.length - 1) {
      targetIndex = currentIndex + 1;
    } else if (direction === 'prev' && currentIndex > 0) {
      targetIndex = currentIndex - 1;
    }

    if (targetIndex !== currentIndex) {
      // Smooth fade transition between contents inside modal
      modalWrapper.style.opacity = '0';
      modalWrapper.style.transform = 'scale(0.97) translateY(10px)';
      
      setTimeout(() => {
        openAnimalModal(animalData[targetIndex].id);
        modalWrapper.style.opacity = '1';
        modalWrapper.style.transform = 'scale(1) translateY(0)';
      }, 200);
    }
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeAnimalModal);
  if (modalPrevBtn) modalPrevBtn.addEventListener('click', () => navigateModal('prev'));
  if (modalNextBtn) modalNextBtn.addEventListener('click', () => navigateModal('next'));

  // Close modal on background click
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeAnimalModal();
    });
  }

  // Keyboard navigation for Modal
  window.addEventListener('keydown', (e) => {
    if (!modalOverlay || !modalOverlay.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
      closeAnimalModal();
    } else if (e.key === 'ArrowRight' && currentActiveAnimalId) {
      navigateModal('next');
    } else if (e.key === 'ArrowLeft' && currentActiveAnimalId) {
      navigateModal('prev');
    }
  });


  // ==========================================
  // 11. WILDLIFE FACTS GENERATOR
  // ==========================================
  const factContent = document.getElementById('factContent');
  const nextFactBtn = document.getElementById('nextFactBtn');

  const randomizeFact = () => {
    if (!factContent) return;
    
    // Add slide-out fade
    factContent.style.opacity = '0';
    factContent.style.transform = 'translateY(-10px)';

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * wildlifeFacts.length);
      factContent.textContent = wildlifeFacts[randomIndex];
      
      // Slide-in fade
      factContent.style.opacity = '1';
      factContent.style.transform = 'translateY(0)';
    }, 300);
  };

  if (nextFactBtn) {
    nextFactBtn.addEventListener('click', randomizeFact);
  }
  // Initialize first fact
  randomizeFact();


  // ==========================================
  // 12. MASONRY PHOTO GALLERY & LIGHTBOX
  // ==========================================
  const galleryPhotos = document.querySelectorAll('.gallery-photo-item');
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  let currentGalleryIndex = 0;

  // Build array of items
  const galleryItems = Array.from(galleryPhotos).map((item, index) => {
    const img = item.querySelector('img');
    const title = item.querySelector('h4').textContent;
    return {
      index: index,
      src: img.getAttribute('src').replace('w=600', 'w=1200'), // load high res for lightbox
      title: title
    };
  });

  const openLightbox = (index) => {
    if (!lightboxModal || !lightboxImg || !lightboxCaption || !lightboxCounter) return;
    currentGalleryIndex = index;
    const item = galleryItems[currentGalleryIndex];

    lightboxImg.src = item.src;
    lightboxCaption.textContent = item.title;
    lightboxCounter.textContent = `${currentGalleryIndex + 1} / ${galleryItems.length}`;

    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const navigateLightbox = (direction) => {
    if (direction === 'next') {
      currentGalleryIndex = (currentGalleryIndex + 1) % galleryItems.length;
    } else {
      currentGalleryIndex = (currentGalleryIndex - 1 + galleryItems.length) % galleryItems.length;
    }

    if (lightboxImg) {
      lightboxImg.style.opacity = '0';
      
      setTimeout(() => {
        const item = galleryItems[currentGalleryIndex];
        lightboxImg.src = item.src;
        lightboxCaption.textContent = item.title;
        lightboxCounter.textContent = `${currentGalleryIndex + 1} / ${galleryItems.length}`;
        lightboxImg.style.opacity = '1';
      }, 200);
    }
  };

  galleryPhotos.forEach((item, index) => {
    item.addEventListener('click', () => openLightbox(index));
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (lightboxPrev) lightboxPrev.addEventListener('click', () => navigateLightbox('prev'));
  if (lightboxNext) lightboxNext.addEventListener('click', () => navigateLightbox('next'));

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Keyboard navigation for Lightbox
  window.addEventListener('keydown', (e) => {
    if (!lightboxModal || !lightboxModal.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
    } else if (e.key === 'ArrowRight') {
      navigateLightbox('next');
    } else if (e.key === 'ArrowLeft') {
      navigateLightbox('prev');
    }
  });


  // ==========================================
  // 13. ANIMATED STATISTICS COUNTERS
  // ==========================================
  const statsSection = document.getElementById('statistics');
  const statNumbers = document.querySelectorAll('.stat-number');
  let countersAnimated = false;

  const runCounterAnimation = () => {
    statNumbers.forEach(counter => {
      const targetText = counter.getAttribute('data-target') || '0';
      // extract just numbers (handling M+, %, + etc.)
      const targetVal = parseFloat(targetText.replace(/[^0-9.]/g, ''));
      const duration = 2500; // 2.5 seconds
      const frames = 60 * (duration / 1000); // 150 frames
      const increment = targetVal / frames;
      
      let currentVal = 0;
      let frameCount = 0;
      
      const updateValue = () => {
        currentVal += increment;
        frameCount++;
        
        if (frameCount < frames) {
          // Format based on type
          if (targetText.includes('.')) {
            counter.textContent = currentVal.toFixed(1) + (targetText.replace(/[0-9.]/g, ''));
          } else {
            counter.textContent = Math.ceil(currentVal).toLocaleString() + (targetText.replace(/[0-9]/g, ''));
          }
          requestAnimationFrame(updateValue);
        } else {
          counter.textContent = targetText;
        }
      };
      
      updateValue();
    });
  };

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersAnimated) {
        runCounterAnimation();
        countersAnimated = true;
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  if (statsSection) {
    statsObserver.observe(statsSection);
  }


  // ==========================================
  // 14. SCROLL REVEAL ELEMENTS OBSERVER
  // ==========================================
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Unobserve to keep element shown once revealed
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });


  // ==========================================
  // 15. CTA / NEWSLETTER FORM SUBMISSIONS
  // ==========================================
  const newsletterForm = document.getElementById('newsletterForm');
  const ctaBtnHelp = document.getElementById('ctaBtnHelp');
  const exploreWildlifeBtn = document.getElementById('exploreWildlifeBtn');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input');
      const email = emailInput.value.trim();
      
      if (email) {
        showToast(`Thank you! "${email}" has been added to our conservation network list.`, 'success');
        emailInput.value = '';
      } else {
        showToast('Please enter a valid email address.', 'error');
      }
    });
  }

  if (ctaBtnHelp) {
    ctaBtnHelp.addEventListener('click', () => {
      showToast('Redirecting to wildlife protection partner portals...', 'success');
    });
  }

  if (exploreWildlifeBtn) {
    exploreWildlifeBtn.addEventListener('click', () => {
      const target = document.getElementById('animals');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // ==========================================
  // 16. BACK TO TOP BUTTON
  // ==========================================
  const backToTopBtn = document.getElementById('backToTop');

  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 600) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
