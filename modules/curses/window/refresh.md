# window.refresh()

Update the display immediately (sync actual screen with previous drawing/deleting methods).

The 6 optional arguments can only be specified when the window is a pad created with [`newpad()`](/modules/curses/newpad.md). The additional parameters are needed to indicate what part of the pad and screen are involved. **pminrow** and **pmincol** specify the upper left-hand corner of the rectangle to be displayed in the pad. **sminrow**, **smincol**, **smaxrow**, and **smaxcol** specify the edges of the rectangle to be displayed on the screen. The lower right-hand corner of the rectangle to be displayed in the pad is calculated from the screen coordinates, since the rectangles must be the same size. Both rectangles must be entirely contained within their respective structures. Negative values of **pminrow**, **pmincol**, **sminrow**, or **smincol** are treated as if they were zero.

### Syntax

```python
window.refresh()
window.refresh(pminrow, pmincol, sminrow, smincol, smaxrow, smaxcol)
```