# Slicing

Slice is an object usually containing a portion of a sequence. A slice is created using the subscript notation, `[]` with colons between numbers when several are given, such as in `variable_name[1:3:5]`. The bracket (subscript) notation uses slice objects internally.

- **start** is the index of the first element to include.
- **stop** is the index of the first element to exclude.
- **step** is the interval between elements.

### Syntax

```python
sequence[start:stop:step]
sequence[::-1]
```

### Examples

Slicing:

```python
>>> drinks = ["tea", "coffee", "beer", "cola", "juice"]
>>> drinks[0:2] # ['tea', 'coffee']
```

Reversing:

```python
>>> numbers = [1, 2, 3, 4, 5]
>>> numbers[::-1] # [5, 4, 3, 2, 1]
>>> numbers[0:3][::-1] # [3, 2, 1]
```