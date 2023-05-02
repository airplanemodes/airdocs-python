# multiprocessing.JoinableQueue.task_done()

Indicate that a formerly enqueued task is complete. Used by queue consumers. For each [`get()`](/modules/multiprocessing/Queue/get.md) used to fetch a task, a subsequent call to `task_done()` tells the queue that the processing on the task is complete.

If a [`join()`](/modules/queue/Queue/join.md) is currently blocking, it will resume when all items have been processed (meaning that a `task_done()` call was received for every item that had been [`put()`](/modules/multiprocessing/Queue/put.md) into the queue).

Raises a [`ValueError`](/exceptions/ValueError.md) if called more times than there were items placed in the queue.

### Syntax

```python
multiprocessing.JoinableQueue.task_done()
```