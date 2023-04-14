# os.getxattr()

> **Availability:** Linux.

Return the value of the extended filesystem attribute attribute for path. attribute can be [`bytes`](/built-in-types/bytes/) or [`str`](/built-in-types/str/) (directly or indirectly through the [`PathLike`](/modules/os/PathLike.md) interface). If it is [`str`](/built-in-types/str/), it is encoded with the filesystem encoding.

This function can support specifying a file descriptor and not following symlinks.

Raises an auditing event `os.getxattr` with arguments `path`, `attribute`.

### Syntax

```python
os.getxattr(path, attribute, *, follow_symlinks=True)
```