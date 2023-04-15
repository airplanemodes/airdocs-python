# os.path.split()

Split the pathname **path** into a pair, `(head, tail)` where **tail** is the last pathname component and **head** is everything leading up to that. 

The **tail** part will never contain a slash. If **path** ends in a slash, **tail** will be empty. If there is no slash in **path**, **head** will be empty. If **path** is empty, both **head** and **tail** are empty.

Trailing slashes are stripped from **head** unless it is the root (one or more slashes only). In all cases, `join(head, tail)` returns a path to the same location as **path** (but the strings may differ).

Also see the functions [`dirname()`](/modules/os/path/dirname.md) and [`basename()`](/modules/os/path/basename.md).

### Syntax

```python
os.path.split(path)
```