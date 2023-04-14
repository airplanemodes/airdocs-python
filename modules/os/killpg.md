# os.killpg()

> **Availability:** Unix, not Emscripten, not WASI.

Send the signal **sig** to the process group **pgid**.

Raises an auditing event `os.killpg` with arguments `pgid`, `sig`.

### Syntax

```python
os.killpg(pgid, sig, /)
```