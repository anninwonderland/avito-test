# Banner builder
Created as a test assignment for the Avito internship program.
Allows to set up banner configuration and export it.

## Installation
```
$ npm install && npm start
```

### Usage
The app is running on port **3999**.
To edit the banner fill the form fields and press the appropriate button.

![App interface](/rm_images/app.png)

Banner parameters
==

#### 📃 Text
Enter banner content. Try to keep it short, otherwise, the text will be partly hidden.

This field is **required**.

###### Example: 
```
Hello, world!
```

_____________________
#### 📐 Height and width 
The default banner size is 320px * 240px. You can edit these values *(placeholder will give you a hint about the value which fits the aspect ratio 3:4)*.

These fields are **required**.

###### Example:
```
Height: 360px
Width: 240px
```
_____________________
#### 🎨 Color
Background and text colors are also predefined. *The background color will be used as a fallback in case of background image failure.*
Use HEX or RGB(a) format.

These fields are **required**.

###### Example: 
```
#49A9F8 – HEX
rgba(73, 169, 248) – RGB
rgba(73, 169, 248, 1) – RGBa
```
_____________________
#### 🔗 URL
Clicking on banner redirects to a defined url. *Works only with exported layout code.*

This field is **optional**.

###### Example: 
```
https://imgur.com/K3ituxT
```

_____________________
#### 🍭 Print
Image or gradient can be set as a banner print.
Set the link to a chosen image or paste raw image code with data URI. Please fit the gradient format to the one mentioned in the example.

This field is **optional**.

###### Example: 
```
https://imgur.com/K3ituxT – url
data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7 – data uri
linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 100%) – linear gradient
radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 100%) – radial gradient
```

Export
==

To export your banner choose format and click the appropriate button.


#### 🏞 Save as PNG
The banner will be downloaded as *banner.png*.
_____________________

#### 📝 Copy layout to clipboard as HTML
HTML code will be copied to the clipboard.

###### Output example: 

```html
<a id="banner" href="https://github.com/anninwonderland/avito-test" target="_blank" class="banner" style="border-radius: 8px; max-width: 100%; display: flex; -webkit-box-align: end; align-items: flex-end; text-decoration: none; background-position: center center; background-size: cover; background-repeat: no-repeat; height: 320px; width: 240px; color: rgb(255, 255, 255); background-color: rgb(73, 169, 248); background-image: radial-gradient(circle, rgb(2, 0, 36) 0%, rgb(0, 212, 255) 100%);">
    <p class="banner__text" style="font-family: Arial, Helvetica, serif; font-weight: bold; color: inherit; white-space: pre-line; overflow-wrap: break-word; padding: 0px; margin: 10%; width: calc(100% - 24px); max-width: calc(100% - 24px); display: -webkit-box; overflow: hidden; text-overflow: ellipsis; -webkit-line-clamp: 3; -webkit-box-orient: vertical; hyphens: auto; font-size: 30px;">hello, world!</p>
</a>
```
_____________________

#### 🖇 Copy banner configuration to clipboard as JSON
The banner form will be copied as the configuration in JSON format.

###### Output example: 
```json
{
   "text":"hello, world!",
   "url":"https://github.com/anninwonderland/avito-test",
   "style":{
      "width":240,
      "height":320,
      "color":"#FFFFFF",
      "background-color":"rgba(73, 169, 248, 1)",
      "background-image":"radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 100%)"
   }
}
```

### Technologies used
Build with



* [Vue.js](https://vuejs.org) as a framework
* [Vuex](https://router.vuejs.org/) as a local storage
* [SASS (SCSS)](https://sass-lang.com/) as CSS preprocessor
* [ElementUI](https://element.eleme.io/#/en-US) as UI library
* some of [Lodash](https://lodash.com/) functions
