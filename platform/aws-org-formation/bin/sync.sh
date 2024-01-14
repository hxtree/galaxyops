#!/bin/bash

org-formation update organization.yml --profile=Administrator
org-formation perform-tasks organization-tasks.yml --profile=Administrator
org-formation validate-tasks organization-tasks.yml --profile=Administrator
