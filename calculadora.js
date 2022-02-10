// Aquí puedes colocar tu código JS//Calculadora que suma, resta, multiplica dos numeros positivos
var suma, resta, multiplica, divide = 0;
const calculadora = function calculaSumaRestaMultiplicaDivisionDeDosNumeros(num1, num2, operacion)  {
 
if(operacion == suma){
suma = num1 + num2;
} else if(operacion == resta {
resta = num1 - num2;
} else if(operacion == multioplicacion) {
multiplica = num1 * num2;
} else {
divide = num1 / num2;
}
};
console.log(` La suma del primer numero mas el segundo es: ${suma} \n La resta del primero menos el segundo es: ${resta} \n La multiplicacion del primer numero por el segundo es: ${multiplica} \n La Division del primer numero entre el segundo es: ${divide}`)
};




