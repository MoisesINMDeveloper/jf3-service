/*
  Warnings:

  - Added the required column `updatedAt` to the `DeliveryOptions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."DeliveryOptions" DROP CONSTRAINT "DeliveryOptions_aliadoId_fkey";

-- AlterTable
ALTER TABLE "DeliveryOptions" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "DeliveryOptions" ADD CONSTRAINT "DeliveryOptions_aliadoId_fkey" FOREIGN KEY ("aliadoId") REFERENCES "Aliado"("id") ON DELETE CASCADE ON UPDATE CASCADE;
