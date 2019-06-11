#!/bin/bash

curl "http://localhost:4741/artists" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "artist": {
      "name": "'"${NAME}"'",
      "genre": "'"${GENRE}"'"
    }
  }'

echo
