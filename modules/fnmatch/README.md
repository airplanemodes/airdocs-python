# fnmatch

**Unix filename pattern matching.**

> Source code: [`Lib/fnmatch.py`](https://github.com/python/cpython/tree/3.12/Lib/fnmatch.py)

This module provides support for Unix shell-style wildcards, which are *not* the same as regular expressions (which are documented in the [`re`](/modules/re/) module). The special characters used in shell-style wildcards are:

| Pattern  | Meaning                            |
| -------- | ---------------------------------- |
| `*`      | matches everything                 |
| `?`      | matches any single character       |
| `[seq]`  | matches any character in *seq*     |
| `[!seq]` | matches any character not in *seq* |

For a literal match, wrap the meta-characters in brackets. For example, `'[?]'` matches the character `'?'`.

Note that the filename separator (`'/'` on Unix) is *not* special to this module. See module [`glob`](/modules/glob/) for pathname expansion ([`glob`](/modules/glob/) uses [`filter()`](/modules/fnmatch/filter.md) to match pathname segments). Similarly, filenames starting with a period are not special for this module, and are matched by the `*` and `?` patterns.

Also note that [`functools.lru_cache()`](/modules/functools/lru_cache.md) with the **maxsize** of 32768 is used to cache the compiled regex patterns in the following functions: [`fnmatch()`](/modules/fnmatch/fnmatch.md), [`fnmatchcase()`](/modules/fnmatch/fnmatchcase.md), [`filter()`](/modules/fnmatch/filter.md).