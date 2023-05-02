# multiprocessing.Pipe()

Returns a pair `(conn1, conn2)` of [`Connection`](/modules/multiprocessing/connection/Connection/) objects representing the ends of a pipe.

If **duplex** is `True` (the default) then the pipe is bidirectional. If **duplex** is `False` then the pipe is unidirectional: `conn1` can only be used for receiving messages and `conn2` can only be used for sending messages.

### Syntax

```python
multiprocessing.Pipe()
multiprocessing.Pipe(duplex)
```