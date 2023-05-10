export const store = {
  data: {
    categories: [
      {
        id: 0,
        name: 'first',
        thematics: [
          {
            id: 0,
            name: 'themeCool',
            level: 0,
            cards: [
              {
                id: 0,
                recto: '',
                verso: '',
                rate: []
              }
            ]
          }
        ]
      }
    ]
  }
}
// // eslint-disable-next-line
// new Proxy(store, {
//   set (target) {
//     console.log('change')
//     localStorage.setItem('store', JSON.stringify(target))
//   }
// })
