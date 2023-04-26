# window.border()

Draw a border around the edges of the window. Each parameter specifies the character to use for a specific part of the border. See the table below for more details.

?> A `0` value for any parameter will cause the default character to be used for that parameter. Keyword parameters can *not* be used.

| Parameter      | Description         | Default value |
| -------------- | ------------------- | ------------- |
| ls             | Left side           | ACS_VLINE     |
| rs             | Right side          | ACS_VLINE     |
| ts             | Top                 | ACS_HLINE     |
| bs             | Bottom              | ACS_HLINE     |
| tl             | Upper-left corner   | ACS_ULCORNER  |
| tr             | Upper-right corner  | ACS_URCORNER  |
| bl             | Bottom-left corner  | ACS_LLCORNER  |
| br             | Bottom-right corner | ACS_LRCORNER  |

### Syntax

```python
window.border()
window.border(ls, rs, ts, bs, tl, tr, bl, br)
```