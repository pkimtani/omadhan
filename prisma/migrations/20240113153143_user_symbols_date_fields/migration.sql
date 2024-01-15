/*
  Warnings:

  - Added the required column `updatedAt` to the `AssetSymbol` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `DataBrokerAssetSymbol` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `MarketDataBroker` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AssetSymbol" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "DataBrokerAssetSymbol" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "MarketDataBroker" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserAssetSymbol" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "symbolId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "UserAssetSymbol_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserAssetSymbol" ADD CONSTRAINT "UserAssetSymbol_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAssetSymbol" ADD CONSTRAINT "UserAssetSymbol_symbolId_fkey" FOREIGN KEY ("symbolId") REFERENCES "AssetSymbol"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
