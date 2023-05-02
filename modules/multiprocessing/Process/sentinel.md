# multiprocessing.Process.sentinel

A numeric handle of a system object which will become “ready” when the process ends.

You can use this value if you want to wait on several events at once using [`multiprocessing.connection.wait()`](/modules/multiprocessing/connection/wait.md). Otherwise calling [`join()`](/modules/multiprocessing/Process/join.md) is simpler.

On Windows, this is an OS handle usable with the `WaitForSingleObject` and `WaitForMultipleObjects` family of API calls. On Unix, this is a file descriptor usable with primitives from the [`select`](/modules/select/) module.

# Syntax

```python
multiprocessing.Process.sentinel
```