#!/bin/bash

# Check if URL argument is provided
if [ $# -ne 1 ]; then
    echo "Usage: $0 <URL>"
    exit 1
fi

url="$1"

# Send a GET request using curl and store the response body
response=$(curl -sS "$url")

# Calculate the size of the response body in bytes
size=$(echo -n "$response" | wc -c)

echo "Response body size: $size bytes"
