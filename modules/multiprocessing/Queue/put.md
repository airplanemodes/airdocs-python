# multiprocessing.Queue.put()

Put **obj** into the queue.

If the optional argument **block** is `True` (the default) and timeout is `None` (the default), block if necessary until a free slot is available.

If **timeout** is a positive number, it blocks at most **timeout** seconds and raises the [`queue.Full`](/modules/queue/Full.md) exception if no free slot was available within that time. Otherwise (**block** is `False`), put an item on the queue if a free slot is immediately available, else raise the [`queue.Full`](/modules/queue/Full.md) exception (**timeout** is ignored in that case).

### Syntax

```python
multiprocessing.Queue.put(obj)
multiprocessing.Queue.put(obj, block)
multiprocessing.Queue.put(obj, block, timeout)
```