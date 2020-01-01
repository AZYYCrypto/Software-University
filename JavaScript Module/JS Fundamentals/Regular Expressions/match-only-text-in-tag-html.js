let text = '<b>Regular Expressions</b> are cool! <p>I am a paragraph</p> ... some text after  Helo, <div>I am a<code>DIV</code></div>! <span>Hello, I am Span</span> <a href="https://softuni.bg/">SoftUni</a>';
let pattern = /<(\w+).*>.*<\/\1>/g;
let result = text.match(pattern);
console.log(result);

