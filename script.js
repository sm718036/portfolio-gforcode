document.querySelector('.recommendation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let recommendationContainer = document.getElementById("recommendations-container");
    let newMsg = document.getElementById("new-recommendation").value;
    let newRecom = document.createElement("p");
    newRecom.setAttribute("id", "recommendation-text");
    newRecom.innerText = newMsg;
    recommendationContainer.appendChild(newRecom);
    alert('Thank you for your recommendation!');
    newMsg.value = "";
});
  