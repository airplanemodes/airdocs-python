# multiprocessing.get_start_method()

Return the name of start method used for starting processes.

If the start method has not been fixed and **allow_none** is `False`, then the start method is fixed to the default and the name is returned. 

If the start method has not been fixed and **allow_none** is `True` then `None` is returned.

The return value can be `'fork'`, `'spawn'`, `'forkserver'` or `None`. `'fork'` is the default on Unix, while `'spawn'` is the default on Windows and macOS.

### Syntax

```python
multiprocessing.get_start_method(allow_none=False)
```