#!/usr/bin/env python3
""" This module contains a simple function """
from typing import List, Union, Tuple, Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """ A function to return a function """
    callback: Callable[[float], float] = lambda x: x * multiplier
    return callback
