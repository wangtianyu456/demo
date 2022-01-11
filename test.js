var radius = 1;
let fn = () => {
  radius = 2;
  return shape = {
    radius: 10,
    diameter() {
      return this.radius * 2;
    },
    perimeter: () => {
      return 2 * Math.PI * this.radius;
    },
    deep: {
      radius: 20,
      diameter() {
        return this.radius * 2;
      },
      perimeter: () => {
        console.log(this)
        return 2 * Math.PI * this.radius;
      }
    }
  };
}
console.log(fn().deep.perimeter())
