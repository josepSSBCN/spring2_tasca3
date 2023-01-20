
db.createCollection( 'provincies', {validator: {$jsonSchema: {bsonType: 'object',title:'provincies',required: [         'nom'],properties: {nom: {bsonType: 'string'}}         }      }});  