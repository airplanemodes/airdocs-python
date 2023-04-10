# os.getlogin()

> **Availability:** Unix, Windows, not Emscripten, not WASI.

Return the name of the user logged in on the controlling terminal of the process.

For most purposes, it is more useful to use [`getpass.getuser()`](/modules/getpass/getuser.md) since the latter checks the environment variables `LOGNAME` or `USERNAME` to find out who the user is, and falls back to `pwd.getpwuid(os.getuid())[0]` to get the login name of the current real user id.

### Syntax

```python
os.getlogin()
```

### Examples

```python
>>> os.getlogin() # 'root'
```