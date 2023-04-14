# os.setxattr()

> **Availability:** Linux.

Set the extended filesystem attribute **attribute** on **path** to **value**.

**attribute** must be a [`bytes`](/built-in-types/bytes/) or [`str`](/built-in-types/str/) with no embedded NULs (directly or indirectly through the [`PathLike`](/modules/os/PathLike.md) interface). If it is a [`str`](/built-in-types/str/), it is encoded with the filesystem encoding and error handler. 

**flags** may be `XATTR_REPLACE` or `XATTR_CREATE`. If `XATTR_REPLACE` is given and the attribute does not exist, `ENODATA` will be raised. If XATTR_CREATE is given and the attribute already exists, the attribute will not be created and `EEXISTS` will be raised.

?> A bug in Linux kernel versions less than 2.6.39 caused the **flags** argument to be ignored on some filesystems.

Raises an auditing event `os.setxattr` with arguments `path`, `attribute`, `value`, `flags`.

### Syntax

```python
os.setxattr(path, attribute, value, flags=0, *, follow_symlinks=True)
```