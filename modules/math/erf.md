# math.erf()

Return the error function at **x**.

### Syntax

```python
math.erf(x)
```

### Examples

The `erf()` function can be used to compute traditional statistical functions such as the cumulative standard normal distribution:

```python
def phi(x):
    'Cumulative distribution function for the standard normal distribution'
    return (1.0 + erf(x / sqrt(2.0))) / 2.0
```