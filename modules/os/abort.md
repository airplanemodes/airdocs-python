# os.abort()

Generate a SIGABRT signal to the current process.

On Unix, the default behavior is to produce a core dump. On Windows, the process immediately returns an exit code of `3`. Be aware that calling this function will not call the Python signal handler registered for SIGABRT with [`signal.signal()`](/modules/signal/signal.md).

### Syntax

```python
os.abort()
```