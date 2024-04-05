function optimalPath(path) {
  let opPath = {
    NORTE: "SUR",
    SUR: "NORTE",
    OESTE: "ESTE",
    ESTE: "OESTE",
  };
  for (let i = 0; i < path.length; i++) {
    if (path[i] === opPath[path[i + 1]]) path.splice(i, 2);
  }
  return path;
}
// Ejercicio 17
// Crear una función llamada optimalPath (Camino Óptimo) que recibe como parámetro un array de strings, que pueden ser: "NORTE", "SUR", "ESTE" y "OESTE". Este array indica el camino que debe seguir un viajero para llegar a determinado destino. El problema es que el camino propuesto por el array no es óptimo.
// Por ejemplo, si el array de entrada es ["NORTE", "SUR"] el camino no es óptimo, ya que antes que avanzar y retroceder al mismo lugar, es preferible quedarse quieto. Por lo tanto, la función en este caso debería retornar un array vacío [].

// Considerar que "NORTE" y "SUR" son opuestos, al igual que "ESTE" y "OESTE", y se cancelan si están uno inmediatamente después del otro. Es decir, en el camino final, estos puntos cardinales no pueden aparecer juntos.
// Ejemplos:

// Input ---> Output
// optimalPath(["NORTE", "SUR"]) ---> []
// optimalPath(["NORTE", "SUR", "SUR"]) ---> ["SUR"]
// optimalPath(["NORTE", "SUR", "SUR", "NORTE"]) ---> []
// optimalPath(["NORTE", "SUR", "SUR", "SUR"]) ---> ["SUR", "SUR"]
// optimalPath(["NORTE", "SUR", "SUR", "ESTE", "OESTE", "NORTE", "OESTE"]) ---> ["OESTE"]
// optimalPath(["NORTE", "OESTE", "SUR", "ESTE"]) ---> ["NORTE", "OESTE", "SUR", "ESTE"]
