# random.shuffle()

Shuffle the sequence **x** in place.

To shuffle an immutable sequence and return a new shuffled list, use `sample(x, k=len(x))` instead.

Note that even for small `len(x)`, the total number of permutations of **x** can quickly grow larger than the period of most random number generators. This implies that most permutations of a long sequence can never be generated. For example, a sequence of length 2080 is the largest that can fit within the period of the Mersenne Twister random number generator.

### Syntax

```python
random.shuffle(x)
```

### Examples

```python
>>> numbers = [1, 2, 3, 4, 5]
>>> random.shuffle(numbers)
>>> numbers # [1, 2, 5, 3, 4]
```