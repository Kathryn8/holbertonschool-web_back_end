#!/usr/bin/env python3
""" A module that contains a simple function """
import asyncio
from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """ An asynchronous comprehension function """
    result: List = [i async for i in async_generator()]
    return result
