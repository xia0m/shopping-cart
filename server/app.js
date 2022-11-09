const express = require('express');

const app = express();

const sampleData = [
    {
      title: 'Starry Night',
      description:
        'High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Goh.',
      imageUrl: 'https://demo.snipcart.com/images/starry-night.jpg',
      prices: {
        physical: '79.95',
        digital: '29.75',
      },
    },
    {
      title: 'Irises',
      description: 'Irises is yet again, another painting by the Dutch artist Vincent van Gogh.',
      imageUrl: 'https://demo.snipcart.com/images/irises.jpg',
      prices: {
        physical: '65.95',
        digital: '37.75',
      },
    },
    {
      title: 'Branches with Almond Blossom',
      description: 'Branches with Almond Blossom is another van Gogh painted in 1890.',
      imageUrl: 'https://demo.snipcart.com/images/almond.jpg',
      prices: {
        physical: '29.75',
        digital: '17.75',
      },
    },
    {
      title: 'Rosy-Fingered Dawn at Louse Point',
      description:
        "The title Rosy-Fingered Dawn at Louse Point refers to one of Willem de Kooning's favourite places in Long Island.",
      imageUrl: 'https://demo.snipcart.com/images/rosy.jpg',
      prices: {
        physical: '49.95',
        digital: '24.75',
      },
    },
  ];

const MAX_PRODUCTS = 120;
const mockData = [];
for (let i = 1; i<= MAX_PRODUCTS; i++) {
    const {title, description, imageUrl, prices} = sampleData[i%4];
    mockData.push({
        id: i,
        title,
        description,
        imageUrl,
        prices
    })
}

app.get('/carts', (req, res) => {
    
    const page = req.query.page;
    const limit = req.query.limit;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const result = mockData.slice(startIndex, endIndex);
    res.json(result); 
});



app.listen(3000, () => console.log('App is listening on port 3000.'));