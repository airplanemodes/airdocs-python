# bytes()

Return a new “bytes” object which is an immutable sequence of integers in the range `0 <= x < 256`.

[`bytes`](/built-in-types/bytes.md) is an immutable version of [`bytearray`](/built-in-types/bytearray.md). It has the same non-mutating methods and the same indexing and slicing behavior.

Accordingly, constructor arguments are interpreted as for [`bytearray()`](/built-in-functions/bytearray.md).

### Syntax

```python
bytes()
bytes(source=b'')
bytes(source, encoding)
bytes(source, encoding, errors)
```

### Examples

```python
bytes(5)          # b'\x00\x00\x00\x00\x00'
bytes([1, 3, 5])  # b'\x01\x03\x05'
bytes([255, 128]) # b'\xff\x80'
```
