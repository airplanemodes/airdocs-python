# list.extend()

`>>> list.extend.__doc__`: Extend list by appending elements from the **iterable**.

### Syntax
```python
list.extend(iterable)
```

### Examples

```python
numbers = [1, 2, 3]
numbers.extend([4, 5])
print(numbers) # [1, 2, 3, 4, 5]
```

The same result can be achieved by using `+=` operator.

```python
numbers = [1, 2, 3]
numbers += [4, 5]
print(numbers) # [1, 2, 3, 4, 5]
```