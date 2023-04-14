# os.eventfd()

> **Availability:** Linux >= 2.6.27 with glibc >= 2.8

Create and return an event file descriptor.

The file descriptors supports raw [`read()`](/modules/os/read.md) and [`write()`](/modules/os/write.md) with a buffer size of 8, [`select.select()`](/modules/select/select.md), [`select.poll()`](/modules/select/poll.md) and similar. See man page [eventfd(2)](https://manpages.debian.org/eventfd(2)) for more information. By default, the new file descriptor is non-inheritable.

**initval** is the initial value of the event counter. The initial value must be an 32 bit unsigned integer. Please note that the initial value is limited to a 32 bit unsigned int although the event counter is an unsigned 64 bit integer with a maximum value of 264-2.

**flags** can be constructed from `EFD_CLOEXEC`, `EFD_NONBLOCK`, and `EFD_SEMAPHORE`.

If `EFD_SEMAPHORE` is specified and the event counter is non-zero, [`eventfd_read()`](/modules/os/eventfd_read.md) returns 1 and decrements the counter by one.

If `EFD_SEMAPHORE` is not specified and the event counter is non-zero, [`eventfd_read()`](/modules/os/eventfd_read.md) returns the current event counter value and resets the counter to zero.

If the event counter is zero and `EFD_NONBLOCK` is not specified, [`eventfd_read()`](/modules/os/eventfd_read.md) blocks.

[`eventfd_write()`](/modules/os/eventfd_write.md) increments the event counter. Write blocks if the write operation would increment the counter to a value larger than 264-2.

### Syntax

```python
os.eventfd(initval)
os.eventfd(initval, flags=os.EFD_CLOEXEC)
```

### Examples

```python
import os

# semaphore with start value '1'
fd = os.eventfd(1, os.EFD_SEMAPHORE | os.EFC_CLOEXEC)
try:
    # acquire semaphore
    v = os.eventfd_read(fd)
    try:
        do_work()
    finally:
        # release semaphore
        os.eventfd_write(fd, v)
finally:
    os.close(fd)
```