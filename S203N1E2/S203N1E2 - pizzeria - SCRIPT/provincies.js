
db.createCollection( 'provincies', {validator: {$jsonSchema: {bsonType: 'object',title:'provincies',required: [         'nom'],properties: {nom: {bsonType: 'string'},localitats: {bsonType: 'array',items: {
title:'object',required: [         '_idLocalitat',          'nom'],properties: {_idLocalitat: {bsonType: 'objectId'},nom: {bsonType: 'string'}}}}}         }      },
autoIndexId:true
});  