let vagas = [];

function renderizarListaVagas() {
  const listaVagas = document.getElementById("listaVagas");
  listaVagas.innerHTML = "";
  vagas.forEach((vaga, index) => {
    const item = document.createElement("li");
    item.textContent = `${vaga.placa} - ${vaga.nome} (Apto: ${vaga.apartamento} - Bloco: ${vaga.bloco}) | Vaga: ${vaga.vaga}`;
    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.onclick = () => removerVaga(index);
    item.appendChild(botaoRemover);
    listaVagas.appendChild(item);
  });
}

function salvarVaga(event) {
  event.preventDefault();

  const vaga = {
    placa: document.getElementById("placa").value,
    nome: document.getElementById("nome").value,
    apartamento: document.getElementById("apartamento").value,
    bloco: document.getElementById("bloco").value,
    modelo: document.getElementById("modelo").value,
    cor: document.getElementById("cor").value,
    vaga: document.getElementById("vaga").value,
  };

  vagas.push(vaga);
  console.log(vagas);

  alert("Cadastro realizado com sucesso!");

  document.getElementById("formCadastro").reset();

  mostrarListagem();
}

function removerVaga(index) {
  vagas.splice(index, 1);
  renderizarListaVagas();
}

function mostrarCadastro() {
  document.getElementById("cadastro").style.display = "block";
  document.getElementById("listagem").style.display = "none";
}

function mostrarListagem() {
  document.getElementById("cadastro").style.display = "none";
  document.getElementById("listagem").style.display = "block";
  renderizarListaVagas();
}

document.getElementById("formCadastro").addEventListener("submit", salvarVaga);
document
  .getElementById("mostrarCadastro")
  .addEventListener("click", mostrarCadastro);

vagas = [
  {
    placa: "ABC1234",
    nome: "João Silva",
    apartamento: "101",
    bloco: "A",
    modelo: "Honda Civic",
    cor: "Preto",
    vaga: "12",
  },
  {
    placa: "XYZ9876",
    nome: "Maria Oliveira",
    apartamento: "202",
    bloco: "B",
    modelo: "Toyota Corolla",
    cor: "Branco",
    vaga: "8",
  },
];

mostrarListagem();
