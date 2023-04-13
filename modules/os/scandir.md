# os.scandir()

Return an iterator of [`os.DirEntry`](/modules/os/DirEntry/) objects corresponding to the entries in the directory given by **path**.

The entries are yielded in arbitrary order, and the special entries `'.'` and `'..'` are not included. If a file is removed from or added to the directory after creating the iterator, whether an entry for that file be included is unspecified.

Using `scandir()` instead of [`listdir()`](/modules/os/listdir.md) can significantly increase the performance of code that also needs file type or file attribute information, because [`os.DirEntry`](/modules/os/DirEntry/) objects expose this information if the operating system provides it when scanning a directory. All [`os.DirEntry`](/modules/os/DirEntry/) methods may perform a system call, but [`is_dir()`](/modules/os/DirEntry/is_dir.md) and [`is_file()`](/modules/os/DirEntry/is_file.md) usually only require a system call for symbolic links. [`os.DirEntry.stat()`](/modules/os/DirEntry/stat.md) always requires a system call on Unix but only requires one for symbolic links on Windows.

**path** may be a path-like object. If **path** is of type [`bytes`](/built-in-types/bytes/) (directly or indirectly through the `PathLike` interface), the type of the `name` and `path` attributes of each [`os.DirEntry`](/modules/os/DirEntry/) will be bytes. In all other circumstances, they will be of type [`str`](/built-in-types/str/).

This function can also support specifying a file descriptor. The file descriptor must refer to a directory.

Raises an auditing event `os.scandir` with argument `path`.

The `scandir()` iterator supports the context manager protocol and has the method [`scandir.close()`](/modules/os/scandir/close.md).

### Syntax

```python
os.scandir(path='.')
```

### Examples

The following example shows a simple use of `scandir()` to display all the files (excluding directories) in the given **path** that don’t start with `'.'`. The `entry.is_file()` call will generally not make an additional system call:

```python
with os.scandir(path) as it:
    for entry in it:
        if not entry.name.startswith('.') and entry.is_file():
            print(entry.name)
```

?> On Unix-based systems, `scandir()` uses the system’s `opendir()` and `readdir()` functions. On Windows, it uses the Win32 `FindFirstFileW` and `FindNextFileW` functions.