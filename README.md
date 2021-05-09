# Number To Persian - Conversion Number To Persian letters

Number To Persian provides the conversion of numbers into Persian letters easily In Java Script



## Features

- it has Ability to process numbers up to 66 integers and 11 decimal places
- It can be used as  modular package and CND or external library

### Attention 

For numbers greater than **14 digits**, you must use the **string** data type



## Browser Support

| [![Chrome](https://camo.githubusercontent.com/1d440f4ffad2f6a8df0e532493cd225964bc8624cb0956171be0717dc4fbce64/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f6d61737465722f7372632f6368726f6d652f6368726f6d655f34387834382e706e67)](https://camo.githubusercontent.com/1d440f4ffad2f6a8df0e532493cd225964bc8624cb0956171be0717dc4fbce64/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f6d61737465722f7372632f6368726f6d652f6368726f6d655f34387834382e706e67) | [![Firefox](https://camo.githubusercontent.com/b2a1e5b90d591dfbf5dfa425c0d60d80aa3590d22ace3408cfb36d935808bb69/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f6d61737465722f7372632f66697265666f782f66697265666f785f34387834382e706e67)](https://camo.githubusercontent.com/b2a1e5b90d591dfbf5dfa425c0d60d80aa3590d22ace3408cfb36d935808bb69/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f6d61737465722f7372632f66697265666f782f66697265666f785f34387834382e706e67) | [![Safari](https://camo.githubusercontent.com/8d37441ff74dfc50881abae7596a28677bba4617631eccf2143e9559906a81de/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f6d61737465722f7372632f7361666172692f7361666172695f34387834382e706e67)](https://camo.githubusercontent.com/8d37441ff74dfc50881abae7596a28677bba4617631eccf2143e9559906a81de/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f6d61737465722f7372632f7361666172692f7361666172695f34387834382e706e67) | [![Opera](https://camo.githubusercontent.com/8663fa4d6a0533eac6da67e2bbfaee3cc1ee6644454a88b21bf31f8196bb0d2f/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f6d61737465722f7372632f6f706572612f6f706572615f34387834382e706e67)](https://camo.githubusercontent.com/8663fa4d6a0533eac6da67e2bbfaee3cc1ee6644454a88b21bf31f8196bb0d2f/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f6d61737465722f7372632f6f706572612f6f706572615f34387834382e706e67) | [![Edge](https://camo.githubusercontent.com/b9d103cc69d7a8dc55248c732a7aeb55c1f79e665c76bf523b431db262f0808d/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f6d61737465722f7372632f656467652f656467655f34387834382e706e67)](https://camo.githubusercontent.com/b9d103cc69d7a8dc55248c732a7aeb55c1f79e665c76bf523b431db262f0808d/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f6d61737465722f7372632f656467652f656467655f34387834382e706e67) | [![IE](https://camo.githubusercontent.com/d0739e3928b4c84f6c2cd9902bcc379f18c645ffce6089e2ca2a1ecf7a2965cb/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f6d61737465722f7372632f617263686976652f696e7465726e65742d6578706c6f7265725f392d31312f696e7465726e65742d6578706c6f7265725f392d31315f34387834382e706e67)](https://camo.githubusercontent.com/d0739e3928b4c84f6c2cd9902bcc379f18c645ffce6089e2ca2a1ecf7a2965cb/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f6d61737465722f7372632f617263686976652f696e7465726e65742d6578706c6f7265725f392d31312f696e7465726e65742d6578706c6f7265725f392d31315f34387834382e706e67) |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | :----------------------------------------------------------- |
| 22✔                                                          | 20✔                                                          | 5.1✔                                                         | 12.1✔                                                        | 12✔                                                          | 9✔                                                           |



## Installation

### NPM

```
  npm install number-to-persian
```



## Usage 



###  Modular Package

```
import numberToPersian from 'number-to-persian';
OR 
const numberToPersian = require('number-to-persian');

console.log(numberToPersian(123)); //output: یکصد و بیست و سه
```



### External Library ###	

```
<script src="cnd/"></script>
<script>
	console.log(numberToPersian(123)); //output: یکصد و بیست و سه
</script>
```

​	



## Example

you can call `numberToPersian(num)` or use `.numberToPersian()` prototype

```
//Global function
numberToPersian(123); //output: یکصد و بیست و سه

//String Prototype
"123".num2persian(); //output: یکصد و بیست و سه

//Non-Digits
"1,23".num2persian(); //output: یکصد و بیست و سه

//Number Prototype
(2000).num2persian(); //output: دوهزار

//Float
(2000.3333).num2persian(); //output: دو هزار ممیز سه هزار و سیصد و سی و سه ده هزارم

//Negative numbers
(-123).num2persian(); //output: منفی یکصد و بیست و سه
```





## Installing

------



## تبدیل عدد به حروف فارسی در جاوا اسکریپت

توانایی پردازش اعداد تا 66 رقم عدد صحیح و 11 رقم اعشار | دسیلیارد

#### برای  اعداد بیشتر از 14 رقم  باید  از نوع داده استرینگ استفاده کنید.


