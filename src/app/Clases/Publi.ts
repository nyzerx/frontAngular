export interface Publi {
    idp:number;
    nombre:string;
    imagen:string;
    descripcion:string;
    idu:number;
    fechaHoraString:string;
    nombreUsuario:string;
    apellidoUsuario:string;
    categoria:categoria;
    estado_pu:number;
}

export interface IPubliGET {
    idp: number;
    fechaHora: string;
    estado_pu: number;
    objeto: objetos;
    descripcion: string;
    comentarios: Comentarios[];
    idu: UsuarioLite;
    nombreUsuario: string;
    apellidoUsuario: string;
    fechaHoraString: string;
    categoria: categoria;
  }
  

export interface IPubli {
    usuario?: number;
    fechaHora: String;
    tipoPublicacion: number;
    estado_pu: number;
    objeto: IObjeto;
    comentarios: any[];
  }

  export interface ISolicitud {
    nombre: string;
    apellido: string;
    correo: string;
    motivo: string;
    idPublicacion?: number;
  }
  
  export interface Publib {
    idp: number;
    fechaHoraString: string;
    objeto: IObjeto;
    estado_pu: number;
    idu: UsuarioLite;
    nombreUsuario: string;
    apellidoUsuario: string;
    categoria: categoria;
  }
  export interface tipoPublicacion {
    id_tipopu: number;
    nombre_tipopu: String;
  }

  export interface ITipoPublicacion {
    id_titpopu: number;
    nombre_titpoPu: string;
  }
  

  export interface objetos {
    id_obj: number;
    nombre_obj: string;
    descripcion_obj: string;
    imagen_obj: string;
    id_cat: number;
    misUbicaciones: misUbicaciones[];
    categoria: categoria;
  }
  
  

  export interface categoria {
    id_cat: number;
    nombre_cat:  String;
  }

  export interface misUbicaciones {
    id_ub: number;
    nombre: String;
    hora_ub: String;
    tipoUbicacion: tipoUbicacion;
    sede: sede;
  }

  export class Usuario {
    id?: number;
    nombre: String;
    apellido: String;
    email: String;
    pswd: String;
    telefono: number;
    rol: number;
  }

export interface IUsuario{
    id:number;
	nombre:String;
	apellido:String;
	email:String;
	pswd:String;
	telefono:number;
	rol?:number;
}

export interface tipoUbicacion {
    id_tipoub: number;
    nombre: String;
  }
  
  export interface sede {
    id_sede: number;
    nombre_se: String;
  }

  export interface IUbicacion {
    id: number;
    nombre: string;
    // Agrega aquí otras propiedades específicas de la ubicación si es necesario
  }
  export interface IObjeto {
    id_obj?: number;
    nombre_obj: string;
    imagen_obj: string;
    descripcion_obj: string;
    id_cat?: number;
    misUbicaciones?: IUbicacion[];
    categoria?: ICategoria;
  }
  
  

export interface ICategoria{
    id_cat:number,
    nombre_cat:string
}
export interface ResponseObject {
    httpStatus: string;
    response: any;
}

export interface DatosCompletos {
  id_obj: number;
  nombre_obj: string;
  descripcion_obj: string;
  imagen_obj: string;
  id_cat: number;
  // Otras propiedades necesarias para obtener la información completa
}

export interface ITipoPu{
    id_titpopu?:number,
    nombre_titpoPu:string
}


  export interface UsuarioLite {
    nombreUsuario: string;
    apellidoUsuario: string;
  }
  

  export interface Comentarios {
    id_co: number;
    fecha_co: string;
    texto_co: string;
  }
  
  