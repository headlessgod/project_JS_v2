var mainMenu = [
    {name:'Home', link: '/home'},
    {name:'Contacts', link:'/contacts'},
    {name:'Products', link:'/products'},
    {name:'Gallery', link:'/gallery'},
]

var sidebarMenu = [
    {name:'Phones', link: '/phones'},
    {name:'Laptops', link:'/laptops'},
    {name:'Tablets', link:'/tablets'},
    {name:'Displays', link:'/displays'},
]


function CreateMenu (data, className, menuId) {
    this.data = data;
    this.clicked = [];
    this.className = className;
    this.container = document.querySelector (menuId);
    this.list = document.querySelector(menuId + 'Clicked');
    this.listBtn = document.querySelector(menuId + 'Clicked button');

    this.onClickHandler = function(e){
        e.preventDefault();
        this.clicked.push(e.currentTarget.innerText);
    }

    this.init = function(){
        for(var item of this.data) {
            var li = document.createElement('li');
            var a = document.createElement('a');
            a.innerHTML = item.name;
            a.href = item.link;

            a.onclick = this.onClickHandler.bind(this);

            li.appendChild(a);
            this.container.appendChild (li);
        }

        this.container.classList.add (this.className);

        this.listBtn.onclick = function(){
            this.list.append(this.clicked);
        }.bind(this);
    }
}

var sidebar = new CreateMenu(sidebarMenu, 'sidebar-menu', '#sidebarMenu');
var main = new CreateMenu(mainMenu, 'main-menu', '#mainMenu');


sidebar.init();
main.init();

console.log(sidebar);
console.log(main);
