# os.path.splitext()

Split the pathname **path** into a pair `(root, ext)` such that `root + ext == path`, and the extension, **ext**, is empty or begins with a period and contains at most one period.

### Syntax

```python
os.path.splitext(path)
```

### Examples

If the path contains no extension, **ext** will be `''`:

```python
>>> splitext('bar') # ('bar', '')
```

If the path contains an extension, then **ext** will be set to this extension, including the leading period. Note that previous periods will be ignored:

```python
>>> splitext('foo.bar.exe') # ('foo.bar', '.exe')
>>> splitext('/foo/bar.exe') # ('/foo/bar', '.exe')
```

Leading periods of the last component of the path are considered to be part of the root:

```python
>>> splitext('.cshrc') # ('.cshrc', '')
>>> splitext('/foo/....jpg') # ('/foo/....jpg', '')
```