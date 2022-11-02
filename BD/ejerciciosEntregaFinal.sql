/*||||||||||||||||||||||||||||||||SISTEMAS DE BASE DE DATOS II. CONSULTAS SQL ENTREGA FINAL||||||||||||||||||||||||||||||||||||||*/

/*
1- Listar el nombre de los equipos de fútbol que ganaron más de 3 campeonatos entre el año 2019 - 2020 y su nombre comienza con una letra determinada (a elección) .Se debe mostrar el nombre del equipo y la cantidad de campeonatos ganados en ese periodo.
*/

	select nombre_equipo, count(campeon_campeonato) as "cantidad_victorias"
    from equipos
    inner join compiten on id_equipo=id_equipo_compite
    inner join campeonatos on id_campeonato=id_campeonato_compite
    where (id_deporte_equipo="football" and campeon_campeonato=nombre_equipo) 
    group by nombre_equipo
    having cantidad_victorias>2
    ;


/*
2-	Listar todas las sanciones de todos los equipos de handball cuyos partidos han sido disputados de locales. Se debe listar nombre de los equipos y tipo de sanción. 
*/

/*
3-	Listar CI, nombre, apellido, de todos los jugadores de todos los equipos, que tienen más de 25 años y no pertenecen a un equipo que haya ganado un campeonato en el 2022.
*/

/*
4-	Listar los datos estadísticos generales de fútbol (tiros al arco, posesión del balón, etc) de un equipo de fútbol donde la cantidad de goles anotados de dicho equipo sea mayor al promedio de goles de todos los equipos en el último año. 
*/

/*
5- Listar los datos estadísticos individuales de jugadores de fútbol (goles anotados, tiros al arco, etc) de los jugadores que la posición sea delantero.
*/

/*
6-	Listar todos los equipos de basketball que participaron del último campeonato, realizando un ranking de mayor a menor por tantos conseguidos. Además se debe mostrar información  acerca de la posesión del balón de cada equipo si se cuenta con esa información. 
*/

/*
7-       Listar ci, nombre y apellido de los entrenadores que dirigieron equipos que hayan ganado más de dos campeonatos en los últimos 4 años.
*/

/*
8-	Contar la cantidad de jugadores que hay por deporte y filtrar por los que tengan más de 20 jugadores.
*/

/*
9-	Listar nombre y apellido de los jugadores de todos los deportes, equipo al que pertenecen, partidos que disputaron, campeonato y técnico a cargo.
*/