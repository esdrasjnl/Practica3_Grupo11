use gifthub;

CREATE TABLE tipo_usuario(
	id_tipo 		INTEGER PRIMARY KEY,
    nombre  		VARCHAR(15)
);

CREATE TABLE usuario(
	id_usuario         INTEGER PRIMARY KEY AUTO_INCREMENT,
    user_name 		   VARCHAR(15) NOT NULL,
    correo			   VARCHAR(30) NOT NULL,
    clave			   VARCHAR(20) NOT NULL,
	nombre             VARCHAR(30) NOT NULL,
    apellido           VARCHAR(60) NOT NULL,
	CUI            	   VARCHAR(13) UNIQUE,
    edad			   INTEGER NOT NULL,
    ref_id_tipo		   INTEGER NOT NULL,
	
	CONSTRAINT fk_tipo  FOREIGN KEY(ref_id_tipo) REFERENCES tipo_usuario(id_tipo) ON DELETE CASCADE 
);

create table compras(
	idCompra integer primary key auto_increment,
	pkUser integer,    
    numeroTarjeta int,
	nombreTarjeta varchar(100),
    fechaExpTarjeta date,
    codigoVerifTarjeta int,
    montoTotal double,
    moneda varchar(20),
    constraint pkUserKey foreign key(pkUser) references usuario(id_usuario) on delete cascade
);

create table giffCard(
	idGCard integer primary key auto_increment,
	nombre varchar(100),
	image varchar(250),
	precio double,
	recargo double,
    estado varchar(10)
);

create table detalleCompra(
	idDetCom integer primary key auto_increment,
    cantidad integer,
    subtotal double,
    pkgCard integer, 
    pkComp integer,
    constraint pkeyGCard foreign key(pkgCard) references giffCard(idGCard) on delete cascade,
    constraint pketComp foreign key(pkComp) references compras(idCompra) on delete cascade
);

create table regalo(
	idRegalo integer primary key auto_increment,
    fechaRegalo date,
    usuarioEmisor int,
    usuarioReceptor int,
    constraint pkUs1 foreign key(usuarioEmisor) references usuario(id_usuario) on delete cascade,
    constraint pkUs2 foreign key(usuarioReceptor) references usuario(id_usuario) on delete cascade
);

create table detalleRegalo(
	idDetReg integer primary key auto_increment,
    cantidad integer,
    pkgRCard integer,
    pkReg integer,
    constraint pkeyGRCard foreign key(pkgRCard) references giffCard(idGCard) on delete cascade,
    constraint pketReg foreign key(pkReg) references regalo(idRegalo) on delete cascade
);