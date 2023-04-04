# array

**Efficient arrays of numeric values.**

This module defines an object type which can compactly represent an array of basic values: characters, integers, floating point numbers.

Arrays are sequence types and behave very much like lists, except that the type of objects stored in them is constrained. The type is specified at object creation time by using a **typecode**, which is a single character.

The following type codes are defined:

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

### Attributes

`>>> array.typecodes`: A string with all available type codes.

`>>> array.array.typecode`: The typecode character used to create the array.

`>>> array.array.itemsize`: The length in bytes of one array item in the internal representation.

### Examples

```python
array('l')
array('u', 'hello \u2641')
array('l', [1, 2, 3, 4, 5])
array('d', [1.0, 2.0, 3.14])
```