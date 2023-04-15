# os.path.realpath()

Return the canonical path of the specified filename, eliminating any symbolic links encountered in the path (if they are supported by the operating system).

If a path doesn’t exist or a symlink loop is encountered, and **strict** is `True`, [`OSError`](/exceptions/OSError.md) is raised. If **strict** is `False`, the path is resolved as far as possible and any remainder is appended without checking whether it exists.

?> This function emulates the operating system’s procedure for making a path canonical, which differs slightly between Windows and UNIX with respect to how links and subsequent path components interact. Operating system APIs make paths canonical as needed, so it’s not normally necessary to call this function.

### Syntax

```python
os.path.realpath(path, *, strict=False)
```