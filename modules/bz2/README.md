# bz2

**Support for bzip2 compression.**

> Source code: [`Lib/bz2.py`](https://github.com/python/cpython/tree/3.12/Lib/bz2.py)

This module provides a comprehensive interface for compressing and decompressing data using the bzip2 compression algorithm.

The `bz2` module contains:

* [`open()`](/modules/bz2/open.md) function and [`BZ2File`](/modules/bz2/BZ2File/) class for reading and writing compressed files.
* [`BZ2Compressor`](/modules/bz2/BZ2Compressor/) and [`BZ2Decompressor`](/modules/bz2/BZ2Decompressor/) classes for incremental (de)compression.
* [`compress()`](/modules/bz2/compress.md) and [`decompress()`](/modules/bz2/decompress.md) functions for one-shot (de)compression.