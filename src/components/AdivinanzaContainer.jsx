import { useEffect, useState } from 'react';
import Adivinanza from './Adivinanza';
import styles from './AdivinanzaContainer.module.css';

function AdivinanzaContainer() {
  const [adivinanzas, setAdivinanzas] = useState([]);

  useEffect(() => {
      async function fetchAdivinanzas() {
        const data = [
          { "numero": 1, "pregunta": "Soy mas pequeño que una pulga, pero tengo bosques enteros en mi interios. Aunque vivo en silencio, almaceno conocimiento y cuento historias. ¿Que soy?", "respuesta": "Un libro" },
          { "numero": 2, "pregunta": "Si me miras, te veo: si me tocas, te reflejo. Si me rompes, lloraras ¿Quien soy?", "respuesta": "Un espejo" },
          { "numero": 3, "pregunta": "Subo pero nunca bajo, cuanto mas alto llego, mas rapido corro. ¿Que soy?", "respuesta": "La Edad" },
          { "numero": 4, "pregunta": "No tengo vida, pero puedo morir; no tengo pulmones, pero pulmones, pero necesito aire ¿Que soy?", "respuesta": "El fuego" },
          { "numero": 5, "pregunta": "Cuanto mas me quitas, mas grande me vuelvo¿Que soy?", "respuesta": "Un agujero" }
        ];
      setAdivinanzas(data);
    };
    fetchAdivinanzas();
  }, []);

  return (
    <div className={styles.container}>
      {adivinanzas.map((adivinanza) => (
        <Adivinanza key={adivinanza.numero} {...adivinanza} />
      ))}
    </div>
  );
}

export default AdivinanzaContainer;
