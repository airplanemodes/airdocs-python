# struct.unpack_from()

Unpack from **buffer** starting at position **offset**, according to the format string **format**.

The result is a tuple even if it contains exactly one item.

The buffer’s size in bytes, starting at position **offset**, must be at least the size required by the format, as reflected by [`calcsize()`](/modules/struct/calcsize.md).

### Syntax

```python
struct.unpack_from(format, /, buffer, offset=0)
```
