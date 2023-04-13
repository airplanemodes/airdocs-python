# os.makedirs()

Recursive directory creation function.

Like [`mkdir()`](/modules/os/mkdir.md), but makes all intermediate-level directories needed to contain the leaf directory.

The **mode** parameter is passed to [`mkdir()`](/modules/os/mkdir.md) for creating the leaf directory. See the [`mkdir()`](/modules/os/mkdir.md) description for how it is interpreted. 

To set the file permission bits of any newly created parent directories you can set the umask before invoking `makedirs()`. The file permission bits of existing parent directories are not changed.

If **exist_ok** is `False` (the default), a [`FileExistsError`](/exceptions/FileExistsError.md) is raised if the target directory already exists.

?> `makedirs()` will become confused if the path elements to create include `pardir` (eg. “..” on UNIX systems).

This function handles UNC paths correctly.

Raises an auditing event `os.mkdir` with arguments `path`, `mode`, `dir_fd`.

### Syntax

```python
os.makedirs(name, mode=0o777, exist_ok=False)
```