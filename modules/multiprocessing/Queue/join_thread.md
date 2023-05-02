# multiprocessing.Queue.join_thread()

Join the background thread.

This can only be used after [`close()`](/modules/multiprocessing/Queue/close.md) has been called. It blocks until the background thread exits, ensuring that all data in the buffer has been flushed to the pipe.

By default if a process is not the creator of the queue then on exit it will attempt to join the queue’s background thread. The process can call [`cancel_join_thread()`](/modules/multiprocessing/Queue/cancel_join_thread.md) to make `join_thread()` do nothing.

### Syntax

```python
multiprocessing.Queue.join_thread()
```