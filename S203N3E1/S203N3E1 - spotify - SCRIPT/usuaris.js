
db.createCollection( 'usuaris', {validator: {$jsonSchema: {bsonType: 'object',title:'usuaris',required: [         'premium',          'infoPersonal'],properties: {premium: {bsonType: 'bool', description:'0 = free,
1 = sí premium'},infoPersonal: {bsonType: 'object',
title:'object',required: [         'email',          'nom',          'dataNeixament',          'codiPostal',          'sexe',          'pais',          'password'],properties: {email: {bsonType: 'string'},nom: {bsonType: 'string'},dataNeixament: {bsonType: 'string'},codiPostal: {bsonType: 'string'},sexe: {enum: 'dona', 'home'},pais: {bsonType: 'string'},password: {bsonType: 'string'}}},subscripcions: {bsonType: 'array',description:'És una llista xk un usuari pot haver-se donat d\'alta i de baixa vàries vegades',items: {
title:'object',required: [         '_idSubscripcio',          'dataInici',          'dataRenovacio',          'pagaments'],properties: {_idSubscripcio: {bsonType: 'objectId'},dataInici: {bsonType: 'date'},dataRenovacio: {bsonType: 'date'},paypal: {bsonType: 'object',
title:'object',required: [         'nomUsuari'],properties: {nomUsuari: {bsonType: 'string'}}},targetaCredit: {bsonType: 'object',
title:'object',required: [         'numeroTargeta',          'mesCaducitat',          'anyCaducitat',          'cvc'],properties: {numeroTargeta: {bsonType: 'string'},mesCaducitat: {bsonType: 'int'},anyCaducitat: {bsonType: 'int'},cvc: {bsonType: 'int'}}},pagaments: {bsonType: 'array',items: {
title:'object',required: [         '_idPagament',          'dataCreacio',          'numOrdre',          'valor'],properties: {_idPagament: {bsonType: 'objectId'},dataCreacio: {bsonType: 'date'},numOrdre: {bsonType: 'int'},valor: {bsonType: 'decimal'}}}}}}},playlist: {bsonType: 'array',items: {
title:'object',required: [         '_idPlaylist',          'titol',          'dateCreacio'],properties: {_idPlaylist: {bsonType: 'objectId'},titol: {bsonType: 'string'},numCancons: {bsonType: 'int'},dateCreacio: {bsonType: 'date'},cancons: {bsonType: 'array',items: {
title:'object',required: [         'idUsuari',          'dataAfegit',          'idCanco'],properties: {idUsuari: {bsonType: 'objectId'},dataAfegit: {bsonType: 'date'},idCanco: {bsonType: 'date'}}}},eliminada: {bsonType: 'object',
title:'object',required: [         'dataEliminacio'],properties: {dataEliminacio: {bsonType: 'date'}}},shared: {bsonType: 'array',description:'Array dels objectId dels usuaris que han compartit la playlist
',items: {bsonType: 'objectId'}}}}},canconsPreferides: {bsonType: 'array',description:'Array dels objectId de les cancons preferides de l\'
usuari',items: {bsonType: 'objectId'}},albumsPreferits: {bsonType: 'array',description:'Array dels objectId dels albums preferides de l\'usuari',items: {bsonType: 'objectId'}}}         }      },
autoIndexId:true
});  