const handEmojis = {
    Rock: '✊',
    Paper: '✋',
    Scissors: '✌️'
  };

  function playgame(playerChoice) {
    const choices = ["Rock", "Paper", "Scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById("PlayerDisplay").innerText = "PLAYER: " + playerChoice.toUpperCase();
    document.getElementById("ComputerDisplay").innerText = "COMPUTER: " + computerChoice.toUpperCase();

    document.getElementById("playerHand").innerText = handEmojis[playerChoice];
    document.getElementById("computerHand").innerText = handEmojis[computerChoice];

    let result = "";

    if (playerChoice === computerChoice) {
      result = "IT'S A TIE!🤝";
    } else if (
      (playerChoice === "Rock" && computerChoice === "Scissors") ||
      (playerChoice === "Paper" && computerChoice === "Rock") ||
      (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
      result = "YOU WIN!🎉";
    } else {
      result = "YOU LOSE!💔";
    }

    document.getElementById("resultDisplay").innerText = result;
  }