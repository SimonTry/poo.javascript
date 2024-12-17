// Clase base: Mascota
class Mascota {
    constructor(nombre, edad, tipo) {
      this.nombre = nombre;
      this.edad = edad;
      this.tipo = tipo;
    }
  
    // Método común
    mostrarInformacion() {
      return `Soy ${this.nombre}, un ${this.tipo} de ${this.edad} años.`;
    }
  }
  
  // Clase derivada: Perro
  class Perro extends Mascota {
    constructor(nombre, edad, raza) {
      super(nombre, edad, 'perro');
      this.raza = raza;
    }
  
    // Método específico
    hacerSonido() {
      return `${this.nombre} dice: ¡Guau guau!`;
    }
  }
  
  // Clase derivada: Gato
  class Gato extends Mascota {
    #estado;
    constructor(nombre, edad, color) {
      super(nombre, edad, 'gato');
      this.color = color;
    }

    setEstado(estado){
        this.#estado = estado;
    }

    getEstado(){
        return this.#estado;
    }
  
    // Método específico
    hacerSonido() {
      return `${this.nombre} dice: ¡Miau miau!`;
    }
  }
  
  // Crear instancias
  const perro1 = new Perro('Rex', 3, 'Labrador');
  const gato1 = new Gato('Mishi', 2, 'gris');
  gato1.setEstado("Yo como ratones");

  //Esta línea no es válida porque es un acceso directo a un atributo privado.
  //Es por eso que se debe hacer con los métodos get y set
  //gato1.#estado;
  
  // Mostrar información en la página
  const outputDiv = document.getElementById('output');
  
  outputDiv.innerHTML = `
    <p>${perro1.mostrarInformacion()}</p>
    <p>${perro1.hacerSonido()}</p>
    <p>${gato1.mostrarInformacion()}</p>
    <p>${gato1.hacerSonido()}</p>
    <p>${gato1.getEstado()}</p>
  `;