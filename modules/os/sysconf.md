# os.sysconf()

> **Availability:** Unix.

Return integer-valued system configuration values. If the configuration value specified by **name** isn’t defined, `-1` is returned.

The comments regarding the **name** parameter for [`confstr()`](/modules/os/confstr.md) apply here as well.

The dictionary that provides information on the known names is given by [`sysconf_names`](/modules/os/sysconf_names.md).

### Syntax

```python
os.sysconf(name, /)
```