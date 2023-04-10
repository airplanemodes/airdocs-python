# os.ctermid()

> **Availability:** Unix, not Emscripten, not WASI.

Return the filename corresponding to the controlling terminal of the process.

### Syntax

```python
os.ctermid()
```

### Examples

```python
>>> os.ctermid() # '/dev/tty'
```