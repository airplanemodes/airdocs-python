# sys.call_tracing()

Call `func(*args)`, while tracing is enabled. The tracing state is saved, and restored afterwards. This is intended to be called from a debugger from a checkpoint, to recursively debug some other code.

### Syntax

```python
sys.call_tracing(func, args)
```