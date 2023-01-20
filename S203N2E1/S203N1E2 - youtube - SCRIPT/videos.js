
db.createCollection( 'videos', {validator: {$jsonSchema: {bsonType: 'object',title:'videos',required: [         'idUsuari',          'dateCreacio',          'estat',          'reproduccions',          'infoVideo',          'likes',          'dislikes',          'comentaris'],properties: {idUsuari: {bsonType: 'objectId'},dateCreacio: {bsonType: 'date'},estat: {enum: 'public', 'ocult', 'privat'},reproduccions: {bsonType: 'int'},infoVideo: {bsonType: 'object',
title:'object',required: [         'titol',          'mida',          'nomArxiu',          'temps',          'thumbnail'],properties: {titol: {bsonType: 'string'},descripcio: {bsonType: 'string'},mida: {bsonType: 'int'},nomArxiu: {bsonType: 'string'},temps: {bsonType: 'int'},thumbnail: {bsonType: 'string'}}},likes: {bsonType: 'int'},dislikes: {bsonType: 'int'},likes: {bsonType: 'array',items: {
title:'object',required: [         '_idLike',          'idUsuari',          'likeDislike'],properties: {_idLike: {bsonType: 'objectId'},idUsuari: {bsonType: 'objectId', description:'idUsuari que ha fet el like'},dataCreacio: {bsonType: 'date'},likeDislike: {bsonType: 'bool', description:'0 = dilike,
1 = like'}}}},comentaris: {bsonType: 'array',items: {
title:'object',required: [         '_idComentari',          'text',          'dataCreacio'],properties: {_idComentari: {bsonType: 'objectId'},idUsuari: {bsonType: 'objectId'},text: {bsonType: 'string'},dataCreacio: {bsonType: 'date'},likes: {bsonType: 'array',items: {
title:'object',required: [         '_iLikeComentari',          'idUsuari',          'likeDislike',          'dateCreacio'],properties: {_iLikeComentari: {bsonType: 'null'},idUsuari: {bsonType: 'objectId', description:'EL id del usuari que ha realitzat el like'},likeDislike: {bsonType: 'bool', 0 = dislike,
1 = like},dateCreacio: {bsonType: 'date'}}}}}}},etiquetes: {bsonType: 'array',items: {
title:'object',required: [         '_idEtiqueta',          'nom'],properties: {_idEtiqueta: {bsonType: 'objectId'},nom: {bsonType: 'string'}}}}}         }      },
autoIndexId:true
});  