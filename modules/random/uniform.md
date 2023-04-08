# random.uniform()

Return a random floating point number *N* such that `a <= N <= b` for `a <= b` and `b <= N <= a` for `b < a`.

The end-point value **b** may or may not be included in the range depending on floating-point rounding in the equation `a + (b-a) * random()`.

### Syntax

```python
random.uniform(a, b)
```