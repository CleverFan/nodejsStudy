//模块依赖
var assert = require("assert");
 
//断言条件
describe('Array', function(){
  describe('#indexOf()', function(){
    it('当值不存在时应该返回 -1', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});