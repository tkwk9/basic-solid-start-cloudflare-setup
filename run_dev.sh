#!/bin/bash

npm run ss:watch > /dev/null 2>&1 &
pid1=$!

npm run pages:dev &
pid2=$!

cleanup() {
    kill $pid1
    kill $pid2
    exit
}

# Execute the cleanup function whenever it receives the SIGINT signal.
trap cleanup SIGINT

wait $pid2
wait $pid1
