# multiprocessing.Queue.get()

Remove and return an item from the queue.

If optional args **block** is `True` (the default) and **timeout** is `None` (the default), block if necessary until an item is available.

If **timeout** is a positive number, it blocks at most **timeout** seconds and raises the [`queue.Empty`](/modules/queue/Empty.md) exception if no item was available within that time. Otherwise (**block** is `False`), return an item if one is immediately available, else raise the [`queue.Empty`](/modules/queue/Empty.md) exception (**timeout** is ignored in that case).

### Syntax

```python
multiprocessing.Queue.get()
multiprocessing.Queue.get(block)
multiprocessing.Queue.get(block, timeout)
```