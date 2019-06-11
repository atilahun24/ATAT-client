#!/bin/bash

curl "http://localhost:4741/artists/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "artist": {
      "name": "'"${NEWNAME}"'",
      "genre": "'"${NEWGENRE}"'"
    }
  }'

echo
