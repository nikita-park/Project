let workBtnList = document.querySelector('.work-example');
workBtnList.addEventListener('click', function() {
  let className = this.getAttribute('data-target');
 console.log(className);

});
