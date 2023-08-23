#!/usr/bin/python3
"""
Function that finds a peak in a list of unsorted integers
"""

"""
def find_peak(list_of_integers):
    
    finds num that's greater than both left and right
    
    
    if len(list_of_integers) == 0:
        return None

    l = list_of_integers
    beg = 0
    end = len(l)-1

    if l[beg] > l[beg+1]:
        return l[beg]
    if l[end] > l[end-1]:
        return l[end]

    mid = (beg+end)//2
    if l[mid-1] < l[mid] and l[mid+1] < l[mid]:
        return l[mid]
    if l[mid] < l[mid-1]:
        return find_peak(l[beg:mid+1])
    elif l[mid] < l[mid+1]:
        return find_peak(l[mid:end+1])
    else:
        return l[beg]

        """

def find_peak(list_of_integers):
    """
    Wrapper function for finding a peak in a list of unsorted integers using recursion.
    """
    if not list_of_integers:
        return None
    
    return find_peak_recursive(list_of_integers, 0, len(list_of_integers) - 1)

def find_peak_recursive(list_of_integers, left, right):
    """
    Recursive function to find a peak in a list of unsorted integers.
    """
    if left == right:
        return list_of_integers[left]

    mid = (left + right) // 2

    if list_of_integers[mid] < list_of_integers[mid + 1]:
        return find_peak_recursive(list_of_integers, mid + 1, right)
    else:
        return find_peak_recursive(list_of_integers, left, mid)







    
"""
# Example usage
input_list = [1, 3, 20, 4, 1, 0]
peak = find_peak(input_list)
print("A peak in the list is:", peak)

"""
  
