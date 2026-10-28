/*===========================================================================Fitness Products=========================================*/
const menuToggle = document.querySelector("#menu-toggle");
const pageNavigation = document.querySelector(".page-navigation");
const menuIcon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {
    const isOpen = pageNavigation.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuIcon.classList.toggle("bi-list", !isOpen);
    menuIcon.classList.toggle("bi-x-lg", isOpen);
});

// Close menu after clicking a navigation link
pageNavigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        pageNavigation.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");

        menuIcon.classList.replace("bi-x-lg", "bi-list");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
});

const products = [
  {
    id: 1,
    name: "Adjustable Dumbbells",
    category: "equipment",
    price: 1499,
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80",
    description: "Your everyday strength-training essential."
  },
  {
    id: 2,
    name: "Non-Slip Yoga Mat",
    category: "accessories",
    price: 799,
    image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=600&q=80",
    description: "Comfort and stability for every movement."
  },
  {
    id: 3,
    name: "Shaker Bottle",
    category: "accessories",
    price: 349,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80",
    description: "Mix your workout drinks wherever you go."
  },
  {
    id: 4,
    name: "Resistance Bands Set",
    category: "equipment",
    price: 499,
    image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&w=600&q=80",
    description: "Build strength with versatile resistance training."
  },
  {
    id: 5,
    name: "Whey Protein",
    category: "nutrition",
    price: 1999,
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=600&q=80",
    description: "A convenient protein option for your routine."
  },
  {
    id: 6,
    name: "Training Gloves",
    category: "accessories",
    price: 599,
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80",
    description: "Get a comfortable grip during your workouts."
  },
  {
    id: 7,
    name: "Kettlebell",
    category: "equipment",
    price: 1199,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80",
    description: "Improve strength, balance and conditioning."
  },
  {
    id: 8,
    name: "Skipping Rope",
    category: "equipment",
    price: 299,
    image: "https://images.unsplash.com/photo-1434596922112-19c563067271?auto=format&fit=crop&w=600&q=80",
    description: "A simple tool for cardio and endurance training."
  },
  {
    id: 9,
    name: "Gym Duffel Bag",
    category: "accessories",
    price: 1299,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    description: "Carry your training essentials in one bag."
  },
  {
    id: 10,
    name: "Foam Roller",
    category: "accessories",
    price: 699,
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=600&q=80",
    description: "Add self-massage to your recovery routine."
  },
  {
    id: 11,
    name: "Weightlifting Belt",
    category: "accessories",
    price: 899,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
    description: "A training accessory for your lifting sessions."
  },
  {
    id: 12,
    name: "Sports Water Bottle",
    category: "accessories",
    price: 449,
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=600&q=80",
    description: "Stay hydrated throughout your workout."
  },
  {
    id: 13,
    name: "Protein Shaker Pro",
    category: "accessories",
    price: 499,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80",
    description: "Mix your favourite workout drinks with ease."
  },
  {
    id: 14,
    name: "Workout Bench",
    category: "equipment",
    price: 3499,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
    description: "Create more options for your strength workouts."
  },
  {
    id: 15,
    name: "Ankle Weights",
    category: "equipment",
    price: 799,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80",
    description: "Add resistance to selected bodyweight exercises."
  },
  {
    id: 16,
    name: "Fitness Tracker",
    category: "accessories",
    price: 2499,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=600&q=80",
    description: "Keep track of activity and daily movement."
  },
  {
    id: 17,
    name: "Pre-Workout Powder",
    category: "nutrition",
    price: 1299,
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=600&q=80",
    description: "A pre-workout option for your training routine."
  },
  {
    id: 18,
    name: "Yoga Blocks",
    category: "accessories",
    price: 399,
    image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=600&q=80",
    description: "Support balance and alignment during yoga."
  },
  {
    id: 19,
    name: "Push-Up Bars",
    category: "equipment",
    price: 649,
    image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=600&q=80",
    description: "Add variety to your upper-body workouts."
  },
  {
    id: 20,
    name: "Running Shoes",
    category: "apparel",
    price: 2799,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    description: "Sporty footwear for running and everyday training."
  },
{
  id: 21,
  name: "Medicine Ball",
  category: "equipment",
  price: 999,
  image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=600&q=80",
  description: "Build core strength, power and coordination with dynamic exercises."
}


];


const productsGrid = document.querySelector("#products-grid");

function displayProducts(productsToDisplay = products) {
productsGrid.innerHTML = "";

productsToDisplay.forEach((product) => {
    const productCard = document.createElement("article");

    productCard.classList.add("product-card");

    productCard.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">

            <button class="wishlist-btn" aria-label="Add ${product.name} to wishlist">
                <i class="bi bi-heart wishlist-icon"></i>
            </button>
        </div>

        <div class="product-details">
            <p class="product-category">
                ${product.category}
            </p>

            <h3>${product.name}</h3>

            <p class="product-description">
                ${product.description}
            </p>

            <div class="product-bottom">
                <span class="product-price">
                    ₹${product.price.toLocaleString("en-IN")}
                </span>

                <button class="add-cart-btn" data-id="${product.id}">
                    <i class="bi bi-bag-plus"></i>
                    Add to Cart
                </button>
            </div>
        </div>
    `;

    productsGrid.appendChild(productCard);
});


}



displayProducts();

productsGrid.addEventListener("click", (event)=> {
    const wishListBtn = event.target.closest(".wishlist-btn");

    if(!wishListBtn) return;

    const wishListIcon = wishListBtn.querySelector(".wishlist-icon");

    wishListIcon.classList.toggle("bi-heart");
    wishListIcon.classList.toggle("bi-heart-fill");
})

/*--------------------------------------------------Filter and Sorting-------------------------- */

const filterButtons = document.querySelectorAll(".filter-btn"); 
const sortProducts = document.querySelector("#sort-products");

let selectedCategory = "all";

function updateProducts(){
    
    let updateProducts = selectedCategory === "all" ? [...products] 
        : products.filter((product) => product.category === selectedCategory);

        const sortValue = sortProducts.value;

        if(sortValue === "price-low-high"){
            updateProducts.sort((a,b) => a.price - b.price);
        }else if(sortValue === "price-high-low"){
            updateProducts.sort((a,b) => b.price - a.price);
        } else if(sortValue === "name-a-z"){
            updateProducts.sort((a,b) => a.name.localeCompare(b.name));
        } else if(sortValue === "name-z-a"){
            updateProducts.sort((a,b) => b.name.localeCompare(a.name));
        }

        displayProducts(updateProducts);
}

filterButtons.forEach((button) => {
    button.addEventListener("click", ()=> {
        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        selectedCategory = button.dataset.category;

        updateProducts();
    });
});

sortProducts.addEventListener("change", updateProducts);

//--------------------------------Filter HamBurGer--------------------------------------------
const filterToggle = document.querySelector("#filter-toggle");
const filterPanel = document.querySelector("#filter-panel");

filterToggle.addEventListener("click", () => {
    const isOpen = filterPanel.classList.toggle("active");

    filterToggle.setAttribute("aria-expanded", isOpen);
});

document.addEventListener("click", (event) => {
    if (!event.target.closest(".filter-dropdown")) {
        filterPanel.classList.remove("active");
        filterToggle.setAttribute("aria-expanded", "false");
    }
});