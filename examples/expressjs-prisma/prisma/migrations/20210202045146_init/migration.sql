-- CreateTable
CREATE TABLE "Todo" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "text" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL,

    PRIMARY KEY ("id")
);
