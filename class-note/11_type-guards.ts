interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: 'Tony', age: 33, skill: 'Iron Making'}
}
var tony = introduce();

// 유니언이라 age, skill은 안돼고 name만 접근 가능
console.log(tony.age)

// 이때 타입 단언으로 쓸 수 있음

if((tony as Developer).skill){
  var skill = (tony as Developer).skill;
  console.log(skill);
} else if ((tony as Person).age) {
  var age = (tony as Person).age;
  console.log(age)
}

// 근데 이렇게 하면 가독성 안좋음

// 타입 가드 정의
function isDeveloper(target: Developer | Person ): target is Developer {
  return (target as Developer).skill !== undefined
}

if (isDeveloper(tony)){
  tony.skill
  tony.name
} else {
  tony.age
}