document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const productName = card.querySelector('.product-name').textContent;
        alert(`You clicked on the ${productName} card!`);
    });
});