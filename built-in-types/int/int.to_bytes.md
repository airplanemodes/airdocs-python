# int.to_bytes()

Return an array of bytes representing an integer.

The integer is represented using **length** bytes, and defaults to `1`.

The **byteorder** argument determines the byte order used to represent the integer, and defaults to `"big"`. If **byteorder** is `"big"`, the most significant byte is at the beginning of the byte array. If **byteorder** is `"little"`, the most significant byte is at the end of the byte array.

The **signed** argument determines whether two’s complement is used to represent the integer. If **signed** is `False` and a negative integer is given, an [`OverflowError`](/exceptions/OverflowError.md) is raised. The default value for **signed** is `False`.

### Syntax

```python
int.to_bytes(length=1, byteorder='big', *, signed=False)
```

### Examples

```python
>>> (1024).to_bytes(2, byteorder='big') # b'\x04\x00'
>>> (1024).to_bytes(4, byteorder='big') # b'\x00\x00\x04\x00'
>>> (-1024).to_bytes(4, byteorder='big', signed=True) # b'\xff\xff\xfc\x00'
>>> 
```

!> An [`OverflowError`](/exceptions/OverflowError.md) is raised if the integer is not representable with the given number of bytes.