import { useHistory } from 'react-router-dom'
import * as C from './styles'
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/Theme'
import { useEffect } from 'react'
import { SelectOption } from '../../components/SelectOption'

export const FormStep2 = () => {

  console.log('Form 2')

  const { state, dispatch } = useForm()
  const history = useHistory()

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleNextStep = () => {
    if (state.name !== '') {
      history.push('/step3')
    } else {
      alert('O campo nome não pode ser vazio.')
    }
  }

  return (
    <Theme>
      <C.Container>
        <p>Passo 2 - {state.currentStep}</p>
        <h1>Vamos começar com o seu nome</h1>
        <p>Preencha o campo abaixo com o seu nome completo.</p>

        <hr />

        <SelectOption
          title="Sou iniciante"
          description="Iniciei há menos de 2 anos"
          icon="😜"
        />

        <SelectOption
          title="Sou programador"
          description="Já programo há 2 anos ou mais"
          icon="🤓"
        />

        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  )
}