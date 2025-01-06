import { prisma } from "../../../database/script"

interface UpdateLoanRequest{
    id: string
    status: string
} 

export async function updateLoan({ id, status }: UpdateLoanRequest) {
  const updatedLoan = await prisma.loan.update({
    where: {
      id: String (id), // Identificador único do empréstimo
    },
    data: {
      status: 'RETURNED', // Atualiza apenas o status
    },
  })

  console.log(updatedLoan)
}
