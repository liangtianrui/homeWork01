/**
 * Created by dllo on 17/8/1.
 */
var arr = [1,2,2,8,7,5,6];

//1.forEach 遍历数组
//参数1 是数组中的值
//参数2 是数组中的下标
//参数3 是数组本身
arr.forEach(function (value,index,array) {
    // console.log(value,index,array);
})

//2.map  映像新数组
    //参数1  是数组中的值
    //参数2  是数组中的下标
    //参数3  是数组本身
//必须用return来完成 从做任何操作 将返回新的数组
var arr1 = arr.map(function (value,index,array) {
    return value + '元';
})
// console.log(arr1);

//3. filter 过滤 返回新数组
    // 返回条件表达式的为真的结果
var arr2 = arr.filter(function (value) {
    return value > 3

})
// console.log(arr2);

//4. some 条件表达式 有一个成立 即返回true
var bool1 = arr.some(function (value) {

    return value < 7 && value > 5


})
// console.log(bool1);

//5.every 条件表达式  全成立  即返回true

var bool2 = arr.every(function (value) {

    return value < 9;
})

// console.log(bool2);

//6. indexOf 检测数组中是否存在此值
    // 如存在  返回第一次出现的下标, 如不存在则返回 -1
var arr3 = arr.indexOf(2);
// console.log(arr3);

//7. lastIndexOf 检测数组中是否存在此值
     //参数1 检测值 如存在  返回最后一次出现的下标, 如果不存在则返回 -1
     //参数2 检测到下标为多少
var arr4 = arr.lastIndexOf(2,6);
// console.log(arr4);

//8 reduce
  //参数1 数组中的第一个值  之前的结果 两个值做运算 第一个和第二个运算的结果
  //参数2 数组中的最后一个值  现在的值
  //参数3 数组中的最后一个值得下标
  //参数4 数组本身
var array = [1,4,5];

var sum = array.reduce(function (previous, current, index, array) {
return previous + current

});
console.log(sum);

//9 reduceRight
