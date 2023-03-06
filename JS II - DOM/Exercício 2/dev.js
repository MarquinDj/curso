const addTechBtn = document.getElementById("addTechBtn");

addTechBtn.addEventListener("click", function (ev) {
  ev.preventDefault();

  const ulTec = document.getElementById("stackInputs");

  const liTec = document.createElement("li");
  liTec.id = `liTec${ulTec.childElementCount}`;
  liTec.input = "text";
  liTec.innerText = "Nome da tecnologia: ";
  liTec.className = "listTec";

  const tecInput = document.createElement("input");
  tecInput.type = "text";
  tecInput.name = "desc";
  tecInput.id = "descId";

  liTec.appendChild(tecInput);
  ulTec.appendChild(liTec);

  const skipTec = document.createElement("br");
  const laOpt = document.createElement("label");

  skipTec.className = "brTec";

  laOpt.className = "listOpt";
  laOpt.innerText = "\nNivel de Experiência: ";

  const Opt1 = document.createElement("label");
  Opt1.innerText = "0-2 anos";
  const optInput1 = document.createElement("input");
  optInput1.type = "radio";
  optInput1.name = "main";
  optInput1.id = `input1${ulTec.childElementCount}`;
  optInput1.value = "2anos";

  laOpt.appendChild(optInput1);
  liTec.appendChild(skipTec);
  laOpt.appendChild(Opt1);
  liTec.appendChild(laOpt);

  const Opt2 = document.createElement("label");
  Opt2.innerText = "3-4 anos";
  const optInput2 = document.createElement("input");
  optInput2.type = "radio";
  optInput2.name = "main";
  optInput2.id = `input2${ulTec.childElementCount}`;
  optInput2.value = "4anos";

  laOpt.appendChild(optInput2);
  laOpt.appendChild(Opt2);

  const Opt3 = document.createElement("label");
  Opt3.innerText = "5+ anos";
  const optInput3 = document.createElement("input");
  optInput3.type = "radio";
  optInput3.name = "main";
  optInput3.id = `liTec3${ulTec.childElementCount}`;
  optInput3.value = "5anos";

  laOpt.appendChild(optInput3);
  laOpt.appendChild(Opt3);

  const laDel = document.createElement("label");
  const skipDel = document.createElement("br");
  const skipDel1 = document.createElement("br");
  const btnDel = document.createElement("button");
  skipDel.className = "delSkip";

  laDel.className = "listBtn";
  btnDel.innerText = "Deletar Tecnologia";
  btnDel.type = "button";
  btnDel.id = `addDeleteBtn${ulTec.childElementCount}`;

  laDel.appendChild(btnDel);
  liTec.appendChild(skipDel1);
  liTec.appendChild(skipDel);
  liTec.appendChild(laDel);

  const telete = document.getElementById(
    `addDeleteBtn${ulTec.childElementCount}`
  );

  telete.addEventListener("click", function removeContact() {
    const listSection = document.getElementById("stackInputs");

    const btntarget = event.target;
    const btnDelete = btntarget.parentNode;
    const c = btnDelete.parentNode;

    listSection.removeChild(c);
  });
});

const form = document.getElementById("devForm");

form.addEventListener("submit", function (regis) {
  regis.preventDefault();

  const name = document.querySelector("input[name='fullname']").value;
  const desc = document.querySelector("input[name='desc']").value;
  const exp = document.querySelector("input[type='radio']:checked").value;

  console.log({
    name,
    desc,
    exp,
  });

  document.getElementById("fullname").value = "";
  document.getElementById("descId").value = "";
  document.getElementById("main");
});
