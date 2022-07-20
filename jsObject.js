// Objects Syntax
// literal syntax
const obj1 = {};
const obj = { name : 'hong', age : 20};

// constructor syntax
const obj2 = new Object();

function print(obj) {
    console.log('----------------')
    console.log(obj.name);
    console.log(obj.age);
    console.log('----------------')
}
print(obj);

obj.hasJob = true;
console.log(obj.hasJob);
delete obj.hasJob;
console.log(obj.hasJob);

// 2. Computed properties
console.log(obj.name); // 코딩시점에서 이미 확정 났을 때 사용
console.log(obj['name']); // Computed properties 어떤 키값인지 모를때 사용(런타임 환경에서 구분 할 때, 코딩시점에서는 확정이 안날때)

// 3. Property value shorthand
const person1 = {name : 'bob', age : 20};
print(person1);
// 함수를 이용
const person2 = makePerson('steve', 30);
function makePerson(name, age) {
    return {name, age};
}
print(person2);

// 4. Constructor Function
// 자바스크립트에서 알아서 Object를 생성
const person3 = new Person('dave', 35);
function Person(name, age) {
    this.name = name;
    this.age = age;
}
print(person3);

// 5. in operator 키가 있는지 없는지를 확인
console.log('name' in obj);

// 6. for..in vs for..of
// for in 모든 내용을 전부 출력
for (key in obj) {
    console.log(key);
}

// for(value of iterable)
// 배열 출력용
const array = [1,2,3,4,5];
for(value of array) {
    console.log(value);
}

// 7. Fun cloning
// 주소값을 복제하는거라서 원본에도 영향이 간다.
const obj3 = obj;
obj3.name = 'coder1';
print(obj);

const obj4 = obj;
obj4.name = 'coder2';
print(obj);

// Old
const obj5 = {};
for(key in obj) {
    obj5[key] = obj[key]
}
obj5.name = 'coder3';
print(obj);

// New
const obj6 = {};
Object.assign(obj6, obj);
obj6.name = 'coder4';
print(obj6);

// mixed
const fruit1 = {color : 'red'};
const fruit2 = {color : 'blue', size : 'big'};
// 뒤쪽 파라미터의 key데이터를 계속 덮어씌운다
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);