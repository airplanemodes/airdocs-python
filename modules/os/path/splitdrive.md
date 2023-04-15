# os.path.splitdrive()

Split the pathname **path** into a pair `(drive, tail)` where **drive** is either a mount point or the empty string.

On systems which do not use drive specifications, **drive** will always be the empty string. In all cases, `drive + tail` will be the same as **path**.

### Syntax

```python
os.path.splitdrive(path)
```

### Examples

On Windows, splits a pathname into drive/UNC sharepoint and relative path.

If the path contains a drive letter, drive will contain everything up to and including the colon:

```python
>>> splitdrive("c:/dir") # ("c:", "/dir")
```

If the path contains a UNC path, drive will contain the host name and share, up to but not including the fourth separator:

```python
>>> splitdrive("//host/computer/dir") # ("//host/computer", "/dir")
```