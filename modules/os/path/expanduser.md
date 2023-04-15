# os.path.expanduser()

On Unix and Windows, return the argument with an initial component of `~` or `~user` replaced by that **user**’s home directory.

On Unix, an initial `~` is replaced by the environment variable `HOME` if it is set. Otherwise the current user’s home directory is looked up in the password directory through the built-in module [`pwd`](/modules/pwd/). An initial `~user` is looked up directly in the password directory.

On Windows, `USERPROFILE` will be used if set, otherwise a combination of `HOMEPATH` and `HOMEDRIVE` will be used. An initial `~user` is handled by checking that the last directory component of the current user’s home directory matches `USERNAME`, and replacing it if so.

If the expansion fails or if the path does not begin with a tilde, the path is returned unchanged.

### Syntax

```python
os.path.expanduser(path)
```