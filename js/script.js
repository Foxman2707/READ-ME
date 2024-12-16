// Fonction pour alterner la couleur de la main et du texte
function toggleLike(button) {
    const icon = button.querySelector('.icon'); // Sélectionner l'icône de la main
    const text = button.querySelector('span'); // Sélectionner le texte "J'aime"

    // Vérifier l'état actuel et alterner
    if (icon.style.color === 'blue') {
        icon.style.color = ''; // Réinitialiser la couleur
        text.textContent = 'J\'aime'; // Réinitialiser le texte
    } else {
        icon.style.color = 'blue'; // Colorier en bleu
        text.textContent = 'J\'aime !'; // Changer le texte
    }
}
