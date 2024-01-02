# -I

Run Python in isolated mode. This also implies [`-E`](/cli/Miscellaneous/-E.md), [`-P`](/cli/Miscellaneous/-P.md) and [`-s`](/cli/Miscellaneous/-s.md) options.

In isolated mode sys.path contains neither the script’s directory nor the user’s site-packages directory. All `PYTHON*` environment variables are ignored, too. Further restrictions may be imposed to prevent the user from injecting malicious code.

### Syntax

```shell
$ python3 -I
```