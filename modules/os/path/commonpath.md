# os.path.commonpath()

> **Availability:** Unix, Windows.

Return the longest common sub-path of each pathname in the sequence **paths**.

Raise [`ValueError`](/exceptions/ValueError.md) if **paths** contain both absolute and relative pathnames, the **paths** are on the different drives or if **paths** is empty. 

Unlike [`commonprefix()`](/modules/os/path/commonprefix.md), this returns a valid path.

### Syntax

```python
os.path.commonpath(paths)
```