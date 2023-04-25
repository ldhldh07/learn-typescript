// 타입 추론 기본 1

var a = 'abc';
// 기본적인 변수 할당 시 추론이 됨

// 기본값 설정시에도 추론
function getA(b = 10) {
  var c = 'hi';
  return b + c;
}

// 타입 추론 기본 2
interface Dropdown<T> {
  value: T;
  title: string;
}

var shoppingItem: Dropdown<string> = {
  value: 'abc',
  title: 'hello',
}

// 타입 추론 기본 3
interface Dropdown<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}

// 디테일드 드랍다운 K로 가서 그게 드랍다운 K로 감

var detailedItem: DetailedDropdown<string> = {
  title: 'abc',
  description: 'ab',
  value: 'a',
  tag: 'a',
}

var shoppingItem: Dropdown<string> = {
  value: 'abc',
  title: 'hello',
}

// Best Common Type
// 유니온으로 묶는다
var arr = [1, 2, true, 'a'];
