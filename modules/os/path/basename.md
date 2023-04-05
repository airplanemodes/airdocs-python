# basename()

`>>> os.path.basename.__doc__`: Returns the final component of a pathname.

Return the base name of pathname **path**. This is the second element of the pair returned by passing **path** to the function [`split()`](/modules/os/path/split.md).

?> Note that the result of this function is different from the Unix basename program. Where basename for `'/foo/bar/'` returns `'bar'`, the `basename()` function returns an empty string (`''`).

### Syntax

```python
os.path.basename(path)
```