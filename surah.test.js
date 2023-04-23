const { default: expect } = require('expect');
const frisby = require('frisby');
// const joi = require('joi')
const id =1;
beforeAll(()=> {
    // Add our custom expect handler
    frisby.addExpectHandler('Retrieve Surah of :id', (response)=> {
      let json = response.body;
  
      // Run custom Jasmine matchers here
      expect(json.chapter.id).toBe(1);
      expect(json.chapter.name_simple).toBe('Al-Fatihah')

    });
  });
  
it('Retrieve Surah with :id', () => {
  return frisby.get(`https://api.quran.com/api/v4/chapters/${id}`).then((res)=>{
        expect('Retrieve Surah of :id')
        // expect(res.json.chapter.id).toBe(1);
        // expect(res.json.chapter.name_simple).toBe('Al-Fatihah')
    });
    
});

it("Retrieve Surah Info",()=>{
    return frisby.get(`https://api.quran.com/api/v4/chapters/${id}/info`).then((res)=>{
            expect(res.json.chapter_info.chapter_id).toBe(1);
            expect(res.json.chapter_info.text).toContain('This Surah is named Al-Fatihah because of its subject matter.')     
    });
});




afterAll(()=> {
    // Remove said custom handler (if needed)
    frisby.removeExpectHandler('Retrieve Surah of :id');
  });
