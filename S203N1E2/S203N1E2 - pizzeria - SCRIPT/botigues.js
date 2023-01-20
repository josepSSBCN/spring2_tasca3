
db.createCollection( 'botigues', {validator: {$jsonSchema: {bsonType: 'object',title:'botigues',required: [         'adreca',          'empleats',          'comandes'],properties: {adreca: {bsonType: 'object',
title:'object',required: [         'carrer',          'numero',          'idLocalitat'],properties: {carrer: {bsonType: 'string'},numero: {bsonType: 'string'},idLocalitat: {bsonType: 'objectId'}}},empleats: {bsonType: 'array',items: {
title:'object',required: [         '_idEmpleat',          'infoPersonal',          'cuinerRepartidor'],properties: {_idEmpleat: {bsonType: 'objectId'},infoPersonal: {bsonType: 'object',
title:'object',required: [         'nom',          'cognoms',          'nif',          'telefon'],properties: {nom: {bsonType: 'string'},cognoms: {bsonType: 'string'},nif: {bsonType: 'string'},telefon: {bsonType: 'string'}}},cuinerRepartidor: {bsonType: 'bool', description:'0 = cuiner,
1 = repartidor'}}}},comandes: {bsonType: 'array',items: {
title:'object',required: [         '_idComanda',          'idClient',          'preuTotal',          'tipusProductes'],properties: {_idComanda: {bsonType: 'objectId'},idClient: {bsonType: 'objectId'},preuTotal: {bsonType: 'decimal'},tipusProductes: {bsonType: 'array',items: {
title:'object',required: [         'idTipusProductes',          'quantitatTipusProducte'],properties: {idTipusProductes: {bsonType: 'string'},quantitatTipusProducte: {bsonType: 'int'},productes: {bsonType: 'array',items: {
title:'object',required: [         'idProducte',          'quntitat'],properties: {idProducte: {bsonType: 'objectId'},quntitat: {bsonType: 'int'}}}}}}}}}}}         }      },
autoIndexId:true
});  