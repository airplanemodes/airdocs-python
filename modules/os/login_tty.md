# os.login_tty()

> **Availability:** Unix, not Emscripten, not WASI.

Prepare the tty of which **fd** is a file descriptor for a new login session. Make the calling process a session leader. Make the tty the controlling tty, the stdin, the stdout, and the stderr of the calling process. Close **fd**.

### Syntax

```python
os.login_tty(fd, /)
```