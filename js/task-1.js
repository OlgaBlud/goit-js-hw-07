const categoriesList = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesList.length}`);
const categoriesInfo = categoriesList.forEach(element => {
  const categoryName = element.querySelector('h2').textContent;
  const categoryItemsTotal = element.querySelectorAll('li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItemsTotal}`);
});
