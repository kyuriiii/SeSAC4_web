import React, {Component} from 'react';

class Extend extends Component {
    eventSquare() {
        let square = new Square(5, 5);
        console.log( "width : ", square.width );
        console.log( "area : ", square.getArea() );
    }
    eventTriangle() {
        let triangle = new Triangle(10, 20);
        console.log( "width : ", triangle.width );
        console.log( "area : ", triangle.getArea() );
        console.log( "length : ", triangle.getLength() );
    }
    render() {
        return (
            <>
                <button onClick={this.eventSquare}>square</button>
                <button onClick={this.eventTriangle}>triangle</button>
            </>
        );
    }
}

class Shape {
    constructor( width, height ) {
        this.width = width;
        this.height = height;
    }
    
    getArea() {
        return this.width * this.height;
    }
    getLength() {
        return 2 * ( this.width + this.height );
    }
}
class Square extends Shape {
    constructor( w, h ) {
        super( w, h );
    }
}
class Triangle extends Shape {
    constructor( w, h ) {
        super( w, h );
    }
    getArea() {
        return this.width * this.height / 2;
    }
    getLength() {
        return 3 * this.width;
    }
}

export default Extend;