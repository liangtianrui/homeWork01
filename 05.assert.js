/**
 * Created by dllo on 17/7/31.
 */

var assert = require('assert');

//1. 用 == 来判断  如果不相等 打印参数3
// assert.deepEqual(2,'2','不相等');

//2. 用 === 来判断  如果都不相等, 打印参事3
// assert.deepStrictEqual(2,'2','不相等');

//3. 用 == 判断  如果不相等 打印参数3
// assert.equal(1,'1','不相等');

//4
// assert.fail(1,1,'大的');

//5. 检测值是否为真  为真则打印值
// assert.ifError(0);

//6. 检测参数一和参数二是否相等, 相等 打印参数三
// assert.notDeepEqual(2,2,'相等');

//7. 检测参数一和参数2 是否完全相等, 如果完全完全相等打印参数3
// assert.notDeepStrictEqual(1,1,'相等');

//8 检测参数1 和 参数 2 是否不相等, 如果相等打印参数3
// assert.notEqual(1,'1','相等');

//9 检测参数1 和 参数2 是否完全相等, 如果相等打印参事3
// assert.notStrictEqual(1,'1','相等');

//10 检测参数1是否为假 为假则打印参数2
assert.ok(1,'ddd');

//11 检测参数一和参数2 是否完全不相等, 如果完全完全不相等打印参数3
assert.strictEqual(2,4,'不相等');

//12
