export default function UpdateItem({ title, date }) {
  const formattedDate = new Date(date).toLocaleDateString('pt-BR');

  return (
    <li className="update-item">
      <strong>{title}</strong>
      <span>{formattedDate}</span>
    </li>
  );
}