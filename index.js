

function receivesAFunction (callback){callback();}


let fn = returnsANamedFunction();
function returnsANamedFunction () {
  return function returnsANamedFunction(){};} 



let fn1 = returnsAnAnonymousFunction;
function returnsAnAnonymousFunction (){
  return function (){}
}