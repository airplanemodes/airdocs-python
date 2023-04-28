# array.array.byteswap()

“Byteswap” all items of the array.

This is only supported for values which are 1, 2, 4, or 8 bytes in size. For other types of values, [`RuntimeError`](/exceptions/RuntimeError.md) is raised. It is useful when reading data from a file written on a machine with a different byte order.

### Syntax

```python
array.array.byteswap()
```