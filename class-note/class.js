class Person {
  // 클래스 로직
  constructor() {
    console.log('생성되었습니다.');
  
  }
}

new Person('세호', 30); // 생성되었습니다.

class Person {
  // 클래스 로직
  constructor(name, age) {
    console.log('생성되었습니다.');
    this.name = name;
    this.age = age;
  }
}

new Person(); // 생성되었습니다.