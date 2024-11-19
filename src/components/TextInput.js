export default function TextInput({ name, value, label,onChange}) {
  return (
    <>
      <label className="col-form-label">{label}</label>
      <input
        type="text"
        name={name}
        className="form-control"
        value={value}
        autoComplete="off"
        onChange={onChange}
      />
    </>
  );
}
