document.addEventListener("DOMContentLoaded", () => {
    const calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", showPrice);
});

function showPrice() {
    const getCheckboxValuesFilterReduce = (nodeList, initialValue) => {
        let list = Array.from(nodeList).filter(item => item.checked);
        return list.reduce((accumulator, item) => accumulator + Number(item.value), initialValue);
    };

    let edx = parseFloat(document.getElementById("education").value)
    let moneyx = parseFloat(document.getElementById("wallet").value)
    let statusx = parseFloat(document.getElementById("caste").value)
    let repminus = 1;
    let bonus = 0;

    let name = document.getElementById("partnername").value;
    let love_letter = document.getElementById("loveletter").value;
    let price = parseFloat(document.getElementById("startingbid").value)

    let person = {
        bride_name: name,
        bride_price: result,
        letter_to_bride: love_letter,
    };

    let skills = document.querySelectorAll(".skills");
    bonus = getCheckboxValuesFilterReduce(skills, bonus) + statusx;

    const ageElems = document.getElementsByName('age');
    ageElems.forEach(item => {
        if (item.checked) {
            repminus *= Number(item.value);
        }
    });

    if (document.getElementById("parent").checked) {
        repminus *= 0.85;
    }

    if (document.getElementById("characters").checked) {
        repminus *= 0.9;
    }

    if (document.getElementById("general").checked) {
        bonus -= 20;
    }

    let cost = (edx * moneyx * repminus) * (bonus + price)
    document.getElementById("result").innerHTML = `The price for your bride ${person.bride_name} is ${cost.toFixed(1)}. Your love letter is "${person.letter_to_bride}"`
}
