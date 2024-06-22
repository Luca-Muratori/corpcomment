import Logo from './Logo'
import Pattern from './Pattern'
import PageHeading from './PageHeading'
import FeedBackForm from './FeedBackForm'

export default function Header() {
  return (
    <header>
        <Pattern/>
        <Logo/>
        <PageHeading/>
        <FeedBackForm/>
    </header>
  )
}
