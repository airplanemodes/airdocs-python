# os.lchown()

> **Availability:** Unix.

Change the owner and group id of **path** to the numeric **uid** and **gid**.

This function will not follow symbolic links.

As of Python 3.3, this is equivalent to `os.chown(path, uid, gid, follow_symlinks=False)`.

Raises an auditing event `os.chown` with arguments `path`, `uid`, `gid`, `dir_fd`.

### Syntax

```python
os.lchown(path, uid, gid)
```