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
