# assert

Assert statements are a convenient way to insert debugging assertions into a program.

### Syntax

```python
assert expression
assert expression1, expression2
```

### Examples

The simple form, `assert expression`, is equivalent to:

```python
if __debug__:
    if not expression: raise AssertionError
```

The extended form, `assert expression1, expression2`, is equivalent to:

```python
if __debug__:
    if not expression1: raise AssertionError(expression2)
```

These equivalences assume that `__debug__` and [`AssertionError`](/exceptions/AssertionError.md) refer to the built-in variables with those names. In the current implementation, the built-in variable `__debug__` is `True` under normal circumstances, `False` when optimization is requested (command line option [`-O`](/cli/Miscellaneous/-O.md)). The current code generator emits no code for an assert statement when optimization is requested at compile time. Note that it is unnecessary to include the source code for the expression that failed in the error message. It will be displayed as part of the stack trace.

Assignments to `__debug__` are illegal. The value for the built-in variable is determined when the interpreter starts.