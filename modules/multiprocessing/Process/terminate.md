# multiprocessing.Process.terminate()

Terminate the process.

On Unix this is done using the `SIGTERM` signal. On Windows `TerminateProcess()` is used. Note that exit handlers and finally clauses, etc., will not be executed.

Note that descendant processes of the process will *not* be terminated – they will simply become orphaned.

!> **Warning:**  If this method is used when the associated process is using a pipe or queue then the pipe or queue is liable to become corrupted and may become unusable by other process. Similarly, if the process has acquired a lock or semaphore etc. then terminating it is liable to cause other processes to deadlock.

# Syntax

```python
multiprocessing.Process.terminate()
```