// **Object.entries()**方法返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环也枚举原型链中的属性）。
// Object.entries() 返回键值对数组[ [key1, value1], [key2, value2], ..., [keyN, valueN] ]
// 键值对数组格式可以很方便的转为map对象
let meals = {
    mealA: 'Breakfast',
    mealB: 'Lunch',
    mealC: 'Dinner'
  };
  for (let [key, value] of Object.entries(meals)) {
    console.log(key + ':' + value);
  }
  // 'mealA:Breakfast' 'mealB:Lunch' 'mealC:Dinner'