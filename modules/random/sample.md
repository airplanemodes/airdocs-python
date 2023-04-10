# random.sample()

Return a **k** length list of unique elements chosen from the **population** sequence. Used for random sampling without replacement.

Returns a new list containing elements from the **population** while leaving the original **population** unchanged. The resulting list is in selection order so that all sub-slices will also be valid random samples. This allows raffle winners (the sample) to be partitioned into grand prize and second place winners (the subslices).

Members of the **population** need not be hashable or unique. If the **population** contains repeats, then each occurrence is a possible selection in the sample.

Repeated elements can be specified one at a time or with the optional keyword-only **counts** parameter. For example, `sample(['red', 'blue'], counts=[4, 2], k=5)` is equivalent to `sample(['red', 'red', 'red', 'red', 'blue', 'blue'], k=5)`.

To choose a sample from a range of integers, use a [`range()`](/built-in-functions/range.md) object as an argument. This is especially fast and space efficient for sampling from a large **population**: `sample(range(10000000), k=60)`.

If the sample size is larger than the **population** size, a [`ValueError`](/exceptions/ValueError.md) is raised.

### Syntax

```python
random.sample(population, k, *, counts=None)
```

### Examples

```python
>>> numbers = [10, 20, 30, 40, 50]
>>> random.sample(numbers, 2) # [50, 30]
```