import { LoanStatus } from "@prisma/client"
import { prisma } from "../../../database/script"

interface UpdateLoanRequest{
    id: string
    status: LoanStatus
} 

export const updateLoan = async ({ id, status }: UpdateLoanRequest) => {
  const statusUpdate = await prisma.loan.update({
    where: { id },
    data: { status },
  });

  return statusUpdate
};
