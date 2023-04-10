# os.getgroups()

> **Availability:** Unix, not Emscripten, not WASI.

Return list of supplemental group ids associated with the current process.

?> On macOS, `getgroups()` behavior differs somewhat from other Unix platforms. If the Python interpreter was built with a deployment target of `10.5` or earlier, `getgroups()` returns the list of effective group ids associated with the current user process. This list is limited to a system-defined number of entries, typically 16, and may be modified by calls to [`setgroups()`](/modules/os/setgroups.md) if suitably privileged. If built with a deployment target greater than `10.5`, `getgroups()` returns the current group access list for the user associated with the effective user id of the process. The group access list may change over the lifetime of the process, it is not affected by calls to [`setgroups()`](/modules/os/setgroups.md), and its length is not limited to 16. The deployment target value, `MACOSX_DEPLOYMENT_TARGET`, can be obtained with [`sysconfig.get_config_var()`](/modules/sysconfig/get_config_var.md).

### Syntax

```python
os.getgroups()
```