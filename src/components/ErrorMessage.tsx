import { ErrorMessageProp } from "./lib/types";

export default function ErrorMessage({errorMsg}: ErrorMessageProp) {
  return (
    <div>{errorMsg}</div>
  )
}
