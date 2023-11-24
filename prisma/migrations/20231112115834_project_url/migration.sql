-- CreateTable
CREATE TABLE "ProjectUrl" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,

    CONSTRAINT "ProjectUrl_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProjectUrl_projectId_key" ON "ProjectUrl"("projectId");

-- AddForeignKey
ALTER TABLE "ProjectUrl" ADD CONSTRAINT "ProjectUrl_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
