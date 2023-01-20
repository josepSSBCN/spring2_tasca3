
db.createCollection( 'botigues', {validator: {$jsonSchema: {bsonType: 'object',title:'botigues',required: [         'adreca',          'empleats'],properties: {adreca: {bsonType: 'object',
title:'object',required: [         'carrer',          'numero',          'idProvincia',          'idLocalitat'],properties: {carrer: {bsonType: 'string'},numero: {bsonType: 'string'},idProvincia: {bsonType: 'objectId'},idLocalitat: {bsonType: 'objectId'}}},empleats: {bsonType: 'array',items: {
title:'object',required: [         '_idEmpleat',          'infoPersonal',          'cuinerRepartidor'],properties: {_idEmpleat: {bsonType: 'objectId'},infoPersonal: {bsonType: 'object',
title:'object',required: [         'nom',          'cognoms',          'nif',          'telefon'],properties: {nom: {bsonType: 'string'},cognoms: {bsonType: 'string'},nif: {bsonType: 'string'},telefon: {bsonType: 'string'}}},cuinerRepartidor: {bsonType: 'bool', description:'0 = cuiner,
1 = repartidor'}}}},clinets: {bsonType: 'array',items: {
title:'object',required: [         '_idClient',          'infoPersonal'],properties: {_idClient: {bsonType: 'objectId'},infoPersonal: {bsonType: 'object',
title:'object',required: [         'nom',          'cognoms',          'telefon'],properties: {nom: {bsonType: 'string'},cognoms: {bsonType: 'string'},telefon: {bsonType: 'string'}}},adreca: {bsonType: 'object',
title:'object',required: [         'numero',          'pis',          'idLocalitat',          'codiPostal'],properties: {carrer: {bsonType: 'string'},numero: {bsonType: 'int'},pis: {bsonType: 'int'},idLocalitat: {bsonType: 'objectId'},codiPostal: {bsonType: 'int'}}},comandes: {bsonType: 'array',items: {
title:'object',required: [         '_idComanda',          'dataComanda',          'recollirDomicili',          'preuTotal'],properties: {_idComanda: {bsonType: 'objectId'},dataComanda: {bsonType: 'date'},dataEntrega: {bsonType: 'date'},recollirDomicili: {bsonType: 'bool', description:'0 = recollir a la botiga,
1 = entrega a domicili'},idEmpleatEntrega: {bsonType: 'objectId'},preuTotal: {bsonType: 'date'},tipusProductes: {bsonType: 'array',items: {
title:'object',required: [         'idTipusProducte'],properties: {idTipusProducte: {bsonType: 'objectId'},productes: {bsonType: 'array',items: {
title:'object',required: [         'idProducte',          'quantitat'],properties: {idProducte: {bsonType: 'objectId'},quantitat: {bsonType: 'int'}}}}}}}}}}}}}}         }      },
autoIndexId:true
});  