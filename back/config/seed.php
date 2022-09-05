<?php


$sql='create table usuarios(

	id_usuario int auto_increment primary key,
    ci_usuario int(8) unique,
    primerNombre_usuario varchar(50) not null,
    segundoNombre_usuario varchar(50) default null,
    primerApellido_usuario varchar(50) not null,
    segundoApellido_usuario varchar(50) default null,
    email_usuario varchar(50) not null unique,
    fechaNac_usuario date not null,
    password_usuario varchar(200) not null,
    verificado_usuario bool default false,
    fotoPerfil_usuario text default null,
    date_created_usuario date default current_timestamp,
    date_updated_usuario timestamp default current_timestamp ON UPDATE CURRENT_TIMESTAMP
    
    );
    
    alter table usuarios 
    add column carneSalud_usuario date after fotoPerfil_usuario;

    alter table usuarios 
    add column certificadoAF_usuario date after fotoPerfil_usuario;
    
    alter table usuarios 
    add column token_usuario text after fotoPerfil_usuario;
    
    alter table usuarios 
    add column token_exp_usuario int after fotoPerfil_usuario;
    
    
    #alter table usuarios 
    #change contrasenna_usuario password_usuario varchar(200) not null;
    
    
/*insert into usuarios (ci_usuario, primerNombre_usuario, primerApellido_usuario, email_usuario, fechaNac_usuario, contrasenna_usuario)
values (48001383, "ivan", "forte","forteferraroivan@gmail.com","1997-07-10","root"), 
(50661725, "gonzalo", "trias","gonzalo.trias19@gmail.com","1999-06-30","root"), 
(53170460, "lucas", "perez","lucascoda3@gmail.com","1999-4-15","root");*/

#delete from usuarios where id_usuario=11;
#select * from usuarios;
#delete from usuarios;
#DROP TABLE usuarios;   
 
create table roles(
	
    id_rol int,
	id_usuario_rol int,
    nombre_rol varchar(40),
    date_created_rol date default current_timestamp,
    date_updated_rol timestamp default current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    primary key(id_rol,id_usuario_rol),
    foreign key (id_usuario_rol) references usuarios(id_usuario)
    
    );
    
    
    #alter table roles 
    #change date_updated_usuario date_updated_rol timestamp default current_timestamp ON UPDATE CURRENT_TIMESTAMP;


/*insert into roles (id_rol, id_usuario_rol,nombre_rol)
values (0, 1, "administrador"), 
(1, 2,"administrador"), 
(2, 3,"administrador");*/


#DROP TABLE roles;
#delete from roles;
#select * from roles;


create table telefonos(
	id_telefono varchar(30),
    id_usuario_telefono int,
    date_created_telefono date default current_timestamp,
    date_updated_telefono timestamp default current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    primary key(id_telefono,id_usuario_telefono),
    foreign key (id_usuario_telefono) references usuarios(id_usuario)

);


create table ligas(
	id_liga int primary key auto_increment,
    nombre_liga varchar(40),
    date_created_liga date default current_timestamp,
    date_updated_liga timestamp default current_timestamp ON UPDATE CURRENT_TIMESTAMP
    
);



#drop table ligas;
#select * from ligas;

create table deportes(
	id_deporte int primary key auto_increment,
    nombre_deporte varchar(40),
    date_created_deporte date default current_timestamp,
    date_updated_deporte timestamp default current_timestamp ON UPDATE CURRENT_TIMESTAMP
    
);

create table equipos(
	id_equipo int primary key auto_increment,
    escudo_equipo text,
    nombre_equipo varchar(40),
    id_liga_equipo int,
    id_deporte_equipo int,
    date_created_equipo date default current_timestamp,
    date_updated_equipo timestamp default current_timestamp ON UPDATE CURRENT_TIMESTAMP
);

alter table equipos
add foreign key (id_liga_equipo)
references ligas(id_liga);

alter table equipos
add foreign key (id_deporte_equipo)
references deportes(id_deporte);


create table fichasJugadores (
	id_fichaJugador int primary key auto_increment,
    altura_fichaJugador int(3),#cm
    peso_fichaJugador int(6),#g
    minutosJugados_fichJugador datetime,
    lateralidad_fichaJugador enum("zurdo","diestro","ambidiestro"),
    date_created_fichaJugador date default current_timestamp,
    date_updated_fichaJugador timestamp default current_timestamp ON UPDATE CURRENT_TIMESTAMP
);

create table pertenecen(
	
    id_equipo_pertenece int,
    id_fichaJugador_pertenece int,
    numeroCamiseta_pertenece int(2),
    date_created_pertenece date default current_timestamp,
    date_updated_pertenece timestamp default current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    primary key (id_equipo_pertenece, id_fichaJugador_pertenece),
    foreign key (id_equipo_pertenece) references equipos(id_equipo), 
    foreign key (id_fichaJugador_pertenece) references fichasJugadores(id_fichaJugador)

);

create table posiciones(
	id_posicion int auto_increment, 
	id_fichaJugador_posicion int,
    date_created_posicion date default current_timestamp,
    date_updated_posicion timestamp default current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    primary key (id_posicion, id_fichaJugador_posicion),
    foreign key (id_fichaJugador_posicion) references fichasJugadores(id_fichaJugador)
    
);

create table tienen(
	id_usuario_tiene int primary key,
    id_fichaJugador_tiene int,
    date_created_tiene date default current_timestamp,
    date_updated_tiene timestamp default current_timestamp ON UPDATE CURRENT_TIMESTAMP
);

create table partidos(
	id_partido int auto_increment,
    id_equipoLocal_partido int,
    id_equipoVisitante_partido int,
    fecha_partido date,
    anotacionLocal_partido int,
    anotacionVisitante_partido int,
    tipo_partido varchar(40),
    date_created_partido date default current_timestamp,
    date_updated_partido timestamp default current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    primary key (id_partido,id_equipoLocal_partido, id_equipoVisitante_partido),
    foreign key (id_equipoLocal_partido) references equipos(id_equipo),
	foreign key ( id_equipoVisitante_partido) references equipos(id_equipo)
);

#select * from partidos;

create table campeonatos(
	id_campeonato int primary key auto_increment,
    campeon_campeonato varchar(50),
    tipo_campeonato varchar(40),
    nombre_campeonato varchar(40),
    id_liga_campeonato int,
    date_created_campeonato date default current_timestamp,
    date_updated_campeonato timestamp default current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    foreign key (id_liga_campeonato) references ligas(id_liga)
);

create table compiten(
	id_campeonato_compite int,
    id_equipo_compite int,
    date_created_compite date default current_timestamp,
    date_updated_compite timestamp default current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    primary key(id_campeonato_compite, id_equipo_compite),
	foreign key (id_campeonato_compite) references campeonatos(id_campeonato),
	foreign key (id_equipo_compite) references equipos(id_equipo)
);

#drop table compiten;

create table corresponden(
	id_partido_corresponde int,
    id_equipoLocal_corresponde int,
    id_equipoVisitante_corresponde int, 
    puntoLocal_corresponde int,
    puntoVisitante_corresponde int,
    id_campeonato_corresponde int,
    date_created_corresponde date default current_timestamp,
    date_updated_corresponde timestamp default current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    primary key (id_partido_corresponde, id_equipoLocal_corresponde, id_equipoVisitante_corresponde),
    foreign key (id_partido_corresponde) references partidos(id_partido),
    foreign key (id_equipoLocal_corresponde) references partidos(id_equipoLocal_partido),
    foreign key (id_equipoVisitante_corresponde) references partidos(id_equipoVisitante_partido)
);

create table estadisticas(
	id_estadistica int primary key auto_increment,
    valor_estadistica int,
    tipo_estadistica varchar(40),
    fecha_estadistica datetime,
    verificado_estadistica bool,
    descripcion_estadistica text,
    id_fichaJugador_estadistica int,
    id_equipo_estadistica int,
    date_created_estadistica date default current_timestamp,
    date_updated_estadistica timestamp default current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    foreign key (id_fichaJugador_estadistica) references pertenecen(id_fichaJugador_pertenece),
    foreign key (id_equipo_estadistica) references pertenecen(id_equipo_pertenece)
);

	#alter table estadisticas 
    #change fecha_estaddistica fecha_estadistica datetime;

create table registran(
	id_estadistica_registra int primary key,
    id_usuario_registra int,
    date_created_registra date default current_timestamp,
    date_updated_registra timestamp default current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    foreign key (id_estadistica_registra) references estadisticas(id_estadistica),
    foreign key (id_usuario_registra) references usuarios(id_usuario)
);

# table registran;

/*==========================
trigger
=============================*/

CREATE TRIGGER before_usuarios_delete
before DELETE
ON usuarios FOR EACH ROW
delete from roles 
where id_usuario_rol = old.id_usuario;


' ;
