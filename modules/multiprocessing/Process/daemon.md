# multiprocessing.Process.daemon

The process’s daemon flag, a Boolean value. This must be set before [`start()`](/modules/multiprocessing/Process/start.md) is called.

The initial value is inherited from the creating process.

When a process exits, it attempts to terminate all of its daemonic child processes.

Note that a daemonic process is not allowed to create child processes. Otherwise a daemonic process would leave its children orphaned if it gets terminated when its parent process exits. Additionally, these are *not* Unix daemons or services, they are normal processes that will be terminated (and not joined) if non-daemonic processes have exited.

# Syntax

```python
multiprocessing.Process.daemon
```