#!/usr/bin/env python3
""" This module contains a simple function """
from typing import Sequence


def sum_list(input_list: Sequence[float]) -> float:
    """ A function to return sum of list of floats """
    sum: float = 0
    for i in input_list:
        sum = sum + i
    return sum
