  // === Cart Logic ===
  const cartBtn = document.querySelector("header button.relative");
  let cartCount = 3;

  cartBtn?.addEventListener("click", () => {
    cartCount++;
    const counter = cartBtn.querySelector("span");
    counter.textContent = cartCount;
  });

  const buyButtons = document.querySelectorAll("button.bg-blue-600");

  buyButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      cartCount++;
      const counter = document.querySelector("header button.relative span");
      if (counter) counter.textContent = cartCount;
      alert("Added to cart!");
    });
  });




document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    let currentIndex = 0;
    let interval;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
        dots[i].classList.toggle("active", i === index);
      });
      currentIndex = index;
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
  
    dots.forEach(dot => {
      dot.addEventListener("click", () => {
        const index = parseInt(dot.getAttribute("data-slide"));
        showSlide(index);
        resetInterval();
      });
    });
  
    function startSlider() {
      interval = setInterval(nextSlide, 5000); // 5 sec delay
    }
  
    function resetInterval() {
      clearInterval(interval);
      startSlider();
    }
  
    showSlide(currentIndex);
    startSlider();
  });



  // === Dark/Light Mode Toggle ===
const toggleBtn = document.getElementById("toggle-theme");
const body = document.body;

// Check the saved theme in localStorage and apply it
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add("dark");
  toggleBtn.textContent = "Toggle Light Mode";
} else {
  body.classList.remove("dark");
  toggleBtn.textContent = "Toggle Dark Mode";
 }

// Toggle between dark and light modes
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  
  if (body.classList.contains("dark")) {
    localStorage.setItem('theme', 'dark');
    toggleBtn.textContent = "Toggle Light Mode";
  } else {
    localStorage.setItem('theme', 'light');
    toggleBtn.textContent = "Toggle Dark Mode";
  }
});



// Optional: draggable slider with mouse/touch
const slider = document.getElementById("categorySlider");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("grabbing");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("grabbing");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("grabbing");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});





document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const productCards = document.querySelectorAll('.product-card'); // All product cards
    const productSection = document.getElementById('products');
    const productGrid = productSection.querySelector('.grid');
  
    // Search when Enter is pressed
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const query = e.target.value.toLowerCase().trim();
        if (!query) return resetSearch();
  
        let foundAny = false;
        productCards.forEach(card => {
          const name = card.querySelector('h3').innerText.toLowerCase();
          if (name.includes(query)) {
            card.style.display = 'block';
            foundAny = true;
          } else {
            card.style.display = 'none';
          }
        });
  
        if (!foundAny) {
          productGrid.innerHTML = `<p class="text-white text-center w-full">No products found matching "${query}"</p>`;
        }
      }
    });
  
    // Optional: Reset if input is cleared
    searchInput.addEventListener('input', (e) => {
      if (!e.target.value.trim()) {
        resetSearch();
      }
    });
  
    function resetSearch() {
      productGrid.innerHTML = '';
      productCards.forEach(card => {
        card.style.display = 'block';
        productGrid.appendChild(card);
      });
    }
  });




  // PRODUCT PAGE
  const buttons = document.querySelectorAll('.tab-button');
    const content = document.getElementById('tab-content');

    const tabData = [
      `This powerful machine is built for extreme gaming. Engineered with the latest RTX 4080 graphics, 2TB NVMe, and liquid-cooled 14th Gen Intel CPU, it's made for those who want no limits.`,
      `<ul class='list-disc ml-6'><li>Motherboard: ASUS ROG STRIX Z790</li><li>Cooling: Corsair iCUE Liquid AIO</li><li>Ports: USB-C, HDMI, DisplayPort</li><li>WiFi 6 & Bluetooth 5.2</li></ul>`,
      `<p class='text-yellow-400'>★★★★★ - Best PC I've ever bought! Super fast and great cooling.</p><p class='mt-2'>★★★★★ - Worth every cent. Runs Cyberpunk on ultra with ray tracing, no sweat.</p>`
    ];

    buttons.forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('border-b-2', 'border-[#51ff00]'));
        btn.classList.add('border-b-2', 'border-[#51ff00]');
        content.innerHTML = tabData[idx];
      });
    });


    // PRODUCT IMAGE GALLERY
    function changeImage(src) {
      document.getElementById('mainImage').src = src;
    }




















    //ADD PRODUCT PAGE
    function generateProductCard() {
      const name = document.getElementById("productName").value;
      const image1 = document.getElementById("productImage1").value;
      const image2 = document.getElementById("productImage2").value;
      const image3 = document.getElementById("productImage3").value;
      const price = document.getElementById("productPrice").value;
      const specs1 = document.getElementById("productSpecs1").value;
      const specs2 = document.getElementById("productSpecs2").value;
      const specs3 = document.getElementById("productSpecs3").value;
      const specs4 = document.getElementById("productSpecs4").value;
      const affiliateLink = document.getElementById("affiliateLink").value;
    
      const html = `
    <!DOCTYPE html>
    <html lang="en" class="dark">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${name} | Spec-Check</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
      </head>
    
      <body class="min-h-screen dark:bg-black dark:text-white">
        <!-- Header -->
        <header class="bg-black shadow-md sticky top-0 z-50">
          <div class="container mx-auto flex flex-wrap justify-between items-center p-4">
            <a href="#" class="text-2xl font-bold text-[#51ff00]">Spec-Check</a>
            <div class="flex items-center space-x-4">
              <a href="index.html" class="relative inline-block text-white font-bold text-xl">Home</a>
            </div>
          </div>
        </header>
        
        <!-- Product Section -->
        <section class="py-12 px-6">
          <div class="container mx-auto grid md:grid-cols-2 gap-12">
            <!-- Image Gallery -->
            <div class="rounded-xl overflow-hidden bg-black-900 p-6">
              <div class="mb-4">
                <img id="mainImage" src="images/${image1}" alt="${name}" class="w-full h-auto rounded-lg">
              </div>
              <div class="flex space-x-4">
                <img src="images/${image1}" alt="Thumb 1" class="w-20 h-20 object-cover cursor-pointer rounded border border-gray-700" onclick="changeImage('images/${image1}')">
                <img src="images/${image2}" alt="Thumb 2" class="w-20 h-20 object-cover cursor-pointer rounded border border-gray-700" onclick="changeImage('images/${image2}')">
                <img src="images/${image3}" alt="Thumb 3" class="w-20 h-20 object-cover cursor-pointer rounded border border-gray-700" onclick="changeImage('images/${image3}')">
              </div>
            </div>
    
            <!-- Details -->
            <div class="flex flex-col space-y-4">
              <h1 class="text-3xl font-bold">${name}</h1>
              <p class="text-gray-300 text-sm rating-stars">★★★★☆ (38 reviews)</p>
              <p class="text-2xl text-[#51ff00] font-semibold">${price}</p>
              <ul class="text-gray-400 list-disc ml-5 space-y-1">
                <li>${specs1}</li>
                <li>${specs2}</li>
                <li>${specs3}</li>
                <li>${specs4}</li>
              </ul>
              <a href="${affiliateLink}" class="bg-[#51ff00] text-black text-xl font-bold px-10 py-3 rounded-lg hover:bg-lime-400 transition w-full md:w-auto flex items-center justify-center gap-2 animate-pop">
                <span>Purchase</span>
                <span>🛒</span>
              </a>
            </div>
          </div>
        </section>
        
        <!-- Tabs Section -->
        <section class="px-6 py-8">
          <div class="container mx-auto">
            <div class="flex space-x-6 border-b border-gray-700 text-white">
              <button class="tab-button pb-2 border-b-2 border-[#51ff00]">Description</button>
            </div>
            
            <div id="tab-content" class="mt-6 text-gray-300">
              <p>Add a product description here.</p>
            </div>
          </div>
        </section>
    
        <script src="javascrip.js"></script>
      </body>
    </html>
    `.trim();
    
      document.getElementById("outputBox").textContent = html;
    }