#!/bin/bash

# 2 is a file descriptor for stderr
# 1 is a file descriptor for stdout
# 2>&1 redircts stderr to where stdout is going 
npm run ss:watch > /dev/null 2>&1 &
ss_watch_pid=$!

npm run pages:dev &
pages_dev_pid=$!

cleanup() {
    kill $ss_watch_pid
    kill $pages_dev_pid
    exit
}

# Execute the cleanup function whenever it receives the SIGINT signal
trap cleanup SIGINT

wait $pages_dev_pid
wait $ss_watch_pid
