function showFact() {
  const facts = [
    "Я люблю кодити вночі 🌙",
    "Мій улюблений тег — <section> 😄",
    "Я вже зробив 5 комітів 💪",
    "Це мій перший сайт, але не останній!",
    "Кот — найкращий друг розробника 🐱",
  ];
  const fact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById("fact").textContent = fact;
}
