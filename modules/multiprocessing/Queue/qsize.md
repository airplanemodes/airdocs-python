# multiprocessing.Queue.qsize()

Return the approximate size of the queue.

Because of multithreading/multiprocessing semantics, this number is not reliable.

Note that this may raise [`NotImplementedError`](/exceptions/NotImplementedError.md) on Unix platforms like macOS where `sem_getvalue()` is not implemented.

### Syntax

```python
multiprocessing.Queue.qsize()
```