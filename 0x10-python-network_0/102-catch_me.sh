#!/bin/bash

# Displays the body of the response of a curl POST request
curl -s -X PUT -d "user_id=98" -H "Origin: You got me!" -L http://0.0.0.0:5000/catch_me