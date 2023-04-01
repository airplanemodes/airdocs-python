# array

**Efficient arrays of numeric values.**

This module defines an object type which can compactly represent an array of basic values: characters, integers, floating point numbers. Arrays are sequence types and behave very much like lists, except that the type of objects stored in them is constrained. The type is specified at object creation time by using a *type code*, which is a single character. The following type codes are defined:

| Type code | C type             | Python type       | Minimum size in bytes |
| :-------: | :----------------: | :---------------: | :-------------------: |
| 'b'       | signed char        | int               | 1                     |
| 'B'       | unsigned char      | int               | 1                     |
| 'u'       | wchar_t            | Unicode character | 1                     |
| 'h'       | signed short       | int               | 2                     |
| 'H'       | unsigned short     | int               | 2                     |
| 'i'       | signed int         | int               | 2                     |
| 'I'       | unsigned int       | int               | 2                     |
| 'l'       | signed long        | int               | 4                     |
| 'L'       | unsigned long      | int               | 4                     |
| 'q'       | signed long long   | int               | 8                     |
| 'Q'       | unsigned long long | int               | 8                     |
| 'f'       | float              | float             | 4                     |
| 'd'       | double             | float             | 8                     |

The actual representation of values is determined by the machine architecture (strictly speaking, by the C implementation). The actual size can be accessed through the `array.itemsize` attribute.

When an array object is printed or converted to a string, it is represented as `array(typecode, initializer)`. The **initializer** is omitted if the array is empty, otherwise it is a string if the **typecode** is `'u'`, otherwise it is a list of numbers. The string is guaranteed to be able to be converted back to an array with the same type and value using [`eval()`](/built-in-functions/eval.md), so long as the array class has been imported using `from array import array`.

### Examples
```python
array('l')
array('u', 'hello \u2641')
array('l', [1, 2, 3, 4, 5])
array('d', [1.0, 2.0, 3.14])
```

# array.typecodes
A string with all available type codes.

# array.array()
A new array whose items are restricted by **typecode**, and initialized from the optional **initializer** value, which must be a list, a bytes-like object, or iterable over elements of the appropriate type.

If given a list or string, the initializer is passed to the new array’s `fromlist()`, `frombytes()`, or `fromunicode()` method (see below) to add initial items to the array. Otherwise, the iterable initializer is passed to the `extend()` method.

Array objects support the ordinary sequence operations of indexing, slicing, concatenation, and multiplication. When using slice assignment, the assigned value must be an array object with the same type code; in all other cases, [`TypeError`](/exceptions/TypeError.md) is raised. Array objects also implement the buffer interface, and may be used wherever bytes-like objects are supported.

Raises an auditing event `array.__new__` with arguments `typecode`, `initializer`.

### Syntax
```python
array(typecode)
array(typecode, initializer)
```

## array.typecode
The typecode character used to create the array.

## array.itemsize
The length in bytes of one array item in the internal representation.

## array.append()
Append a new item with value **x** to the end of the array.

### Syntax
```python
array.append(x)
```

## array.buffer_info()
Return a tuple `(address, length)` giving the current memory address and the length in elements of the buffer used to hold array’s contents. The size of the memory buffer in bytes can be computed as `array.buffer_info()[1] * array.itemsize`. This is occasionally useful when working with low-level (and inherently unsafe) I/O interfaces that require memory addresses, such as certain `ioctl()` operations. The returned numbers are valid as long as the array exists and no length-changing operations are applied to it.

?> When using array objects from code written in C or C++ (the only way to effectively make use of this information), it makes more sense to use the buffer interface supported by array objects. This method is maintained for backward compatibility and should be avoided in new code.

## array.byteswap()
“Byteswap” all items of the array. This is only supported for values which are 1, 2, 4, or 8 bytes in size. For other types of values, [`RuntimeError`](/exceptions/RuntimeError.md) is raised. It is useful when reading data from a file written on a machine with a different byte order.

## array.count()
Return the number of occurrences of **x** in the array.

### Syntax
```python
array.count(x)
```

## array.extend()
Append items from **iterable** to the end of the array. If **iterable** is another array, it must have *exactly* the same type code. If not, [`TypeError`](/exceptions/TypeError.md) will be raised. If **iterable** is not an array, it must be iterable and its elements must be the right type to be appended to the array.

### Syntax
```python
array.extend(iterable)
```

## array.frombytes()
Appends items from the **string**, interpreting the string as an array of machine values (as if it had been read from a file using the `fromfile()` method).

### Syntax
```python
array.frombytes(string)
```

## array.fromfile()
Read **n** items (as machine values) from the file object **f** and append them to the end of the array. If less than **n** items are available, [`EOFError`](/exceptions/EOFError.md) is raised, but the items that were available are still inserted into the array.

### Syntax
```python
array.fromfile(f, n)
```

## array.fromlist()
Append items from the **list**. This is equivalent to `for x in list: a.append(x)` except that if there is a type error, the array is unchanged.

### Syntax
```python
array.fromlist(list)
```

## array.fromunicode()
Extends this array with data from the given unicode **string**. The array must be a type `'u'` array. Otherwise a [`ValueError`](/exceptions/ValueError.md) is raised. Use `array.frombytes(unicodestring.encode(enc))` to append Unicode data to an array of some other type.

### Syntax
```python
array.fromunicode(string)
```

## array.index()
Return the smallest **i** such that **i** is the index of the first occurrence of **x** in the array. The optional arguments **start** and **stop** can be specified to search for **x** within a subsection of the array. Raise [`ValueError`](/exceptions/ValueError.md) if **x** is not found.

### Syntax
```python
array.index(x)
array.index(x, start, stop)
```

## array.insert()
Insert a new item with value **x** in the array before position **i**. Negative values are treated as being relative to the end of the array.

### Syntax
```python
array.insert(i, x)
```

## array.pop()
Removes the item with the index **i** from the array and returns it. The optional argument defaults to `-1`, so that by default the last item is removed and returned.

### Syntax
```python
array.pop()
array.pop(i)
```

## array.remove()
Remove the first occurrence of **x** from the array.

### Syntax
```python
array.remove(x)
```

## array.reverse()
Reverse the order of the items in the array.

### Syntax
```python
array.reverse()
```

## array.tobytes()
Convert the array to an array of machine values and return the bytes representation.
?> The same sequence of bytes that would be written to a file by the `tofile()` method.

### Syntax
```python
array.tobytes()
```

## array.tofile()
Write all items (as machine values) to the file object **f**.

### Syntax
```python
array.tofile(f)
```

## array.tolist()
Convert the array to an ordinary list with the same items.

### Syntax
```python
array.tolist()
```

## array.tounicode()
Convert the array to a unicode string. The array must be a type `'u'` array. Otherwise a [`ValueError`](/exceptions/ValueError.md) is raised. Use `array.tobytes().decode(enc)` to obtain a unicode string from an array of some other type.

### Syntax
```python
array.tounicode()
```