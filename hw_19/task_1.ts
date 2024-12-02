1. Xpath/CSS: элемент с id - ‘submit’
#submit
//button[@id='submit']
2. Xpath/CSS: все элементы с классом ‘txt’ 
.txt
//*[@class="txt"]
3. Xpath: первый элемент с классом ‘txt’
//*[@class="txt"][1]
4. Xpath: кнопку которая содержит текст: ‘Remove comment’
//button[text()='Remove comment']
5. Xpath: первый элемент с классом ‘one’ 
//*[contains(@class, 'one')])[1]
6.Xpath/CSS: элемент с атрибутом ‘multitag2’ и значением  ‘on’ 
[multitag2="on"]
 //*[@multitag2= 'on']
7.Xpath/CSS: всех детей элемента ‘div’ с классом ‘content’ 
div > .content
//div/*[@class='content']
8. CSS: все элементы ‘span’ и  ‘button’ с классом ‘content’ 
span.content
button.content
9. Xpath: используя за основу селектор //*[@id='submit'] найти элемент body 
//*[@id='submit']/ancestor::body