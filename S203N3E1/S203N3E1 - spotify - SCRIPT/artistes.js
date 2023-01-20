
db.createCollection( 'artistes', {validator: {$jsonSchema: {bsonType: 'object',title:'artistes',properties: {infoPersonal: {bsonType: 'object',
title:'object',required: [         'nom',          'imatge'],properties: {nom: {bsonType: 'string'},imatge: {bsonType: 'string'}}},albums: {bsonType: 'array',items: {
title:'object',required: [         '_idAlbum',          'infoAlbum'],properties: {_idAlbum: {bsonType: 'objectId'},infoAlbum: {bsonType: 'object',
title:'object',required: [         'titol',          'dataPublicacio',          'imatgePortada'],properties: {titol: {bsonType: 'string'},dataPublicacio: {bsonType: 'date'},imatgePortada: {bsonType: 'string'}}},cancons: {bsonType: 'array',items: {
title:'object',required: [         '_idCancons',          'titol',          'durada',          'reproduccions'],properties: {_idCancons: {bsonType: 'objectId'},titol: {bsonType: 'string'},durada: {bsonType: 'int'},reproduccions: {bsonType: 'int'}}}}}}},seguidors: {bsonType: 'array',description:'Array dels objectId dels usuaris que segueixen a l\'artista',items: {bsonType: 'objectId'}},relacions: {bsonType: 'array',description:'Array dels objectId dels artistes que te relació l\'artista',items: {bsonType: 'objectId'}}}         }      },
autoIndexId:true
});  