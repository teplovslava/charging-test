document.addEventListener('DOMContentLoaded', function(){
    const swiper = new Swiper('.swiper1', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 'auto',
        slidesOffsetAfter:0,
        loop: true,
        centeredSlides:true,
    

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
      });


      const swiper2 = new Swiper('.swiper2', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 'auto', 
        slidesOffsetAfter:0,
        grab:false,
        navigation: {
          nextEl: '.button-next',
          prevEl: '.button-prev',
        },
        
      
      });

      const rotateBetweenWords = (value) => {
        const words = document.querySelectorAll('.wheel__word')
        
        let deg = -60
        
        for (let word of words) {
            word.style.transform = `rotate(${ deg }deg)`
            deg += value
        }
    }
    
    // расстояние между буквами
    const rotateBetweenLetters = (value) => {
        const letters = document.querySelectorAll('.wheel__letter')
        
        let deg = 0
        
        for (let letter of letters) {
            letter.style.transform = `rotate(${ deg }deg)`
            deg += value
        }
        
    }
    
    rotateBetweenWords(5)
    rotateBetweenLetters(10)

})