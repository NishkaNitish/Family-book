var images = [
    "https://thumbs.dreamstime.com/b/mother-portrait-beautiful-woman-long-brown-hair-young-standing-maternity-mom-vector-illustration-86364538.jpg",
    "https://image.freepik.com/free-vector/cute-boy-cartoon_33070-2118.jpg",
    "https://img.lovepik.com/free_png/33/50/06/12358PICFcPK93pam2Tfr_PIC2018.png_860.png",
    
  ];
  
  var i = 0;
  function nextslide() { 
   
     if(i == 9)
       {
         i=0;
       }
     
      document.getElementById("album").src = images[i];
    i++;
   
  }
  