/*
  Warnings:

  - Added the required column `aliadoId` to the `DeliveryOptions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DeliveryOptions" ADD COLUMN     "aliadoId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "DeliveryOptions" ADD CONSTRAINT "DeliveryOptions_aliadoId_fkey" FOREIGN KEY ("aliadoId") REFERENCES "Aliado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
