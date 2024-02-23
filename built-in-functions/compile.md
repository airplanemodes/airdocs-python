# compile()

Compile the **source** into a code or AST object. Code objects can be executed by [`exec()`](/built-in-functions/exec.md) or [`eval()`](/built-in-functions/eval.md). **source** can either be a normal string, a byte string, or an AST object.

?> Refer to the [`ast`](/modules/ast/) module documentation for information on how to work with AST objects.

The **filename** argument should give the file from which the code was read. Pass some recognizable value if it wasn’t read from a file (`'<string>'` is commonly used).

The **mode** argument specifies what kind of code must be compiled. It can be `'exec'` if **source** consists of a sequence of statements, `'eval'` if it consists of a single expression, or `'single'` if it consists of a single interactive statement (in the latter case, expression statements that evaluate to something other than `None` will be printed).

The optional arguments **flags** and **dont_inherit** control which compiler options should be activated and which future features should be allowed. If neither is present (or both are zero) the code is compiled with the same flags that affect the code that is calling `compile()`. If the **flags** argument is given and **dont_inherit** is not (or is zero) then the compiler options and the future statements specified by the **flags** argument are used in addition to those that would be used anyway. If **dont_inherit** is a non-zero integer then the **flags** argument is it – the flags (future features and compiler options) in the surrounding code are ignored.

Compiler options and future statements are specified by bits which can be bitwise ORed together to specify multiple options. The bitfield required to specify a given future feature can be found as the `compiler_flag` attribute on the `_Feature` instance in the `__future__` module. Compiler flags can be found in [`ast`](/modules/ast/) module, with `PyCF_` prefix.

The argument **optimize** specifies the optimization level of the compiler. The default value of `-1` selects the optimization level of the interpreter as given by [`-O`](/cli/Miscellaneous/-O.md) options. Explicit levels are `0` (no optimization, `__debug__` is true), `1` (asserts are removed, `__debug__` is false) or `2` (docstrings are removed too).

This function raises [`SyntaxError`](/exceptions/SyntaxError.md) if the compiled source is invalid, and [`ValueError`](/exceptions/ValueError.md) if the source contains null bytes.

If you want to parse Python code into its AST representation, see [`ast.parse()`](/modules/ast/parse.md).

Raises an auditing event `compile` with arguments `source` and `filename`. This event may also be raised by implicit compilation.

?> When compiling a string with multi-line code in `'single'` or `'eval'` mode, input must be terminated by at least one newline character. This is to facilitate detection of incomplete and complete statements in the [`code`](/modules/code/) module.

!> It is possible to crash the Python interpreter with a sufficiently large/complex string when compiling to an AST object due to stack depth limitations in Python’s AST compiler.

### Syntax

```python
compile(source, filename, mode, flags=0, dont_inherit=False, optimize=-1)
```
