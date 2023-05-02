# multiprocessing.SimpleQueue.close()

Close the queue: release internal resources.

A queue must not be used anymore after it is closed. For example, [`get()`](/modules/multiprocessing/SimpleQueue/get.md), [`put()`](/modules/multiprocessing/SimpleQueue/put.md) and [`empty()`](/modules/multiprocessing/SimpleQueue/empty.md) methods must no longer be called.

### Syntax

```python
multiprocessing.SimpleQueue.close()
```