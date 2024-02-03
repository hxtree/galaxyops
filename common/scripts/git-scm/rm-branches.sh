#!/usr/bin/env bash

# remove all local branches except local
git branch | grep -v "main" | xargs git branch -D