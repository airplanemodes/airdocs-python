# uuid

**UUID objects according to [RFC 4122](https://datatracker.ietf.org/doc/html/rfc4122.html).**

> Source code: [`Lib/uuid.py`](https://github.com/python/cpython/tree/3.12/Lib/uuid.py)

This module provides immutable [`UUID`](/modules/uuid/UUID/) objects (the [`UUID`](/modules/uuid/UUID/) class) and the functions [`uuid1()`](/modules/uuid/uuid1.md), [`uuid3()`](/modules/uuid/uuid3.md), [`uuid4()`](/modules/uuid/uuid4.md), [`uuid5()`](/modules/uuid/uuid5.md) for generating version 1, 3, 4, and 5 UUIDs as specified in [**RFC 4122**](https://datatracker.ietf.org/doc/html/rfc4122.html).

If all you want is a unique ID, you should probably call [`uuid1()`](/modules/uuid/uuid1.md) or [`uuid4()`](/modules/uuid/uuid4.md). Note that uuid1() may compromise privacy since it creates a UUID containing the computer’s network address. [`uuid4()`](/modules/uuid/uuid4.md) creates a random UUID.