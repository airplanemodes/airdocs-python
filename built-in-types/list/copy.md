# list.copy()

`>>> list.copy.__doc__`: Return a shallow copy of the list.

### Syntax

```python
list.copy()
```

### Examples

```python
numbers = [1, 2, 3]
new = numbers.copy()
print(new) # [1, 2, 3]
```

There is an alternative way to make a shallow copy:

```python
>>> numbers = [1, 2, 3]
>>> nums = numbers[:]
>>> nums # [1, 2, 3]
```