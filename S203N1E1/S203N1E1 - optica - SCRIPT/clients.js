
db.createCollection( 'clients', {validator: {$jsonSchema: {bsonType: 'object',title:'clients',required: [         'infoPersonal',          'direccio',          'dataRegistre',          'clientRecomanador',          'idEmpleat',          'vendes'],properties: {infoPersonal: {bsonType: 'object',
title:'object',required: [         'nom',          'cognoms',          'telefon',          'email'],properties: {nom: {bsonType: 'string'},cognoms: {bsonType: 'string'},telefon: {bsonType: 'string'},email: {bsonType: 'string'}}},direccio: {bsonType: 'object',
title:'object',required: [         'carrer',          'numero',          'pis',          'porta',          'ciutat',          'coidPostal',          'poblacio'],properties: {carrer: {bsonType: 'string'},numero: {bsonType: 'int'},pis: {bsonType: 'int'},porta: {bsonType: 'int'},ciutat: {bsonType: 'string'},coidPostal: {bsonType: 'int'},poblacio: {bsonType: 'string'}}},dataRegistre: {bsonType: 'date', description:'Data de registre del client'},clientRecomanador: {bsonType: 'objectId'},idEmpleat: {bsonType: 'int', description:'Empleat que ha realitzat la venda'},vendes: {bsonType: 'array',items: {
title:'object',required: [         '_idVenda',          'dataVenda',          'empleat',          'productes'],properties: {_idVenda: {bsonType: 'objectId'},dataVenda: {bsonType: 'date'},empleat: {bsonType: 'object',
title:'object',required: [         'nom',          'cognom'],properties: {nom: {bsonType: 'string'},cognom: {bsonType: 'string'}}},productes: {bsonType: 'array',items: {
title:'object',required: [         'idUllera',          'quantitat'],properties: {idUllera: {bsonType: 'objectId'},quantitat: {bsonType: 'int'}}}}}}}}         }      },
autoIndexId:true
});  