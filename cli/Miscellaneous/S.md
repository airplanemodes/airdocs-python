# -S

Disable the import of the module [`site`](/modules/site/) and the site-dependent manipulations of [`sys.path`](/modules/sys/path.md) that it entails. Also disable these manipulations if site is explicitly imported later (call [`site.main()`](/modules/site/main.md) if you want them to be triggered).

### Syntax

```bash
$ python3 -S
```