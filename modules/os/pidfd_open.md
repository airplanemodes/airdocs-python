# os.pidfd_open()

> **Availability:** Linux >= 5.3

Return a file descriptor referring to the process **pid**.

This descriptor can be used to perform process management without races and signals. The **flags** argument is provided for future extensions. No flag values are currently defined.

?> See the [pidfd_open(2)](https://manpages.debian.org/pidfd_open(2)) man page for more details.

### Syntax

```python
os.pidfd_open(pid, flags=0)
```