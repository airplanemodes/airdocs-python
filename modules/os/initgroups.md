# os.initgroups()

> **Availability:** Unix, not Emscripten, not WASI.

Call the system `initgroups()` to initialize the group access list with all of the groups of which the specified username is a member, plus the specified group id.

### Syntax

```python
os.initgroups(username, gid, /)
```