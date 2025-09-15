// Fade-in animation on page load
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll("main img, main p, main input");

    elements.forEach((el, index) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = `opacity 0.6s ease ${index * 0.3}s, transform 0.6s ease ${index * 0.3}s`;

        setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, 100);
    });
});

// Search input interaction
const input = document.querySelector("main input");

if (input) {
    input.addEventListener("focus", () => {
        input.style.backgroundColor = "#fff5f5"; // soft background
    });

    input.addEventListener("blur", () => {
        input.style.backgroundColor = "white";
    });

    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            alert(`Searching for "${input.value}"...`);
        }
    });
}

// Restaurant search filter
const restaurantSearch = document.getElementById("restaurant-search");

if (restaurantSearch) {
    restaurantSearch.addEventListener("input", () => {
        const query = restaurantSearch.value.toLowerCase();
        const cards = document.querySelectorAll(".restaurant-card");

        cards.forEach(card => {
            const name = card.querySelector("h3").textContent.toLowerCase();
            card.style.display = name.includes(query) ? "block" : "none";
        });
    });
}
