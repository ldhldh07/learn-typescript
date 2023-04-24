// function logMessage(value: any) {
// 	console.log(value);
// }
// logMessage('hello');
// logMessage(100);
// logMessage(true);

// 유니온 타입 : 하나 이상의 타입을 쓸 수 있게
var sehho: string | number | boolean
function logMessage(value: string | number) {
	if (typeof value === 'number') {
		value.toLocaleString();
	}
	if (typeof value === 'string') {
		value.toString()
	}
	throw new TypeError('value must be string or number')
}
logMessage('hello')
logMessage(100)

interface Developer {
	name: string;
	skill: string;
}

interface Person {
	name: string;
	age: number;
}

// 둘다 들어올수 있어야 하기 때문에 공통적인 name만 가능
// 한쪽에만 있는건 다른쪽이 들어왔을때 에러날수도 있어서
// function askSomeone(someone: Developer | Person) {
// 	someone.name
// 	// 타입가드를 사용해야지 쓸 수 있음
// 	someone.skill
// 	someone.age
// }

// 호출하는 관점에서는 이렇게 두개 다 가능
askSomeone({ name: '디벨러포', skill: '웹 개발' });
askSomeone({name: '캡틴', age:100})

// 두 타입이 가지고 있는 속성을 다 포함하는 타입이기 때문에 이렇게 가능

function askSomeone(someone: Developer & Person) {
	someone.name;
	someone.skill;
	someone.age
}

// 이렇게는 개발자 사람의 속성 둘 다 가져야 하기 때문
askSomeone({ name: '디벨러포', skill: '웹 개발' });

// var sseho: string | number | boolean;
// var capt: string & number & boolean;

