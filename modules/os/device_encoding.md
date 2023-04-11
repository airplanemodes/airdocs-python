# os.device_encoding()

Return a string describing the encoding of the device associated with **fd** if it is connected to a terminal. Else return `None`.

On Unix, if the Python UTF-8 Mode is enabled, return `'UTF-8'` rather than the device encoding.

### Syntax

```python
os.device_encoding(fd)
```