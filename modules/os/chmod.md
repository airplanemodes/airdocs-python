# os.chmod()

Change the mode of **path** to the numeric **mode**.

**mode** may take one of the following values (as defined in the [`stat`](/modules/stat/) module) or bitwise ORed combinations of them:

- `stat.S_ISUID`
- `stat.S_ISGID`
- `stat.S_ENFMT`
- `stat.S_ISVTX`
- `stat.S_IREAD`
- `stat.S_IWRITE`
- `stat.S_IEXEC`
- `stat.S_IRWXU`
- `stat.S_IRUSR`
- `stat.S_IWUSR`
- `stat.S_IXUSR`
- `stat.S_IRWXG`
- `stat.S_IRGRP`
- `stat.S_IWGRP`
- `stat.S_IXGRP`
- `stat.S_IRWXO`
- `stat.S_IROTH`
- `stat.S_IWOTH`
- `stat.S_IXOTH`

This function can support specifying a file descriptor, paths relative to directory descriptors and not following symlinks.

?> Although Windows supports `chmod()`, you can only set the file’s read-only flag with it (via the `stat.S_IWRITE` and `stat.S_IREAD` constants or a corresponding integer value). All other bits are ignored.

The function is limited on Emscripten and WASI, see WebAssembly platforms for more information.

Raises an auditing event `os.chmod` with arguments `path`, `mode`, `dir_fd`.

### Syntax

```python
os.chmod(path, mode, *, dir_fd=None, follow_symlinks=True)
```