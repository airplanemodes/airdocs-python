# return

`return` may only occur syntactically nested in a function definition, not within a nested class definition.

If an expression list is present, it is evaluated, else `None` is substituted.

`return` leaves the current function call with the expression list (or None) as return value.

When `return` passes control out of a [`try`](/statements/try.md) statement with a `finally` clause, that `finally` clause is executed before really leaving the function.

In a generator function, the `return` statement indicates that the generator is done and will cause [`StopIteration`](/exceptions/StopIteration.md) to be raised. The returned value (if any) is used as an argument to construct [`StopIteration`](/exceptions/StopIteration.md) and becomes the `StopIteration.value` attribute.

In an asynchronous generator function, an empty `return` statement indicates that the asynchronous generator is done and will cause [`StopAsyncIteration`](/exceptions/StopAsyncIteration.md) to be raised. A non-empty `return` statement is a syntax error in an asynchronous generator function.

### Syntax

```python
return
return expression
```

### Examples

With the expression:

```python
def add(a, b):
    return a + b

print(add(10, 20)) # 30
```

Without an expression:

```python
def sub(a, b):
    return

print(sub(50, 10)) # None
```

---

!> Using `return` outside of a function will cause [`SyntaxError`](/exceptions/SyntaxError.md).
