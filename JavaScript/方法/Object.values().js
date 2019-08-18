// **Object.values()**方法返回一个给定对象自身的所有可枚举属性值的数组，值的顺序与使用for...in循环的顺序相同 ( 区别在于 for-in 循环枚举原型链中的属性 )。
let meals = {
    mealA: 'Breakfast',
    mealB: 'Lunch',
    mealC: 'Dinner'
  };
  for (let mealName of Object.values(meals)) {
    console.log(mealName);
  }
  // 'Breakfast' 'Lunch' 'Dinner'