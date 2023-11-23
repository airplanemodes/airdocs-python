# struct.iter_unpack()

Iteratively unpack from the **buffer** according to the format string **format**.

This function returns an iterator which will read equally sized chunks from the buffer until all its contents have been consumed.

The buffer’s size in bytes must be a multiple of the size required by the format, as reflected by [`calcsize()`](/modules/struct/calcsize.md).

### Syntax

```python
struct.iter_unpack(format, buffer)
```
