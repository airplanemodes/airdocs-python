# math.perm()

Return the number of ways to choose **k** items from **n** items without repetition and with order.

Evaluates to `n! / (n - k)!` when `k <= n` and evaluates to zero when `k > n`.

If **k** is not specified or is `None`, then **k** defaults to **n** and the function returns `n!`.

Raises [`TypeError`](/exceptions/TypeError.md) if either of the arguments are not integers. Raises [`ValueError`](/exceptions/ValueError.md) if either of the arguments are negative.

### Syntax

```python
math.perm(n, k=None)
```