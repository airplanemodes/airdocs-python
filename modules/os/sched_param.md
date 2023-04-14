# os.sched_param()

This class represents tunable scheduling parameters used in [`sched_setparam()`](/modules/os/sched_setparam.md), [`sched_setscheduler()`](/modules/os/sched_setscheduler.md), and [`sched_getparam()`](/modules/os/sched_getparam.md). It is immutable.

At the moment, there is only one possible parameter: **sched_priority**. The scheduling priority for a scheduling policy.

### Syntax

```python
os.sched_param(sched_priority)
```