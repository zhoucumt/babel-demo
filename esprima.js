let esprima = require("esprima");
let code = `function ast(){}`;
// 转成ast树
let tree = esprima.parseScript(code);
// console.log(tree);
let estraverse = require("estraverse");

estraverse.traverse(tree, {
  enter(node) {
    // 直接用enter
    if (node.type === "Identifier") {
      node.name = "AST";
    }
  },
  // leave(node){
  //     console.log('leave',node.type)
  // }
});
let escodegen = require("escodegen");
let r = escodegen.generate(tree);
console.log(r);

// babel babel-plugin-arrow-function
