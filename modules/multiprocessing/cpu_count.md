# multiprocessing.cpu_count()

Return the number of CPUs in the system.

This number is not equivalent to the number of CPUs the current process can use. The number of usable CPUs can be obtained with `len(os.sched_getaffinity(0))`.

When the number of CPUs cannot be determined a [`NotImplementedError`](/exceptions/NotImplementedError.md) is raised.

?> See also: [`os.cpu_count()`](/modules/os/cpu_count.md)

### Syntax

```python
multiprocessing.cpu_count()
```