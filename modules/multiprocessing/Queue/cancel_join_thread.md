# multiprocessing.Queue.cancel_join_thread()

Prevent [`join_thread()`](/modules/multiprocessing/Queue/join_thread.md) from blocking.

In particular, this prevents the background thread from being joined automatically when the process exits – see [`join_thread()`](/modules/multiprocessing/Queue/join_thread.md).

A better name for this method might be `allow_exit_without_flush()`. It is likely to cause enqueued data to be lost, and you almost certainly will not need to use it. It is really only there if you need the current process to exit immediately without waiting to flush enqueued data to the underlying pipe, and you don’t care about lost data.

### Syntax

```python
multiprocessing.Queue.cancel_join_thread()
```