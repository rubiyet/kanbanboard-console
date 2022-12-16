export default function Card({ taskTitle }) {
  return (
    <div className="w-80 h-12 p-2 truncate border-2 rounded-md">
      <span>{taskTitle}</span>
    </div>
  );
}