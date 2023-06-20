# netrc.netrc.authenticators()

Return a 3-tuple `(login, account, password)` of authenticators for **host**.

If the netrc file did not contain an entry for the given host, return the tuple associated with the ‘default’ entry. If neither matching host nor default entry is available, return `None`.

### Syntax

```python
netrc.netrc.authenticators(host)
```