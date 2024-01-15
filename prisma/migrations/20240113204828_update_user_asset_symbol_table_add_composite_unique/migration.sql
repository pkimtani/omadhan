/*
  Warnings:

  - A unique constraint covering the columns `[userId,symbolId]` on the table `UserAssetSymbol` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserAssetSymbol_userId_symbolId_key" ON "UserAssetSymbol"("userId", "symbolId");
