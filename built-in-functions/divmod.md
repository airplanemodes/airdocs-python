# divmod()

Take two (non-complex) numbers as arguments and return a pair of numbers consisting of their quotient and remainder when using integer division.

With mixed operand types, the rules for binary arithmetic operators apply.

For integers, the result is the same as `(a // b, a % b)`.

For floating point numbers the result is `(q, a % b)`, where `q` is usually `math.floor(a / b)` but may be 1 less than that. In any case `q * b + a % b` is very close to `a`, if `a % b` is non-zero it has the same sign as `b`, and `0 <= abs(a % b) < abs(b)`.

### Syntax

```python
divmod(a, b)
```

### Example

```python
>>> divmod(7, 2) # (3, 1)
>>> divmod(7, 3) # (2, 1)
>>> divmod(7, 1) # (7, 0)
```
