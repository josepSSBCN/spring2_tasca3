
db.createCollection( 'proveidor', {validator: {$jsonSchema: {bsonType: 'object',title:'proveidor',required: [         'infoPersonal',          'direccio'],properties: {infoPersonal: {bsonType: 'object',
title:'object',required: [         'nom',          'telefon',          'fax',          'nif'],properties: {nom: {bsonType: 'string'},telefon: {bsonType: 'string'},fax: {bsonType: 'string'},nif: {bsonType: 'string'}}},direccio: {bsonType: 'object',
title:'object',required: [         'numero',          'pis',          'porta',          'ciutat',          'coidPostal',          'pais'],properties: {carrer: {bsonType: 'string'},numero: {bsonType: 'int'},pis: {bsonType: 'int'},porta: {bsonType: 'int'},ciutat: {bsonType: 'string'},coidPostal: {bsonType: 'int'},pais: {bsonType: 'string'}}},marques: {bsonType: 'array',items: {
title:'object',required: [         '_idMarques',          'Nom',          'preu'],properties: {_idMarques: {bsonType: 'objectId'},Nom: {bsonType: 'string'},preu: {bsonType: 'decimal'},ullera: {bsonType: 'array',items: {
title:'object',required: [         '_idUlleres',          'tipusMuntura',          'colorMuntura',          'colorVidres',          'graduacio'],properties: {_idUlleres: {bsonType: 'objectId'},tipusMuntura: {enum: 'flotant', 'pasta', 'metalica'},colorMuntura: {enum: 'Verd', 'Blau', 'Gris', 'Vermell'},colorVidres: {bsonType: 'object',
title:'object',required: [         'esequerra',          'dret'],properties: {esequerra: {bsonType: 'string'},dret: {bsonType: 'string'}}},graduacio: {bsonType: 'object',
title:'object',required: [         'esquerra',          'dret'],properties: {esquerra: {bsonType: 'decimal'},dret: {bsonType: 'decimal'}}}}}}}}}}         }      },
autoIndexId:true
});  