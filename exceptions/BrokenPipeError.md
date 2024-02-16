# BrokenPipeError

A subclass of [`ConnectionError`](/exceptions/ConnectionError.md), raised when trying to write on a pipe while the other end has been closed, or trying to write on a socket which has been shutdown for writing.

Corresponds to [`errno.EPIPE`](/modules/errno/EPIPE.md) and [`errno.ESHUTDOWN`](/modules/errno/ESHUTDOWN.md).
