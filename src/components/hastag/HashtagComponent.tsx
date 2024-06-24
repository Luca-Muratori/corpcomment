import { HashtagItemProp } from "../lib/types";

export default function HashtagComponent({company , onClick}:HashtagItemProp) {
    return (
        <li key={company}>
          <button onClick={()=>onClick(company)}>#{company}</button>
        </li>
      );
}
