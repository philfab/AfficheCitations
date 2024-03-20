document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    quotes.forEach(quote => {
        const card = document.createElement('div');
        card.className =quote.isFavorite ? 'card favorite': 'card';
        card.innerHTML = `
            <blockquote class="quote">"${quote.content}"</blockquote>
            <span class="auteur">${quote.author}</span>
            <button class="favorite-btn">${quote.isFavorite ? 'Retirer des Favoris' : 'Ajouter aux Favoris'}</button>
        `;
        container.appendChild(card);

        const favButton = card.querySelector('.favorite-btn');
        favButton.addEventListener('click', () => {
            quote.isFavorite = !quote.isFavorite;
            favButton.textContent = quote.isFavorite ? 'Retirer des Favoris' : 'Ajouter aux Favoris';
            card.style.backgroundColor = quote.isFavorite ? 'lightgreen': 'white';
        });
    });
});

