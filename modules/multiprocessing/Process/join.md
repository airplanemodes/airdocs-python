# multiprocessing.Process.join()

If the optional argument **timeout** is `None` (the default), the method blocks until the process whose `join()` method is called terminates. If **timeout** is a positive number, it blocks at most **timeout** seconds. Note that the method returns `None` if its process terminates or if the method times out. Check the process’s [`exitcode`](/modules/multiprocessing/Process/exitcode.md) to determine if it terminated.

A process can be joined many times.

A process cannot join itself because this would cause a deadlock. It is an error to attempt to join a process before it has been started.

# Syntax

```python
multiprocessing.Process.join()
multiprocessing.Process.join(timeout)
```