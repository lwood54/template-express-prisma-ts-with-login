### Step 1

- pnpm install

### Step 2

- add .env file in project root
- define the following variables in .env file
  - SECRET=put-your-secret-string-here
  - DATABASE_URL="put-your-db-link-url-here"
  - PORT=port#

### Step 3

- run initial command to setup tables in db connected to prisma
  '''npx prisma migrate dev --name init'''

### Step 4

- initialize git
  - add a .gitignore file in your root directory
    '''git init'''

### Step 5

- pnpm dev
