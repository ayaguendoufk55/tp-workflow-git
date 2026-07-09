const montant = document.getElementById("montant");
const resultat = document.getElementById("resultat");

montant.addEventListener("input", function () {
    const note = parseFloat(montant.value);

    if (isNaN(note) || note < 0) {
        resultat.textContent = "";
        return;
    }

    const pourboire = note * 0.20; // 20%
    resultat.textContent = "Pourboire : " + pourboire.toFixed(2) + " DH";
});