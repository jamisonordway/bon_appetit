export default class Pantry {
  constructor() {
    this.stock = {}
  }

  stockCheck (name) {
    if (!(this.stock[name])) {
      return 0
    } else {
      return this.stock[name]
    }
  }

  restock (name, quantity) {
    if (!(this.stock[name])) {
      return this.stock[name] = quantity
    } else {
      let total = this.stock[name] + quantity
      return this.stock[name] = total
    }
  }
}
