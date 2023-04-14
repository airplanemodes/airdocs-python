# os.eventfd_read()

> **Availability:** Linux >= 2.6.27

Read value from an [`eventfd()`](/modules/os/eventfd.md) file descriptor and return a 64 bit unsigned int. The function does not verify that **fd** is an [`eventfd()`](/modules/os/eventfd.md).

### Syntax

```python
os.eventfd_read(fd)
```