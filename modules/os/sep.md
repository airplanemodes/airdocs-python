# os.sep

The character used by the operating system to separate pathname components. 

This is `'/'` for POSIX and `'\\'` for Windows.

Note that knowing this is not sufficient to be able to parse or concatenate pathnames — use [`os.path.split()`](/modules/os/path/split.md) and [`os.path.join()`](/modules/os/path/join.md) — but it is occasionally useful.

Also available via [`os.path`](/modules/os/path/).

### Syntax

```python
os.sep
```