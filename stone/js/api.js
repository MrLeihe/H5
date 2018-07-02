/**
 * 请求接口工具类
 */

let Person = function(name){
  this.name = name;
};

let StringBuilder = function (){
  let _buffer = 'StringBuilder_buffer';
  console.log(this.log === this[_buffer]);
   function StringBuilder(){
     this[_buffer] = [];
   }
   StringBuilder.prototype = {
    constructor: StringBuilder,
    add: function(value){
      this[_buffer].push(value);
    },
    toString: function(){
      return this[_buffer].join('');
    }
  }
  return StringBuilder;
}();
let sb = new StringBuilder();
sb.add('stone ');
sb.add('is ');
sb.add('cool!');
console.log(sb.toString());

