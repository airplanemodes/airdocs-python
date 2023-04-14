# os.posix_spawnp()

> **Availability:** POSIX, not Emscripten, not WASI.

Wraps the posix_spawnp() C library API for use from Python.

Similar to [`posix_spawn()`](/modules/os/posix_spawn.md) except that the system searches for the *executable* file in the list of directories specified by the `PATH` environment variable (in the same way as for `execvp(3)`).

Raises an auditing event `os.posix_spawn` with arguments `path`, `argv`, `env`.

### Syntax

```python
os.posix_spawnp(path, argv, env, *, file_actions=None, setpgroup=None, resetids=False, setsid=False, setsigmask=(), setsigdef=(), scheduler=None)
```