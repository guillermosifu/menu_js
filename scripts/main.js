"use strict";

function CallMenu() {
    let nro_ejercicio = parseInt(
        prompt("Ingrese el numero de Ejercicio que quiere ejecutar : \r\n 1. Suma. \r\n 2. Promedio de examenes. \r\n 3. Calcular Area Rectangulo. \r\n 4. Calcular Area Triangulo. \r\n 5. Carcular Area Circulo. \r\n 6. Calcular Salario Semanal. \r\n 7. Convertir a Pulgadas. \r\n 8. Cambiar a Dolares. \r\n 9. Calcular Edad Empleado. \r\n 10. Calcular Menor. \r\n 11. Calcular Bono. \r\n 12. Calcular Incremento Salario. \r\n  13. Calcular Aprobados. \r\n 14. Contar colores de focos.\r\n 15. Calcular Eleccion Valida.")
      );
      if (isNaN(nro_ejercicio)) {
        alert("Por favor ingrese valores numericos");
      } else {
        MenuEjercicios(nro_ejercicio)
      }
}

function MenuEjercicios(nro_ejercicio) {
  switch (nro_ejercicio) {
    case 1:
      let valor1 = parseFloat(prompt("Ingrese el primer valor a sumar : "));
      let valor2 = parseFloat(prompt("Ingrese el segundo valor a sumar : "));
      alert(ej1_SumarValores(valor1, valor2));
      break;
    case 2:
      let ex1 = parseFloat(prompt("Ingrese la nota del primer examen : "));
      let ex2 = parseFloat(prompt("Ingrese la nota del segundo examen : "));
      let ex3 = parseFloat(prompt("Ingrese la nota del tercer examen : "));
      let ex4 = parseFloat(prompt("Ingrese la nota del cuarto examen : "));
      alert(ej2_CalcularPromedio(ex1, ex2, ex3, ex4));
      break;
    case 3:
      let base_rect = parseFloat(prompt("Ingrese la base del rectangulo : "));
      let altura_rect = parseFloat(prompt("Ingrese la altura del rectangulo : "));
      alert(ej3_CalcularAreaRectangulo(base_rect, altura_rect));
      break;
    case 4:
      let base = parseFloat(prompt("Ingrese la base del triangulo : "));
      let altura = parseFloat(prompt("Ingrese la altura del triangulo : "));
      alert(ej4_CalcularAreaTriangulo(base, altura));
      break;
    case 5:
      let radio = parseFloat(prompt("Ingrese radio del circulo : "));
      alert(ej5_CalcularRadioCirculo(radio));
      break;
    case 6:
      let salario_hora = parseFloat(prompt("Ingrese su Salario por hora : "));
      let horas = parseFloat(prompt("Ingrese las horas trabajadas : "));
      alert(ej6_CalcularSalario(salario_hora, horas));
      break;
    case 7:
      let metros = parseFloat(prompt("Ingrese la medida en metros : "));
      alert(ej7_CalcularPulgadas(metros));
      break;
    case 8:
      let soles = parseFloat(prompt("Ingrese el monto en soles : "));
      alert(ej8_CambioSolesDolares(soles));
      break;
    case 9:
      let nac = parseInt(prompt("Ingrese el año de nacimiento : "));
      alert(ej9_CalcularEdad(nac));
      break;
    case 10:
      alert(ej10_CalcularMenor());
      break;
    case 11:
      let years_work = parseInt(
        prompt("Ingrese los años trabajando en la empresa : ")
      );
      alert(ej11_CalcularBono(years_work));
      break;
    case 12:
      let salario = parseFloat(prompt("Ingrese el salario inicial : "));
      let incremento = parseInt(prompt("Ingrese el incremento : "));
      let years = parseInt(prompt("Ingrese los años a calcular : "));
      alert(ej12_CalcularSalario(salario, incremento, years));
      break;
    case 13:
      let nro_estudiantes = parseInt(
        prompt("Ingrese el nro. de estudiantes : ")
      );
      alert(ej13_CalcularAprobados(nro_estudiantes));
      break;
    case 14:
      let nro_focos = parseInt(prompt("Ingrese el nro. de focos : "));
      alert(ej14_CalcularColorFocos(nro_focos));
      break;
    case 15:
      let edad = parseInt(prompt("Ingrese su edad : "));
      let proxima_eleccion = parseInt(
        prompt("Ingrese el año de la proxima eleccion : ")
      );
      alert(ej15_CalcularEleccionValida(edad, proxima_eleccion));
      break;
    default:
      break;
  }
}

function ej1_SumarValores(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "Por favor ingrese valores numericos";
  } else {
    return a + b;
  }
}

function ej2_CalcularPromedio(ex1, ex2, ex3, ex4) {
  if (isNaN(ex1) || isNaN(ex2) || isNaN(ex3) || isNaN(ex4)) {
    return "Por favor ingrese valores numericos";
  } else {
    return (ex1 + ex2 + ex3 + ex4) / 4;
  }
}

function ej3_CalcularAreaRectangulo(base, altura) {
  if (isNaN(base) || isNaN(altura)) {
    return "Por favor ingrese valores numericos";
  } else {
    return "El area del rectangulo es : " + base * altura;
  }
}

function ej4_CalcularAreaTriangulo(base, altura) {
  if (isNaN(base) || isNaN(altura)) {
    return "Por favor ingrese valores numericos";
  } else {
    return "El area del triangulo es : " + (base * altura) / 2;
  }
}

function ej5_CalcularRadioCirculo(radio) {
  if (isNaN(radio)) {
    return "Por favor ingrese un valor numerico";
  } else {
    let pi = 3.14;
    return "El area de la circunferencia es : " + pi * (radio * radio);
  }
}

function ej6_CalcularSalario(salario, horas) {
  let resultado = "";
  let limite = 40;
  if (isNaN(salario) || isNaN(horas)) {
    return "Por favor ingrese valores numericos";
  } else {
    if (horas > limite) {
      resultado =
        "Solo se pagaran " +
        limite +
        " horas semanales. Su salario es : " +
        salario * limite;
    } else if (horas > 0 && horas <= limite) {
      resultado = "Su salario es :" + salario * horas;
    }
    return resultado;
  }
}

function ej7_CalcularPulgadas(metros) {
  if (isNaN(metros)) {
    return "Por favor ingrese valores numericos";
  } else {
    return "El pedido en pulgadas es de " + metros * 39.37;
  }
}

function ej8_CambioSolesDolares(soles) {
  let venta = 4.099;
  if (isNaN(soles)) {
    return "Por favor ingrese valores numericos";
  } else {
    return "Va a adquirir " + (soles / venta).toFixed(2);
  }
}

function ej9_CalcularEdad(nac) {
  let currentTime = new Date();
  let current_year = currentTime.getFullYear();
  if (isNaN(nac)) {
    return "Por favor ingrese valores numericos";
  } else {
    return "La edad es " + (current_year - nac);
  }
}

function ej10_CalcularMenor() {
  let personas = [
    { nombre: "Juan", edad: 35 },
    { nombre: "Maria", edad: 40 },
    { nombre: "Jose", edad: 20 },
  ];
  let menor_edad = personas[0].edad;
  let menor_nombre = personas[0].nombre;
  personas.forEach(function (keyValue, index) {
    if (index > 0) {
      if (keyValue.edad < menor_edad) {
        menor_edad = keyValue.edad;
        menor_nombre = keyValue.nombre;
      }
    }
  });
  return (
    "La persona de menor edad es : " +
    menor_nombre +
    " con " +
    menor_edad +
    " años."
  );
}

function ej11_CalcularBono(years) {
  let inc_bono = 100;
  let year_limit = 5;
  let bono_limit = 1000;
  if (isNaN(years)) {
    return "Por favor ingrese valores numericos";
  } else {
    if (years > 0 && years <= year_limit) {
      return "El bono asignado es : " + years * inc_bono;
    } else {
      return "El bono asignado es " + bono_limit;
    }
  }
}

function ej12_CalcularSalario(salario_inicial, incremento, years) {
  let resumen = "Salario Inicial : " + salario_inicial;
  let salario = 0;
  if (isNaN(salario) || isNaN(incremento) || isNaN(years)) {
    return "Por favor ingrese valores numericos";
  } else {
    for (let index = 1; index <= years; index++) {
      salario =
        salario_inicial + (salario_inicial * (incremento * index)) / 100;
      resumen += " Salario Año " + index + " : " + salario;
    }
    return resumen;
  }
}

function ej13_CalcularAprobados(nro_estudiantes) {
  let estudiante = [];
  let nota_aprobatoria = 11;
  let aprobados = 0;
  let desaprobados = 0;
  if (isNaN(nro_estudiantes)) {
    return "Por favor ingrese valores numericos";
  } else {
    for (let index = 0; index < nro_estudiantes; index++) {
      let nombre = prompt("Ingrese el nombre del estudiante : ");
      let nota = prompt("Ingrese la edad del estudiante : ");
      estudiante.push({ nombre: nombre, nota: nota });
    }

    for (var property in estudiante) {
      if (estudiante[property].nota > nota_aprobatoria) {
        aprobados++;
      } else {
        desaprobados++;
      }
    }
    return (
      "Estudiantes Aprobados : " +
      aprobados +
      " - Desaprobados : " +
      desaprobados
    );
  }
}

function ej14_CalcularColorFocos(nro_focos) {
  let focos = [];
  let verde = 0;
  let blanco = 0;
  let rojo = 0;
  if (isNaN(nro_focos)) {
    return "Por favor ingrese valores numericos";
  } else {
    for (let index = 0; index < nro_focos; index++) {
      let color = prompt("Ingrese el color del foco : ");
      focos.push({ color: color });
    }

    for (var property in focos) {
      switch (focos[property].color) {
        case "verde":
          verde++;
          break;
        case "blanco":
          blanco++;
          break;
        case "rojo":
          rojo++;
          break;
        default:
          break;
      }
    }
    return (
      "Color de Focos Verdes : " +
      verde +
      " - Rojos : " +
      rojo +
      " - Blancos : " +
      blanco
    );
  }
}

function ej15_CalcularEleccionValida(edad, proxima_eleccion) {
  let currentTime = new Date();
  let current_year = currentTime.getFullYear();
  let edad_limite = 70;
  if (isNaN(edad) || isNaN(proxima_eleccion)) {
    return "Por favor ingrese valores numericos";
  } else {
    if (edad + (proxima_eleccion - current_year) > edad_limite) {
      return "No podra votar";
    } else {
      return "Si podra votar";
    }
  }
}
