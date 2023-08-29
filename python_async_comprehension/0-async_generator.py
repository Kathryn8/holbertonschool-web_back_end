#!/usr/bin/env python3
""" A module that contains a simple function """
import asyncio
import random
from typing import AsyncGenerator

async def async_generator() -> AsyncGenerator[float, None]:
    """ an asynchronous generator that yields values """
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
