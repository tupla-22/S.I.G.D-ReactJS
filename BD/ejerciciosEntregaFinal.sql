/*||||||||||||||||||||||||||||||||SISTEMAS DE BASE DE DATOS II. CONSULTAS SQL ENTREGA FINAL||||||||||||||||||||||||||||||||||||||*/

/*
1- Listar el nombre de los equipos de fútbol que ganaron más de 3 campeonatos entre el año 2019 - 2020 y su nombre comienza con una letra determinada (a elección) .Se debe mostrar el nombre del equipo y la cantidad de campeonatos ganados en ese periodo.
*/

	select nombre_equipo, count(campeon_campeonato) as "cantidad_victorias", fechaFin_campeonato
    from equipos
    inner join compiten on id_equipo=id_equipo_compite
    inner join campeonatos on id_campeonato=id_campeonato_compite
    where (id_deporte_equipo="football" and campeon_campeonato=nombre_equipo and fechaFin_campeonato between "2019-01-01" and "2020-01-01" ) and nombre_equipo like "t%"
    group by nombre_equipo
    having cantidad_victorias>3
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

select ci_usuario, primerNombre_usuario, primerApellido_usuario,count(campeon_campeonato) as "cantidad_victorias"
from usuarios
inner join equipos on id_usuario_equipo=id_usuario
inner join compiten on id_equipo=id_equipo_compite 
inner join campeonatos on id_campeonato_compite=id_campeonato
where campeon_campeonato=nombre_equipo and TIMESTAMPDIFF(YEAR,fechaFin_campeonato,CURDATE()) <=4
group by campeon_campeonato
having cantidad_victorias>2


;

/*
8-	Contar la cantidad de jugadores que hay por deporte y filtrar por los que tengan más de 20 jugadores.
*/

select id_deporte, count(id_fichaJugador_pertenece) as "cantidad_jugadores"
from deportes
inner join equipos on id_deporte=id_deporte_equipo
inner join pertenecen on id_equipo=id_equipo_pertenece
group by id_deporte
having cantidad_jugadores>20
;
/*
9-	Listar nombre y apellido de los jugadores de todos los deportes, equipo al que pertenecen, partidos que disputaron, campeonato y técnico a cargo.
*/
select * from equipos;
select distinct primerNombre_usuario, primerApellido_usuario, nombre_equipo, id_partido, id_campeonato_corresponde, nombre_campeonato, id_usuario_equipo as id_tecnico, id_deporte_equipo 
from usuarios
inner join tienen on id_usuario=id_usuario_tiene
inner join fichasJugadores on id_fichaJugador_tiene=id_fichaJugador
inner join pertenecen on id_fichaJugador=id_fichaJugador_pertenece
inner join equipos on id_equipo_pertenece=id_equipo
inner join partidos on id_equipo=id_equipoLocal_partido or id_equipo=id_equipoVisitante_partido
inner join corresponden on id_partido_corresponde=id_partido
inner join campeonatos on id_campeonato_corresponde=id_campeonato
;

select * from corresponden;

/*
'Juan', 'Calle', 'team5', '12', '7', '6', 'football'
'Juan', 'Calle', 'team5', '20', '7', '6', 'football'
'Juan', 'Calle', 'team5', '21', '7', '6', 'football'
'Juan', 'Calle', 'team5', '22', '7', '6', 'football'
'Juan', 'Calle', 'team5', '23', '7', '6', 'football'


*/


select * from partidos
inner join corresponden on id_partido=id_partido_corresponde
where id_campeonato_corresponde=2

;

select * from ligas;

insert into campeonatos values

(null, NULL, NULL, 'CAMPEONATO SUB 15 DE SELECCIONES 2022', 'football', '2', '2022-11-01', '2023-01-31', '2022-11-05', '2022-11-05 00:44:54'),#1
(null, 'Full Team FC', NULL, 'CAMPEONATO SUB 20 DE SELECCIONES 2021', 'football', '1', '2021-11-01', '2022-01-31', '2022-11-05', '2022-11-05 00:44:54'),#2
(null, 'TeamTupla', NULL, 'CAMPEONATO SUB 25 DE SELECCIONES 2020', 'football', '3', '2020-11-01', '2021-01-31', '2022-11-05', '2022-11-05 00:44:54'),#3
(null, 'TeamTupla', NULL, 'CAMPEONATO SUB 15 DE SELECCIONES 2019', 'football', '2', '2019-11-01', '2020-01-31', '2022-11-05', '2022-11-05 00:44:54'),#4
(null, 'TeamTupla', NULL, 'CAMPEONATO SUB 20 DE SELECCIONES 2018', 'football', '1', '2018-11-01', '2019-01-31', '2022-11-05', '2022-11-05 00:44:54'),#5

(null, NULL, NULL, 'CAMPEONATO SUB 15 DE SELECCIONES 2022', 'basketball', '5', '2022-11-01', '2023-01-31', '2022-11-05', '2022-11-05 00:44:54'),#6
(null, 'Los Errantes', NULL, 'CAMPEONATO SUB 20 DE SELECCIONES 2021', 'basketball', '4', '2021-11-01', '2022-01-31', '2022-11-05', '2022-11-05 00:44:54'),#7
(null, "FSM", NULL, 'CAMPEONATO SUB 25 DE SELECCIONES 2020', 'basketball', '6', '2020-11-01', '2021-01-31', '2022-11-05', '2022-11-05 00:44:54'),#8
(null, "FSM", NULL, 'CAMPEONATO SUB 15 DE SELECCIONES 2019', 'basketball', '5', '2019-11-01', '2020-01-31', '2022-11-05', '2022-11-05 00:44:54'),#9
(null, "FSM", NULL, 'CAMPEONATO SUB 20 DE SELECCIONES 2016', 'basketball', '4', '2016-11-01', '2017-01-31', '2022-11-05', '2022-11-05 00:44:54'),#10

(null, NULL, NULL, 'CAMPEONATO SUB 15 DE SELECCIONES 2022', 'handball', '8', '2022-11-01', '2023-01-31', '2022-11-05', '2022-11-05 00:44:54'),#11
(null, 'Lost CAH', NULL, 'CAMPEONATO SUB 20 DE SELECCIONES 2021', 'handball', '7', '2021-11-01', '2022-01-31', '2022-11-05', '2022-11-05 00:44:54'),#12
(null, 'Lost CAH', NULL, 'CAMPEONATO SUB 25 DE SELECCIONES 2020', 'handball', '9', '2020-11-01', '2021-01-31', '2022-11-05', '2022-11-05 00:44:54'),#13
(null, 'Zona HAC', NULL, 'CAMPEONATO SUB 15 DE SELECCIONES 2019', 'handball', '8', '2019-11-01', '2020-01-31', '2022-11-05', '2022-11-05 00:44:54'),#14
(null, 'Espinosa CAH', NULL, 'CAMPEONATO SUB 20 DE SELECCIONES 2018', 'handball', '7', '2018-11-01', '2019-01-31', '2022-11-05', '2022-11-05 00:44:54');#15

select * from compiten;
select * from equipos where id_deporte_equipo="handball";
select * from campeonatos;
#9,8,7,5,3,2,1,0

insert into compiten values
#football
('2', '1', 4, '2022-11-05', '2022-11-05 03:01:30'),
('2', '2', 7, '2022-11-05', '2022-11-05 03:01:30'),
('2', '3', 0, '2022-11-05', '2022-11-05 03:01:30'),
('2', '4', 4, '2022-11-05', '2022-11-05 03:01:30'),
('2', '5', 9, '2022-11-05', '2022-11-05 03:01:30'),
('2', '12', 0, '2022-11-05', '2022-11-05 03:01:30'),
('2', '13', 0, '2022-11-05', '2022-11-05 03:01:30'),
('2', '14', 0, '2022-11-05', '2022-11-05 03:01:30'),
/*8x4, 7=, 0=, 5x4, 9=, 3x0, 2x0, 1x0*/
/*('2', '1', 8, '2022-11-05', '2022-11-05 03:01:30'),
('2', '2', 7, '2022-11-05', '2022-11-05 03:01:30'),
('2', '3', 0, '2022-11-05', '2022-11-05 03:01:30'),
('2', '4', 5, '2022-11-05', '2022-11-05 03:01:30'),
('2', '5', 9, '2022-11-05', '2022-11-05 03:01:30'),
('2', '12', 3, '2022-11-05', '2022-11-05 03:01:30'),
('2', '13', 2, '2022-11-05', '2022-11-05 03:01:30'),
('2', '14', 1, '2022-11-05', '2022-11-05 03:01:30'),*/

/*8x4, 7=, 0=, 5x4, 9=, 3x0, 2x0, 1x0*/
('3', '1', 8, '2022-11-05', '2022-11-05 03:01:30'),
('3', '2', 5, '2022-11-05', '2022-11-05 03:01:30'),
('3', '3', 7, '2022-11-05', '2022-11-05 03:01:30'),
('3', '4', 3, '2022-11-05', '2022-11-05 03:01:30'),
('3', '5', 2, '2022-11-05', '2022-11-05 03:01:30'),
('3', '12', 9, '2022-11-05', '2022-11-05 03:01:30'),
('3', '13', 1, '2022-11-05', '2022-11-05 03:01:30'),
('3', '14', 0, '2022-11-05', '2022-11-05 03:01:30'),

/*('3', '1', 8, '2022-11-05', '2022-11-05 03:01:30'),
('3', '2', 5, '2022-11-05', '2022-11-05 03:01:30'),
('3', '3', 7, '2022-11-05', '2022-11-05 03:01:30'),
('3', '4', 3, '2022-11-05', '2022-11-05 03:01:30'),
('3', '5', 2, '2022-11-05', '2022-11-05 03:01:30'),
('3', '12', 9, '2022-11-05', '2022-11-05 03:01:30'),
('3', '13', 1, '2022-11-05', '2022-11-05 03:01:30'),
('3', '14', 0, '2022-11-05', '2022-11-05 03:01:30'),*/

/*8x4, 7=, 0=, 5x4, 9=, 3x0, 2x0, 1x0*/
('4', '1', 0, '2022-11-05', '2022-11-05 03:01:30'),
('4', '2', 1, '2022-11-05', '2022-11-05 03:01:30'),
('4', '3', 3, '2022-11-05', '2022-11-05 03:01:30'),
('4', '4', 2, '2022-11-05', '2022-11-05 03:01:30'),
('4', '5', 5, '2022-11-05', '2022-11-05 03:01:30'),
('4', '12', 9, '2022-11-05', '2022-11-05 03:01:30'),
('4', '13', 7, '2022-11-05', '2022-11-05 03:01:30'),
('4', '14', 8, '2022-11-05', '2022-11-05 03:01:30'),

/*('4', '1', 0, '2022-11-05', '2022-11-05 03:01:30'),
('4', '2', 1, '2022-11-05', '2022-11-05 03:01:30'),
('4', '3', 3, '2022-11-05', '2022-11-05 03:01:30'),
('4', '4', 2, '2022-11-05', '2022-11-05 03:01:30'),
('4', '5', 5, '2022-11-05', '2022-11-05 03:01:30'),
('4', '12', 9, '2022-11-05', '2022-11-05 03:01:30'),
('4', '13', 7, '2022-11-05', '2022-11-05 03:01:30'),
('4', '14', 8, '2022-11-05', '2022-11-05 03:01:30'),*/

/*8x4, 7=, 0=, 5x4, 9=, 3x0, 2x0, 1x0*/
('5', '1', 8, '2022-11-05', '2022-11-05 03:01:30'),
('5', '2', 1, '2022-11-05', '2022-11-05 03:01:30'),
('5', '3', 0, '2022-11-05', '2022-11-05 03:01:30'),
('5', '4', 3, '2022-11-05', '2022-11-05 03:01:30'),
('5', '5', 5, '2022-11-05', '2022-11-05 03:01:30'),
('5', '12', 9, '2022-11-05', '2022-11-05 03:01:30'),
('5', '13', 2, '2022-11-05', '2022-11-05 03:01:30'),
('5', '14', 7, '2022-11-05', '2022-11-05 03:01:30'),

/*('5', '1', 8, '2022-11-05', '2022-11-05 03:01:30'),
('5', '2', 1, '2022-11-05', '2022-11-05 03:01:30'),
('5', '3', 0, '2022-11-05', '2022-11-05 03:01:30'),
('5', '4', 3, '2022-11-05', '2022-11-05 03:01:30'),
('5', '5', 5, '2022-11-05', '2022-11-05 03:01:30'),
('5', '12', 9, '2022-11-05', '2022-11-05 03:01:30'),
('5', '13', 2, '2022-11-05', '2022-11-05 03:01:30'),
('5', '14', 7, '2022-11-05', '2022-11-05 03:01:30'),*/

#basketball
/*8x4, 7=, 0=, 5x4, 9=, 3x0, 2x0, 1x0*/
('7', '7', 0, '2022-11-05', '2022-11-05 03:01:30'),
('7', '11', 9, '2022-11-05', '2022-11-05 03:01:30'),
('7', '9', 3, '2022-11-05', '2022-11-05 03:01:30'),
('7', '17', 2, '2022-11-05', '2022-11-05 03:01:30'),
('7', '18', 5, '2022-11-05', '2022-11-05 03:01:30'),
('7', '19', 1, '2022-11-05', '2022-11-05 03:01:30'),
('7', '20', 7, '2022-11-05', '2022-11-05 03:01:30'),
('7', '21', 8, '2022-11-05', '2022-11-05 03:01:30'),

/*('7', '7', 0, '2022-11-05', '2022-11-05 03:01:30'),
('7', '11', 9, '2022-11-05', '2022-11-05 03:01:30'),
('7', '9', 3, '2022-11-05', '2022-11-05 03:01:30'),
('7', '17', 2, '2022-11-05', '2022-11-05 03:01:30'),
('7', '18', 5, '2022-11-05', '2022-11-05 03:01:30'),
('7', '19', 1, '2022-11-05', '2022-11-05 03:01:30'),
('7', '20', 7, '2022-11-05', '2022-11-05 03:01:30'),
('7', '21', 8, '2022-11-05', '2022-11-05 03:01:30'),*/

/*8x4, 7=, 0=, 5x4, 9=, 3x0, 2x0, 1x0*/
('8', '7', 9, '2022-11-05', '2022-11-05 03:01:30'),
('8', '11', 0, '2022-11-05', '2022-11-05 03:01:30'),
('8', '9', 7, '2022-11-05', '2022-11-05 03:01:30'),
('8', '17', 2, '2022-11-05', '2022-11-05 03:01:30'),
('8', '18', 5, '2022-11-05', '2022-11-05 03:01:30'),
('8', '19', 1, '2022-11-05', '2022-11-05 03:01:30'),
('8', '20', 3, '2022-11-05', '2022-11-05 03:01:30'),
('8', '21', 8, '2022-11-05', '2022-11-05 03:01:30'),

/*('8', '7', 9, '2022-11-05', '2022-11-05 03:01:30'),
('8', '11', 0, '2022-11-05', '2022-11-05 03:01:30'),
('8', '9', 7, '2022-11-05', '2022-11-05 03:01:30'),
('8', '17', 2, '2022-11-05', '2022-11-05 03:01:30'),
('8', '18', 5, '2022-11-05', '2022-11-05 03:01:30'),
('8', '19', 1, '2022-11-05', '2022-11-05 03:01:30'),
('8', '20', 3, '2022-11-05', '2022-11-05 03:01:30'),
('8', '21', 8, '2022-11-05', '2022-11-05 03:01:30'),*/

/*8x4, 7=, 0=, 5x4, 9=, 3x0, 2x0, 1x0*/
('9', '7', 9, '2022-11-05', '2022-11-05 03:01:30'),
('9', '11', 3, '2022-11-05', '2022-11-05 03:01:30'),
('9', '9', 0, '2022-11-05', '2022-11-05 03:01:30'),
('9', '17', 7, '2022-11-05', '2022-11-05 03:01:30'),
('9', '18', 2, '2022-11-05', '2022-11-05 03:01:30'),
('9', '19', 1, '2022-11-05', '2022-11-05 03:01:30'),
('9', '20', 5, '2022-11-05', '2022-11-05 03:01:30'),
('9', '21', 8, '2022-11-05', '2022-11-05 03:01:30'),

/*('9', '7', 9, '2022-11-05', '2022-11-05 03:01:30'),
('9', '11', 3, '2022-11-05', '2022-11-05 03:01:30'),
('9', '9', 0, '2022-11-05', '2022-11-05 03:01:30'),
('9', '17', 7, '2022-11-05', '2022-11-05 03:01:30'),
('9', '18', 2, '2022-11-05', '2022-11-05 03:01:30'),
('9', '19', 1, '2022-11-05', '2022-11-05 03:01:30'),
('9', '20', 5, '2022-11-05', '2022-11-05 03:01:30'),
('9', '21', 8, '2022-11-05', '2022-11-05 03:01:30'),*/

/*8x4, 7=, 0=, 5x4, 9=, 3x0, 2x0, 1x0*/
('10', '7', 9, '2022-11-05', '2022-11-05 03:01:30'),
('10', '11', 3, '2022-11-05', '2022-11-05 03:01:30'),
('10', '9', 0, '2022-11-05', '2022-11-05 03:01:30'),
('10', '17', 5, '2022-11-05', '2022-11-05 03:01:30'),
('10', '18', 2, '2022-11-05', '2022-11-05 03:01:30'),
('10', '19', 7, '2022-11-05', '2022-11-05 03:01:30'),
('10', '20', 1, '2022-11-05', '2022-11-05 03:01:30'),
('10', '21', 8, '2022-11-05', '2022-11-05 03:01:30'),

/*('10', '7', 9, '2022-11-05', '2022-11-05 03:01:30'),
('10', '11', 3, '2022-11-05', '2022-11-05 03:01:30'),
('10', '9', 0, '2022-11-05', '2022-11-05 03:01:30'),
('10', '17', 5, '2022-11-05', '2022-11-05 03:01:30'),
('10', '18', 2, '2022-11-05', '2022-11-05 03:01:30'),
('10', '19', 7, '2022-11-05', '2022-11-05 03:01:30'),
('10', '20', 1, '2022-11-05', '2022-11-05 03:01:30'),
('10', '21', 8, '2022-11-05', '2022-11-05 03:01:30'),*/

#handball
/*8x4, 7=, 0=, 5x4, 9=, 3x0, 2x0, 1x0*/
('12', '6', 9, '2022-11-05', '2022-11-05 03:01:30'),
('12', '8', 7, '2022-11-05', '2022-11-05 03:01:30'),
('12', '10', 3, '2022-11-05', '2022-11-05 03:01:30'),
('12', '23', 2, '2022-11-05', '2022-11-05 03:01:30'),
('12', '24', 0, '2022-11-05', '2022-11-05 03:01:30'),
('12', '25', 5, '2022-11-05', '2022-11-05 03:01:30'),
('12', '26', 1, '2022-11-05', '2022-11-05 03:01:30'),
('12', '27', 8, '2022-11-05', '2022-11-05 03:01:30'),

/*('12', '6', 9, '2022-11-05', '2022-11-05 03:01:30'),
('12', '8', 7, '2022-11-05', '2022-11-05 03:01:30'),
('12', '10', 3, '2022-11-05', '2022-11-05 03:01:30'),
('12', '23', 2, '2022-11-05', '2022-11-05 03:01:30'),
('12', '24', 0, '2022-11-05', '2022-11-05 03:01:30'),
('12', '25', 5, '2022-11-05', '2022-11-05 03:01:30'),
('12', '26', 1, '2022-11-05', '2022-11-05 03:01:30'),
('12', '27', 8, '2022-11-05', '2022-11-05 03:01:30'),*/

/*8x4, 7=, 0=, 5x4, 9=, 3x0, 2x0, 1x0*/
('13', '6', 9, '2022-11-05', '2022-11-05 03:01:30'),
('13', '8', 3, '2022-11-05', '2022-11-05 03:01:30'),
('13', '10', 2, '2022-11-05', '2022-11-05 03:01:30'),
('13', '23', 1, '2022-11-05', '2022-11-05 03:01:30'),
('13', '24', 5, '2022-11-05', '2022-11-05 03:01:30'),
('13', '25', 0, '2022-11-05', '2022-11-05 03:01:30'),
('13', '26', 7, '2022-11-05', '2022-11-05 03:01:30'),
('13', '27', 8, '2022-11-05', '2022-11-05 03:01:30'),

/*('13', '6', 9, '2022-11-05', '2022-11-05 03:01:30'),
('13', '8', 3, '2022-11-05', '2022-11-05 03:01:30'),
('13', '10', 2, '2022-11-05', '2022-11-05 03:01:30'),
('13', '23', 1, '2022-11-05', '2022-11-05 03:01:30'),
('13', '24', 5, '2022-11-05', '2022-11-05 03:01:30'),
('13', '25', 0, '2022-11-05', '2022-11-05 03:01:30'),
('13', '26', 7, '2022-11-05', '2022-11-05 03:01:30'),
('13', '27', 8, '2022-11-05', '2022-11-05 03:01:30'),*/

('14', '6', 3, '2022-11-05', '2022-11-05 03:01:30'),
('14', '8', 2, '2022-11-05', '2022-11-05 03:01:30'),
('14', '10', 9, '2022-11-05', '2022-11-05 03:01:30'),
('14', '23', 1, '2022-11-05', '2022-11-05 03:01:30'),
('14', '24', 8, '2022-11-05', '2022-11-05 03:01:30'),
('14', '25', 0, '2022-11-05', '2022-11-05 03:01:30'),
('14', '26', 5, '2022-11-05', '2022-11-05 03:01:30'),
('14', '27', 7, '2022-11-05', '2022-11-05 03:01:30'),

/*('14', '6', 3, '2022-11-05', '2022-11-05 03:01:30'),
('14', '8', 2, '2022-11-05', '2022-11-05 03:01:30'),
('14', '10', 9, '2022-11-05', '2022-11-05 03:01:30'),
('14', '23', 1, '2022-11-05', '2022-11-05 03:01:30'),
('14', '24', 8, '2022-11-05', '2022-11-05 03:01:30'),
('14', '25', 0, '2022-11-05', '2022-11-05 03:01:30'),
('14', '26', 5, '2022-11-05', '2022-11-05 03:01:30'),
('14', '27', 7, '2022-11-05', '2022-11-05 03:01:30'),*/

('15', '6', 7, '2022-11-05', '2022-11-05 03:01:30'),
('15', '8', 9, '2022-11-05', '2022-11-05 03:01:30'),
('15', '10', 5, '2022-11-05', '2022-11-05 03:01:30'),
('15', '23', 2, '2022-11-05', '2022-11-05 03:01:30'),
('15', '24', 3, '2022-11-05', '2022-11-05 03:01:30'),
('15', '25', 0, '2022-11-05', '2022-11-05 03:01:30'),
('15', '26', 1, '2022-11-05', '2022-11-05 03:01:30'),
('15', '27', 8, '2022-11-05', '2022-11-05 03:01:30');

/*('15', '6', 7, '2022-11-05', '2022-11-05 03:01:30'),
('15', '8', 9, '2022-11-05', '2022-11-05 03:01:30'),
('15', '10', 5, '2022-11-05', '2022-11-05 03:01:30'),
('15', '23', 2, '2022-11-05', '2022-11-05 03:01:30'),
('15', '24', 3, '2022-11-05', '2022-11-05 03:01:30'),
('15', '25', 0, '2022-11-05', '2022-11-05 03:01:30'),
('15', '26', 1, '2022-11-05', '2022-11-05 03:01:30'),
('15', '27', 8, '2022-11-05', '2022-11-05 03:01:30');
*/
/*8x4, 7=, 0=, 5x4, 9=, 3x0, 2x0, 1x0*/

update compiten
set punto_compite=4 
where punto_compite=8;

update compiten
set punto_compite=5 
where punto_compite=4;

update compiten
set punto_compite=3 
where punto_compite=0;

update compiten
set punto_compite=2 
where punto_compite=0;

update compiten
set punto_compite=1 
where punto_compite=0;


#12 partidos por campeonato
select * from partidos;
select * from campeonatos;
select * from compiten 
inner join equipos on id_equipo_compite=id_equipo
where id_campeonato_compite=8
;
insert into partidos
values
#campeonato2ok
#id_partido, id_equipoLocal_partido, id_equipoVisitante_partido, dia_partido, hora_partido, anotacionLocal_partido, anotacionVisitante_partido, tipo_partido, disputado_partido, verificado_partido, ganador_partido, date_created_partido, date_updated_partido
(null, '5'/*1*/, '13'/*6*/, '2022-10-03', '06:29:00', '2', '0', 'campeonato', '1',1, 'Full Team FC', '2022-11-03', '2022-11-03 13:45:33'),
(null, '5'/*1*/, '4'/*4*/, '2022-10-05', '06:29:00', '3', '2', 'campeonato', '1',1, 'Full Team FC', '2022-11-03', '2022-11-03 13:46:02'),
(null, '5'/*1*/, '1'/*2*/, '2022-10-05', '06:29:00', '1', '0', 'campeonato', '1',1, 'Full Team FC', '2022-11-03', '2022-11-03 13:46:31'),
(null, '1'/*2*/, '12'/*5*/, '2022-11-04', '05:00:00', '4', '3', 'campeonato', '1',1, 'Club Antartico de Football', '2022-11-03', '2022-11-03 13:54:58'),
(null, '1'/*2*/, '2'/*4*/, '2022-10-03', '06:29:00', '2', '1', 'campeonato', '1',1, 'Club Antartico de Football', '2022-11-03', '2022-11-03 13:45:33'),
(null, '2'/*3*/, '14'/*7*/, '2022-10-05', '06:29:00', '2', '0', 'campeonato', '1',1, 'Taurus FC', '2022-11-03', '2022-11-03 13:46:02'),
(null, '2'/*3*/, '4'/*4*/, '2022-10-05', '06:29:00', '1', '0', 'campeonato', '1',1, 'Taurus FC', '2022-11-03', '2022-11-03 13:46:31'),
(null, '4'/*4*/, '3'/*8*/, '2022-11-04', '05:00:00', '5', '3', 'campeonato', '1',1, 'Dream FC', '2022-11-03', '2022-11-03 13:54:58'),
(null, '14'/*7*/, '3'/*8*/, '2022-10-03', '06:29:00', '4', '0', 'campeonato', '1',1, 'bat FC', '2022-11-03', '2022-11-03 13:45:33'),
(null, '13'/*6*/, '3'/*8*/, '2022-10-05', '06:29:00', '3', '1', 'campeonato', '1',1, 'spoon FC', '2022-11-03', '2022-11-03 13:46:02'),
(null, '12'/*5*/, '14'/*7*/, '2022-10-05', '06:29:00', '2', '0', 'campeonato', '1',1, 'TeamTupla FC', '2022-11-03', '2022-11-03 13:46:31'),
(null, '12'/*5*/, '13'/*6*/, '2022-11-04', '05:00:00', '1', '0', 'campeonato', '1',1, 'TeamTupla FC', '2022-11-03', '2022-11-03 13:54:58'),
#campeonato3ok
#id_partido, id_equipoLocal_partido, id_equipoVisitante_partido, dia_partido, hora_partido, anotacionLocal_partido, anotacionVisitante_partido, tipo_partido, disputado_partido, verificado_partido, ganador_partido, date_created_partido, date_updated_partido
(null, '12'/*1*/, '5'/*6*/, '2022-10-03', '06:29:00', '2', '1', 'campeonato', '1',1, 'TeamTupla FC', '2022-11-03', '2022-11-03 13:45:33'),
(null, '12'/*1*/, '2'/*4*/, '2022-10-05', '06:29:00', '4', '2', 'campeonato', '1',1, 'TeamTupla FC', '2022-11-03', '2022-11-03 13:46:02'),
(null, '12'/*1*/, '1'/*2*/, '2022-10-05', '06:29:00', '2', '0', 'campeonato', '1',1, 'TeamTupla FC', '2022-11-03', '2022-11-03 13:46:31'),
(null, '1'/*2*/, '4'/*5*/, '2022-11-04', '05:00:00', '5', '3', 'campeonato', '1',1, 'Club Antartico de Football', '2022-11-03', '2022-11-03 13:54:58'),
(null, '1'/*2*/, '2'/*4*/, '2022-10-03', '06:29:00', '3', '1', 'campeonato', '1',1, 'Club Antartico de Football', '2022-11-03', '2022-11-03 13:45:33'),
(null, '3'/*3*/, '13'/*7*/, '2022-10-05', '06:29:00', '2', '1', 'campeonato', '1',1, 'ArcaFC', '2022-11-03', '2022-11-03 13:46:02'),
(null, '3'/*3*/, '2'/*4*/, '2022-10-05', '06:29:00', '2', '0', 'campeonato', '1',1, 'ArcaFC', '2022-11-03', '2022-11-03 13:46:31'),
(null, '2'/*4*/, '14'/*8*/, '2022-11-04', '05:00:00', '5', '3', 'campeonato', '1',1, 'Taurus FC', '2022-11-03', '2022-11-03 13:54:58'),
(null, '13'/*7*/, '14'/*8*/, '2022-10-03', '06:29:00', '4', '2', 'campeonato', '1',1, 'spoon FC', '2022-11-03', '2022-11-03 13:45:33'),
(null, '5'/*6*/, '14'/*8*/, '2022-10-05', '06:29:00', '3', '2', 'campeonato', '1',1, 'Full Team FC', '2022-11-03', '2022-11-03 13:46:02'),
(null, '4'/*5*/, '13'/*7*/, '2022-10-05', '06:29:00', '2', '1', 'campeonato', '1',1, 'Dream FC', '2022-11-03', '2022-11-03 13:46:31'),
(null, '4'/*5*/, '5'/*6*/, '2022-11-04', '05:00:00', '2', '0', 'campeonato', '1',1, 'Dream FC', '2022-11-03', '2022-11-03 13:54:58'),

#campeonato4ok
#id_partido, id_equipoLocal_partido, id_equipoVisitante_partido, dia_partido, hora_partido, anotacionLocal_partido, anotacionVisitante_partido, tipo_partido, disputado_partido, verificado_partido, ganador_partido, date_created_partido, date_updated_partido
(null, '12'/*1*/, '4'/*6*/, '2022-10-03', '06:29:00', '3', '0', 'campeonato', '1',1, 'TeamTupla FC', '2022-11-03', '2022-11-03 13:45:33'),
(null, '12'/*1*/, '5'/*4*/, '2022-10-05', '06:29:00', '2', '1', 'campeonato', '1',1, 'TeamTupla FC', '2022-11-03', '2022-11-03 13:46:02'),
(null, '12'/*1*/, '14'/*2*/, '2022-10-05', '06:29:00', '2', '1', 'campeonato', '1',1, 'TeamTupla FC', '2022-11-03', '2022-11-03 13:46:31'),
(null, '14'/*2*/, '3'/*5*/, '2022-11-04', '05:00:00', '3', '0', 'campeonato', '1',1, 'bat FC', '2022-11-03', '2022-11-03 13:54:58'),
(null, '14'/*2*/, '5'/*4*/, '2022-10-03', '06:29:00', '2', '1', 'campeonato', '1',1, 'bat FC', '2022-11-03', '2022-11-03 13:45:33'),
(null, '13'/*3*/, '2'/*7*/, '2022-10-05', '06:29:00', '2', '0', 'campeonato', '1',1, 'spoon FC', '2022-11-03', '2022-11-03 13:46:02'),
(null, '13'/*3*/, '5'/*4*/, '2022-10-05', '06:29:00', '1', '0', 'campeonato', '1',1, 'spoon FC', '2022-11-03', '2022-11-03 13:46:31'),
(null, '5'/*4*/, '1'/*8*/, '2022-11-04', '05:00:00', '5', '4', 'campeonato', '1',1, 'Full Team FC', '2022-11-03', '2022-11-03 13:54:58'),
(null, '2'/*7*/, '1'/*8*/, '2022-10-03', '06:29:00', '4', '1', 'campeonato', '1',1, 'Taurus FC', '2022-11-03', '2022-11-03 13:45:33'),
(null, '4'/*6*/, '1'/*8*/, '2022-10-05', '06:29:00', '3', '1', 'campeonato', '1',1, 'Dream FC', '2022-11-03', '2022-11-03 13:46:02'),
(null, '3'/*5*/, '2'/*7*/, '2022-10-05', '06:29:00', '2', '1', 'campeonato', '1',1, 'ArcaFC', '2022-11-03', '2022-11-03 13:46:31'),
(null, '3'/*5*/, '4'/*6*/, '2022-11-04', '05:00:00', '3', '0', 'campeonato', '1',1, 'ArcaFC', '2022-11-03', '2022-11-03 13:54:58'),

#campeonato5ok
#id_partido, id_equipoLocal_partido, id_equipoVisitante_partido, dia_partido, hora_partido, anotacionLocal_partido, anotacionVisitante_partido, tipo_partido, disputado_partido, verificado_partido, ganador_partido, date_created_partido, date_updated_partido
(null, '12'/*1*/, '13'/*6*/, '2022-10-03', '06:29:00', '2', '0', 'campeonato', '1',1, 'TeamTupla FC', '2022-11-03', '2022-11-03 13:45:33'),
(null, '12'/*1*/, '5'/*4*/, '2022-10-05', '06:29:00', '3', '2', 'campeonato', '1',1, 'TeamTupla FC', '2022-11-03', '2022-11-03 13:46:02'),
(null, '12'/*1*/, '1'/*2*/, '2022-10-05', '06:29:00', '1', '0', 'campeonato', '1',1, 'TeamTupla FC', '2022-11-03', '2022-11-03 13:46:31'),
(null, '1'/*2*/, '4'/*5*/, '2022-11-04', '05:00:00', '4', '3', 'campeonato', '1',1, 'Club Antartico de Football', '2022-11-03', '2022-11-03 13:54:58'),
(null, '1'/*2*/, '5'/*4*/, '2022-10-03', '06:29:00', '2', '1', 'campeonato', '1',1, 'Club Antartico de Football', '2022-11-03', '2022-11-03 13:45:33'),
(null, '14'/*3*/, '2'/*7*/, '2022-10-05', '06:29:00', '2', '0', 'campeonato', '1',1, 'bat FC', '2022-11-03', '2022-11-03 13:46:02'),
(null, '14'/*3*/, '5'/*4*/, '2022-10-05', '06:29:00', '1', '0', 'campeonato', '1',1, 'bat FC', '2022-11-03', '2022-11-03 13:46:31'),
(null, '5'/*4*/, '3'/*8*/, '2022-11-04', '05:00:00', '5', '0', 'campeonato', '1',1, 'Full Team FC', '2022-11-03', '2022-11-03 13:54:58'),
(null, '2'/*7*/, '3'/*8*/, '2022-10-03', '06:29:00', '4', '0', 'campeonato', '1',1, 'Taurus FC', '2022-11-03', '2022-11-03 13:45:33'),
(null, '13'/*6*/, '3'/*8*/, '2022-10-05', '06:29:00', '3', '1', 'campeonato', '1',1, 'spoon FC', '2022-11-03', '2022-11-03 13:46:02'),
(null, '4'/*5*/, '2'/*7*/, '2022-10-05', '06:29:00', '2', '0', 'campeonato', '1',1, 'Dream FC', '2022-11-03', '2022-11-03 13:46:31'),
(null, '4'/*5*/, '13'/*6*/, '2022-11-04', '05:00:00', '1', '0', 'campeonato', '1',1, 'Dream FC', '2022-11-03', '2022-11-03 13:54:58'),

#campeonato7ok
#id_partido, id_equipoLocal_partido, id_equipoVisitante_partido, dia_partido, hora_partido, anotacionLocal_partido, anotacionVisitante_partido, tipo_partido, disputado_partido, verificado_partido, ganador_partido, date_created_partido, date_updated_partido
(null, '11'/*1*/, '17'/*6*/, '2022-10-03', '06:29:00', '2', '0', 'campeonato', '1',1, 'Los Errantes', '2022-11-03', '2022-11-03 13:45:33'),
(null, '11'/*1*/, '18'/*4*/, '2022-10-05', '06:29:00', '3', '2', 'campeonato', '1',1, 'Los Errantes', '2022-11-03', '2022-11-03 13:46:02'),
(null, '11'/*1*/, '21'/*2*/, '2022-10-05', '06:29:00', '1', '0', 'campeonato', '1',1, 'Los Errantes', '2022-11-03', '2022-11-03 13:46:31'),
(null, '21'/*2*/, '9'/*5*/, '2022-11-04', '05:00:00', '4', '3', 'campeonato', '1',1, 'CD bed', '2022-11-03', '2022-11-03 13:54:58'),
(null, '21'/*2*/, '18'/*4*/, '2022-10-03', '06:29:00', '2', '1', 'campeonato', '1',1, 'CD bed', '2022-11-03', '2022-11-03 13:45:33'),
(null, '20'/*3*/, '19'/*7*/, '2022-10-05', '06:29:00', '2', '0', 'campeonato', '1',1, 'CD drum', '2022-11-03', '2022-11-03 13:46:02'),
(null, '20'/*3*/, '18'/*4*/, '2022-10-05', '06:29:00', '1', '0', 'campeonato', '1',1, 'CD drum', '2022-11-03', '2022-11-03 13:46:31'),
(null, '18'/*4*/, '7'/*8*/, '2022-11-04', '05:00:00', '5', '0', 'campeonato', '1',1, 'CD pen', '2022-11-03', '2022-11-03 13:54:58'),
(null, '19'/*7*/, '7'/*8*/, '2022-10-03', '06:29:00', '4', '0', 'campeonato', '1',1, 'bat FC', '2022-11-03', '2022-11-03 13:45:33'),
(null, '17'/*6*/, '7'/*8*/, '2022-10-05', '06:29:00', '3', '1', 'campeonato', '1',1, 'spoon FC', '2022-11-03', '2022-11-03 13:46:02'),
(null, '9'/*5*/, '19'/*7*/, '2022-10-05', '06:29:00', '2', '0', 'campeonato', '1',1, 'Cesto Team', '2022-11-03', '2022-11-03 13:46:31'),
(null, '9'/*5*/, '17'/*6*/, '2022-11-04', '05:00:00', '1', '0', 'campeonato', '1',1, 'Cesto Team', '2022-11-03', '2022-11-03 13:54:58'),

#campeonato8ok
#id_partido, id_equipoLocal_partido, id_equipoVisitante_partido, dia_partido, hora_partido, anotacionLocal_partido, anotacionVisitante_partido, tipo_partido, disputado_partido, verificado_partido, ganador_partido, date_created_partido, date_updated_partido
(null, '7'/*1*/, '17'/*6*/, '2022-10-03', '06:29:00', '2', '0', 'campeonato', '1',1, 'FSM', '2022-11-03', '2022-11-03 13:45:33'),
(null, '7'/*1*/, '18'/*4*/, '2022-10-05', '06:29:00', '3', '2', 'campeonato', '1',1, 'FSM', '2022-11-03', '2022-11-03 13:46:02'),
(null, '7'/*1*/, '21'/*2*/, '2022-10-05', '06:29:00', '1', '0', 'campeonato', '1',1, 'FSM', '2022-11-03', '2022-11-03 13:46:31'),
(null, '21'/*2*/, '20'/*5*/, '2022-11-04', '05:00:00', '4', '3', 'campeonato', '1',1, 'CD bed', '2022-11-03', '2022-11-03 13:54:58'),
(null, '21'/*2*/, '18'/*4*/, '2022-10-03', '06:29:00', '2', '1', 'campeonato', '1',1, 'CD bed', '2022-11-03', '2022-11-03 13:45:33'),
(null, '9'/*3*/, '19'/*7*/, '2022-10-05', '06:29:00', '2', '0', 'campeonato', '1',1, 'Cesto Team', '2022-11-03', '2022-11-03 13:46:02'),
(null, '9'/*3*/, '18'/*4*/, '2022-10-05', '06:29:00', '1', '0', 'campeonato', '1',1, 'Cesto Team', '2022-11-03', '2022-11-03 13:46:31'),
(null, '18'/*4*/, '11'/*8*/, '2022-11-04', '05:00:00', '5', '0', 'campeonato', '1',1, 'CD pen', '2022-11-03', '2022-11-03 13:54:58'),
(null, '19'/*7*/, '11'/*8*/, '2022-10-03', '06:29:00', '4', '0', 'campeonato', '1',1, 'Los Errantes', '2022-11-03', '2022-11-03 13:45:33'),
(null, '17'/*6*/, '11'/*8*/, '2022-10-05', '06:29:00', '3', '1', 'campeonato', '1',1, 'CD bark', '2022-11-03', '2022-11-03 13:46:02'),
(null, '20'/*5*/, '19'/*7*/, '2022-10-05', '06:29:00', '2', '0', 'campeonato', '1',1, 'CD drum', '2022-11-03', '2022-11-03 13:46:31'),
(null, '20'/*5*/, '17'/*6*/, '2022-11-04', '05:00:00', '1', '0', 'campeonato', '1',1, 'CD drum', '2022-11-03', '2022-11-03 13:54:58'),

#campeonato9
#id_partido, id_equipoLocal_partido, id_equipoVisitante_partido, dia_partido, hora_partido, anotacionLocal_partido, anotacionVisitante_partido, tipo_partido, disputado_partido, verificado_partido, ganador_partido, date_created_partido, date_updated_partido
(null, '5'/*1*/, '13'/*6*/, '2022-10-03', '06:29:00', '2', '0', 'campeonato', '1',1, 'Full Team FC', '2022-11-03', '2022-11-03 13:45:33'),
(null, '5'/*1*/, '4'/*4*/, '2022-10-05', '06:29:00', '3', '2', 'campeonato', '1',1, 'Full Team FC', '2022-11-03', '2022-11-03 13:46:02'),
(null, '5'/*1*/, '1'/*2*/, '2022-10-05', '06:29:00', '1', '0', 'campeonato', '1',1, 'Full Team FC', '2022-11-03', '2022-11-03 13:46:31'),
(null, '1'/*2*/, '12'/*5*/, '2022-11-04', '05:00:00', '4', '3', 'campeonato', '1',1, 'Club Antartico de Football', '2022-11-03', '2022-11-03 13:54:58'),
(null, '1'/*2*/, '2'/*4*/, '2022-10-03', '06:29:00', '2', '1', 'campeonato', '1',1, 'Club Antartico de Football', '2022-11-03', '2022-11-03 13:45:33'),
(null, '2'/*3*/, '14'/*7*/, '2022-10-05', '06:29:00', '2', '0', 'campeonato', '1',1, 'Taurus FC', '2022-11-03', '2022-11-03 13:46:02'),
(null, '2'/*3*/, '4'/*4*/, '2022-10-05', '06:29:00', '1', '0', 'campeonato', '1',1, 'Taurus FC', '2022-11-03', '2022-11-03 13:46:31'),
(null, '4'/*4*/, '3'/*8*/, '2022-11-04', '05:00:00', '5', '0', 'campeonato', '1',1, 'Dream FC', '2022-11-03', '2022-11-03 13:54:58'),
(null, '14'/*7*/, '3'/*8*/, '2022-10-03', '06:29:00', '4', '0', 'campeonato', '1',1, 'bat FC', '2022-11-03', '2022-11-03 13:45:33'),
(null, '13'/*6*/, '3'/*8*/, '2022-10-05', '06:29:00', '3', '1', 'campeonato', '1',1, 'spoon FC', '2022-11-03', '2022-11-03 13:46:02'),
(null, '12'/*5*/, '14'/*7*/, '2022-10-05', '06:29:00', '2', '0', 'campeonato', '1',1, 'TeamTupla FC', '2022-11-03', '2022-11-03 13:46:31'),
(null, '12'/*5*/, '13'/*6*/, '2022-11-04', '05:00:00', '1', '0', 'campeonato', '1',1, 'TeamTupla FC', '2022-11-03', '2022-11-03 13:54:58'),

#campeonato10
#id_partido, id_equipoLocal_partido, id_equipoVisitante_partido, dia_partido, hora_partido, anotacionLocal_partido, anotacionVisitante_partido, tipo_partido, disputado_partido, verificado_partido, ganador_partido, date_created_partido, date_updated_partido
(null, '5'/*1*/, '13'/*6*/, '2022-10-03', '06:29:00', '2', '0', 'campeonato', '1',1, 'Full Team FC', '2022-11-03', '2022-11-03 13:45:33'),
(null, '5'/*1*/, '4'/*4*/, '2022-10-05', '06:29:00', '3', '2', 'campeonato', '1',1, 'Full Team FC', '2022-11-03', '2022-11-03 13:46:02'),
(null, '5'/*1*/, '1'/*2*/, '2022-10-05', '06:29:00', '1', '0', 'campeonato', '1',1, 'Full Team FC', '2022-11-03', '2022-11-03 13:46:31'),
(null, '1'/*2*/, '12'/*5*/, '2022-11-04', '05:00:00', '4', '3', 'campeonato', '1',1, 'Club Antartico de Football', '2022-11-03', '2022-11-03 13:54:58'),
(null, '1'/*2*/, '2'/*4*/, '2022-10-03', '06:29:00', '2', '1', 'campeonato', '1',1, 'Club Antartico de Football', '2022-11-03', '2022-11-03 13:45:33'),
(null, '2'/*3*/, '14'/*7*/, '2022-10-05', '06:29:00', '2', '0', 'campeonato', '1',1, 'Taurus FC', '2022-11-03', '2022-11-03 13:46:02'),
(null, '2'/*3*/, '4'/*4*/, '2022-10-05', '06:29:00', '1', '0', 'campeonato', '1',1, 'Taurus FC', '2022-11-03', '2022-11-03 13:46:31'),
(null, '4'/*4*/, '3'/*8*/, '2022-11-04', '05:00:00', '5', '0', 'campeonato', '1',1, 'Dream FC', '2022-11-03', '2022-11-03 13:54:58'),
(null, '14'/*7*/, '3'/*8*/, '2022-10-03', '06:29:00', '4', '0', 'campeonato', '1',1, 'bat FC', '2022-11-03', '2022-11-03 13:45:33'),
(null, '13'/*6*/, '3'/*8*/, '2022-10-05', '06:29:00', '3', '1', 'campeonato', '1',1, 'spoon FC', '2022-11-03', '2022-11-03 13:46:02'),
(null, '12'/*5*/, '14'/*7*/, '2022-10-05', '06:29:00', '2', '0', 'campeonato', '1',1, 'TeamTupla FC', '2022-11-03', '2022-11-03 13:46:31'),
(null, '12'/*5*/, '13'/*6*/, '2022-11-04', '05:00:00', '1', '0', 'campeonato', '1',1, 'TeamTupla FC', '2022-11-03', '2022-11-03 13:54:58'),

#campeonato12
#id_partido, id_equipoLocal_partido, id_equipoVisitante_partido, dia_partido, hora_partido, anotacionLocal_partido, anotacionVisitante_partido, tipo_partido, disputado_partido, verificado_partido, ganador_partido, date_created_partido, date_updated_partido
(null, '5'/*1*/, '13'/*6*/, '2022-10-03', '06:29:00', '2', '0', 'campeonato', '1',1, 'Full Team FC', '2022-11-03', '2022-11-03 13:45:33'),
(null, '5'/*1*/, '4'/*4*/, '2022-10-05', '06:29:00', '3', '2', 'campeonato', '1',1, 'Full Team FC', '2022-11-03', '2022-11-03 13:46:02'),
(null, '5'/*1*/, '1'/*2*/, '2022-10-05', '06:29:00', '1', '0', 'campeonato', '1',1, 'Full Team FC', '2022-11-03', '2022-11-03 13:46:31'),
(null, '1'/*2*/, '12'/*5*/, '2022-11-04', '05:00:00', '4', '3', 'campeonato', '1',1, 'Club Antartico de Football', '2022-11-03', '2022-11-03 13:54:58'),
(null, '1'/*2*/, '2'/*4*/, '2022-10-03', '06:29:00', '2', '1', 'campeonato', '1',1, 'Club Antartico de Football', '2022-11-03', '2022-11-03 13:45:33'),
(null, '2'/*3*/, '14'/*7*/, '2022-10-05', '06:29:00', '2', '0', 'campeonato', '1',1, 'Taurus FC', '2022-11-03', '2022-11-03 13:46:02'),
(null, '2'/*3*/, '4'/*4*/, '2022-10-05', '06:29:00', '1', '0', 'campeonato', '1',1, 'Taurus FC', '2022-11-03', '2022-11-03 13:46:31'),
(null, '4'/*4*/, '3'/*8*/, '2022-11-04', '05:00:00', '5', '0', 'campeonato', '1',1, 'Dream FC', '2022-11-03', '2022-11-03 13:54:58'),
(null, '14'/*7*/, '3'/*8*/, '2022-10-03', '06:29:00', '4', '0', 'campeonato', '1',1, 'bat FC', '2022-11-03', '2022-11-03 13:45:33'),
(null, '13'/*6*/, '3'/*8*/, '2022-10-05', '06:29:00', '3', '1', 'campeonato', '1',1, 'spoon FC', '2022-11-03', '2022-11-03 13:46:02'),
(null, '12'/*5*/, '14'/*7*/, '2022-10-05', '06:29:00', '2', '0', 'campeonato', '1',1, 'TeamTupla FC', '2022-11-03', '2022-11-03 13:46:31'),
(null, '12'/*5*/, '13'/*6*/, '2022-11-04', '05:00:00', '1', '0', 'campeonato', '1',1, 'TeamTupla FC', '2022-11-03', '2022-11-03 13:54:58'),

#campeonato13
#id_partido, id_equipoLocal_partido, id_equipoVisitante_partido, dia_partido, hora_partido, anotacionLocal_partido, anotacionVisitante_partido, tipo_partido, disputado_partido, verificado_partido, ganador_partido, date_created_partido, date_updated_partido
(null, '5'/*1*/, '13'/*6*/, '2022-10-03', '06:29:00', '2', '0', 'campeonato', '1',1, 'Full Team FC', '2022-11-03', '2022-11-03 13:45:33'),
(null, '5'/*1*/, '4'/*4*/, '2022-10-05', '06:29:00', '3', '2', 'campeonato', '1',1, 'Full Team FC', '2022-11-03', '2022-11-03 13:46:02'),
(null, '5'/*1*/, '1'/*2*/, '2022-10-05', '06:29:00', '1', '0', 'campeonato', '1',1, 'Full Team FC', '2022-11-03', '2022-11-03 13:46:31'),
(null, '1'/*2*/, '12'/*5*/, '2022-11-04', '05:00:00', '4', '3', 'campeonato', '1',1, 'Club Antartico de Football', '2022-11-03', '2022-11-03 13:54:58'),
(null, '1'/*2*/, '2'/*4*/, '2022-10-03', '06:29:00', '2', '1', 'campeonato', '1',1, 'Club Antartico de Football', '2022-11-03', '2022-11-03 13:45:33'),
(null, '2'/*3*/, '14'/*7*/, '2022-10-05', '06:29:00', '2', '0', 'campeonato', '1',1, 'Taurus FC', '2022-11-03', '2022-11-03 13:46:02'),
(null, '2'/*3*/, '4'/*4*/, '2022-10-05', '06:29:00', '1', '0', 'campeonato', '1',1, 'Taurus FC', '2022-11-03', '2022-11-03 13:46:31'),
(null, '4'/*4*/, '3'/*8*/, '2022-11-04', '05:00:00', '5', '0', 'campeonato', '1',1, 'Dream FC', '2022-11-03', '2022-11-03 13:54:58'),
(null, '14'/*7*/, '3'/*8*/, '2022-10-03', '06:29:00', '4', '0', 'campeonato', '1',1, 'bat FC', '2022-11-03', '2022-11-03 13:45:33'),
(null, '13'/*6*/, '3'/*8*/, '2022-10-05', '06:29:00', '3', '1', 'campeonato', '1',1, 'spoon FC', '2022-11-03', '2022-11-03 13:46:02'),
(null, '12'/*5*/, '14'/*7*/, '2022-10-05', '06:29:00', '2', '0', 'campeonato', '1',1, 'TeamTupla FC', '2022-11-03', '2022-11-03 13:46:31'),
(null, '12'/*5*/, '13'/*6*/, '2022-11-04', '05:00:00', '1', '0', 'campeonato', '1',1, 'TeamTupla FC', '2022-11-03', '2022-11-03 13:54:58'),

#campeonato14
#id_partido, id_equipoLocal_partido, id_equipoVisitante_partido, dia_partido, hora_partido, anotacionLocal_partido, anotacionVisitante_partido, tipo_partido, disputado_partido, verificado_partido, ganador_partido, date_created_partido, date_updated_partido
(null, '5'/*1*/, '13'/*6*/, '2022-10-03', '06:29:00', '2', '0', 'campeonato', '1',1, 'Full Team FC', '2022-11-03', '2022-11-03 13:45:33'),
(null, '5'/*1*/, '4'/*4*/, '2022-10-05', '06:29:00', '3', '2', 'campeonato', '1',1, 'Full Team FC', '2022-11-03', '2022-11-03 13:46:02'),
(null, '5'/*1*/, '1'/*2*/, '2022-10-05', '06:29:00', '1', '0', 'campeonato', '1',1, 'Full Team FC', '2022-11-03', '2022-11-03 13:46:31'),
(null, '1'/*2*/, '12'/*5*/, '2022-11-04', '05:00:00', '4', '3', 'campeonato', '1',1, 'Club Antartico de Football', '2022-11-03', '2022-11-03 13:54:58'),
(null, '1'/*2*/, '2'/*4*/, '2022-10-03', '06:29:00', '2', '1', 'campeonato', '1',1, 'Club Antartico de Football', '2022-11-03', '2022-11-03 13:45:33'),
(null, '2'/*3*/, '14'/*7*/, '2022-10-05', '06:29:00', '2', '0', 'campeonato', '1',1, 'Taurus FC', '2022-11-03', '2022-11-03 13:46:02'),
(null, '2'/*3*/, '4'/*4*/, '2022-10-05', '06:29:00', '1', '0', 'campeonato', '1',1, 'Taurus FC', '2022-11-03', '2022-11-03 13:46:31'),
(null, '4'/*4*/, '3'/*8*/, '2022-11-04', '05:00:00', '5', '0', 'campeonato', '1',1, 'Dream FC', '2022-11-03', '2022-11-03 13:54:58'),
(null, '14'/*7*/, '3'/*8*/, '2022-10-03', '06:29:00', '4', '0', 'campeonato', '1',1, 'bat FC', '2022-11-03', '2022-11-03 13:45:33'),
(null, '13'/*6*/, '3'/*8*/, '2022-10-05', '06:29:00', '3', '1', 'campeonato', '1',1, 'spoon FC', '2022-11-03', '2022-11-03 13:46:02'),
(null, '12'/*5*/, '14'/*7*/, '2022-10-05', '06:29:00', '2', '0', 'campeonato', '1',1, 'TeamTupla FC', '2022-11-03', '2022-11-03 13:46:31'),
(null, '12'/*5*/, '13'/*6*/, '2022-11-04', '05:00:00', '1', '0', 'campeonato', '1',1, 'TeamTupla FC', '2022-11-03', '2022-11-03 13:54:58'),

#campeonato15
#id_partido, id_equipoLocal_partido, id_equipoVisitante_partido, dia_partido, hora_partido, anotacionLocal_partido, anotacionVisitante_partido, tipo_partido, disputado_partido, verificado_partido, ganador_partido, date_created_partido, date_updated_partido
(null, '5'/*1*/, '13'/*6*/, '2022-10-03', '06:29:00', '2', '0', 'campeonato', '1',1, 'Full Team FC', '2022-11-03', '2022-11-03 13:45:33'),
(null, '5'/*1*/, '4'/*4*/, '2022-10-05', '06:29:00', '3', '2', 'campeonato', '1',1, 'Full Team FC', '2022-11-03', '2022-11-03 13:46:02'),
(null, '5'/*1*/, '1'/*2*/, '2022-10-05', '06:29:00', '1', '0', 'campeonato', '1',1, 'Full Team FC', '2022-11-03', '2022-11-03 13:46:31'),
(null, '1'/*2*/, '12'/*5*/, '2022-11-04', '05:00:00', '4', '3', 'campeonato', '1',1, 'Club Antartico de Football', '2022-11-03', '2022-11-03 13:54:58'),
(null, '1'/*2*/, '2'/*4*/, '2022-10-03', '06:29:00', '2', '1', 'campeonato', '1',1, 'Club Antartico de Football', '2022-11-03', '2022-11-03 13:45:33'),
(null, '2'/*3*/, '14'/*7*/, '2022-10-05', '06:29:00', '2', '0', 'campeonato', '1',1, 'Taurus FC', '2022-11-03', '2022-11-03 13:46:02'),
(null, '2'/*3*/, '4'/*4*/, '2022-10-05', '06:29:00', '1', '0', 'campeonato', '1',1, 'Taurus FC', '2022-11-03', '2022-11-03 13:46:31'),
(null, '4'/*4*/, '3'/*8*/, '2022-11-04', '05:00:00', '5', '0', 'campeonato', '1',1, 'Dream FC', '2022-11-03', '2022-11-03 13:54:58'),
(null, '14'/*7*/, '3'/*8*/, '2022-10-03', '06:29:00', '4', '0', 'campeonato', '1',1, 'bat FC', '2022-11-03', '2022-11-03 13:45:33'),
(null, '13'/*6*/, '3'/*8*/, '2022-10-05', '06:29:00', '3', '1', 'campeonato', '1',1, 'spoon FC', '2022-11-03', '2022-11-03 13:46:02'),
(null, '12'/*5*/, '14'/*7*/, '2022-10-05', '06:29:00', '2', '0', 'campeonato', '1',1, 'TeamTupla FC', '2022-11-03', '2022-11-03 13:46:31'),
(null, '12'/*5*/, '13'/*6*/, '2022-11-04', '05:00:00', '1', '0', 'campeonato', '1',1, 'TeamTupla FC', '2022-11-03', '2022-11-03 13:54:58');

select * from partidos;
select * from corresponden;
insert into corresponden
values

('1', '5'/*1*/, '13'/*6*/, '2', '2022-11-04', '2022-11-04 01:16:51'),
('2', '5'/*1*/, '4'/*4*/, '2', '2022-11-04', '2022-11-04 01:16:51'),
('3', '5'/*1*/, '1'/*2*/, '2', '2022-11-04', '2022-11-04 01:16:51'),
('4', '1'/*2*/, '12'/*5*/, '2', '2022-11-04', '2022-11-04 01:16:51'),
('5', '1'/*2*/, '2'/*4*/, '2', '2022-11-04', '2022-11-04 01:16:51'),
('6', '2'/*3*/, '14'/*7*/, '2', '2022-11-04', '2022-11-04 01:16:51'),
('7', '2'/*3*/, '4'/*4*/, '2', '2022-11-04', '2022-11-04 01:16:51'),
('8', '4'/*4*/, '3'/*8*/, '2', '2022-11-04', '2022-11-04 01:16:51'),
('9', '14'/*7*/, '3'/*8*/, '2', '2022-11-04', '2022-11-04 01:16:51'),
('10', '13'/*6*/, '3'/*8*/, '2', '2022-11-04', '2022-11-04 01:16:51'),
('11', '12'/*5*/, '14'/*7*/, '2', '2022-11-04', '2022-11-04 01:16:51'),
('12', '12'/*5*/, '13'/*6*/, '2', '2022-11-04', '2022-11-04 01:16:51'),

#campeonato3ok


('13', '12'/*1*/, '5'/*6*/, '3', '2022-11-04', '2022-11-04 01:16:51'),
('14', '12'/*1*/, '2'/*4*/, '3', '2022-11-04', '2022-11-04 01:16:51'),
('15', '12'/*1*/, '1'/*2*/, '3', '2022-11-04', '2022-11-04 01:16:51'),
('16', '1'/*2*/, '4'/*5*/, '3', '2022-11-04', '2022-11-04 01:16:51'),
('17', '1'/*2*/, '2'/*4*/, '3', '2022-11-04', '2022-11-04 01:16:51'),
('18', '3'/*3*/, '13'/*7*/, '3', '2022-11-04', '2022-11-04 01:16:51'),
('19', '3'/*3*/, '2'/*4*/, '3', '2022-11-04', '2022-11-04 01:16:51'),
('20', '2'/*4*/, '14'/*8*/, '3', '2022-11-04', '2022-11-04 01:16:51'),
('21', '13'/*7*/, '14'/*8*/, '3', '2022-11-04', '2022-11-04 01:16:51'),
('22', '5'/*6*/, '14'/*8*/, '3', '2022-11-04', '2022-11-04 01:16:51'),
('23', '4'/*5*/, '13'/*7*/, '3', '2022-11-04', '2022-11-04 01:16:51'),
('24', '4'/*5*/, '5'/*6*/, '3', '2022-11-04', '2022-11-04 01:16:51'),

#campeonato4ok

('25', '12'/*1*/, '4'/*6*/, '4', '2022-11-04', '2022-11-04 01:16:51'),
('26', '12'/*1*/, '5'/*4*/, '4', '2022-11-04', '2022-11-04 01:16:51'),
('27', '12'/*1*/, '14'/*2*/, '4', '2022-11-04', '2022-11-04 01:16:51'),
('24', '14'/*2*/, '3'/*5*/, '4', '2022-11-04', '2022-11-04 01:16:51'),
('25', '14'/*2*/, '5'/*4*/, '4', '2022-11-04', '2022-11-04 01:16:51'),
('26', '13'/*3*/, '2'/*7*/, '4', '2022-11-04', '2022-11-04 01:16:51'),
('27', '13'/*3*/, '5'/*4*/, '4', '2022-11-04', '2022-11-04 01:16:51'),
('24', '5'/*4*/, '1'/*8*/, '4', '2022-11-04', '2022-11-04 01:16:51'),
('25', '2'/*7*/, '1'/*8*/, '4', '2022-11-04', '2022-11-04 01:16:51'),
('26', '4'/*6*/, '1'/*8*/, '4', '2022-11-04', '2022-11-04 01:16:51'),
('27', '3'/*5*/, '2'/*7*/, '4', '2022-11-04', '2022-11-04 01:16:51'),
('28', '3'/*5*/, '4'/*6*/, '4', '2022-11-04', '2022-11-04 01:16:51'),

#campeonato5ok

('29', '12'/*1*/, '13'/*6*/, '5', '2022-11-04', '2022-11-04 01:16:51'),
('30', '12'/*1*/, '5'/*4*/, '5', '2022-11-04', '2022-11-04 01:16:51'),
('31', '12'/*1*/, '1'/*2*/, '5', '2022-11-04', '2022-11-04 01:16:51'),
('32', '1'/*2*/, '4'/*5*/, '5', '2022-11-04', '2022-11-04 01:16:51'),
('33', '1'/*2*/, '5'/*4*/, '5', '2022-11-04', '2022-11-04 01:16:51'),
('34', '14'/*3*/, '2'/*7*/, '5', '2022-11-04', '2022-11-04 01:16:51'),
('35', '14'/*3*/, '5'/*4*/, '5', '2022-11-04', '2022-11-04 01:16:51'),
('36', '5'/*4*/, '3'/*8*/, '5', '2022-11-04', '2022-11-04 01:16:51'),
('37', '2'/*7*/, '3'/*8*/, '5', '2022-11-04', '2022-11-04 01:16:51'),
('38', '13'/*6*/, '3'/*8*/, '5', '2022-11-04', '2022-11-04 01:16:51'),
('39', '4'/*5*/, '2'/*7*/, '5', '2022-11-04', '2022-11-04 01:16:51'),
('40', '4'/*5*/, '13'/*6*/, '5', '2022-11-04', '2022-11-04 01:16:51'),

#campeonato7ok

('41', '11'/*1*/, '17'/*6*/, '7', '2022-11-04', '2022-11-04 01:16:51'),
('42', '11'/*1*/, '18'/*4*/, '7', '2022-11-04', '2022-11-04 01:16:51'),
('43', '11'/*1*/, '21'/*2*/, '7', '2022-11-04', '2022-11-04 01:16:51'),
('44', '21'/*2*/, '9'/*5*/, '7', '2022-11-04', '2022-11-04 01:16:51'),
('45', '21'/*2*/, '18'/*4*/, '7', '2022-11-04', '2022-11-04 01:16:51'),
('46', '20'/*3*/, '19'/*7*/, '7', '2022-11-04', '2022-11-04 01:16:51'),
('47', '20'/*3*/, '18'/*4*/, '7', '2022-11-04', '2022-11-04 01:16:51'),
('48', '18'/*4*/, '7'/*8*/, '7', '2022-11-04', '2022-11-04 01:16:51'),
('49', '19'/*7*/, '7'/*8*/, '7', '2022-11-04', '2022-11-04 01:16:51'),
('50', '17'/*6*/, '7'/*8*/, '7', '2022-11-04', '2022-11-04 01:16:51'),
('51', '9'/*5*/, '19'/*7*/, '7', '2022-11-04', '2022-11-04 01:16:51'),
('52', '9'/*5*/, '17'/*6*/, '7', '2022-11-04', '2022-11-04 01:16:51'),

#campeonato8ok

('53', '7'/*1*/, '17'/*6*/, '8', '2022-11-04', '2022-11-04 01:16:51'),
('54', '7'/*1*/, '18'/*4*/, '8', '2022-11-04', '2022-11-04 01:16:51'),
('55', '7'/*1*/, '21'/*2*/, '8', '2022-11-04', '2022-11-04 01:16:51'),
('56', '21'/*2*/, '20'/*5*/, '8', '2022-11-04', '2022-11-04 01:16:51'),
('57', '21'/*2*/, '18'/*4*/, '8', '2022-11-04', '2022-11-04 01:16:51'),
('58', '9'/*3*/, '19'/*7*/, '8', '2022-11-04', '2022-11-04 01:16:51'),
('59', '9'/*3*/, '18'/*4*/, '8', '2022-11-04', '2022-11-04 01:16:51'),
('60', '18'/*4*/, '11'/*8*/, '8', '2022-11-04', '2022-11-04 01:16:51'),
('61', '19'/*7*/, '11'/*8*/, '8', '2022-11-04', '2022-11-04 01:16:51'),
('62', '17'/*6*/, '11'/*8*/, '8', '2022-11-04', '2022-11-04 01:16:51'),
('63', '20'/*5*/, '19'/*7*/, '8', '2022-11-04', '2022-11-04 01:16:51'),
('64', '20'/*5*/, '17'/*6*/, '8', '2022-11-04', '2022-11-04 01:16:51');

;