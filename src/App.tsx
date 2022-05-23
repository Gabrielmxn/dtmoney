import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { createServer, Model } from 'miragejs';
import { NewTransactionModal } from './components/NewTransactionModal';


createServer({

  models: {
    transaction: Model, 
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelance de website",
          type: 'withdraw',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'; //dando nome para a rota
    
    this.get('/transactions', () => { //colocando o conteúdo dentro da rota.
	//Ou seja, caso o usuário acesse http://localhost:3000/api/transactions vai retornar esse array de coisas.
      console.log(this.schema.all('transaction'))
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      console.log(this.schema.all('transaction'))


      return schema.create('transaction', data);
      
      
    })
  }
})
Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloaseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <GlobalStyle />

      <NewTransactionModal 
        onNewTransactionModalOpen={isNewTransactionModalOpen} 
        onCloaseNewTransactionModal={handleCloaseNewTransactionModal}/>
    </>
  );
}
