# codecs

**Codec registry and base classes.**

> Source code: [`Lib/codecs.py`](https://github.com/python/cpython/tree/3.12/Lib/codecs.py)

This module defines base classes for standard Python codecs (encoders and decoders) and provides access to the internal Python codec registry, which manages the codec and error handling lookup process. Most standard codecs are text encodings, which encode text to [`bytes`](/built-in-types/bytes/) (and decode bytes to text), but there are also codecs provided that encode text to text, and bytes to bytes. Custom codecs may encode and decode between arbitrary types, but some module features are restricted to be used specifically with text encodings or with codecs that encode to bytes.
