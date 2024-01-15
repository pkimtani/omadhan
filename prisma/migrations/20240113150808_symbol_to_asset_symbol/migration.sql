/*
  Warnings:

  - You are about to drop the `DataBrokerSymbol` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Symbol` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DataBrokerSymbol" DROP CONSTRAINT "DataBrokerSymbol_dataBrokerId_fkey";

-- DropForeignKey
ALTER TABLE "DataBrokerSymbol" DROP CONSTRAINT "DataBrokerSymbol_symbolId_fkey";

-- DropTable
DROP TABLE "DataBrokerSymbol";

-- DropTable
DROP TABLE "Symbol";

-- CreateTable
CREATE TABLE "AssetSymbol" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,

    CONSTRAINT "AssetSymbol_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DataBrokerAssetSymbol" (
    "id" TEXT NOT NULL,
    "symbolId" TEXT NOT NULL,
    "dataBrokerId" TEXT NOT NULL,
    "dataBrokerSymbol" TEXT NOT NULL,
    "dataBrokerSymbolId" TEXT NOT NULL,

    CONSTRAINT "DataBrokerAssetSymbol_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DataBrokerAssetSymbol" ADD CONSTRAINT "DataBrokerAssetSymbol_symbolId_fkey" FOREIGN KEY ("symbolId") REFERENCES "AssetSymbol"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DataBrokerAssetSymbol" ADD CONSTRAINT "DataBrokerAssetSymbol_dataBrokerId_fkey" FOREIGN KEY ("dataBrokerId") REFERENCES "MarketDataBroker"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
