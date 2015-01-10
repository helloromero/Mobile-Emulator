#Mobile Emulator
A simple Mobile Emulator to showcase urls in a mobile form, it's great for showing clients how a site will look on mobile without showing them on a tiny screen.

[See it in action!](http://www.heyimrm.co.uk/opensource/mobile/index.html)

![A success modal](http://www.heyimrm.co.uk/opensource/images/howitlooks.png)

#Usage

Simply change the url, You only need to worry about the **set_url.js** file which looks like this... 

```javascript
$( document ).ready(function() {
	//Set your url below here ↴
	var url = "http://www.heyimrm.co.uk";
 	$('#website').prop('src', url);
});
```

