# os.sched_setaffinity()

Restrict the process with PID **pid** (or the current process if zero) to a set of CPUs.

**mask** is an iterable of integers representing the set of CPUs to which the process should be restricted.

### Syntax

```python
os.sched_setaffinity(pid, mask, /)
```