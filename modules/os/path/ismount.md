# os.path.ismount()

Return `True` if pathname **path** is a mount point: a point in a file system where a different file system has been mounted.

On POSIX, the function checks whether **path**’s parent, `path/..`, is on a different device than **path**, or whether `path/..` and **path** point to the same i-node on the same device — this should detect mount points for all Unix and POSIX variants. It is not able to reliably detect bind mounts on the same filesystem.

On Windows, a drive letter root and a share UNC are always mount points, and for any other path `GetVolumePathName` is called to see if it is different from the input path.

### Syntax

```python
os.path.ismount(path)
```