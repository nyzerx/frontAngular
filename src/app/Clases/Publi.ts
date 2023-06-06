export interface Publi {
    idp:number;
    nombre:String;
    imagen:String;
    idu:number;
    fechaHora:String;
}



export interface IPubli {
    usuario?:number,
    fechaHora:string,
    tipoPublicacion:number
    estado_pu:number,
    objeto: IObjeto,
    comentarios: any[]
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


export interface IObjeto{
    nombre_obj:string,
    descripcion_obj:string,
    imagen_obj:string,
    id_cat:number,
    misUbicaciones:any[]

}

export interface ICategoria{
    id_cat:number,
    nombre_cat:string
}
export interface ResponseObject {
    httpStatus: string;
    response: any;
}

export interface ITipoPu{
    id_titpopu?:number,
    nombre_titpoPu:string
}

export interface IPubliGET{
    id_pu: number,
    fechaHora: Date,
    estado_pu: number
    objeto: IObjeto,
    comentarios: any[]
}