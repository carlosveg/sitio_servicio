import { Divider, Grid, Typography } from '@mui/material'
import cpp_logo from '../../assets/img/c++.png'
import bibliotecas from '../../assets/img/c++_bibliotecas.png'
import generator from '../../assets/img/c++_generator.png'
import func_generator from '../../assets/img/func_generator.png'
import main from '../../assets/img/c++_main.png'

export default function CPP({ title }: { title: string }) {
  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3
        }
      }}
    >
      <Typography variant='h6' gutterBottom>
        {title}
      </Typography>
      <Divider />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        <img
          src={cpp_logo}
          alt=''
          style={{ height: '10rem', width: '10rem' }}
        />
        <p>
          C++ es un lenguaje de programación orientado a objetos muy potente que
          evolucionó de la extensión de lenguaje informático “C” y que hoy en
          día sigue usándose para realizar programación estructurada de alto
          nivel y rendimiento, como sistemas operativos, videojuegos y
          aplicaciones en la nube. Se trata de una de las herramientas
          programáticas más versátiles y completas, por esa razón un programador
          C++ con experiencia es un perfil profesional con mucha demanda en toda
          clase de proyectos tecnológicos.
        </p>
      </div>
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/JruaQnzwkDQ?si=UEtZko3Lwd4I2dzR'
        title='YouTube video player'
        // frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        // allowfullscreen
      ></iframe>
      <Typography variant='h6' gutterBottom>
        Explicación del programa
      </Typography>
      <p>
        A continuación, se presenta una explciación detallada del funcionamiento
        de cada una de las partes que componen el programa. En el video podrás
        ver el programa en funcionamiento.
        <ol>
          <li>
            Incluye las bibliotecas necesarias:
            <br />
            <img src={bibliotecas} alt='' />
            <p>
              &lt;iostream&gt;: Proporciona las funciones para entrada y salida
              estándar.
              <br />
              &lt;vector&gt;: Proporciona la clase vector para almacenar una
              secuencia dinámica de elementos.
              <br />
              &lt;algorithm&gt;: Proporciona funciones de algoritmo, como
              std::sort para ordenar.
              <br />
            </p>
          </li>
          <li>
            Define una función generator:
            <br />
            <img src={generator} alt='' />
            <p>
              Esta función se declara antes de main para que el compilador
              conozca su firma antes de su uso.
            </p>
          </li>
          <li>
            La función main:
            <br />
            <img src={main} alt='' />
            <ul>
              <li>El programa comienza ejecutando la función main.</li>
              <li>
                Declara un entero n para almacenar el número ingresado por el
                usuario y un vector randoms para almacenar los números
                aleatorios.
              </li>
              <li>
                El usuario ingresa un número que determina cuántos números
                aleatorios se generarán.
              </li>
              <li>
                Llama a la función generator para llenar el vector randoms con
                números aleatorios.
              </li>
              <li>Muestra los números generados antes de ordenarlos.</li>
              <li>
                Llama a std::sort para ordenar los números en el vector randoms.
              </li>
              <li>Muestra los números ordenados.</li>
              <li>Finaliza el programa con return 0;.</li>
            </ul>
          </li>
          <li>
            La función generator:
            <br />
            <img src={func_generator} alt='' />
            <ul>
              <li>
                Esta función toma un argumento n, que determina cuántos números
                aleatorios se generan.
              </li>
              <li>
                Declara un vector llamado randoms para almacenar los números
                aleatorios.
              </li>
              <li>
                Usa un bucle for para generar n números aleatorios entre 0 y 100
                y los agrega al vector randoms.
              </li>
              <li>
                Devuelve el vector randoms que contiene los números aleatorios
                generados.
              </li>
            </ul>
          </li>
        </ol>
        En resumen, este programa solicita al usuario un número, genera ese
        número de valores aleatorios, los almacena en un vector, los ordena y
        luego los muestra antes y después de la ordenación. Esto es útil para
        ilustrar cómo trabajar con vectores, entrada/salida de datos y
        algoritmos de ordenación en C++.
      </p>
    </Grid>
  )
}
