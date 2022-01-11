export function compileToFunctions(template) {
  const ast = parseHtml(template);
  const code = generate(ast);
  return new Function("with(this)(return ${code})");
}
