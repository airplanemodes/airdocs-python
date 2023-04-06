# list.pop()

`>>> list.pop.__doc__`: Remove and return item at **index** (default last).

Raises [`IndexError`](/exceptions/IndexError.md) if list is empty or **index** is out of range.

### Syntax

```python
list.pop()
list.pop(index)
```

### Examples

```python
numbers = [1, 2, 3]
numbers.pop(1)
print(numbers) # [1, 3]
```

If **index** is not given it retrieves the last item and also removes it from list. 

```python
numbers = [1, 2, 3]
numbers.pop()
print(numbers) # [1, 2]
```
