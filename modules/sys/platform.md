# sys.platform

This string contains a platform identifier that can be used to append platform-specific components to [`sys.path`](/modules/sys/path.md), for instance.

For Unix systems, except on Linux and AIX, this is the lowercased OS name as returned by `uname -s` with the first part of the version as returned by `uname -r` appended, e.g. `'sunos5'` or `'freebsd8'`, *at the time when Python was built*. Unless you want to test for a specific system version, it is therefore recommended to use the following idiom:

```python
if sys.platform.startswith('freebsd'):
    # FreeBSD-specific code here...
elif sys.platform.startswith('linux'):
    # Linux-specific code here...
elif sys.platform.startswith('aix'):
    # AIX-specific code here...
```

For other systems, the values are:

| System         | platform value |
| -------------- | -------------- |
| AIX            | `'aix'`        |
| Emscripten     | `'emscripten'` |
| Linux          | `'linux'`      |
| WASI           | `'wasi'`       |
| Windows        | `'win32'`      |
| Windows/Cygwin | `'cygwin'`     |
| macOS          | `'darwin'`     |

?> **See also:** [`os.name`](/modules/os/name.md) has a coarser granularity. [`os.uname()`](/modules/os/uname.md) gives system-dependent version information. The [`platform`](/modules/platform/) module provides detailed checks for the system’s identity.

### Syntax

```python
sys.platform
```