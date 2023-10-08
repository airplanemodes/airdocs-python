# wave

**Read and write WAV files.**

> Source code: [`Lib/wave.py`](https://github.com/python/cpython/tree/3.12/Lib/wave.py)

The wave module provides a convenient interface to the WAV sound format. Only files using `WAVE_FORMAT_PCM` are supported. Note that this does not include files using `WAVE_FORMAT_EXTENSIBLE` even if the subformat is PCM.