
const ComponentsApp = {
    data() {
        return {
            groceryList: [
                {id:0, text:'Овощи'},
                {id:0, text:'Сыр'},
                {id:0, text:'Еще что-то съедобное'}
            ]
        }
    }
}
const app = Vue.createApp(ComponentsApp);

app.component('todo-item', {
    template: `<li>Это компонент</li>`
})
