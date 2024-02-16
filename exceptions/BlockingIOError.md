# BlockingIOError

Raised when an operation would block on an object (e.g. socket) set for non-blocking operation.

Corresponds to [`errno.EAGAIN`](/modules/errno/EAGAIN.md), [`errno.EALREADY`](/modules/errno/EALREADY.md), [`errno.EWOULDBLOCK`](/modules/errno/EWOULDBLOCK.md) and [`errno.EINPROGRESS`](/modules/errno/EINPROGRESS.md).

In addition to those of [`OSError`](/exceptions/OSError.md), `BlockingIOError` can have one more attribute:

* `characters_written` is an integer containing the number of characters written to the stream before it blocked. This attribute is available when using the buffered I/O classes from the [`io`](/modules/io/) module.