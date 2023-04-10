# random.choice()

Return a random element from the non-empty **sequence**.

If **sequence** is empty, raises [`IndexError`](/exceptions/IndexError.md).

### Syntax

```python
random.choice(sequence)
```

### Examples

```python
>>> fruits = ["apple", "kiwi", "banana", "orange", "peach"]
>>> random.choice(fruits) # 'peach'
```