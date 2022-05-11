const baseURL = 'https://platzi-avo.vercel.app';

const appNode = document.querySelector('#app');

const formatPrice = (price) => {
  
  const newPrice = new window.Intl.NumberFormat('en-En', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
  return newPrice;
}

// Web API

async function fetchData () {
  const res = await fetch(`${baseURL}/api/avo`);

  const dataJson = await res.json();

  const allItems = [];

  dataJson.data.forEach(item => {
    
    const image = document.createElement('img');
    image.src = `${baseURL}${item.image}`;
    image.classList.add('h-16', 'w-16', 'md:h-24', 'md:w-24', 'rounded-full', 'mx-auto', 'md:mx-0', 'md:mr-6')
    const title = document.createElement('h2');
    title.textContent = item.name;
    title.classList.add('text-black', 'text-xl')
    const price = document.createElement('div');
    price.textContent = formatPrice(item.price);
    price.classList.add('text-gray-600')

    const container = document.createElement('div');
    container.classList.add('md:flex', 'bg-white', 'rounded-lg', 'hover:bg-gray-300')

    container.append(image, title, price);

    allItems.push(container);

  });
  appNode.append(...allItems);
  appNode.classList.add('grid', 'grid-cols-2', 'gap-2', 'mt-10')
}
fetchData();