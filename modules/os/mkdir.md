# os.mkdir()

Create a directory named **path** with numeric mode **mode**.

If the directory already exists, [`FileExistsError`](/exceptions/FileExistsError.md) is raised. If a parent directory in the path does not exist, [`FileNotFoundError`](/exceptions/FileNotFoundError.md) is raised.

On some systems, **mode** is ignored. Where it is used, the current umask value is first masked out. If bits other than the last 9 (i.e. the last 3 digits of the octal representation of the **mode**) are set, their meaning is platform-dependent. On some platforms, they are ignored and you should call [`chmod()`](/modules/os/chmod.md) explicitly to set them.

This function can also support paths relative to directory descriptors.

It is also possible to create temporary directories. See the [`tempfile`](/modules/tempfile/) module’s [`tempfile.mkdtemp()`](/modules/tempfile/mkdtemp.md) function.

Raises an auditing event `os.mkdir` with arguments `path`, `mode`, `dir_fd`.

### Syntax

```python
os.mkdir(path, mode=0o777, *, dir_fd=None)
```