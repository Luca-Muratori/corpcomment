import { TriangleUpIcon } from '@radix-ui/react-icons'

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          <TriangleUpIcon/>
          <span>500</span>
        </button>
        <div>
          <p>B</p>
        </div>
        <div>
          <p>Bytegrade</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nam
            quasi. Quisquam nostrum officiis excepturi?
          </p>
        </div>
        <p>4d</p>
      </li>
    </ol>
  );
}
