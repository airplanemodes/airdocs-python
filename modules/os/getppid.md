# os.getppid()

> **Availability:** Unix, Windows, not Emscripten, not WASI.

Return the parent’s process id. When the parent process has exited, on Unix the id returned is the one of the init process (1), on Windows it is still the same id, which may be already reused by another process.

### Syntax

```python
os.getppid() # 1783
```