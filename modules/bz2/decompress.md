# bz2.decompress()

Decompress **data**, a [`bytes`](/built-in-types/bytes/)-like object.

If **data** is the concatenation of multiple compressed streams, decompress all of the streams.

For incremental decompression, use a [`BZ2Decompressor`](/modules/bz2/BZ2Decompressor/) instead.

### Syntax

```python
bz2.decompress(data)
```