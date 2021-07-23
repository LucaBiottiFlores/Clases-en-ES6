class Impuestos {
  constructor(monto_bruto_anual, deducciones) {
    this._monto_bruto_anual = monto_bruto_anual;
    this._deducciones = deducciones;
  }

  get monto_bruto_anual() {
    return this._monto_bruto_anual;
  }

  set monto_bruto_anual(value) {
    this._monto_bruto_anual = value;
  }

  get deducciones() {
    return this._deducciones;
  }

  set deducciones(value) {
    this._deducciones = value;
  }
}

class Cliente {
  constructor(nombre, impuesto) {
    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  calcularImpuesto() {
    return (
      (this._impuesto.monto_bruto_anual - this._impuesto.deducciones) * 0.21
    );
  }
}

const impuestosDeLuca = new Impuestos(100, 5);
const clienteLuca = new Cliente("Luca", impuestosDeLuca);

const calculoDeLuca = clienteLuca.calcularImpuesto();

// INSTALA BABEL DE FORMA LOCAL CON NPX PORQUE ES MEJOR

// USAR .GITIGNORE (nuevo archivo) ---> node_modules/            de esta forma no se cargan los node modules que pesan caleta.

//crear un file babel.config.json para traspasarle la transpilacion ... pagina 27 lectura
