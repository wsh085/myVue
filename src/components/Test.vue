<template>
    <div class="container">
        <div class="col-md-6 col-md-offset-3">
            <h1>Hello Vue.js ! </h1>
            <div id="app">
              <table class="table table-hover" v-cloak>
                <thead>
                  <tr>
                    <th class="text-right" @click="sortBy('id')">序号</th>
                    <th class="text-right" @click="sortBy('name')">书名</th>                           <th class="text-right" @click="sortBy('author')">作者</th>                             <th class="text-right" @click="sortBy('price')">价格</th>                             <th class="text-right" >操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="book in books">
                    <td class="text-right">{{book.id}}</td>
                    <td class="text-right">{{book.name}}</td>
                    <td class="text-right">{{book.author}}</td>
                    <td class="text-right">{{book.price}}</td>
                    <template v-if="book.id%2==0">
                        <td class="text-right">
                            <button type="button" class="btn btn-success" @click="delBook(book)">删除</button>
                        </td>
                    </template>
                    <template v-else>
                         <td class="text-right">
                            <button type="button" class="btn btn-danger" @click="delBook(book)">删除</button>     
                         </td>
                    </template>
                  </tr>
                  <tr>
                    <td class="text-right" colspan="5">
                      <h4>总价：{{sum}}</h4>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div id="add-book">
                <legend>添加书籍</legend>
                <div class="form-group">
                  <label>书名</label>
                  <input type="text" class='form-control' v-model="book.name">
                </div>
                 <div class="form-group">
                  <label>作者</label>
                  <input type="text" class='form-control' v-model="book.author">
                </div>
                 <div class="form-group">
                  <label>价格</label>
                  <input type="text" class='form-control' v-model="book.price">
                </div>
                 <button class="btn btn-primary btn-block" @click="addBook()">添加</button>
              </div>
            </div>
        </div>
    </div>
</template>

<script type="es6">
export default {
   data(){
       return { sortparam:'',
                book:{
                    id:0,
                    author:'',
                    name:'',
                    price:''
                },
                books: [{
                        id: 1,
                        author: '曹雪芹',
                        name: '红楼梦',
                        price: 32.0
                    }, {
                        id: 2,
                        author: '施耐庵',
                        name: '水浒传',
                        price: 30.0
                    }, {
                        id: '3',
                        author: '罗贯中',
                        name: '三国演义',
                        price: 24.0
                    }, {
                        id: 4,
                        author: '吴承恩',
                        name: '西游记',
                        price: 20.0
                    }]
       }
    },
//     books:''
  computed:{
    sum:function(){
      var result = 0;
      for (var i=0;i<this.books.length;i++){
        result += Number(this.books[i].price)
      };
      return result;
    }
  },
  methods:{
    addBook:function(){
      this.book.id = this.books.length +1;
      this.books.push(this.book);
      this.book = '';
    },
    delBook:function(book){
      this.books = this.books.filter(function(element){
          return element.id != book.id;
      });
      for(var i=0;i<this.books.length;i++){
        this.books[i].id = (i+1);
      }
    },
    sortBy:function(sortparam){
      this.sortparam = sortparam
    }
  }      
}
</script>

