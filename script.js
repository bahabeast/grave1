function calculatePrice() {
    let basePrice = 100; // Starting bid

    // Get education coefficient
    let education = parseFloat(document.getElementById('education').value);

    // Get family net worth coefficient
    let netWorth = parseFloat(document.getElementById('netWorth').value);

    // Get caste value
    let caste = parseFloat(document.getElementById('caste').value);

    // Get selected age coefficient
    let ageElems = document.getElementsByName('age');
    let ageCoefficient = 1;
    for (let i = 0; i < ageElems.length; i++) {
        if (ageElems[i].checked) {
            ageCoefficient = parseFloat(ageElems[i].value);
            break;
        }
    }

    // Calculate skills price
    let skillsBonus = 0;
    if (document.getElementById('musicSkill').checked) skillsBonus += 10;
    if (document.getElementById('cookSkill').checked) skillsBonus += 20;
    if (document.getElementById('characterSkill').checked) skillsBonus += 15;
    if (document.getElementById('singSkill').checked) skillsBonus += 10;

    // Reputation impact
    let reputationCoefficient = 1;
    if (document.getElementById('parentGossip').checked) reputationCoefficient *= 0.85;
    if (document.getElementById('characterGossip').checked) reputationCoefficient *= 0.9;
    if (document.getElementById('generalGossip').checked) basePrice -= 20;

    // Calculate final price
    let finalPrice = basePrice * education * netWorth * ageCoefficient * reputationCoefficient;
    finalPrice += caste + skillsBonus;

    // Update result in the DOM
    document.getElementById('result').innerHTML = `The final dowry price is: $${finalPrice.toFixed(2)}`;
}