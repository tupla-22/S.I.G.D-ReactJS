create table roles(
	
    id_rol int primary key auto_increment,
    nombre_rol varchar(40),
    date_created_rol  timestamp default current_timestamp,
    date_updated_rol timestamp default current_timestamp ON UPDATE CURRENT_TIMESTAMP
    
    );
    
create table usuarios(

	id_usuario int auto_increment primary key,
    ci_usuario int(8) unique,
    id_rol_usuario int,
    primerNombre_usuario varchar(50) not null,
    segundoNombre_usuario varchar(50) default null,
    primerApellido_usuario varchar(50) not null,
    segundoApellido_usuario varchar(50) default null,
    email_usuario varchar(50) not null unique,
    fechaNac_usuario  timestamp  not null,
    password_usuario varchar(200) not null,
    verificado_usuario bool default false,
    fotoPerfil_usuario longtext, 
    carneSalud_usuario date,
    certificadoAF_usuario date,
    token_usuario text default null,
    token_exp_usuario int default null,
    foreign key (id_rol_usuario) references roles(id_rol),
    date_created_usuario  timestamp  default current_timestamp,
    date_updated_usuario timestamp default current_timestamp ON UPDATE CURRENT_TIMESTAMP
    
    );

create table telefonos(
	id_telefono varchar(30),
    id_usuario_telefono int,
    date_created_telefono  timestamp  default current_timestamp,
    date_updated_telefono timestamp default current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    primary key(id_telefono,id_usuario_telefono),
    foreign key (id_usuario_telefono) references usuarios(id_usuario)

);

create table deportes(
	id_deporte varchar(40) primary key,
	foto_deporte longtext,
    date_created_deporte  timestamp  default current_timestamp,
    date_updated_deporte timestamp default current_timestamp ON UPDATE CURRENT_TIMESTAMP
    
);

create table ligas(
	id_liga int primary key auto_increment,
    nombre_liga varchar(40),
    id_deporte_liga varchar(40),
    date_created_liga  timestamp  default current_timestamp,
    date_updated_liga timestamp default current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    foreign key (id_deporte_liga) references deportes(id_deporte)
    
);

create table equipos(
	id_equipo int primary key auto_increment,
    visible_equipo bool default true,
    escudo_equipo longtext,
    nombre_equipo varchar(40) unique,
    id_liga_equipo int,
    id_deporte_equipo varchar(40),
    id_usuario_equipo int,
    date_created_equipo  timestamp  default current_timestamp,
    date_updated_equipo timestamp default current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    foreign key (id_liga_equipo) references ligas(id_liga),
    foreign key (id_deporte_equipo) references deportes(id_deporte),
    foreign key (id_usuario_equipo) references usuarios(id_usuario)
);

create table fotosEquipos(
id_fotoEquipo longtext,
id_equipo_fotoEquipo int primary key,
foreign key (id_equipo_fotoEquipo) references equipos(id_equipo)
);

create table cantidadEquiposDeportes(
	id_deporte varchar(40) primary key,
    cantidad_equipo int default 0,
    foreign key (id_deporte) references deportes(id_deporte)
);

create table fichasJugadores (
	id_fichaJugador int primary key auto_increment,
    altura_fichaJugador int(3),#cm
    peso_fichaJugador int(6),#g
    minutosJugados_fichaJugador int,
    lateralidad_fichaJugador enum("zurdo","diestro","ambidiestro"),
    date_created_fichaJugador  timestamp  default current_timestamp,
    date_updated_fichaJugador timestamp default current_timestamp ON UPDATE CURRENT_TIMESTAMP
);

create table pertenecen(
	
    id_equipo_pertenece int,
    id_fichaJugador_pertenece int,
    numeroCamiseta_pertenece int(2),
    date_created_pertenece  timestamp  default current_timestamp,
    date_updated_pertenece timestamp default current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    primary key (id_equipo_pertenece, id_fichaJugador_pertenece),
    foreign key (id_equipo_pertenece) references equipos(id_equipo), 
    foreign key (id_fichaJugador_pertenece) references fichasJugadores(id_fichaJugador)

);

create table posiciones(
	id_posicion varchar(40), 
	id_fichaJugador_posicion int,
    date_created_posicion  timestamp  default current_timestamp,
    date_updated_posicion timestamp default current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    primary key (id_posicion, id_fichaJugador_posicion),
    foreign key (id_fichaJugador_posicion) references fichasJugadores(id_fichaJugador)
    
);

create table tienen(
	id_usuario_tiene int primary key,
    id_fichaJugador_tiene int,
    date_created_tiene  timestamp  default current_timestamp,
    date_updated_tiene timestamp default current_timestamp ON UPDATE CURRENT_TIMESTAMP
);

create table partidos(
	id_partido int auto_increment,
    id_equipoLocal_partido int,
    id_equipoVisitante_partido int,
    dia_partido date,
    hora_partido time,
    anotacionLocal_partido int,
    anotacionVisitante_partido int,
    tipo_partido varchar(40),
    disputado_partido bool default 0,
    verificado_partido bool default 0,
    ganador_partido varchar(40) default null,
    date_created_partido  timestamp  default current_timestamp,
    date_updated_partido timestamp default current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    primary key (id_partido,id_equipoLocal_partido, id_equipoVisitante_partido),
    foreign key (id_equipoLocal_partido) references equipos(id_equipo),
	foreign key ( id_equipoVisitante_partido) references equipos(id_equipo)
);

create table fotosPartidos(
id_fotoPartido longtext,
id_partido_fotoPartido int primary key,
foreign key (id_partido_fotoPartido) references partidos(id_partido)
);

create table campeonatos(
	id_campeonato int primary key auto_increment,
    campeon_campeonato varchar(50),
    tipo_campeonato varchar(40),
    nombre_campeonato varchar(40),
    deporte_campeonato varchar(40),
    id_liga_campeonato int,
    fechaInicio_campeonato  timestamp  not null,
    fechaFin_campeonato  timestamp  not null,
    date_created_campeonato  timestamp  default current_timestamp,
    date_updated_campeonato timestamp default current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    foreign key (id_liga_campeonato) references ligas(id_liga)
);

create table fotosCampeonatos(
id_fotoCampeonato longtext,
id_campeonato_fotoCampeonato int primary key,
foreign key (id_campeonato_fotoCampeonato) references campeonatos(id_campeonato)
);

create table compiten(
	id_campeonato_compite int,
    id_equipo_compite int,
    punto_compite int,
    date_created_compite  timestamp  default current_timestamp,
    date_updated_compite timestamp default current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    primary key(id_campeonato_compite, id_equipo_compite),
	foreign key (id_campeonato_compite) references campeonatos(id_campeonato),
	foreign key (id_equipo_compite) references equipos(id_equipo)
);

create table corresponden(
	id_partido_corresponde int,#poner trigger
    id_equipoLocal_corresponde int,
    id_equipoVisitante_corresponde int, 
    id_campeonato_corresponde int,
    date_created_corresponde  timestamp  default current_timestamp,
    date_updated_corresponde timestamp default current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    primary key (id_partido_corresponde, id_equipoLocal_corresponde, id_equipoVisitante_corresponde),
    foreign key (id_partido_corresponde) references partidos(id_partido),
    foreign key (id_equipoLocal_corresponde) references partidos(id_equipoLocal_partido),
    foreign key (id_equipoVisitante_corresponde) references partidos(id_equipoVisitante_partido),
    foreign key (id_campeonato_corresponde) references campeonatos(id_campeonato)
);

create table tiposEstadisticas(
	id_tipoEstadistica varchar(40) primary key,
    valor_tipoEstadistica int,
    date_created_tipoEstadistica  timestamp  default current_timestamp,
    date_updated_tipoEstadistica timestamp default current_timestamp ON UPDATE CURRENT_TIMESTAMP
);

create table conciben(
	id_deporte_concibe varchar(40),
    id_tipoEstadistica_concibe varchar(40),
    icono_tipoEstadistica longtext,
    date_created_concibe  timestamp  default current_timestamp,
    date_updated_concibe timestamp default current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    primary key (id_deporte_concibe,id_tipoEstadistica_concibe),
    foreign key (id_deporte_concibe) references deportes(id_deporte),
    foreign key (id_tipoEstadistica_concibe) references tiposEstadisticas(id_tipoEstadistica)
);

create table estadisticas(
	id_estadistica int primary key auto_increment,
    valor_estadistica int,
    tipo_estadistica varchar(40),
    fecha_estadistica datetime,
    verificado_estadistica bool,
    descripcion_estadistica text,
    id_fichaJugador_estadistica int default null,
    id_equipo_estadistica int,
    id_usuario_estadistica int,
    id_juez_estadistica int,
    id_partido_estadistica int,
    date_created_estadistica  timestamp  default current_timestamp,
    date_updated_estadistica timestamp default current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    foreign key (id_fichaJugador_estadistica) references pertenecen(id_fichaJugador_pertenece),
    foreign key (id_equipo_estadistica) references pertenecen(id_equipo_pertenece),
    foreign key (id_usuario_estadistica) references usuarios(id_usuario),
    foreign key (id_juez_estadistica) references usuarios(id_usuario),
    foreign key (id_partido_estadistica) references partidos(id_partido),
    foreign key (tipo_estadistica) references tiposEstadisticas(id_tipoEstadistica)
);

CREATE TRIGGER before_ligas_delete
before DELETE
ON ligas FOR EACH ROW
update equipos 
set id_liga_equipo=null
where id_liga_equipo=old.id_liga;

CREATE TRIGGER before_deporte_delete
before DELETE
ON deportes FOR EACH ROW
update equipos 
set id_deporte_equipo=null
where id_deporte_equipo=old.id_deporte;

CREATE TRIGGER before_usuario_delete
before DELETE
ON usuarios FOR EACH ROW
update equipos 
set id_usuario_equipo=null
where id_usuario_equipo=old.id_usuario;


CREATE TRIGGER before_equipo_delete
before DELETE
ON equipos FOR EACH ROW
delete from fotosEquipos 
where id_equipo_fotoEquipo = old.id_equipo;


CREATE TRIGGER before_deporte_delete_cantidadEquiposDeportes
before DELETE
ON deportes FOR EACH ROW
delete from cantidadEquiposDeportes
where id_deporte = old.id_deporte;


CREATE TRIGGER before_equipo_delete_pertenecen
before DELETE
ON equipos FOR EACH ROW
delete from pertenecen
where id_equipo_pertenece = old.id_equipo;


CREATE TRIGGER before_fichaJugador_delete_pertenecen
before DELETE
ON fichasJugadores FOR EACH ROW
delete from pertenecen
where id_fichaJugador_pertenece=old.id_fichaJugador;

CREATE TRIGGER before_fichaJugador_delete_pocisiones
before DELETE
ON fichasJugadores FOR EACH ROW
delete from posiciones
where id_fichaJugador_posicion=old.id_fichaJugador;


CREATE TRIGGER before_equipoLocal_delete_partidos
before DELETE
ON equipos FOR EACH ROW
update partidos 
set id_equipoLocal_partido=null
where id_equipoLocal_partido=old.id_equipo;


CREATE TRIGGER before_equipoVisitante_delete_partidos
before DELETE
ON equipos FOR EACH ROW
update partidos 
set id_equipoVisitante_partido=null
where id_equipoVisitante_partido=old.id_equipo;

CREATE TRIGGER before_partidos_delete_fotosPartidos
before DELETE
ON partidos FOR EACH ROW
delete from fotosPartidos
where id_partido_fotoPartido = old.id_partido;


CREATE TRIGGER before_ligas_delete_campeonatos
before DELETE
ON ligas FOR EACH ROW
update campeonatos 
set id_liga_campeonato=null
where id_liga_campeonato=old.id_liga;


CREATE TRIGGER before_campeonato_delete_fotosCampeonatos
before DELETE
ON campeonatos FOR EACH ROW
delete from fotosCampeonatos
where id_campeonato_fotoCampeonato = old.id_campeonato;


CREATE TRIGGER before_equipo_delete_compiten
before DELETE
ON equipos FOR EACH ROW
delete from compiten
where id_equipo_compite = old.id_equipo;


CREATE TRIGGER before_campeonato_delete_compiten
before DELETE
ON campeonatos FOR EACH ROW
delete from compiten
where id_campeonato_compite = old.id_campeonato;


CREATE TRIGGER before_campeonato_delete_corresponden
before DELETE
ON campeonatos FOR EACH ROW
delete from corresponden
where id_campeonato_corresponde = old.id_campeonato;


CREATE TRIGGER before_partido_delete_corresponden
before DELETE
ON partidos FOR EACH ROW
delete from corresponden
where id_partido_corresponde = old.id_partido;


CREATE TRIGGER before_equipoLocal_delete_corresponden
before DELETE
ON equipos FOR EACH ROW
delete from corresponden
where id_equipoLocal_corresponde = old.id_equipo;


CREATE TRIGGER before_equipoVisitante_delete_corresponden
before DELETE
ON equipos FOR EACH ROW
delete from corresponden
where id_equipoVisitante_corresponde = old.id_equipo;


CREATE TRIGGER before_deporte_delete_conciben
before DELETE
ON deportes FOR EACH ROW
delete from conciben
where id_deporte_concibe = old.id_deporte;


CREATE TRIGGER before_tipoEstadistica_delete_conciben
before DELETE
ON tiposEstadisticas FOR EACH ROW
delete from conciben
where id_tipoEstadistica_concibe = old.id_tipoEstadistica;


CREATE TRIGGER before_fichaJugador_delete_estadisticas
before DELETE
ON pertenecen FOR EACH ROW
update estadisticas 
set id_fichaJugador_estadistica=null
where id_fichaJugador_estadistica = old.id_fichaJugador_pertenece;

CREATE TRIGGER before_equipo_delete_estadisticas
before DELETE
ON pertenecen FOR EACH ROW
update estadisticas 
set id_equipo_estadistica=null
where id_equipo_estadistica = old.id_equipo_pertenece;


CREATE TRIGGER before_analista_delete_estadisticas
before DELETE
ON usuarios FOR EACH ROW
update estadisticas 
set id_usuario_estadistica=null
where id_usuario_estadistica = old.id_usuario;


CREATE TRIGGER before_juez_delete_estadisticas
before DELETE
ON usuarios FOR EACH ROW
update estadisticas 
set id_juez_estadistica=null
where id_juez_estadistica = old.id_usuario;


CREATE TRIGGER before_partido_delete_estadisticas
before DELETE
ON partidos FOR EACH ROW
update estadisticas 
set id_partido_estadistica=null
where id_partido_estadistica = old.id_partido;

CREATE TRIGGER before_tipoEstadistica_delete_estadisticas
before DELETE
ON tiposEstadisticas FOR EACH ROW
delete from estadisticas 
where tipo_estadistica = old.id_tipoEstadistica;

create trigger after_deporte_insert
after INSERT
ON deportes FOR EACH ROW
insert cantidadEquiposDeportes(id_deporte)
values(new.id_deporte);

create trigger after_equipo_insert
after INSERT
ON equipos FOR EACH ROW
UPDATE cantidadEquiposDeportes 
set cantidad_equipo=(select count( id_equipo )
from equipos
inner join deportes
on id_deporte_equipo=new.id_deporte_equipo 
where id_deporte_equipo=new.id_deporte_equipo and deportes.id_deporte=new.id_deporte_equipo)
where id_deporte=new.id_deporte_equipo ;

create trigger before_estadistica_insert_value
before INSERT
ON estadisticas FOR EACH ROW
set new.valor_estadistica =(select valor_tipoEstadistica from tiposEstadisticas where new.tipo_estadistica=id_tipoEstadistica)
;


CREATE VIEW rankingGolesUltimoCampeonato AS
select nombre_campeonato, nombre_equipo, sum(valor_estadistica) as "tantos" from equipos
inner join compiten on id_equipo=id_equipo_compite
inner join campeonatos on id_campeonato_compite=id_campeonato
inner join estadisticas on id_equipo_estadistica=id_equipo
where id_campeonato=(select id_campeonato from campeonatos where fechaFin_campeonato<curdate() order by fechaInicio_campeonato desc limit 1)  and id_deporte_equipo="basketball" and verificado_estadistica=1
group by id_equipo
order by tantos desc
;



create view equiposDeCampeonatosFinalizados as
select * from equipos 
inner join compiten on id_equipo_compite=id_equipo 
inner join campeonatos on id_campeonato=id_campeonato_compite
where fechaFin_campeonato < curdate() #and deporte_campeonato="football"
;



create view equiposDeCampeonatosNoFinalizados as
select * from equipos 
inner join compiten on id_equipo_compite=id_equipo 
inner join campeonatos on id_campeonato=id_campeonato_compite
where fechaFin_campeonato > curdate() #and deporte_campeonato="football"
;


create view cantidadJugadoresDeporte as
select id_deporte, count(id_fichaJugador_pertenece) as "cantidad_jugadores"
from deportes
inner join equipos on id_deporte=id_deporte_equipo
inner join pertenecen on id_equipo=id_equipo_pertenece
group by id_deporte
;


create view equiposGanadoresCampeonatos as
select nombre_equipo, count(campeon_campeonato) as "cantidad_victorias", fechaFin_campeonato, id_deporte_equipo
from equipos
inner join compiten on id_equipo=id_equipo_compite
inner join campeonatos on id_campeonato=id_campeonato_compite
where (campeon_campeonato=nombre_equipo and fechaFin_campeonato ) and TIMESTAMPDIFF(YEAR,fechaFin_campeonato,CURDATE()) <2
group by nombre_equipo
having cantidad_victorias>0
order by cantidad_victorias desc
;



DELIMITER //
create procedure cantidadEstadistica(in usuario int, in est varchar(40), in verif bool)

BEGIN
	SELECT count(id_estadistica)  as 'conteo'
    FROM estadisticas 
    where id_fichaJugador_estadistica=(select id_fichaJugador_tiene 
										from  tienen 
                                        where id_usuario_tiene=usuario)
	and tipo_estadistica=est and verificado_estadistica=verif;
END //

DELIMITER ;


DELIMITER //
create procedure estadisticasJugador(in jugador int, in verif bool)

BEGIN

select id_estadistica, fecha_estadistica, verificado_estadistica,tipo_estadistica,valor_estadistica,descripcion_estadistica,
		(select primerNombre_usuario from usuarios where id_usuario=id_usuario_estadistica) as 'primerNombre_usuario_analista',
        (select primerApellido_usuario from usuarios where id_usuario=id_usuario_estadistica) as 'primerApellido_usuario_analista',
        (select fotoPerfil_usuario from usuarios where id_usuario=id_usuario_estadistica) as 'fotoPerfil_analista',
        (select primerNombre_usuario from usuarios where id_fichaJugador=id_fichaJugador_estadistica and id_usuario=id_usuario_tiene) as 'primerNombre_usuario_fichaJugador',
        (select primerApellido_usuario from usuarios where id_fichaJugador=id_fichaJugador_estadistica and id_usuario=id_usuario_tiene) as 'primerApellido_usuario_fichaJugador',
        (select fotoPerfil_usuario from usuarios where id_fichaJugador=id_fichaJugador_estadistica and id_usuario=id_usuario_tiene) as 'fotoPerfil_jugador',
        minutosJugados_fichaJugador,
        (select id_usuario from usuarios where id_usuario=id_usuario_estadistica) as 'id_usuario_analista',
        (select id_usuario from usuarios where id_usuario=id_usuario_tiene) as 'id_usuario_fichaJugador' 
from tienen 
INNER join usuarios on id_usuario_tiene=id_usuario  
inner join  fichasJugadores on id_fichaJugador=id_fichaJugador_tiene
inner join estadisticas on id_fichaJugador_estadistica=id_fichaJugador_tiene

    where id_fichaJugador_estadistica=jugador and verificado_estadistica=verif#or id_fichaJugador=1;
ORDER BY fecha_estadistica desc;
        
END //

DELIMITER ;

call estadisticasJugador(12, 0);
select * from fichasJugadores;

DELIMITER //
create procedure estadisticasPartido(in partido int, in verif bool)

BEGIN

select id_partido,id_estadistica, fecha_estadistica, verificado_estadistica,tipo_estadistica,valor_estadistica,descripcion_estadistica,
		(select primerNombre_usuario from usuarios where id_usuario=id_usuario_estadistica) as 'primerNombre_usuario_analista',
        (select primerApellido_usuario from usuarios where id_usuario=id_usuario_estadistica) as 'primerApellido_usuario_analista',
        (select fotoPerfil_usuario from usuarios where id_usuario=id_usuario_estadistica) as 'fotoPerfil_analista',
        (select primerNombre_usuario from usuarios where id_fichaJugador=id_fichaJugador_estadistica and id_usuario=id_usuario_tiene) as 'primerNombre_usuario_fichaJugador',
        (select primerApellido_usuario from usuarios where id_fichaJugador=id_fichaJugador_estadistica and id_usuario=id_usuario_tiene) as 'primerApellido_usuario_fichaJugador',
        (select fotoPerfil_usuario from usuarios where id_fichaJugador=id_fichaJugador_estadistica and id_usuario=id_usuario_tiene) as 'fotoPerfil_jugador',
        (select id_usuario from usuarios where id_usuario=id_usuario_estadistica) as 'id_usuario_analista',
        (select id_usuario from usuarios where id_usuario=id_usuario_tiene) as 'id_usuario_fichaJugador' 
from tienen 
INNER join usuarios on id_usuario_tiene=id_usuario  
inner join  fichasJugadores on id_fichaJugador=id_fichaJugador_tiene
inner join estadisticas on id_fichaJugador_estadistica=id_fichaJugador_tiene
inner join pertenecen on id_fichaJugador=id_fichaJugador_pertenece
inner join equipos on id_equipo_pertenece=id_equipo and id_fichaJugador=id_fichaJugador_pertenece
inner join partidos on (id_equipo=id_equipoLocal_partido or id_equipo=id_equipoVisitante_partido) and id_partido_estadistica=id_partido
WHERE id_partido=partido and verificado_estadistica=verif#or id_fichaJugador=1;
ORDER BY fecha_estadistica desc;

END //

DELIMITER ;

call estadisticasPartido(5,0);

#delete from estadisticas;
select * from estadisticas;
select * from pertenecen;
select * from partidos;
select * from tienen;
select * from fichasJugadores;
select * from usuarios;



delimiter //

create procedure obtenerEquipoPorIdUsuario (in usuario int)
begin
select id_equipo,nombre_equipo, escudo_equipo, id_deporte_equipo, id_liga_equipo from equipos 
inner join pertenecen on id_equipo=id_equipo_pertenece 
inner join fichasJugadores on id_fichaJugador=id_fichaJugador_pertenece
inner join tienen on id_fichaJugador=id_fichaJugador_tiene
inner join usuarios on id_usuario=id_usuario_tiene
where id_usuario=usuario;

end //
delimiter ;




delimiter //
create procedure obtenerIntegrantesEquipoPorUsuarioId (in usuario int)
begin
select id_usuario, ci_usuario, primerNombre_usuario, primerApellido_usuario, email_usuario, fechaNac_usuario, fotoPerfil_usuario, id_fichaJugador, altura_fichaJugador, peso_fichaJugador, minutosJugados_fichaJugador, lateralidad_fichaJugador 
from usuarios 
inner join tienen on id_usuario=id_usuario_tiene
inner join fichasJugadores on id_fichaJugador=id_fichaJugador_tiene
where id_usuario in
(select id_usuario_tiene as "id_usuario" from tienen where id_fichaJugador_tiene in
(select id_fichaJugador_pertenece
from pertenecen where id_equipo_pertenece in
(select id_equipo_pertenece as "id_equipo"
from pertenecen where id_fichaJugador_pertenece in (
select id_fichaJugador
from usuarios
inner join tienen on id_usuario=id_usuario_tiene
inner join fichasJugadores on id_fichaJugador_tiene=id_fichaJugador
where id_usuario=usuario))));

end //
delimiter ;



delimiter //
create procedure obtenerCampeonatosDondeNoSeParticipa (in equipo int)
begin

select * 
from campeonatos 
where fechaFin_campeonato > curdate() and id_campeonato 
not in (
	select id_campeonato from campeonatos 
	inner join compiten on id_campeonato=id_campeonato_compite
	where id_equipo_compite=equipo 
	)
and deporte_campeonato=(select id_deporte_equipo from equipos where id_equipo=equipo)  
    ;
    
end //
delimiter ;

call obtenerCampeonatosDondeNoSeParticipa (12);

/*======================================================
procedure para obtener el equipo que tenga mas estadisticas de promedio en el ultimo año
=======================================================*/
#drop procedure obtenerEquipoConMasPromedioEnEstadistiacaUltimoAnio;
delimiter //
create procedure obtenerEquipoConMasPromedioEnEstadistiacaUltimoAnio (in depor varchar(40), in nomEst varchar(40))
begin

select * 
from estadisticas
inner join equipos on id_equipo=id_equipo_estadistica
where id_deporte_equipo=depor
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
    where tipo_estadistica=nomEst and id_deporte_equipo=depor
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
    where tipo_estadistica=nomEst and id_deporte_equipo=depor
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
		where tipo_estadistica=nomEst and id_deporte_equipo=depor
		group by id_partido_estadistica  
		order by id_partido_estadistica
        ) a
	)
;

end //
delimiter ;