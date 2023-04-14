# os.symlink()

> **Availability:** Unix, Windows.

Create a symbolic link pointing to **src** named **dst**.

On Windows, a symlink represents either a file or a directory, and does not morph to the target dynamically. If the target is present, the type of the symlink will be created to match. Otherwise, the symlink will be created as a directory if **target_is_directory** is `True` or a file symlink (the default) otherwise. On non-Windows platforms, **target_is_directory** is ignored.

This function can support paths relative to directory descriptors.

?> On newer versions of Windows 10, unprivileged accounts can create symlinks if Developer Mode is enabled. When Developer Mode is not available/enabled, the *SeCreateSymbolicLinkPrivilege* privilege is required, or the process must be run as an administrator. [`OSError`](/exceptions/OSError.md) is raised when the function is called by an unprivileged user.

Raises an auditing event `os.symlink` with arguments `src`, `dst`, `dir_fd`.

The function is limited on Emscripten and WASI, see WebAssembly platforms for more information.

### Syntax

```python
os.symlink(src, dst, target_is_directory=False, *, dir_fd=None)
```