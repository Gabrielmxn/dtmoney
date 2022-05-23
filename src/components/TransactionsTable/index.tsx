import { useEffect, useState } from "react";
import { Container } from "./styles";
import { api } from '../../services/api';
interface TransactionType { // Criamos um 'type' para o estado trasactions
  amount: number;
  category: string;
  createdAt: string;
  id: number;
  title: string;
  type: string;

}
export function TransactionsTable(){
  const [transactions, setTransactions] = useState<TransactionType[]>([]);
  useEffect(() => {
    api.get('/transactions')
    .then(response => setTransactions(response.data.transactions));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(data => { //da um map dentro de transactions
            return(
              <tr key={data.id}>
                <td>{data.title}</td>
                <td className={data.type}>
                  {data.type === 'withdraw' ? `- R$${data.amount}` :  `R$${data.amount}`}
                </td>
                <td>{data.category}</td>
                <td>{new Intl.DateTimeFormat('pt-br').format(new Date(data.createdAt))}</td>
              </tr>
            )
            
          })}
        </tbody>
      </table>
    </Container>
  )
}