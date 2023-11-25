-- DropForeignKey
ALTER TABLE "ProjectUrl" DROP CONSTRAINT "ProjectUrl_projectId_fkey";

-- AddForeignKey
ALTER TABLE "ProjectUrl" ADD CONSTRAINT "ProjectUrl_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
