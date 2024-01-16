# bz2.compress()

Compress **data**, a [`bytes`](/built-in-types/bytes/)-like object.

**compresslevel**, if given, must be an integer between `1` and `9`. The default is `9`.

For incremental compression, use a [`BZ2Compressor`](/modules/bz2/BZ2Compressor/) instead.

### Syntax

```python
bz2.compress(data, compresslevel=9)
```