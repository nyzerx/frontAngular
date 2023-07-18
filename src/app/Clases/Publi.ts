export interface Publi {
    idp:number;
    nombre:String;
    imagen:String;
    idu:number;
    fechaHora:String;
    Categoria:String;
}

export interface IPubli {
    usuario?: number;
    fechaHora: String;
    tipoPublicacion: number;
    estado_pu: number;
    objeto: IObjeto;
    comentarios: any[];
  }
  

  export interface Publib {
    id_pu: number;
    fechaHora: string;
    objeto: IObjeto;
    estado_pu: number;
    usuario: UsuarioLite;
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
    descripcion_obj?: string;
    imagen_obj: string;
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

export interface IPubliGET {
    id_pu: number;
    fechaHora: string;
    estado_pu: number;
    objeto: objetos;
    comentarios: Comentarios[];
    usuario: Usuario
  }
  
  export interface UsuarioLite {
    nombre: String;
    apellido: String;
  }
  

  export interface Comentarios {
    id_co: number;
    fecha_co: string;
    texto_co: string;
  }
  
  