# os.chflags()

> **Availability:** Unix, not Emscripten, not WASI.

Set the flags of **path** to the numeric **flags**.

**flags** may take a combination (bitwise OR) of the following values (as defined in the [`stat`](/modules/stat/) module):

- stat.UF_NODUMP
- stat.UF_IMMUTABLE
- stat.UF_APPEND
- stat.UF_OPAQUE
- stat.UF_NOUNLINK
- stat.UF_COMPRESSED
- stat.UF_HIDDEN
- stat.SF_ARCHIVED
- stat.SF_IMMUTABLE
- stat.SF_APPEND
- stat.SF_NOUNLINK
- stat.SF_SNAPSHOT

This function can support not following symlinks.

Raises an auditing event `os.chflags` with arguments `path`, `flags`.

### Syntax

```python
os.chflags(path, flags, *, follow_symlinks=True)
```