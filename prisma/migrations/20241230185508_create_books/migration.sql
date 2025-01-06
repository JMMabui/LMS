-- CreateTable
CREATE TABLE "books" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "publication_date" TIMESTAMP(3) NOT NULL,
    "available" BOOLEAN NOT NULL,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);
