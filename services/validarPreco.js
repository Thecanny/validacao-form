export const validarPreco = (input) =>{
  const preco = input.formatToNumber();

  if(preco === 0){
    input.setCustomValidity("O valor do produto deve ser maior que 0");
    return;
  }

  input.setCustomValidity("");

  return;
}