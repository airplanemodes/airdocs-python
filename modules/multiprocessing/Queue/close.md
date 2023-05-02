# multiprocessing.Queue.close()

Indicate that no more data will be put on this queue by the current process. The background thread will quit once it has flushed all buffered data to the pipe.

This is called automatically when the queue is garbage collected.

### Syntax

```python
multiprocessing.Queue.close()
```