# os.unsetenv()

Unset (delete) the environment variable named **key**.

Such changes to the environment affect subprocesses started with [`system()`](/modules/os/system.md), [`popen()`](/modules/os/popen.md) or [`fork()`](/modules/os/fork.md) and [`execv()`](/modules/os/execv.md).

Deletion of items in [`os.environ`](/modules/os/environ.md) is automatically translated into a corresponding call to `unsetenv()`. However, calls to `unsetenv()` don’t update [`os.environ`](/modules/os/environ.md), so it is actually preferable to delete items of [`os.environ`](/modules/os/environ.md).

Raises an auditing event `os.unsetenv` with argument `key`.

### Syntax

```python
os.unsetenv(key, /)
```