import { default as expect } from 'expect';
import { get } from 'frisby';
const page =1;
it ('Retrieve Page by page number 1-604',()=>{
    return get(`https://api.quran.com/api/v4/verses/by_page/${page}?language=en&words=true&page=1&per_page=10`).then((res)=>{
    expect(res.json).toBeDefined();    
    
    })
})
