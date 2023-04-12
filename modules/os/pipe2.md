# os.pipe2()

> **Availability:** Unix, not Emscripten, not WASI.

Create a pipe with **flags** set atomically.

**flags** can be constructed by ORing together one or more of these values: `O_NONBLOCK`, `O_CLOEXEC`. Return a pair of file descriptors `(r, w)` usable for reading and writing, respectively.

### Syntax

```python
os.pipe2(flags, /)
```