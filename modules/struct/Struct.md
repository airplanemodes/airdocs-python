# struct.Struct()

Return a new Struct object which writes and reads binary data according to the format string **format**.

Creating a `Struct` object once and calling its methods is more efficient than calling module-level functions with the same format since the format string is only compiled once.

?> The compiled versions of the most recent format strings passed to the module-level functions are cached, so programs that use only a few format strings needn’t worry about reusing a single `Struct` instance.

### Syntax

```python
struct.Struct(format)
```
