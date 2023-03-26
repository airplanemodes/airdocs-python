# pow()
Return **base** to the power **exp**. If **mod** is present, return **base** to the power **exp**, modulo **mod** (computed more efficiently than `pow(base, exp) % mod`). The two-argument form `pow(base, exp)` is equivalent to using the power operator: `base**exp`.

The arguments must have numeric types. With mixed operand types, the coercion rules for binary arithmetic operators apply. For `int` operands, the result has the same type as the operands (after coercion) unless the second argument is negative. In that case, all arguments are converted to float and a float result is delivered. For example, `pow(10, 2)` returns `100`, but `pow(10, -2)` returns `0.01`. For a negative base of type `int` or `float` and a non-integral exponent, a complex result is delivered. For example, `pow(-9, 0.5)` returns a value close to `3j`.

For `int` operands **base** and **exp**, if **mod** is present, **mod** must also be of integer type and must be nonzero. If **mod** is present and **exp** is negative, **base** must be relatively prime to **mod**. In that case, `pow(inv_base, -exp, mod)` is returned, where **inv_base** is an inverse to **base** modulo **mod**.

### Syntax
```python
pow(base, exp)
pow(base, exp, mod=None)
```