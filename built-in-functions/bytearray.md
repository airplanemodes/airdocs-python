# bytearray()

Return a new array of bytes. The [`bytearray`](/built-in-types/bytearray.md) class is a mutable sequence of integers in the range `0 <= x < 256`.

It has most of the usual methods of mutable sequences, as well as most methods that the [`bytes`](/built-in-types/bytes.md) type has.

The optional **source** parameter can be used to initialize the array in a few different ways:

- If it is a string, you must also give the **encoding** (and optionally, **errors**) parameters. `bytearray()` then converts the string to bytes using [`str.encode()`](/built-in-types/str?id=strencode).
- If it is an integer, the array will have that size and will be initialized with null bytes.
- If it is an object conforming to the buffer interface, a read-only buffer of the object will be used to initialize the bytes array.
- If it is an iterable, it must be an iterable of integers in the range `0 <= x < 256`, which are used as the initial contents of the array.

Without an argument, an array of size 0 is created.

### Syntax

```python
bytearray()
bytearray(source=b'')
bytearray(source, encoding)
bytearray(source, encoding, errors)
```

### Examples

```python
>>> bytearray(5)         # bytearray(b'\x00\x00\x00\x00\x00')
>>> bytearray([1, 2, 3]) # bytearray(b'\x01\x02\x03')
>>> bytearray(True)      # bytearray(b'\x00')
```
