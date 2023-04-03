# list.extend()

Extends list with the contents of **t**.

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