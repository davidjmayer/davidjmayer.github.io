function spongebobify(string) {
    var spongebobbed = '';

    for (i = 0; i < string.length; i++) {
        if (i % 2 === 0) {
            var l = string[i].toLowerCase();
        } else {
            var l = string[i].toUpperCase();
        }
        spongebobbed = spongebobbed.concat(l);
    }
    return spongebobbed;
}

const form = document.getElementById('spongebob-form');
const inputText = document.getElementById('input-text');
const resultsText = document.getElementById('result');
const thankYouText = document.getElementById('thanks');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    resultsText.className = 'card';
    resultsText.children[0].innerText = spongebobify(inputText.value);

    thankYouText.className = 'card';
    thankYouText.children[0].innerText = "Thank you for shoping at sPoNgEbObIfY. Have a pleasant day!";
});