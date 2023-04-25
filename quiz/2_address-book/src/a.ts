// function fetchItems() {
//   var items = ['a', 'b', 'c'];
//   return items;
// }
// let result = fetchItems();
// console.log(result)

// 동기적인 코드는 이렇게 추론 가능

function fetchItems(): Promise<string[]> {
  let items: string[] = ['a', 'b', 'c'];
  return new Promise(function (resolve) {
    resolve(items);
  });
}
fetchItems();
