const app = new Vue({
    el:'#main',
    data:{ 
        tarea:null,
        tareas:[
            {titulo:'Aprender JS', completado: false}, 
            {titulo:'Aprender VUE', completado: true}, 
            {titulo:'Aprender HTML', completado: false}
        ]
    },
    methods:{
        addTarea(){
            this.tareas.unshift({titulo: this.tarea, completado:false})
        }
    },
    computed:{
        mostrarCompletadas(){
            return this.tareas.filter(i => i.completado)
        },
        mostrarUsuario(){
            return 'Pablo'
        },
        mostrarPorTitulo(){
            return this.tareas.filter( item => item.titulo.includes(this.tarea))
        }
    }
})