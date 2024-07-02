export default function Input({
  inputName,
  name,
  type,
}: {
  inputName: string;
  name: string;
  type: string;
}) {
  return (
    <div>
      <label htmlFor={name}>{inputName}:</label>
      <input type={type} name={name} id={name} />
    </div>
  );
}
