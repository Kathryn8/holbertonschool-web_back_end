#!/usr/bin/env python3
"""Module containing the index_range function"""
import math
import csv
import math
from typing import List, Tuple, Dict


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    return a tuple of size two containing a start index and an end index
    corresponding to the range of indexes to return in a list for those
    particular pagination parameters
    """
    start_index: int = (page * page_size) - page_size
    end_index: int = page * page_size
    return (start_index, end_index)


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        find the correct indexes to paginate the dataset correctly
        and return the appropriate page of the dataset
        """
        assert isinstance(page, int) and isinstance(
            page_size, int) and page > 0 and page_size > 0, "AssertionError"
        range_of_indices = index_range(page, page_size)
        dataset = self.dataset()
        selected_results = []
        try:
            for row in range(range_of_indices[0], range_of_indices[1]):
                selected_results.append(dataset[row])
            return selected_results
        except IndexError:
            return []

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict[str, int]:
        """
        method that takes the same arguments (and defaults)
        as get_page and returns a dictionary
        """
        dict_keys: tuple[str] = ('page_size', 'page', 'data',
                                 'next_page', 'prev_page', 'total_pages')
        return_dictionary = dict.fromkeys(dict_keys)
        dataset = self.get_page(page, page_size)
        num_pages = len(self.dataset()) / page_size

        return_dictionary['page_size'] = page_size
        return_dictionary['page'] = page
        return_dictionary['data'] = dataset
        if page < num_pages:
            return_dictionary['next_page'] = page + 1
        if page > 1:
            return_dictionary['prev_page'] = page - 1
        return_dictionary['total_pages'] = math.ceil(num_pages)
        return return_dictionary
