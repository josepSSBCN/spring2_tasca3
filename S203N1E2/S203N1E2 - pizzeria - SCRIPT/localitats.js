
db.createCollection( 'localitats', {validator: {$jsonSchema: {bsonType: 'object',title:'localitats',required: [         'nom',          'idProvincia'],properties: {nom: {bsonType: 'string'},idProvincia: {bsonType: 'string'}}         }      }});  