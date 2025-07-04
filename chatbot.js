const fakeAnswers = [
  "Renewable energy sources include solar, wind, and hydro power.",
  "Sustainability means meeting our current needs without compromising future generations.",
  "Climate action involves reducing carbon emissions and using green technologies.",
  "The green economy promotes environmental and economic well-being together.",
  "Great question! Let me get you some eco-friendly info..."
];

function askQuestion() {
  const userInput = document.getElementById("userInput").value.trim();
  const chatResponse = document.getElementById("chatResponse");

  if (!userInput) {
    chatResponse.innerText = "Please enter a question.";
    return;
  }

  const randomIndex = Math.floor(Math.random() * fakeAnswers.length);
  const answer = fakeAnswers[randomIndex];

  chatResponse.innerText = "Thinking...";
  setTimeout(() => {
    chatResponse.innerText = answer;
  }, 800);
}

