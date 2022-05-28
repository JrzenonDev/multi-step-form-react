import { Link } from 'react-router-dom'
import * as C from './style'
import { ReactComponent as ProfileIcon } from '../../svgs/profile.svg'
import { ReactComponent as BookIcon } from '../../svgs/book.svg'
import { ReactComponent as MailIcon } from '../../svgs/mail.svg'

type Props = {
  title: String,
  description: String,
  icon: String,
  path: String | any
}

export const SidebarItem = ({title, description, icon, path}: Props) => {
  return (
    <C.Container>
      <Link to={path}>
        <C.Info>
          <C.Title>{title}</C.Title>
          <C.Description>{description}</C.Description>
        </C.Info>
        <C.IconArea>
          {icon === 'profile' &&
            <ProfileIcon fill='white' width={24} height={24} />
          }
          {icon === 'book' &&
            <BookIcon fill='white' width={24} height={24} />
          }
          {icon === 'mail' &&
            <MailIcon fill='white' width={24} height={24} />
          }
        </C.IconArea>
        <C.Point></C.Point>
      </Link>
    </C.Container>
  )
}