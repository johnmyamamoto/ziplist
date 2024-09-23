"use strict";
function zipList(list1, list2) {
    const newList = [];
    for (let i = 0; i < list1.length; i++) {
        newList.push(list1[i]);
        newList.push(list2[i]);
    }
    return newList;
}
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
function zipListTheFunctionalWay(list1, list2) {
    let i = 0;
    list1.map((item) => {
        list2.push(list1[i]);
        i++;
        return item;
    });
    return list2;
}
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
