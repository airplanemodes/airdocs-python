# multiprocessing.JoinableQueue()

`JoinableQueue`, a [`Queue`](/modules/multiprocessing/Queue/) subclass, is a queue which additionally has [`task_done()`](/modules/multiprocessing/JoinableQueue/task_done.md) and [`join()`](/modules/multiprocessing/JoinableQueue/join.md) methods.

### Syntax

```python
multiprocessing.JoinableQueue()
multiprocessing.JoinableQueue(maxsize)
```