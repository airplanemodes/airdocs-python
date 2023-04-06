# math.ulp()

Return the value of the least significant bit of the float **x**:

- If **x** is a NaN (not a number), return **x**.
- If **x** is negative, return ulp(-x).
- If **x** is a positive infinity, return **x**.
- If **x** is equal to zero, return the smallest positive denormalized representable float (smaller than the minimum positive normalized float, sys.float_info.min).
- If **x** is equal to the largest positive representable float, return the value of the least significant bit of **x**, such that the first float smaller than **x** is `x - ulp(x)`.
- Otherwise (**x** is a positive finite number), return the value of the least significant bit of **x**, such that the first float bigger than **x** is `x + ulp(x)`.

?> ULP stands for “Unit in the Last Place”.

### Syntax

```python
math.ulp(x)
```