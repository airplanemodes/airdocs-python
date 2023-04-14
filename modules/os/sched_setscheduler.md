# os.sched_setscheduler()

Set the scheduling policy for the process with PID **pid**.

A **pid** of 0 means the calling process.

**param** is a [`sched_param`](/modules/os/sched_param.md) instance.

### Syntax

```python
os.sched_setscheduler(pid, policy, param, /)
```