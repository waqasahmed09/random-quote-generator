const generateBtn = () => {
    let url = "https://type.fit/api/quotes";
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let randomNum = Math.floor(Math.random() * data.length);
            let randomQuote = data[randomNum];
            document.getElementById("quote").innerHTML = randomQuote.text;
            document.getElementById("author").innerHTML = randomQuote.author || "Unknown";
        })
        .catch(function(error) {
            console.error("Error fetching data:", error);
        });
}
