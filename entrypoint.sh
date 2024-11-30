#!/bin/sh

set -e

echo "Checking environment variables..."
if [ -z "$DATABASE_URL" ]; then
  echo "DATABASE_URL is not set. Exiting."
  exit 1
fi

echo "Running Prisma migrations..."
npx prisma migrate deploy

echo "Seeding the database..."
npm run prisma:seed

echo "Starting the application..."
exec "$@"
