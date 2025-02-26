document.getElementById('caesar-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const text = document.getElementById('input-text').value;
    const shift = parseInt(document.getElementById('shift').value);
    document.getElementById('result').textContent = caesarCipher(text, shift);
});

function caesarCipher(text, shift) {
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            const base = code >= 65 && code <= 90 ? 65 : 97;
            return String.fromCharCode(((code - base + shift) % 26) + base);
        }
        return char;
    }).join('');
}
