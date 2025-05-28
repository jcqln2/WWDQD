const adviceList = [
  "Charge forth, no matter the odds!",
  "Trust in your steed, Rocinante, and gallop onward.",
  "Do not mistake windmills for monsters... or do!",
  "If the world calls you mad, smile and tighten your armor.",
  "Honor is worth more than gold.",
  "Every squire needs patience, every knight needs dreams.",
  "Defend the helpless, even if they do not need defending.",
  "Follow your illusion — it may be your truest truth.",
  "To be brave is to believe in impossible things.",
  "Even giants tremble before unwavering purpose.",
  "Consult Sancho — he may yet speak wisdom in jest.",
  "Dulcinea awaits, though she knows it not."
];

function getQuixoteWisdom() {
  const userInput = document.getElementById('userQuestion').value.trim();
  const adviceBox = document.getElementById('adviceBox');
  
  if (userInput === "") {
    adviceBox.innerText = "Even a knight must ask before they act.";
    return;
  }

  const randomAdvice = adviceList[Math.floor(Math.random() * adviceList.length)];
  adviceBox.innerText = `"${randomAdvice}"`;
}
