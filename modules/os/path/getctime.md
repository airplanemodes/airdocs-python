# os.path.getctime()

Return the system’s ctime which, on some systems (like Unix) is the time of the last metadata change, and, on others (like Windows), is the creation time for **path**.

The return value is a number giving the number of seconds since the epoch (see the [`time`](/modules/time/) module).

Raise [`OSError`](/exceptions/OSError.md) if the file does not exist or is inaccessible.

### Syntax

```python
os.path.getctime(path)
```