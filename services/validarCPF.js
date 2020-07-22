
const cpfNumerosRepetidos = (cpf) =>{
  const cpfsInvalidos = [
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999"
  ]

  return cpfsInvalidos.includes(cpf)
}
// ========================================

const calcularTotal = (multiplicador) => (resultado, numeroAtual) => resultado + numeroAtual * multiplicador--

// ========================================

const calcularDigito = (parteCPF, multiplicador) => {
  // total = multiplicação dos números
  // resto = total % 11
  // digito = 11 - resto
  // parteCPF = ["3" , "2", "3", "4"...];
  const total = parteCPF.reduce(calcularTotal(multiplicador) , 0)
  const resto = total % 11;
   
  const digito = 11 - resto;

  if ( resto > 9){ digito = 0 }

  return digito
}

export const validarCPF = (input) =>{
  const cpfNumeros = input.value.replace(/\D/g, "");

  if(cpfNumerosRepetidos(cpfNumeros)){
    input.setCustomValidity("Este não é um CPF válido");
    return
  }

  const primeiraParteCPF = cpfNumeros.substr(0 , 9).split("");
  const primeiroDigitoCPF = Number(cpfNumeros.charAt(9));
  const primeiroDigitoCalculado = calcularDigito(primeiraParteCPF, 10);

  if(primeiroDigitoCPF !== primeiroDigitoCalculado ){
    input.setCustomValidity("Este não é um CPF válido");
    return
  }

  const segundaParteCPF = cpfNumeros.substr(0 , 10).split("");
  const segundaDigitoCPF = Number(cpfNumeros.charAt(10));
  const segundaDigitoCalculado = calcularDigito(primeiraParteCPF, 11);

  if(segundaDigitoCPF !== segundaDigitoCalculado ){
    input.setCustomValidity("Este não é um CPF válido");
    return
  }

  console.log(segundaDigitoCalculado)

  input.setCustomValidity("");

}