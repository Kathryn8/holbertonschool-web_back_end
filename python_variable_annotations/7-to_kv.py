#!/usr/bin/env python3
""" This module contains a simple function """
from typing import List, Union, Tuple

Num = Union[int, float]


def to_kv(k: str, v: Num) -> Tuple[str, float]:
    """ A function to return a tuple """
    result = (k, v * v)
    return result
