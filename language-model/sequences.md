# Sequences

# Accessing
This feature allows to extract an element of a sequence. **i** defines an index.

### Syntax
```python
sequence[i]
```

### Examples
```python
>>> currencies = ["USD", "EUR", "JPY", "CNY", "GBP"]
>>> currencies[2] # 'JPY'
```

---

# Slicing
This feature allows to extract a portion of a sequence.
- **start** is the index of the first element to include.
- **stop** is the index of the first element to exclude.
- **step** is the interval between elements.

### Syntax
```python
sequence[start:stop:step]
```

---

# Mutable sequences
The following methods are defined on mutable sequence types.

Note that:
- **mutable** is an instance of a mutable sequence type.
- **t** is any iterable object.
- **x** is an arbitrary object that meets any type and value restrictions imposed by **mutable** (for example, `bytearray` only accepts integers that meet the value restriction `0 <= x <= 255`). 
- **i** is an index of an element.

## mutable.append(x)
Appends **x** to the end of the sequence.
```python
mutable = [1, 2, 3]
mutable.append(4)
print(mutable) # [1, 2, 3, 4]
```

## mutable.clear()
Removes all items from **mutable** (same as `del mutable[:]`).
```python
mutable = [1, 2, 3]
mutable.clear()
print(mutable) # []
```

## mutable.copy()
Creates a shallow copy of **mutable** (same as `mutable[:]`).
```python
mutable = [1, 2, 3]
new = mutable.copy()
print(new) # [1, 2, 3]
```

## mutable.extend(t)
Extends **mutable** with the contents of **t**.
```python
mutable = [1, 2, 3]
mutable.extend([4, 5])
print(mutable) # [1, 2, 3, 4, 5]
```

The same result can be achieved by using `+=` operator.
```python
mutable = [1, 2, 3]
mutable += [4, 5]
print(mutable) # [1, 2, 3, 4, 5]
```

## mutable.insert(i, x)
Inserts **x** into **mutable** at the index given by **i** (same as `mutable[i:i] = [x]`).
```python
mutable = [10, 20, 40, 50]
mutable.insert(2, 30)
print(mutable) # [10, 20, 30, 40, 50]
```

## mutable.pop(i)
Retrieves the item at index **i** and also removes it from **mutable**.
```python
mutable = [1, 2, 3]
mutable.pop(1)
print(mutable) # [1, 3]
```

If **i** is not given it retrieves the last item and also removes it from **mutable**. 
```python
mutable = [1, 2, 3]
mutable.pop()
print(mutable) # [1, 2]
```

## mutable.remove(x)
Removes the first item from **mutable** where `mutable[i]` is equal to **x**.
```python
mutable = [1, 2, 4, 2, 1]
mutable.remove(2)
print(mutable) # [1, 4, 2, 1]
```

## mutable.reverse()
Reverses the items of **mutable** in place.
```python
mutable = [1, 2, 3]
mutable.reverse()
print(mutable) # [3, 2, 1]
```

# Immutable sequences