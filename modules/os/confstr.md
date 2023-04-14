# os.confstr()

> **Availability:** Unix.

Return string-valued system configuration values. **name** specifies the configuration value to retrieve. It may be a string which is the name of a defined system value. These names are specified in a number of standards (POSIX, Unix 95, Unix 98, and others). Some platforms define additional names as well. The names known to the host operating system are given as the keys of the [`confstr_names`](/modules/os/confstr_names.md) dictionary. For configuration variables not included in that mapping, passing an integer for **name** is also accepted.

If the configuration value specified by **name** isn’t defined, `None` is returned.

If **name** is a string and is not known, [`ValueError`](/exceptions/ValueError.md) is raised. If a specific value for **name** is not supported by the host system, even if it is included in [`confstr_names`](/modules/os/confstr_names.md), an [`OSError`](/exceptions/OSError.md) is raised with `errno.EINVAL` for the error number.

### Syntax

```python
os.confstr(name, /)
```