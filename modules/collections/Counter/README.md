# collections.Counter()

A `Counter` is a [`dict`](/built-in-types/dict/) subclass for counting hashable objects.

It is a collection where elements are stored as dictionary keys and their counts are stored as dictionary values. Counts are allowed to be any integer value including zero or negative counts. The Counter class is similar to bags or multisets in other languages.

Elements are counted from an **iterable** or initialized from another mapping (or counter).

### Syntax

```python
collections.Counter()
collections.Counter(iterable)
```