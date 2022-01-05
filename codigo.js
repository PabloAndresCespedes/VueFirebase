const app = new Vue({
    el:'#main',
    data:{ 
        conectado:true,
        edad:13,
        lista:['Manuel', 'Carlos', 'Carmen'],
        listaPersonas:[
            {nombre:'Pablo', edad:23},
            {nombre:'Andrés', edad:21},
            {nombre:'Céspedes', edad:21},
            {nombre:'Román', edad:15},
        ]
    }
})