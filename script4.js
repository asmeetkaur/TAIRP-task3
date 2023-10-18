document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-button");
    const imageList = document.querySelector(".image-list");

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");
            
            filterButtons.forEach((btn) => {
                btn.classList.remove("active");
            });
            button.classList.add("active");

            if (category === "all") {
                imageList.querySelectorAll(".image").forEach((image) => {
                    image.style.display = "block";
                });
            } else {
                imageList.querySelectorAll(".image").forEach((image) => {
                    const imageCategory = image.getAttribute("data-category");
                    if (imageCategory === category) {
                        image.style.display = "block";
                    } else {
                        image.style.display = "none";
                    }
                });
            }
        });
    });
});
