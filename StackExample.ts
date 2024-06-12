class Stack<T> {
  private items: T[] = [];

  // Agrega un elemento a la pila
  push(item: T): void {
    this.items.push(item);
  }

  // Elimina y devuelve el último elemento agregado a la pila
  pop(): T | undefined {
    return this.items.pop();
  }

  // Devuelve el último elemento agregado a la pila sin eliminarlo
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  // Devuelve el número de elementos en la pila
  size(): number {
    return this.items.length;
  }

  // Devuelve true si la pila está vacía
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Vacía la pila
  clear(): void {
    this.items = [];
  }
}

// Ejemplo de uso de la clase Stack
const stack = new Stack<number>();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(`El valor en la parte superior de la pila es: ${stack.peek()}`);
console.log(`Elemento eliminado: ${stack.pop()}`);
console.log(`Tamaño de la pila: ${stack.size()}`);
console.log(`¿La pila está vacía?: ${stack.isEmpty()}`);
stack.clear();
console.log(`¿La pila está vacía después de limpiar?: ${stack.isEmpty()}`);
