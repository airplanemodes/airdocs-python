# yield
A `yield` statement is semantically equivalent to a yield expression. The `yield` statement can be used to omit the parentheses that would otherwise be required in the equivalent yield expression statement.

Yield expressions and statements are only used when defining a generator function, and are only used in the body of the generator function. Using `yield` in a function definition is sufficient to cause that definition to create a generator function instead of a normal function.

### Syntax
```python
yield expression
yield from expression
```