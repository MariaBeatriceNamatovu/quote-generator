const quoteResult = document.getElementById('result');
 
async function getRandomQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
 
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
        }
 
        const data = await response.json();
        const quote = data.content;
 
        quoteResult.innerHTML = `<p>${quote}</p>`;
    } catch (error) {
        console.error(error);
    }
}
 
const generatorButton = document.getElementById('generate-button');
generatorButton.addEventListener('click', getRandomQuote);