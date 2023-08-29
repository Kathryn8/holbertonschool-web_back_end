#!/usr/bin/env python3
""" A module that contains a simple function """
import asyncio
import random


async def async_generator():
    """ an asynchronous generator that yields values """
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
