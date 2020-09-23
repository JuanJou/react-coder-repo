import { Filtros } from "./Filtros";
import { Lista } from "./Lista";

export function Padre() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("urlApi").then((res) => setProductos(res));
  });
  return (
    <>
      <Filtros aplicarFiltro={setProductos} /> <Lista productos={productos} />
    </>
  );
}
