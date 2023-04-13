# os.get_terminal_size()

> **Availability:** Unix, Windows.

Return the size of the terminal window as `(columns, lines)`, tuple of type [`terminal_size`](/modules/os/terminal_size.md).

The optional argument **fd** (defaults to `STDOUT_FILENO`, or standard output) specifies which file descriptor should be queried.

If the file descriptor is not connected to a terminal, an [`OSError`](/exceptions/OSError.md) is raised.

[`shutil.get_terminal_size()`](/modules/shutil/get_terminal_size.md) is the high-level function which should normally be used, `os.get_terminal_size` is the low-level implementation.

### Syntax

```python
os.get_terminal_size(fd=STDOUT_FILENO, /)
```