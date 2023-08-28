#!/usr/bin/env python3
""" This module contains the floor function """


def floor(n: float) -> int:
    """ A function to find the floor of a float """
    return int(n - (n % 1))
