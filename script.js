document.getElementById('toggleButton').addEventListener('click', function() {
    const hiddenCards = document.querySelectorAll('.item-card.hidden');
    const isVisible = hiddenCards.length === 0;
    const button = document.getElementById('toggleButton');
    

    if (isVisible) {
        const allCards = document.querySelectorAll('.item-card');
        allCards.forEach(card => {
            if (!card.classList.contains('visible')) {
                card.classList.add('hidden');
            }
        });
        button.textContent = 'See More Prouducts';
    } else {
        hiddenCards.forEach(card => {
            card.classList.remove('hidden');
        });
        button.textContent = 'See Less Products';
    }
});

document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const message = document.getElementById('message');

    if (validateEmail(emailInput.value)) {
        message.textContent = 'Your subscription is successful';
    } else {
        message.textContent = 'Please enter a valid email address';
        message.style.color = 'red';
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}