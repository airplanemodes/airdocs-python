# os.DirEntry

Object yielded by [`scandir()`](/modules/os/scandir.md) to expose the file path and other file attributes of a directory entry.

[`scandir()`](/modules/os/scandir.md) will provide as much of this information as possible without making additional system calls. When a `stat()` or `lstat()` system call is made, the `os.DirEntry` object will cache the result.

`os.DirEntry` instances are not intended to be stored in long-lived data structures; if you know the file metadata has changed or if a long time has elapsed since calling [`scandir()`](/modules/os/scandir.md), call `os.stat(entry.path)` to fetch up-to-date information.

Because the `os.DirEntry` methods can make operating system calls, they may also raise [`OSError`](/exceptions/OSError.md). If you need very fine-grained control over errors, you can catch [`OSError`](/exceptions/OSError.md) when calling one of the `os.DirEntry` methods and handle as appropriate.

To be directly usable as a path-like object, `os.DirEntry` implements the `PathLike` interface.

?> Note that there is a nice correspondence between several attributes and methods of `os.DirEntry` and of [`pathlib.Path`](/modules/pathlib/Path/). In particular, the `name` attribute has the same meaning, as do the [`is_dir()`](/modules/os/DirEntry/is_dir.md), [`is_file()`](/modules/os/DirEntry/is_file.md), [`is_symlink()`](/modules/os/DirEntry/is_symlink.md) and [`stat()`](/modules/os/DirEntry/stat.md) methods.