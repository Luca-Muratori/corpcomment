import Logo from "../Logo";
import Pattern from "../Pattern";
import PageHeading from "../PageHeading";
import FeedBackForm from "../feedback/FeedBackForm";

type HeaderProps = {
  onAddToList: (text: string) => void;
};

export default function Header({ onAddToList }: HeaderProps) {
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedBackForm onAddToList={onAddToList} />
    </header>
  );
}
