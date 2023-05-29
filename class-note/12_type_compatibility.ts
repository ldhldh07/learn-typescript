// 인터페이스
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
}

var developer: Developer;
var person: Person;

person = developer;

// 함수
var add = function(a: number) {
  // console.log()
}
var sum = function(a: number, b: number) {
  return a + b;
}

sum = add;
// 된다
add = sum;
//안된다

// 제네릭
interface Empty<T> {
  //..
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface notempty1: NotEmpty<string>;
interface notempty2: NotEmpty<number>;

notempty1 = notempty2;
notempty2 = notempty1;