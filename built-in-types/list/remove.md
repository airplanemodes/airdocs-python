# list.remove()

`>>> list.remove.__doc__`: Remove first occurrence of **value**.

Raises [`ValueError`](/exceptions/ValueError.md) if the **value** is not present.

### Syntax

```python
list.remove(value)
```

### Example

```python
numbers = [1, 2, 4, 2, 1]
numbers.remove(2)
print(numbers) # [1, 4, 2, 1]
```