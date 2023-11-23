# struct.unpack()

Unpack from the **buffer** (presumably packed by `pack(format, ...))` according to the format string **format**.

The result is a tuple even if it contains exactly one item.

The buffer’s size in bytes must match the size required by the format, as reflected by [`calcsize()`](/modules/struct/calcsize.md).

### Syntax

```python
struct.unpack(format, buffer)
```
