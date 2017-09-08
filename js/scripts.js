
         $(document).ready(function () {
             $("#mycarousel").carousel({ interval: 2000 });

             $("#carouselPause").click(function () {
                 $("#mycarousel").carousel('pause')
             });

             $("#carouselPlay").click(function () {
                 $("#mycarousel").carousel('cycle')
             });
         });


         $("#login-link").click(function () {
             $("#loginModal").modal('show');
         });

         $("#reserve-link").click(function () {
             $("#reserve_form").modal('show');
         });

