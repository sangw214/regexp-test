const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apukey=1234566&s=froze
The quick brown fox jumps over the lazy dog.
abbccdddd
http://www.omdbapi.com/?apukey=1234566&s=froze
동해물과_백두산이 마르고 닳도록
`;

const h = `   the hello world    !
`;

//const regexp = new RegExp('the','gi');
const regexp1 = /the/gi;
console.log(str.match(regexp1));

const regexp2 = /fox/gi;
console.log(regexp2.test(str));

console.log(str.replace(regexp2 , 'AAA'));

console.log(str.match(/\.$/gim));

console.log( str.match(/d$/gm) );
console.log( str.match(/^t/gmi) );

console.log( str.match(/h..p/g) );

console.log( str.match(/\b\w{2,3}\b/g) );

console.log( str.match(/[0-9]{1,}/g) );

console.log( str.match(/[가-힣]{1,}/g) );

console.log( str.match(/\w/g) );

console.log( str.match(/\bf\w{1,}/g) );

console.log( str.match(/\d{1,}/g) );

console.log( str.match(/\s/g) );

console.log( h.replace(/\s/g,'') );


const str2 = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apukey=1234566&s=froze
The quick brown fox jumps over the lazy dog.
abbccdddd
`;

console.log( str2.match(/.{1,}(?=@)/g) );
console.log( str2.match(/(?<=@).{1,}/g) );
