# os.setgroups()

> **Availability:** Unix, not Emscripten, not WASI.

Set the list of supplemental group ids associated with the current process to **groups**.

**groups** must be a sequence, and each element must be an integer identifying a group. 

This operation is typically available only to the superuser.

?> On macOS, the length of **groups** may not exceed the system-defined maximum number of effective group ids, typically 16. See the documentation for [`getgroups()`](/modules/os/getgroups.md) for cases where it may not return the same group list set by calling `setgroups()`.

### Syntax

```python
os.setgroups(groups, /)
```