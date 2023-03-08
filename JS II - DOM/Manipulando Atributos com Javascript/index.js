const input = document.getElementById("input");

document.getElementById("value").addEventListener("click", function () {
  input.value = "olá, mundo!";

  console.log(input.value);
  console.log(input.getAttribute("value"));
});

document.getElementById("type").addEventListener("click", function () {
  input.type = input.type !== "date" ? "date" : "text";
});

document.getElementById("placeholder").addEventListener("click", function () {
  input.placeholder = "Digita algo...";
});

document.getElementById("disable").addEventListener("click", function () {
  input.setAttribute("disabled", !input.disabled);
});

document.getElementById("data").addEventListener("click", function () {
  const data = input.dataset.somethingElse;
  console.log("o valor do atributo data-something é: " + data);
  input.dataset.something = "Algum outro valor";
  console.log(
    "o valor do atributo data-something é: " + input.dataset.somethingElse
  );
});
