# Ejercicio-CarlosJimenez
Para cualquier numero entero positivo 'n' definimos dos reglas.
- si es par: dividir en 2
- si es impar: multiplicar por 3, después, sumar 1

Se repite este proceso hasta que se llega al numero '1'

Esto va a generar una secuencia de números como los que se muestran a continuación, convergiendo a '1':

- 3, 10, 5, 16, 8, 4, 2, 1
- 7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1

Para cada numero 'n' nosotros debemos contar la cantidad de pasos requeridos para alcanzar '1'

Entonces la secuencia anterior empezando con '3', tiene una longitud de 8 (incluyendo el valor inicial y final).
La segunda secuencia comenzada en '7' tiene una longitud de 17.

## Reto adicional:
Encuentre, de las secuencias, la segunda mas larga de todos los enteros menores o iguales a 10 Millones(10'000.000).

Pista/Ayuda:
La secuencia mas larga para los números menores a 1000 tiene una longitud de 179
La secuencia mas larga para los números menores a 10000 tiene una longitud de 262

Calcule la suma de todos los elementos de la secuencia anteriormente mencionada, la segunda mas larga, y comparta su resultado y el código usado para generarla.

## Explicación de funcionamiento
Se creó la función recursiva getSecuenceLenght que es la encargada de retornar la longitud de la secuencia para un número indicado,
Para el reto adicional se utiliza getSecondLenghtAndSum en la que se obtienen las longitudes de todas las cadenas hasta el valor indicado, para obtener la segunda más larga se usan 2 flags, una que contiene el número mayor y otra que contiene el segundo mayor.

## Ejecución
- Clone repo
- In dir route: `yarn start` or `npm start`

