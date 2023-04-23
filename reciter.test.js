const { default: expect } = require('expect');
const frisby = require('frisby');

it('Retrieve Surah with :id', () => {
    return frisby.get(`https://api.quran.com/api/v4/resources/chapters_reciters`).then((res)=>{
        //   expect(res.status).toBe(200);
          expect(res.json.reciters.id).toBeDefined();
          expect(res.json.reciters.name).toBeDefined();
            
          // expect(res.json.chapter.id).toBe(1);
          // expect(res.json.chapter.name_simple).toBe('Al-Fatihah')
      });
      
});
  