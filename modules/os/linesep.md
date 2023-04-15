# os.linesep

The string used to separate (or, rather, terminate) lines on the current platform. This may be a single character, such as `'\n'` for POSIX, or multiple characters, for example, `'\r\n'` for Windows.

Do not use `os.linesep` as a line terminator when writing files opened in text mode (the default). Use a single `'\n'` instead, on all platforms.

### Syntax

```python
os.linesep
```