document.addEventListener("DOMContentLoaded", () => {
    const purchaseForm = document.getElementById("purchaseForm");
    purchaseForm.addEventListener("submit", (event) => {
        event.preventDefault()

        const name = document.getElementById("nameInput").value
        alert(`${name}, благодарим за поръчката!`)
    });

    const reviewForm = document.getElementById("reviewForm")
    const reviewContainer = document.getElementById("reviewContainer")
    reviewForm.addEventListener("submit", (event) => {
        event.preventDefault()

        const newReview = document.createElement("p")
        newReview.className = "review"
        const reviewText = document.getElementById("reviewInput").value
        newReview.textContent = reviewText

        reviewContainer.prepend(newReview)

        reviewForm.reset()
    })
})