# ftplib.FTP_TLS()

A [`FTP`](/modules/ftplib/FTP/) subclass which adds TLS support to FTP as described in [**RFC 4217**](https://datatracker.ietf.org/doc/html/rfc4217.html). Connect as usual to port 21 implicitly securing the FTP control connection before authenticating. Securing the data connection requires the user to explicitly ask for it by calling the [`prot_p()`](/modules/ftplib/FTP_TLS/prot_p.md) method. **context** is a [`ssl.SSLContext`](/modules/ssl/SSLContext/) object which allows bundling SSL configuration options, certificates and private keys into a single (potentially long-lived) structure.

**keyfile** and **certfile** are a legacy alternative to **context** – they can point to PEM-formatted private key and certificate chain files (respectively) for the SSL connection.

### Syntax

```python
ftplib.FTP_TLS(host='', user='', passwd='', acct='', keyfile=None, certfile=None, context=None, timeout=None, source_address=None, *, encoding='utf-8')
```

### Examples

Here’s a sample session using the `FTP_TLS` class:

```python
>>> ftps = FTP_TLS('ftp.pureftpd.org')
>>> ftps.login()
# '230 Anonymous user logged in'
>>> ftps.prot_p()
# '200 Data protection level set to "private"'
>>> ftps.nlst()
# ['6jack', 'OpenBSD', 'antilink', 'blogbench', 'bsdcam', 'clockspeed', 
# 'djbdns-jedi', 'docs', 'eaccelerator-jedi', 'favicon.ico', 'francotone', 'fugu', 
# 'ignore', 'libpuzzle', 'metalog', 'minidentd', 'misc', 
# 'mysql-udf-global-user-variables', 'php-jenkins-hash', 'php-skein-hash', 
# 'php-webdav', 'phpaudit', 'phpbench', 'pincaster', 'ping', 'posto', 'pub', 
# 'public', 'public_keys', 'pure-ftpd', 'qscan', 'qtc', 'sharedance', 'skycache', 
# 'sound', 'tmp', 'ucarp']
```