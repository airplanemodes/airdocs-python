# multiprocessing.JoinableQueue.join()

Block until all items in the queue have been gotten and processed.

The count of unfinished tasks goes up whenever an item is added to the queue. The count goes down whenever a consumer calls [`task_done()`](/modules/multiprocessing/JoinableQueue/task_done.md) to indicate that the item was retrieved and all work on it is complete. When the count of unfinished tasks drops to zero, [`join()`](/modules/queue/Queue/join.md) unblocks.

### Syntax

```python
multiprocessing.JoinableQueue.join()
```