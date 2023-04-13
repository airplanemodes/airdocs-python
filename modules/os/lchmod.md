# os.lchmod()

> **Availability:** Unix.

Change the mode of **path** to the numeric **mode**.

If **path** is a symlink, this affects the symlink rather than the target.

See the docs for [`chmod()`](/modules/os/chmod.md) for possible values of **mode**.

As of Python 3.3, this is equivalent to `os.chmod(path, mode, follow_symlinks=False)`.

Raises an auditing event `os.chmod` with arguments `path`, `mode`, `dir_fd`.

### Syntax

```python
os.lchmod(path, mode)
```