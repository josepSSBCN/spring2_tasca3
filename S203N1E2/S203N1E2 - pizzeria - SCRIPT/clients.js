
db.createCollection( 'clients', {validator: {$jsonSchema: {bsonType: 'object',title:'clients',required: [         'infoPersonal',          'adreca'],properties: {infoPersonal: {bsonType: 'object',
title:'object',required: [         'nom',          'cognoms',          'telefon'],properties: {nom: {bsonType: 'string'},cognoms: {bsonType: 'string'},telefon: {bsonType: 'string'}}},adreca: {bsonType: 'object',
title:'object',required: [         'carrer',          'numero',          'pis',          'localitat',          'codiPostal'],properties: {carrer: {bsonType: 'string'},numero: {bsonType: 'int'},pis: {bsonType: 'int'},localitat: {bsonType: 'string'},idLocalitat: {bsonType: 'objectId'},codiPostal: {bsonType: 'string'}}},comandes: {bsonType: 'array',items: {
title:'object',required: [         'idComanda',          'dataRealitzada',          'recollirDomicili',          'dataEntrega',          'preuTotal'],properties: {idComanda: {bsonType: 'objectId'},dataRealitzada: {bsonType: 'date'},recollirDomicili: {bsonType: 'bool', 0 = recollir a la botiga,
1 = entrega a domicili},dataEntrega: {bsonType: 'string'},preuTotal: {bsonType: 'decimal'}}}}}         }      },
autoIndexId:true
});  