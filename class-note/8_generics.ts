function logText(text) {
  console.log(text);
  return text;
}

logText(10);
logText('하이');
logText(true);

function logText<T>(text: T):T {
  console.log(text);
  return text;
}
logText<string>('하이');


function logText(text: string) {
  console.log(text);
  return text;
}

function logNumber(num: number) {
  console.log(num);
  return num;
}

logText('a');
logText(10);
const num = logNumber(10);
logText(true);

// 이렇게 할 수도 있지만 코드 관점에서 좋은 코드는 아님


function logText(text: string | number) {
  console.log(text);
  return text
}
const a = logText('a')
a.split('')
// 이렇게 하면 파라미터 입력은 잘 받음
// 하지만 .했을때 안받고 리턴값도 타입이 스트링 | 넘버됨 그래서 한쪽에서 작용되는 메소드 적용 안됨
logText('a');
logText(10);


function logText<T>(text:T):T {
  console.log(text);
  return text
}
const str = logText<string>('a')
str.split('')
logText<number>(10)
const flag = logText<boolean>(true);

interface Dropdown<T> {
  value: T;
  selected: boolean;
}
const obj: Dropdown<number> = { value: 'abc', selected: false}

// 제네릭의 타입 제한
function logTextLength<T>(text: T[]):T[] {
  // console.log(text.length)
  console.log(text.length)
  text.forEach(function (text) {
    console.log(text);
  });
  return text;
}

logTextLength<string>(['hi', 'abc']);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}
function logTextLength<T extends LengthType>(text: T):T {
  text.length;
  return text;
}

logTextLength('a');
logTextLength({length: 10});

//  제네릭 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

// 키의 값들 중 하나다 그래서 타입이 제한됨
// name, price, stock만 가능
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

getShoppingItemOption(10);
getShoppingItemOption<string>('a')
getShoppingItemOption("name")
