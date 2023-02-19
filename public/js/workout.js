const restbtn = document.getElementById('restbtn')

restbtn.addEventListener('click', function(){
    window.alert("Why did the weightlifter take a rest day? Because he didn't want to 'curl' up and die! Rest days are just as important as workout days when it comes to building strength and avoiding injury, so it's important to give your body the time it needs to recover and recharge. Plus, it gives you an excuse to binge-watch your favorite shows or indulge in some well-deserved treats without feeling guilty!")
})
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        console.log("hi");
        entry.target.classList.remove('hide')
        entry.target.classList.add('show')
      } else {
        entry.target.classList.remove('show')
        entry.target.classList.add('hide')

      }
    })
  })
  const icon = document.querySelectorAll(".workout")
icon.forEach((el) => observer.observe(el));