export const recuperarEndereco = (input) =>{
  const cepNumeros = input.value.replace(/\D/g, "");

  if(input.validity.valid){
    const url = `https://viacep.com.br/ws/${cepNumeros}/json/`;
    const options = {
      method: 'GET',
      mode: "cors",
      headers: {
        "content-type": "application/json;charset=utf-8"
      }
    };
    fetch(url, options)
    .then(response => response.json())
    .then(data =>{
      if(data.erro){
        input.setCustomValidity("Este não é um cep válido");
        return
      }

      preencherCampos(data);

      input.setCustomValidity("");
      return
    })
  }
};

const preencherCampos = (data) =>{
  const campoLogradouro = document.getElementById("logradouro");
  const campoCidade = document.getElementById("cidade");
  const campoEstado = document.getElementById("estado");

  campoLogradouro.value = data.logradouro;
  campoCidade.value = data.localidade;
  campoEstado.value = data.uf;
};