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

CREATE TABLE tarjeta_credito(
	id_tarjeta			INTEGER PRIMARY KEY,
	num_tarjeta			VARCHAR(16) NOT NULL,
    nombre				VARCHAR(50) NOT NULL,
    fecha				VARCHAR(10) NOT NULL,
    codigo				INTEGER NOT NULL,
    monto_pago			INTEGER NOT NULL,
    moneda				VARCHAR(10) NOT NULL,
    ref_id_usuario		INTEGER NOT NULL,
    
    CONSTRAINT fk_usuario  FOREIGN KEY(ref_id_usuario) REFERENCES usuario(id_usuario) ON DELETE CASCADE 
);

CREATE TABLE historial(
	id_historia			INTEGER PRIMARY KEY AUTO_INCREMENT,
    nombre				VARCHAR(20),
    imagen				VARCHAR(100),
    estado				INTEGER,
    ref_id_usuario		INTEGER NOT NULL,
    CONSTRAINT fk_usuario_historial  FOREIGN KEY(ref_id_usuario) REFERENCES usuario(id_usuario) ON DELETE CASCADE 
);

create table compras(
	idCompra integer primary key auto_increment,
	pkUser integer,
    montoTotal double,
    moneda varchar(20),
    constraint pkUserKey foreign key(pkUser) references usuario(id_usuario) on delete cascade
);

create table giffCard(
	idGCard integer primary key auto_increment,
	cantidad integer,
	nombre varchar(100),
	image varchar(250),
	precio double,
	recargo double,
	total double
);

alter table giffCard add estado varchar(10);

create table detalleCompra(
	idDetCom integer primary key auto_increment,
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

create table detalleRegali(
	idDetReg integer primary key auto_increment,
    cantidad integer,
    pkgRCard integer,
    pkReg integer,
    constraint pkeyGRCard foreign key(pkgRCard) references giffCard(idGCard) on delete cascade,
    constraint pketReg foreign key(pkReg) references regalo(idRegalo) on delete cascade
);

-- script para obtener las compras realizadas por x usuario
select pkgCard,cantidad,subtotal,numeroTarjeta,nombreTarjeta 
from detalleCompra
INNER JOIN compras ON detalleCompra.idDetCom=compras.idCompra
where pkUser=2;