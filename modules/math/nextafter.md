# math.nextafter()

Return the next floating-point value after **x** towards **y**.

If **x** is equal to **y**, return **y**.

### Syntax

```python
math.nextafter(x, y)
```

### Examples

```python
math.nextafter(x, math.inf) # goes up: towards positive infinity.
math.nextafter(x, -math.inf) # goes down: towards minus infinity.
math.nextafter(x, 0.0) # goes towards zero.
math.nextafter(x, math.copysign(math.inf, x)) # goes away from zero.
```