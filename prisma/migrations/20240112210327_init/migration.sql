-- CreateTable
CREATE TABLE "MarketDataBroker" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "apiUrl" TEXT NOT NULL,
    "apiKey" TEXT NOT NULL,
    "limitsPerSecond" INTEGER NOT NULL,
    "limitsPerMinute" INTEGER NOT NULL,
    "limitsPerDay" INTEGER NOT NULL,
    "limitsPerMonth" INTEGER NOT NULL,
    "limitsPerYear" INTEGER NOT NULL,

    CONSTRAINT "MarketDataBroker_pkey" PRIMARY KEY ("id")
);
