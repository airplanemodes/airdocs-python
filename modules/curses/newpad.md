# curses.newpad()

Create and return a pointer to a new pad data structure with the given number of lines and columns. Return a pad as a window object.

A pad is like a window, except that it is not restricted by the screen size, and is not necessarily associated with a particular part of the screen. Pads can be used when a large window is needed, and only a part of the window will be on the screen at one time. Automatic refreshes of pads (such as from scrolling or echoing of input) do not occur. The [`refresh()`](/modules/curses/window/refresh.md) and [`noutrefresh()`](/modules/curses/window/noutrefresh.md) methods of a pad require 6 arguments to specify the part of the pad to be displayed and the location on the screen to be used for the display. The arguments are **pminrow**, **pmincol**, **sminrow**, **smincol**, **smaxrow**, **smaxcol**. The **p** arguments refer to the upper left corner of the pad region to be displayed and the **s** arguments define a clipping box on the screen within which the pad region is to be displayed.

### Syntax

```python
curses.newpad(nlines, ncols)
```