# os.getenv()

> **Availability:** Unix, Windows.

Return the value of the environment variable **key** as a string if it exists, or **default** if it doesn’t.

**key** is a string. Note that since `getenv()` uses `os.environ`, the mapping of `getenv()` is similarly also captured on import, and the function may not reflect future environment changes.

On Unix, keys and values are decoded with [`sys.getfilesystemencoding()`](/modules/sys/getfilesystemencoding.md) and `'surrogateescape'` error handler. Use [`os.getenvb()`](/modules/os/getenvb.md) if you would like to use a different encoding.

### Syntax

```python
os.getenv(key, default=None)
```

### Examples

```python
>>> os.getenv("LANG") # 'en_US.UTF-8'
>>> os.getenv("SHELL") # '/bin/zsh'
>>> os.getenv("CLICOLOR") # 1
```