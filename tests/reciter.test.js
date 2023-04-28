const { default: expect } = require('expect');
const frisby = require('frisby');
const page =1;
it ('Retrieve Page by page number 1-604',()=>{
    return frisby.get(`https://api.quran.com/api/v4/verses/by_page/${page}?language=en&words=true&page=1&per_page=10`).then((res)=>{
    expect(res.json).toBeDefined();    

    })
})
// it('Retrieve Surah with :id', () => {
//     return frisby.get(`https://api.quran.com/api/v4/resources/chapters_reciters/3`).then((res)=>{
//         //   expect(res.status).toBe(200);
//         let json = res.body;
//           expect(json.reciters.name).toBe("Abu Bakr al-Shatri");
//         //   expect(json.reciters.name).toBeDefined();
            
//           // expect(res.json.chapter.id).toBe(1);
//           // expect(res.json.chapter.name_simple).toBe('Al-Fatihah')
//       });
      
// });
  