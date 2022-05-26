import * as C from './styles'

type Props = {
  title: String
  description: String
  icon: String
}

export const SelectOption = ({title, description, icon}: Props) => {
  return (
    <C.Container>
      <C.Icon>{ icon }</C.Icon>
      <C.Info>
        <C.Title>{ title }</C.Title>
        <C.Description>{ description }</C.Description>
      </C.Info>
    </C.Container>
  )
}