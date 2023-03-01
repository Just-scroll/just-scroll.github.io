const farfurie1 = document.getElementById("farfurie1");

farfurie1.addEventListener("click", function() {
    farfurie1.classList.toggle("animate-to-origin");
  farfurie1.classList.toggle("animate-to-center");
  
});

const observer = new IntersectionObserver((entries) =>
{
  entries.forEach((entry) => 
  {
    if( entry.isIntersecting )
    {
      entry.target.ATTRIBUTE_NODE.classList.add('show');
    }
    else
    {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.mancare');
hiddenElements.forEach((el) => observer.observe(el));
