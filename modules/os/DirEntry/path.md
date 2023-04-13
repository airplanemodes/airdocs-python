# os.DirEntry.path

The entry’s full path name: equivalent to `os.path.join(scandir_path, entry.name)` where **scandir_path** is the [`scandir()`](/modules/os/scandir.md) **path** argument. The path is only absolute if the [`scandir()`](/modules/os/scandir.md) **path** argument was absolute. If the [`scandir()`](/modules/os/scandir.md) **path** argument was a file descriptor, the `path` attribute is the same as the `name` attribute.

The `path` attribute will be [`bytes`](/built-in-types/bytes/) if the [`scandir()`](/modules/os/scandir.md) **path** argument is of type [`bytes`](/built-in-types/bytes/) and [`str`](/built-in-types/str/) otherwise.

Use [`fsdecode()`](/modules/os/fsdecode.md) to decode byte filenames.

### Syntax

```python
os.DirEntry.path
```