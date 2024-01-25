const quoteResult = document.getElementById('result');

function getRandomQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            const quote = data.content;
            quoteResult.innerHTML = `<p>${quote}</p>`; 
            
        })
        .catch(error => {
            console.log(error);
        });
}

const generatorButton = document.getElementById('generate-button');
generatorButton.addEventListener('click', getRandomQuote);


// function displayQuote(){
//    
// }
