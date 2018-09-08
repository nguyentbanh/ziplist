const listA = ['a', 'b', 'c'];
const listB = [1, 2, 3];

function zipList(list1, list2) {
  const totalList = [];
  for (let i = 0; i < list1.length; i++) {
    totalList.push([list1[i], list2[i]]);
  }
  return totalList;
}

console.log(zipList(listA, listB));

function zipListTheSimpleWay(list1, list2) {
  return _.zip(list1, list2);
}

console.log(zipListTheSimpleWay(listA, listB));
