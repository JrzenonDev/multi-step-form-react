import { Link, useHistory } from 'react-router-dom'
import * as C from './styles'
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/Theme'
import { useEffect } from 'react'
import { SelectOption } from '../../components/SelectOption'

export const FormStep2 = () => {

  const { state, dispatch } = useForm()
  const history = useHistory()

  useEffect(() => {

    if (state.name === '') {
      history.push('/')
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2
      })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleNextStep = () => {
    if (state.name !== '') {
      history.push('/step3')
    }
  }

  const setLevel = (level: Number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level
    })
  }

  return (
    <Theme>
      <C.Container>
        <p>Passo 2 - {state.currentStep}</p>
        <h1>{state.name}, o que melhor descreve você?</h1>
        <p>Escolha a opção que melhor condiz com seu estado atual, profissionalemente.</p>

        <hr />

        <SelectOption
          title="Sou iniciante"
          description="Iniciei há menos de 2 anos"
          icon="😜"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />

        <SelectOption
          title="Sou programador"
          description="Já programo há 2 anos ou mais"
          icon="🤓"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />

        <Link className='backButton' to="/">Voltar</Link>
        <button onClick={handleNextStep}>Próximo</button>

      </C.Container>
    </Theme>
  )
}