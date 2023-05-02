# multiprocessing.Queue()

Returns a process shared queue implemented using a pipe and a few locks/semaphores. When a process first puts an item on the queue a feeder thread is started which transfers objects from a buffer into the pipe.

The usual [`queue.Empty`](/modules/queue/Empty.md) and [`queue.Full`](/modules/queue/Full.md) exceptions from the standard library’s [`queue`](/modules/queue/) module are raised to signal timeouts.

`Queue` implements all the methods of [`queue.Queue`](/modules/queue/Queue/) except for [`task_done()`](/modules/queue/Queue/task_done.md) and [`join()`](/modules/queue/Queue/join.md).

### Syntax

```python
multiprocessing.Queue()
multiprocessing.Queue(maxsize)
```