# os.memfd_create()

> **Availability:** Linux >= 3.17 with glibc >= 2.27.

Create an anonymous file and return a file descriptor that refers to it.

**flags** must be one of the `os.MFD_*` constants available on the system (or a bitwise ORed combination of them). By default, the new file descriptor is non-inheritable.

The name supplied in **name** is used as a filename and will be displayed as the target of the corresponding symbolic link in the directory `/proc/self/fd/`. The displayed name is always prefixed with `memfd:` and serves only for debugging purposes. Names do not affect the behavior of the file descriptor, and as such multiple files can have the same name without any side effects.

### Syntax

```python
os.memfd_create(name)
os.memfd_create(name, flags=os.MFD_CLOEXEC)
```