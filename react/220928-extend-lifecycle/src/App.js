
function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;

class Shape {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
  getArea() {
    return this.w * this.h;
  }
}
class Square extends Shape {
}
class Triangle extends Shape {
  constructor(x,y,name) {
    super(x,y);
    this.name = name;
  }
  getArea(){
    return this.w*this.h/2;
  }
}

let shape1 = new Shape(5,4);
console.log( shape1.getArea() );

let shape2 = new Shape(2,3);
console.log( shape2.getArea() );

let shape3 = new Square(4,8);
console.log( shape3.getArea() );
let shape4 = new Triangle(5,6, 'test');
console.log( shape4.getArea());
