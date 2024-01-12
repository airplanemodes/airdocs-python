# http.server.CGIHTTPRequestHandler()

This class is used to serve either files or output of CGI scripts from the current directory and below.

Note that mapping HTTP hierarchic structure to local directory structure is exactly as in [`SimpleHTTPRequestHandler`](/modules/http/server/SimpleHTTPRequestHandler/).

?> CGI scripts run by the `CGIHTTPRequestHandler` class cannot execute redirects (HTTP code 302), because code 200 (script output follows) is sent prior to execution of the CGI script. This pre-empts the status code.

The class will however, run the CGI script, instead of serving it as a file, if it guesses it to be a CGI script. Only directory-based CGI are used — the other common server configuration is to treat special extensions as denoting CGI scripts.

### Syntax

```python
http.server.CGIHTTPRequestHandler(request, client_address, server)
```