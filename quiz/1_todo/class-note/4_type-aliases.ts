// interface Person {
// 	name: string;
// 	age: number;
// }

type Person = {
	name: string;
	age: number;
}

var seho: Person = {
	name: '세호',
	age: 30
}

type MyString = string;
var str: MysString = 'hello';

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {

}

// 타입 별칭은 새로운 타입을 생성하는 것이 아니라 정의한 타입에 대해 쉽게 참고할 수 있게 이름을 부여
// 인터페이스는 확장 가능(extends)하므로 인터페이스 사용하는게 낫다