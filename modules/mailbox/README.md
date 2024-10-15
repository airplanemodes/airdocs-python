# mailbox

**Manipulate mailboxes in various formats.**

> Source code: [`Lib/mailbox.py`](https://github.com/python/cpython/tree/3.13/Lib/mailbox.py)

This module defines two classes, `Mailbox` and `Message`, for accessing and manipulating on-disk mailboxes and the messages they contain. `Mailbox` offers a dictionary-like mapping from keys to messages. `Message` extends the `email.message` module’s `Message` class with format-specific state and behavior. Supported mailbox formats are Maildir, mbox, MH, Babyl, and MMDF.
