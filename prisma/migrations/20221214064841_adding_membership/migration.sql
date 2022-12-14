-- CreateEnum
CREATE TYPE "Membership" AS ENUM ('BASIC', 'USER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "membership_type" "Membership" NOT NULL DEFAULT 'BASIC';
