
    
    var last_nav_id = ['1'];
    var last_product_id = ['product_1'];
    
    function nav(id){
     
      document.getElementById(last_nav_id).classList.remove("is-active");
      document.getElementById(last_product_id).classList.remove("current");
     
      
      var nav = id;
      var product = 'product_' + nav;
     /* console.log(nav + '/' + product);*/
      
      
       var myNavClass = document.getElementById(nav).classList;  
      
          if (myNavClass.contains("is-active")) {
              myNavClass.remove("is-active");
         }else {
            myNavClass.add("is-active");
         }
         
        var myProductClass = document.getElementById(product).classList; 
         
          if (myProductClass.contains("current")) {
              myProductClass.remove("current");
         }else {
            myProductClass.add("current");
         }
         
       last_nav_id[0] = nav;
       last_product_id[0] = product;
    }