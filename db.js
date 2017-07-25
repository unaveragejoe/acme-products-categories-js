var data = 
{
  "Bar Category": [
    {
      "name": "bar 1",
      "id": 1
    }
  ],
  "": [],
  "Foo Category": [
    {
      "name": "foo 1",
      "id": 1
    },
    {
      "name": "foo 2",
      "id": 2
    }
  ],
  "Sports - Baseball": [
    {
      "name": "Wilson hardball bat",
      "id": 1
    }
  ]
};

module.exports = {
    list: function(){
      return data;
    },
    getCategoryNames: function(){
      var categoryNames = [];
      for(category in categories){
         categoryNames.push(categories[category]);
      }
      return categoryNames;
    },
    getProductsByCategory: function(category){
      return data[category];
    },
    createProduct: function(){

    },
    deleteProduct: function(){

    },
    updateProduct: function(){

    },
    deleteCategory: function(){

    },
    createCategory: function(){

    }
};