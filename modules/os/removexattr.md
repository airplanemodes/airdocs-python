# os.removexattr()

> **Availability:** Linux.

Removes the extended filesystem attribute **attribute** from **path**. 

**attribute** should be [`bytes`](/built-in-types/bytes/) or [`str`](/built-in-types/str/) (directly or indirectly through the [`PathLike`](/modules/os/PathLike.md) interface). If it is a [`str`](/built-in-types/str/), it is encoded with the filesystem encoding and error handler.

This function can support specifying a file descriptor and not following symlinks.

Raises an auditing event `os.removexattr` with arguments `path`, `attribute`.

### Syntax

```python
os.removexattr(path, attribute, *, follow_symlinks=True)
```