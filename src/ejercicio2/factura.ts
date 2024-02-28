export class Factura {
    private items: { descripcion: string; cantidad: number; precioUnitario: number }[];
  
    constructor(items: { descripcion: string; cantidad: number; precioUnitario: number }[]) {
      this.items = items;
    }
  
    calcularTotal(): number {
      return this.items.reduce((total, item) => total + item.cantidad * item.precioUnitario, 0);
    }
  }