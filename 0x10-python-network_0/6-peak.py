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
    # Function to find a peak within a list using binary search
    
    n = len(list_of_integers)
    left, right = 0, n - 1
    
    while left <= right:
        mid = left + (right - left) // 2
        
        # Check if mid element is a peak
        mid_value = list_of_integers[mid]
        prev_value = list_of_integers[mid - 1] if mid > 0 else float('-inf')
        next_value = list_of_integers[mid + 1] if mid < n - 1 else float('-inf')
        
        if mid_value >= prev_value and mid_value >= next_value:
            return mid_value
        
        # Move towards the direction with the greater neighboring element
        if mid_value < prev_value:
            right = mid - 1
        else:
            left = mid + 1
    
    return None  # No peak found



"""
# Example usage
input_list = [1, 3, 20, 4, 1, 0]
peak = find_peak(input_list)
print("A peak in the list is:", peak)

"""
  
