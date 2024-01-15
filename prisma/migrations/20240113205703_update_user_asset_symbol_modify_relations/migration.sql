/*
  Warnings:

  - The primary key for the `UserAssetSymbol` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `UserAssetSymbol` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "UserAssetSymbol_userId_symbolId_key";

-- AlterTable
ALTER TABLE "UserAssetSymbol" DROP CONSTRAINT "UserAssetSymbol_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "UserAssetSymbol_pkey" PRIMARY KEY ("userId", "symbolId");
