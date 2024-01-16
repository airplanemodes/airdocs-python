# bz2.open()

Open a bzip2-compressed file in binary or text mode, returning a file object.

As with the constructor for [`BZ2File`](/modules/bz2/BZ2File/), the **filename** argument can be an actual filename (a [`str`](/built-in-types/str/) or [`bytes`](/built-in-types/bytes/) object), or an existing file object to read from or write to.

The **mode** argument can be any of `'r'`, `'rb'`, `'w'`, `'wb'`, `'x'`, `'xb'`, `'a'` or `'ab'` for binary mode, or `'rt'`, `'wt'`, `'xt'`, or `'at'` for text mode. The default is `'rb'`.

The **compresslevel** argument is an integer from 1 to 9, as for the [`BZ2File`](/modules/bz2/BZ2File/) constructor.

For binary mode, this function is equivalent to the [`BZ2File`](/modules/bz2/BZ2File/) constructor: `BZ2File(filename, mode, compresslevel=compresslevel)`. In this case, the **encoding**, **errors** and **newline** arguments must not be provided.

For text mode, a [`BZ2File`](/modules/bz2/BZ2File/) object is created, and wrapped in an [`io.TextIOWrapper`](/modules/io/TextIOWrapper/) instance with the specified encoding, error handling behavior, and line ending(s).

### Syntax

```python
bz2.open(filename, mode='rb', compresslevel=9, encoding=None, errors=None, newline=None)
```