# os.sched_getparam()

Return the scheduling parameters as a [`sched_param`](/modules/os/sched_param.md) instance for the process with PID **pid**.

A **pid** of 0 means the calling process.

### Syntax

```python
os.sched_getparam(pid, /)
```