# sys.flags

The named tuple **flags** exposes the status of command line flags. The attributes are read only.

| attribute           | flag                  |
| ------------------- | --------------------- |
| debug               | -d                    |
| inspect             | -i                    |
| interactive         | -i                    |
| isolated            | -I                    |
| optimize            | -O or -OO             |
| dont_write_bytecode | -B                    |
| no_user_site        | -s                    |
| no_site             | -S                    |
| ignore_environment  | -E                    |
| verbose             | -v                    |
| bytes_warning       | -b                    |
| quiet               | -q                    |
| hash_randomization  | -R                    |
| dev_mode            | -X dev                |
| utf8_mode           | -X utf8               |
| safe_path           | -P                    |
| int_max_str_digits  | -X int_max_str_digits |

### Syntax

```python
sys.flags
```