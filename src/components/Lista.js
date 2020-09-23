export function Lista() {
  return (
    <>
      {productos.map((item) => (
        <span>{item.nombre}</span>
      ))}
    </>
  );
}
