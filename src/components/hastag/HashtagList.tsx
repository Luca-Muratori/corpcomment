import { HashtagListProp } from "../lib/types";
import HashtagComponent from "./HashtagComponent";

export default function HashtagList({ companyList, onClick }: HashtagListProp) {
  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashtagComponent company={company} onClick={onClick} />
      ))}
    </ul>
  );
}
