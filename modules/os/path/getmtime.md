# os.path.getmtime()

Return the time of last modification of **path**.

The return value is a floating point number giving the number of seconds since the epoch (see the [`time`](/modules/time/) module).

Raise [`OSError`](/exceptions/OSError.md) if the file does not exist or is inaccessible.

### Syntax

```python
os.path.getmtime(path)
```