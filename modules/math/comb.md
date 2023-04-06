# math.comb()

Return the number of ways to choose **k** items from **n** items without repetition and without order.

Evaluates to `n! / (k! * (n - k)!)` when `k <= n` and evaluates to zero when `k > n`.

Also called the binomial coefficient because it is equivalent to the coefficient of k-th term in polynomial expansion of `(1 + x)ⁿ`.

Raises [`TypeError`](/exceptions/TypeError.md) if either of the arguments are not integers. Raises [`ValueError`](/exceptions/ValueError.md) if either of the arguments are negative.

### Syntax

```python
math.comb(n, k)
```