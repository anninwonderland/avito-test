# Banner builder
Created as a test assignment for the Avito internship program.
Allows to set up banner configuration an export it.

## Installation
```
$ npm install && npm start
```

### Usage
The app is running on port **3999**.
To edit the banner fill the form fields and press appropriate button.


#### Banner parameters

##### 📃 Text
Enter banner content.

This field is **required**.

###### Example: 

_____________________
##### 📐 Height and width 
The basic banner size is 320px * 240px. You can edit these values *(placeholder will give you a hint about value which fits the aspect ratio 3:4)*

These fields are **required**.

###### Example:
_____________________
##### 🎨 Color
Background and text colors ara also predefined. *Background color will be used as fallback in case of background image failure.*

These fields are **required**.

###### Example: 

_____________________
##### 🔗 URL
On banner click redirect to defined url. *Works only with exported layout code.*

This field is **optional**.

###### Example: 

_____________________
##### 🍭 Print
Image or gradient can be set as banner print.
Set link to chosen image or paste raw image code with data uri.

This field is **optional**.

###### Example: 


### Technologies used
Build with



* [Vue.js](https://vuejs.org) as a framework
* [Vuex](https://router.vuejs.org/) as a local storage
* [SASS (SCSS)](https://sass-lang.com/) as CSS preprocessor
* [ElementUI](https://element.eleme.io/#/en-US) as UI library
* some of [Lodash](https://lodash.com/) functions
