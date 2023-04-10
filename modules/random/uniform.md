# random.uniform()

Return a random floating point number *N* such that `a <= N <= b` for `a <= b` and `b <= N <= a` for `b < a`.

The end-point value **b** may or may not be included in the range depending on floating-point rounding in the equation `a + (b-a) * random()`.

### Syntax

```python
random.uniform(a, b)
```

### Examples

```python
>>> random.uniform(1, 10) # 4.451274625038117
>>> random.uniform(100, 1000) # 846.3272271654979
>>> random.uniform(-1, -20) # -3.498677928001031
```