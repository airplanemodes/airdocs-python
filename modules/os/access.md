# os.access()

Use the real uid/gid to test for access to **path**.

Note that most operations will use the effective uid/gid, therefore this routine can be used in a suid/sgid environment to test if the invoking user has the specified access to **path**.

**mode** should be `F_OK` to test the existence of **path**, or it can be the inclusive OR of one or more of `R_OK`, `W_OK`, and `X_OK` to test permissions. Return `True` if access is allowed, `False` if not.

?> See the Unix man page access(2) for more information.

This function can support specifying paths relative to directory descriptors and not following symlinks.

If **effective_ids** is `True`, `access()` will perform its access checks using the effective uid/gid instead of the real uid/gid. **effective_ids** may not be supported on your platform. You can check whether or not it is available using `os.supports_effective_ids`. If it is unavailable, using it will raise a [`NotImplementedError`](/exceptions/NotImplementedError.md).

Using `access()` to check if a user is authorized to e.g. open a file before actually doing so using [`open()`](/built-in-functions/open.md) creates a security hole, because the user might exploit the short time interval between checking and opening the file to manipulate it. It’s preferable to use EAFP techniques. For example:

```python
if os.access("myfile", os.R_OK):
    with open("myfile") as fp:
        return fp.read()
return "some default data"
```

is better written as:

```python
try:
    fp = open("myfile")
except PermissionError:
    return "some default data"
else:
    with fp:
        return fp.read()
```

?> I/O operations may fail even when `access()` indicates that they would succeed, particularly for operations on network filesystems which may have permissions semantics beyond the usual POSIX permission-bit model.

Values to pass as the **mode** parameter of access() to test the existence, readability, writability and executability of **path**, respectively.

- `os.F_OK`
- `os.R_OK`
- `os.W_OK`
- `os.X_OK`

### Syntax

```python
os.access(path, mode, *, dir_fd=None, effective_ids=False, follow_symlinks=True)
```