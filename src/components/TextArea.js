export default function TextArea({ name, value, label,onChange  }) {
  return (
    <>
      <label className="col-form-label">{label}</label>
      <textarea
        className="form-control"
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
