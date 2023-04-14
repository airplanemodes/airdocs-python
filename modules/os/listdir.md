# os.listdir()

Return a list containing the names of the entries in the directory given by **path**.

The list is in arbitrary order, and does not include the special entries `'.'` and `'..'` even if they are present in the directory. If a file is removed from or added to the directory during the call of this function, whether a name for that file be included is unspecified.

**path** may be a path-like object. If **path** is of type [`bytes`](/built-in-types/bytes/) (directly or indirectly through the [`PathLike`](/modules/os/PathLike.md) interface), the filenames returned will also be of type [`bytes`](/built-in-types/bytes/). In all other circumstances, they will be of type [`str`](/built-in-types/str/).

This function can also support specifying a file descriptor. The file descriptor must refer to a directory.

Raises an auditing event `os.listdir` with argument `path`.

?> To encode [`str`](/built-in-types/str/) filenames to [`bytes`](/built-in-types/bytes/), use [`fsencode()`](/modules/os/fsencode.md).

?> **See also:** The [`scandir()`](/modules/os/scandir.md) function returns directory entries along with file attribute information, giving better performance for many common use cases.

### Syntax

```python
os.listdir(path='.')
```