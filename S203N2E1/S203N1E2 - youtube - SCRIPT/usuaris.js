
db.createCollection( 'usuaris', {validator: {$jsonSchema: {bsonType: 'object',title:'usuaris',required: [         'infoPersonal'],properties: {infoPersonal: {bsonType: 'object',
title:'object',required: [         'email',          'password',          'nom',          'dateNeixament',          'sexe',          'pais',          'coidPostal'],properties: {email: {bsonType: 'string'},password: {bsonType: 'string'},nom: {bsonType: 'string'},dateNeixament: {bsonType: 'date'},sexe: {enum: 'Dona', 'Home'},pais: {bsonType: 'string'},coidPostal: {bsonType: 'int'}}},canals: {bsonType: 'array',items: {
title:'object',required: [         '_idCanal',          'nom',          'dateCreacio'],properties: {_idCanal: {bsonType: 'objectId'},nom: {bsonType: 'string'},descripcio: {bsonType: 'string'},dateCreacio: {bsonType: 'date'},subscripcions: {bsonType: 'array',description:'Array dels id dels usuaris que s\'han subscrit al canal

',items: {bsonType: 'objectId'}},playlist: {bsonType: 'array',items: {
title:'object',required: [         '_idPlaylist',          'nom',          'dataCreacio',          'estat',          'idVideos'],properties: {_idPlaylist: {bsonType: 'objectId'},nom: {bsonType: 'string'},dataCreacio: {bsonType: 'date'},estat: {enum: 'Public', 'Privat'},idVideos: {bsonType: 'array',description:'Array amb els id dels videos que estan en la playlist',items: {bsonType: 'objectId'}}}}}}}}}         }      },
autoIndexId:true
});  