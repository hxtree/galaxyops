#!/bin/bash

# Find all .env.dist files in the current directory and its subdirectories
env_files=$(find . -type f -name '.env.dist')

# Iterate over each .env.dist file
for file in $env_files; do
  # Create a copy of the .env.dist file with the name .env in the same directory
  cp "$file" "${file%.dist}"

  # Perform sed to auto-populate values in the new .env file
  sed -i "s/MONGO_DATABASE_URI=/MONGO_DATABASE_URI=mongodb+srv:\/\/cluster0.z1bwvgb.mongodb.net/g" "${file%.dist}"
  sed -i "s/MONGO_DATABASE_USER=/MONGO_DATABASE_USER=test-user/g" "${file%.dist}"
  sed -i "s/MONGO_DATABASE_PASSWORD=/MONGO_DATABASE_PASSWORD=TpCg4mbwzk93B7tc/g" "${file%.dist}"

  # uncomment to remove DB
  # sed -i "s/MONGO_DATABASE_URI=//g" "${file%.dist}"
  # sed -i "s/MONGO_DATABASE_USER=//g" "${file%.dist}"
  # sed -i "s/MONGO_DATABASE_PASSWORD=//g" "${file%.dist}"

  echo "Created and updated ${file%.dist}"
done

echo "Script execution complete."
