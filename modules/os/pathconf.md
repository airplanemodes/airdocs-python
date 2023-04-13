# os.pathconf()

> **Availability:** Unix.

Return system configuration information relevant to a named file.

**name** specifies the configuration value to retrieve. It may be a string which is the name of a defined system value. These names are specified in a number of standards (POSIX.1, Unix 95, Unix 98, and others). Some platforms define additional names as well. The names known to the host operating system are given in the `pathconf_names` dictionary. For configuration variables not included in that mapping, passing an integer for **name** is also accepted.

If **name** is a string and is not known, [`ValueError`](/exceptions/ValueError.md) is raised. If a specific value for **name** is not supported by the host system, even if it is included in `pathconf_names`, an [`OSError`](/exceptions/OSError.md) is raised with `errno.EINVAL` for the error number.

This function can support specifying a file descriptor.

### Syntax

```python
os.pathconf(path, name)
```