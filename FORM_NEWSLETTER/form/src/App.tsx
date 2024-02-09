import './App.css'
import Form from './components/Form'

function App() {

  return (
    <div className="container-body">
      <h1 className="title">Inscreva-se</h1>
      <p className='text-white'>Assine nossa Newsletter e mantenha-se informado</p>
      <div className='container-form'>
        <Form />
      </div>
      <p className='footer'>
        Ao se inscrever você passará a receber nossos e-mails com melhores dicas, novidades e ofertas
      </p>
    </div>

  )
}

export default App
