"use strict";


// 1. printIndices
function printIndices(items) {
  for (const i in items) {
    console.log(items[i] + ' ' + i);
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
  const every_other = [];
  for (const i in items) {
    if (i % 2 === 0) {
      every_other.push(items[i]);
    }
  }
  console.log(every_other);
}


// 3. smallestNItems
function smallestNItems(items, n) {
  items.sort((a,b) => a - b);
  const subset = items.slice(0, n);
  console.log(subset)
}
