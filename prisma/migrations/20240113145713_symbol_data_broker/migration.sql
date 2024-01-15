-- CreateTable
CREATE TABLE "Symbol" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,

    CONSTRAINT "Symbol_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DataBrokerSymbol" (
    "id" TEXT NOT NULL,
    "symbolId" TEXT NOT NULL,
    "dataBrokerId" TEXT NOT NULL,
    "dataBrokerSymbol" TEXT NOT NULL,
    "dataBrokerSymbolId" TEXT NOT NULL,

    CONSTRAINT "DataBrokerSymbol_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DataBrokerSymbol" ADD CONSTRAINT "DataBrokerSymbol_symbolId_fkey" FOREIGN KEY ("symbolId") REFERENCES "Symbol"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DataBrokerSymbol" ADD CONSTRAINT "DataBrokerSymbol_dataBrokerId_fkey" FOREIGN KEY ("dataBrokerId") REFERENCES "MarketDataBroker"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
