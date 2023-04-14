# os.eventfd_write()

> **Availability:** Linux >= 2.6.27

Add value to an [`eventfd()`](/modules/os/eventfd.md) file descriptor. value must be a 64 bit unsigned int. The function does not verify that **fd** is an [`eventfd()`](/modules/os/eventfd.md).

### Syntax

```python
os.eventfd_write(fd, value)
```