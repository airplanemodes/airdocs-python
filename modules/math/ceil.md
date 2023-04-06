# math.ceil()

Return the ceiling of **x**, the smallest integer greater than or equal to **x**.

If **x** is not a float, delegates to `x.__ceil__`, which should return an Integral value.

### Syntax

```python
math.ceil(x)
```

### Examples

```python
math.ceil(2.3) # 3
math.ceil(-1.2) # -1
math.ceil(4) # 4
```