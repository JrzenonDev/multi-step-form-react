import { Link, useHistory } from 'react-router-dom'
import * as C from './styles'
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react'

export const FormStep3 = () => {

  const history = useHistory()
  const { state, dispatch } = useForm()

  useEffect(() => {

    if (state.name === '') {
      history.push('/')
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleNextStep = () => {
    if (state.name !== '' && state.email !== '') {
      console.log(state)
      alert(state)
    } else {
      alert('Preencha os dados')
    }
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value
    })
  }

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGitub,
      payload: e.target.value
    })
  }

  return (
    <Theme>
      <C.Container>
        <p>Passo 3 - {state.currentStep}</p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha com seus dados de contato para que possamos contatar você.</p>

        <hr />

        <label>
          Qual o seu e-mail
          <input
            type="email"
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>

        <label>
          Qual seu Github?
          <input
            type="url"
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>

        <Link className='backButton' to="/step2">Voltar</Link>
        <button onClick={handleNextStep}>Finalizar cadastro</button>
      </C.Container>
    </Theme>
  )
}