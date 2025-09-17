import './button.css';

export default function Button({ text }) {
  return (
    <div className="button-wrapper">
      <button type="submit">{text}</button>
    </div>
  );
}
