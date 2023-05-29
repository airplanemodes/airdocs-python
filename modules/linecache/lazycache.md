# linecache.lazycache()

Capture enough detail about a non-file-based module to permit getting its lines later via [`getline()`](/modules/linecache/getline.md) even if **module_globals** is `None` in the later call. This avoids doing I/O until a line is actually needed, without having to carry the module globals around indefinitely.

### Syntax

```python
linecache.lazycache(filename, module_globals)
```