
db.createCollection( 'tipusProducte', {validator: {$jsonSchema: {bsonType: 'object',title:'tipusProducte',required: [         'nom',          'productes'],properties: {nom: {bsonType: 'string'},productes: {bsonType: 'array',items: {
title:'object',required: [         '_idProducte',          'nom',          'descripcio',          'imatge',          'preu'],properties: {_idProducte: {bsonType: 'objectId'},nom: {bsonType: 'string'},descripcio: {bsonType: 'string'},imatge: {bsonType: 'string'},preu: {bsonType: 'string'},categories: {bsonType: 'array',items: {
title:'object',required: [         '_idCategoreis',          'nom'],properties: {_idCategoreis: {bsonType: 'string'},nom: {bsonType: 'string'}}}}}}}}         }      },
autoIndexId:true
});  db.tipusProducte.insertMany(
{"nom": "Pizzes"},
{"nom": "Hamburgueses"},
{"nom": "Begudes"}
)
