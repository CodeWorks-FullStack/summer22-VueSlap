export class Enemy {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.health = data.health
    this.img = data.img
  }

  get isDead(){
    return this.health <= 0
  }

}
