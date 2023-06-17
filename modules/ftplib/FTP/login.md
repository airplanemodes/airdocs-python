# ftplib.FTP.login()

Log in as the given **user**.

The **passwd** and **acct** parameters are optional and default to the empty string. If no **user** is specified, it defaults to `'anonymous'`. If **user** is `'anonymous'`, the default **passwd** is `'anonymous@'`. This function should be called only once for each instance, after a connection has been established. It should not be called at all if a host and user were given when the instance was created. Most FTP commands are only allowed after the client has logged in. The **acct** parameter supplies “accounting information", few systems implement this.

### Syntax

```python
ftplib.FTP.login(user='anonymous', passwd='', acct='')
```