function showFact() {
  const facts = [
    "Я люблю кодити вночі 🌙",
    "Мій улюблений тег — <section> 😄",
    "Я вже зробив 5 комітів 💪",
    "Це мій перший сайт, але не останній!",
    "Я вчуся на помилках але ж ніяк не на успіхах!",
  ];
  const fact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById("fact").textContent = fact;
}
