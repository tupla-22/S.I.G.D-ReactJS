/*||||||||||||||||||||||||||||||||SISTEMAS DE BASE DE DATOS II. CONSULTAS SQL ENTREGA FINAL||||||||||||||||||||||||||||||||||||||*/

/*
1- Listar el nombre de los equipos de fútbol que ganaron más de 3 campeonatos entre el año 2019 - 2020 y su nombre comienza con una letra determinada (a elección) .Se debe mostrar el nombre del equipo y la cantidad de campeonatos ganados en ese periodo.
*/

	select nombre_equipo, count(campeon_campeonato) as "cantidad_victorias", fechaFin_campeonato
    from equipos
    inner join compiten on id_equipo=id_equipo_compite
    inner join campeonatos on id_campeonato=id_campeonato_compite
    where (id_deporte_equipo="football" and campeon_campeonato=nombre_equipo and fechaFin_campeonato between "2019-01-01" and "2020-01-01" ) 
    group by nombre_equipo
    having cantidad_victorias>2
    ;

/*
2-	Listar todas las sanciones de todos los equipos de handball cuyos partidos han sido disputados de locales. Se debe listar nombre de los equipos y tipo de sanción. 
*/

select tipo_estadistica, nombre_equipo from estadisticas
inner join partidos on id_partido=id_partido_estadistica
inner join equipos on id_equipoLocal_partido=id_equipo_estadistica
where id_equipoLocal_partido=id_equipo and id_deporte_equipo="handball"
;

/*
3-	Listar CI, nombre, apellido, de todos los jugadores de todos los equipos, que tienen más de 25 años y no pertenecen a un equipo que haya ganado un campeonato en el 2022.
*/

select ci_usuario, primerNombre_usuario, primerApellido_usuario, TIMESTAMPDIFF(YEAR,fechaNac_usuario,CURDATE()) AS edad
from usuarios
inner join tienen on id_usuario=id_usuario_tiene
inner join fichasJugadores on id_fichaJugador=id_fichaJugador_tiene
inner join pertenecen on id_fichaJugador=id_fichaJugador_pertenece
having edad >=25
;

/*
4-	Listar los datos estadísticos generales de fútbol (tiros al arco, posesión del balón, etc) de un equipo de fútbol donde la cantidad de goles anotados de dicho equipo sea mayor al promedio de goles de todos los equipos en el último año. 
*/


select * 
from estadisticas
inner join equipos on id_equipo=id_equipo_estadistica
where id_deporte_equipo="football"
and id_equipo_estadistica =
	(
	select id_equipo_estadistica#, count(est.tipo_estadistica) as "count"
    from 
		(
		select id_equipo_estadistica, id_partido_estadistica, date_created_estadistica, tipo_estadistica 
        from estadisticas 
        having TIMESTAMPDIFF(YEAR,date_created_estadistica,CURDATE()) <1
        ) est
    inner join equipos on id_equipo=id_equipo_estadistica
    where tipo_estadistica="gol"
    group by id_equipo_estadistica 
    order by count(est.tipo_estadistica) desc
    limit 1
    )
and 
	(
    select count(est.tipo_estadistica) as "count"
    from 
		(
        select id_equipo_estadistica, id_partido_estadistica, date_created_estadistica, tipo_estadistica 
        from estadisticas 
        having TIMESTAMPDIFF(YEAR,date_created_estadistica,CURDATE()) <1
        ) est
    inner join equipos on id_equipo=id_equipo_estadistica
    where tipo_estadistica="gol"
    group by id_equipo_estadistica 
    order by count desc
    limit 1
    ) 
    > 
    (
    select avg(a.count) 
    from (
		select date_created_estadistica,count(est.tipo_estadistica) as "count"
		from (
			select id_equipo_estadistica, id_partido_estadistica, date_created_estadistica, tipo_estadistica 
            from estadisticas 
            having TIMESTAMPDIFF(YEAR,date_created_estadistica,CURDATE()) <1
            ) est
		inner join equipos on id_equipo=id_equipo_estadistica
		where tipo_estadistica="gol"
		group by id_partido_estadistica  
		order by id_partido_estadistica
        ) a
	)
;
    

/*
5- Listar los datos estadísticos individuales de jugadores de fútbol (goles anotados, tiros al arco, etc) de los jugadores que la posición sea delantero.
*/

select * from estadisticas
inner join fichasJugadores on id_fichaJugador=id_fichaJugador_estadistica
inner join posiciones on id_fichaJugador=id_fichaJugador_posicion
where id_posicion="delantero"
;

/*
6-	Listar todos los equipos de basketball que participaron del último campeonato, realizando un ranking de mayor a menor por tantos conseguidos. Además se debe mostrar información  acerca de la posesión del balón de cada equipo si se cuenta con esa información. 
*/
select nombre_campeonato,nombre_equipo, sum(valor_estadistica) as "tantos" from equipos
inner join compiten on id_equipo=id_equipo_compite
inner join campeonatos on id_campeonato_compite=id_campeonato
inner join estadisticas on id_equipo_estadistica=id_equipo
where id_campeonato=(select id_campeonato from campeonatos where fechaFin_campeonato<curdate() order by fechaInicio_campeonato desc limit 1)  and id_deporte_equipo="basketball" and verificado_estadistica=1
group by id_equipo
order by tantos desc
;

/*
7-  Listar ci, nombre y apellido de los entrenadores que dirigieron equipos que hayan ganado más de dos campeonatos en los últimos 4 años.
*/



/*
8-	Contar la cantidad de jugadores que hay por deporte y filtrar por los que tengan más de 20 jugadores.
*/

/*
9-	Listar nombre y apellido de los jugadores de todos los deportes, equipo al que pertenecen, partidos que disputaron, campeonato y técnico a cargo.
*/
select * from equipos;
select distinct primerNombre_usuario, primerApellido_usuario, nombre_equipo, id_partido, id_campeonato_compite, id_usuario_equipo as id_tecnico, id_deporte_equipo 
from usuarios
inner join tienen on id_usuario=id_usuario_tiene
inner join fichasJugadores on id_fichaJugador_tiene=id_fichaJugador
inner join pertenecen on id_fichaJugador=id_fichaJugador_pertenece
inner join equipos on id_equipo_pertenece=id_equipo
inner join partidos on id_equipo=id_equipoLocal_partido or id_equipo=id_equipoVisitante_partido
inner join compiten on id_equipo=id_equipo_compite;

select * from corresponden;


'Juan', 'Calle', 'team5', '12', '7', '6', 'football'
'Juan', 'Calle', 'team5', '20', '7', '6', 'football'
'Juan', 'Calle', 'team5', '21', '7', '6', 'football'
'Juan', 'Calle', 'team5', '22', '7', '6', 'football'
'Juan', 'Calle', 'team5', '23', '7', '6', 'football'
