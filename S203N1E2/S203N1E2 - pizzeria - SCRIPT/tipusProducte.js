
db.createCollection( 'tipusProducte', {validator: {$jsonSchema: {bsonType: 'object',title:'tipusProducte',required: [         'nom',          'tipusProductes'],properties: {nom: {bsonType: 'string'},tipusProductes: {bsonType: 'array',items: {
title:'object',required: [         '_idTipusProducte',          'nom'],properties: {_idTipusProducte: {bsonType: 'objectId'},nom: {bsonType: 'string'},categories: {bsonType: 'array',items: {
title:'object',required: [         '_idCategoria',          'nom',          'productes'],properties: {_idCategoria: {bsonType: 'objectId'},nom: {bsonType: 'string'},productes: {bsonType: 'array',items: {
title:'object',required: [         '_idProducte',          'nom',          'descripcio',          'imatge',          'preu'],properties: {_idProducte: {bsonType: 'objectId'},nom: {bsonType: 'string'},descripcio: {bsonType: 'string'},imatge: {bsonType: 'string'},preu: {bsonType: 'decimal'}}}}}}}}}}}         }      },
autoIndexId:true
});  db.tipusProducte.insertMany(
{"nom": "Pizzes"},
{"nom": "Hamburgueses"},
{"nom": "Begudes"}
)
