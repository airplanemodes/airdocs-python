# os.get_exec_path()

Returns the list of directories that will be searched for a named executable, similar to a shell, when launching a process.

**env**, when specified, should be an environment variable dictionary to lookup the PATH in. By default, when **env** is `None`, `environ` is used.

### Syntax

```python
os.get_exec_path(env=None)
```

### Examples

```python
>>> os.get_exec_path() # ['/usr/bin', '/bin', '/usr/sbin', '/sbin']
```