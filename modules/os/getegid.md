# os.getegid()

> **Availability:** Unix, not Emscripten, not WASI.

Return the effective group id of the current process. This corresponds to the “set id” bit on the file being executed in the current process.

### Syntax

```python
os.getegid()
```

### Examples

```python
>>> os.getegid() # 20
```