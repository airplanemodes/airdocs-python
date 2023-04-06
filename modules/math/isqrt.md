# math.isqrt()

Return the integer square root of the non-negative integer **n**.

This is the floor of the exact square root of **n**, or equivalently the greatest integer `a` such that `a² ≤ n`.

For some applications, it may be more convenient to have the least integer `a` such that `n ≤ a²`, or in other words the ceiling of the exact square root of **n**. For positive **n**, this can be computed using `a = 1 + isqrt(n - 1)`.

### Syntax

```python
math.isqrt(n)
```