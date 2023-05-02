# multiprocessing.Process.close()

Close the [`Process`](/modules/multiprocessing/Process/) object, releasing all resources associated with it.

[`ValueError`](/exceptions/ValueError.md) is raised if the underlying process is still running. Once `close()` returns successfully, most other methods and attributes of the [`Process`](/modules/multiprocessing/Process/) object will raise [`ValueError`](/exceptions/ValueError.md).

# Syntax

```python
multiprocessing.Process.close()
```