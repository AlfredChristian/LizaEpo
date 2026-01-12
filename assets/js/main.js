const searchInput = document.querySelector('.search-box input');
const searchButton = document.querySelector('.search-box button');

searchButton.addEventListener('click', () => {
    if (searchInput.value.trim() === '') {
        alert('Veuillez entrer un produit');
    } else {
        alert(`Recherche : ${searchInput.value}`);
    }
});
