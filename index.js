// import * as parser from "@babel/parser";
// import traverse from "@babel/traverse";
const { parse } = require("@babel/parser");
// const { traverse } = require("@babel/traverse");
// import traverse from "@babel/traverse";
const { traverse } = require("@babel/traverse");

const code = `function square(n) {
  return n * n;
}`;

const ast = parse(code);

console.log(ast);

traverse(ast, {
  enter(path) {
    if (path.isIdentifier({ name: "n" })) {
      path.node.name = "x";
    }
  },
});

// const { parse } = require("@babel/parser");

// const ast = parse("const a = 1", {
//   sourceType: "module",
//   plugins: ["jsx", "typescript"],
// });
// console.log(ast);
