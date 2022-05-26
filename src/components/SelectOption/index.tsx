import * as C from './styles'

type Props = {
  title: String
  description: String
  icon: String
  selected: Boolean
}

export const SelectOption = ({title, description, icon, selected}: Props) => {
  return (
    <C.Container selected={selected}>
      <C.Icon>{ icon }</C.Icon>
      <C.Info>
        <C.Title>{ title }</C.Title>
        <C.Description>{ description }</C.Description>
      </C.Info>
    </C.Container>
  )
}