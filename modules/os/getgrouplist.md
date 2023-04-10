# os.getgrouplist()

> **Availability:** Unix, not Emscripten, not WASI.

Return list of group ids that user belongs to. If group is not in the list, it is included. Typically, group is specified as the group ID field from the password record for user, because that group ID will otherwise be potentially omitted.

### Syntax

```python
os.getgrouplist(user, group)
```