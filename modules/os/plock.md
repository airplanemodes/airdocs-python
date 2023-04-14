# os.plock()

> **Availability:** Unix, not Emscripten, not WASI.

Lock program segments into memory. The value of **op** (defined in `<sys/lock.h>`) determines which segments are locked.

### Syntax

```python
os.plock(op, /)
```