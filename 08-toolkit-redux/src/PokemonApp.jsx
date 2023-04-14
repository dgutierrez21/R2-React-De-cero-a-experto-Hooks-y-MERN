import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon/thunks";

export const PokemonApp = () => {
  const { pokemons, page, isLoading } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>PokemonApp</h1>

      <hr />

      <span>Loading: {isLoading ? "true" : "false"}</span>

      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>

      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        Next
      </button>
    </>
  );
};

// React Context vs Redux

// Cuando se trata de administrar el estado en una aplicación React, hay múltiples soluciones disponibles, incluidas Redux y la API de Contexto. Ambas son herramientas excelentes para sus nichos específicos. Según las fuentes proporcionadas, Redux se considera excesivo para pasar datos de padre a hijo, mientras que la API de contexto es más adecuada para pasar datos de un padre a un hijo anidado profundamente0]. Sin embargo, los conceptos básicos que se usan con Context/Hooks son exactamente los mismos que los que se usan con Redux.

// La API de Contexto es una solución liviana que no aumentará el tamaño de su paquete. Es mucho más fácil de implementar y funcionará bien para actualizaciones de baja frecuencia como cambios de idioma, temas y autenticación de usuarios. Uno de los beneficios de usar la API de Contexto es que ayuda a evitar el problema de la perforación de propiedades, donde debe pasar datos a través de múltiples niveles de componentes anidados. Con la API de Contexto, puede definir un objeto de contexto en un nivel superior del árbol de componentes y acceder a él desde cualquier componente secundario.

// Sin embargo, la API de Contexto de React tiene algunas limitaciones. Cuando un componente consume un objeto de contexto, se volverá a representar cada vez que cambie el valor del objeto de contexto, incluso si el componente no necesita actualizarse. Esto puede generar problemas de rendimiento al trabajar con aplicaciones grandes o actualizaciones de alta frecuencia. Optimizarlo manualmente puede ser realmente difícil.

// Por otro lado, Redux es una solución de administración de estado más sólida que puede manejar un estado complejo con actualizaciones de alta frecuencia. Proporciona un contenedor de estado predecible que se puede usar para administrar el estado de toda una aplicación. También es altamente escalable, lo que lo convierte en una excelente opción para aplicaciones grandes. Sin embargo, Redux viene con mucho código de boilerplate y requiere un montón de bibliotecas. También es más complejo de configurar que la API de Contexto.

// Es importante tener en cuenta que tanto Redux como la API de Contexto pueden coexistir, y también hay alternativas a Redux que incluso pueden coexistir con Redux, como Hookstate y Teaful . En última instancia, la elección entre Redux y la API de Contexto depende de las necesidades específicas de su aplicación. Si tiene muchos datos dinámicos y necesita administrar un estado complejo con actualizaciones de alta frecuencia, Redux es una buena opción. Si está tratando con actualizaciones de baja frecuencia y desea una solución liviana que sea fácil de implementar, la API de Contexto es una mejor opción .
