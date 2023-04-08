# random.choices()

Return a **k** sized list of elements chosen from the **population** with replacement.

If the **population** is empty, raises [`IndexError`](/exceptions/IndexError.md).

If a **weights** sequence is specified, selections are made according to the relative weights. Alternatively, if a **cum_weights** sequence is given, the selections are made according to the cumulative weights (perhaps computed using [`itertools.accumulate()`](/modules/itertools/accumulate.md)). For example, the relative weights `[10, 5, 30, 5]` are equivalent to the cumulative weights `[10, 15, 45, 50]`. Internally, the relative weights are converted to cumulative weights before making selections, so supplying the cumulative weights saves work.

If neither **weights** nor **cum_weights** are specified, selections are made with equal probability. If a **weights** sequence is supplied, it must be the same length as the **population** sequence. It is a [`TypeError`](/exceptions/TypeError.md) to specify both **weights** and **cum_weights**.

The **weights** or **cum_weights** can use any numeric type that interoperates with the [`float`](/built-in-types/float/) values returned by [`random()`](/modules/random/random.md) (that includes integers, floats, and fractions but excludes decimals). Weights are assumed to be non-negative and finite. A [`ValueError`](/exceptions/ValueError.md) is raised if all weights are zero.

For a given seed, the [`choices()`](/modules/random/choices.md) function with equal weighting typically produces a different sequence than repeated calls to [`choice()`](/modules/random/choice.md). The algorithm used by [`choices()`](/modules/random/choices.md) uses floating point arithmetic for internal consistency and speed. The algorithm used by [`choice()`](/modules/random/choice.md) defaults to integer arithmetic with repeated selections to avoid small biases from round-off error.

### Syntax

```python
random.choices(population, weights=None, *, cum_weights=None, k=1)
```