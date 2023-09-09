#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List, Tuple, Dict


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """ should return a dictionary """
        dataset = self.dataset()
        assert 0 <= index <= len(dataset)
        ixd = self.indexed_dataset()

        dict_keys: tuple[str] = ('index', 'next_index', 'page_size', 'data')
        return_dictionary = dict.fromkeys(dict_keys)
        return_dictionary['index'] = index
        return_dictionary['next_index'] = index + page_size
        return_dictionary['page_size'] = page_size
#        return_dictionary['data'] = ixd[index]
        return_dictionary['data'] = {
            k: v for (k, v) in ixd.items() if index <= k < index + page_size}
        return return_dictionary
