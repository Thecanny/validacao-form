export const validarDataNascimento = input => {
  
  const dataNascimento = new Date(input.value);
  const dataAtual = new Date();

  const dataFaz18 = new Date(
    dataNascimento.getUTCFullYear() + 18, //Pega o ano do input e soma mais 18
    dataNascimento.getUTCMonth(), //Pega o Mês do input
    dataNascimento.getUTCDate() //Pega o dia do input
  );


  if (dataFaz18 > dataAtual){
    input.setCustomValidity("A idade mínima é 18 anos");
    return;
  }

  input.setCustomValidity("");
  return;
}