import './index.css';

export default function ({ text }: { text: string }) {
  return (
    <div>
      This is UI Components Log: <p className="log">{text}</p>
    </div>
  );
}
