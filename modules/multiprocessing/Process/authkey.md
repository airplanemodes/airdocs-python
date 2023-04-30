# multiprocessing.Process.authkey

The process’s authentication key (a byte string).

When [`multiprocessing`](/modules/multiprocessing/) is initialized the main process is assigned a random string using [`os.urandom()`](/modules/os/urandom.md).

When a [`Process`](/modules/multiprocessing/Process/) object is created, it will inherit the authentication key of its parent process, although this may be changed by setting `authkey` to another byte string.

# Syntax

```python
multiprocessing.Process.authkey
```