// 타입 단언
var a;
var b = a as string;

// DOM API 조작
// <div id='app'>hi</div>

var div = document.querySelector('div');
if (div) {
  div.innerText
}

// 이렇게 단언 가능
const div2 = document.querySelector('.container') as HTMLDivElement;
if (div) {
  div.innerText;
}