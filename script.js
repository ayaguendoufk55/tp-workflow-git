const montant = document.getElementById("montant");
const resultat = document.getElementById("resultat");

montant.addEventListener("input", () => {
    const valeur = parseFloat(montant.value);

    if (!isNaN(valeur)) {
        const pourboire = valeur * 0.15;
        resultat.textContent = "Pourboire : " + pourboire.toFixed(2) + " DH";
    } else {
        resultat.textContent = "";
    }
});