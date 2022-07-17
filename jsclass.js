'use strict';

// Javascript Class
// 클래스 기능은 ES6에서 추가되었다.

class Person {
    // constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    // method
    speak() {
        console.log(`${this.name} : hello!`);
    }

    // getter , setter
    get age() {
        return this._age;
    }

    // constructor에서 값을 설정할 때 set을 무조건 타기 때문에 초기값이 설정되어있음
    set age(value) {
        this._age = value > -1 ? value : 0;
    }
}

const tom = new Person('tom', 20);
console.log(tom.name);
console.log(tom.age);
tom.speak();
tom.age = 30;
console.log(tom.age);

// public, private 사파리에서도 안됨

class Experiment {
    publicField = 2;
    #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// static 아직은 쓰기 힘듬
// 하나를 공유해서 사용하기 때문에 메모리의 사용을 조금 줄여준다
class Article {
    static publisher = "static test!";
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
console.log(article1.publisher);
console.log(Article.publisher);
Article.printPublisher();

// 상속, 다형성
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {

}

const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();
console.log(rectangle.getArea());

class Triangle extends Shape {
    // 부모 호출하려고 할 경우
    superDraw() {
        super.draw();
    }

    draw() {
        console.log('triangle draw!');
    }
    // 오버라이딩
    getArea() {
        return (this.width * this.height) / 2;
    }

    // Object의 메소드를 상속해서 오버라이딩
    toString() {
        return 'Triangle Test!';
    }
}

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());
triangle.draw();
triangle.superDraw();
console.log(triangle.toString());

// instanceOf
// 클래스의 인스턴스를 확인하는 방법
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
// 모든 클래스는 Object에서 상속된다.
console.log(triangle instanceof Object);