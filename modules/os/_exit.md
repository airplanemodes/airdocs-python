# os._exit()

Exit the process with status **n**, without calling cleanup handlers, flushing stdio buffers, etc.

?> The standard way to exit is [`sys.exit()`](/modules/sys/exit.md). `_exit()` should normally only be used in the child process after a [`fork()`](/modules/os/fork.md).

### Syntax

```python
os._exit(n)
```
