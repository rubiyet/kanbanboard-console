export default function Card({ taskTitle }) {
  return (
    <div className="w-96 h-12 p-2 truncate border-2">
      <span>{taskTitle}</span>
    </div>
  );
}