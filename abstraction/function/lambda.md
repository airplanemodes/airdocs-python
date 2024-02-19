# `lambda`

Lambda expressions (sometimes called lambda forms) are used to create anonymous functions.

The expression `lambda parameters: expression` yields a function object.

The unnamed object behaves like a function object defined with:

```python
def lambda(parameters):
    return expression
```

### Examples

```python
>>> print((lambda x: x + 5)(10)) # 15
```
