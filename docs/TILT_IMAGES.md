https://bountify.co/css-for-rotating-images-and-drop-shadow-like-example

















<!DOCTYPE html>
<html>
<head>
<style> 

#tilt_container {
    position: relative;
    height: 150px;
    width: 150px;
    margin-left: 60px;
    border: 1px solid blue; <!-- omit this if no border is needed -->
    -webkit-perspective: 100px; /* Safari 4-8  */
    perspective: 100px;
}
.right {
    width: 150px;
    height: 80px;
    background-color: yellow;
    -webkit-transform-style: preserve-3d; /* Safari 3-8  */    
    -webkit-transform: rotateY(-10deg); /* Safari 3-8  */
    transform-style: preserve-3d;
    transform: rotateY(-10deg);
    padding: 15px;
    border-radius: 5px;
    /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);  
    /* Firefox 3.5 - 3.6 */
   -moz-box-shadow:    0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);  
   /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
   box-shadow:        0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);  

}
.left {
    width: 150px;
    height: 80px;
    margin-left: 20px;
    background-color: yellow;
    -webkit-transform-style: preserve-3d; /* Safari 3-8  */    
    -webkit-transform: rotateY(10deg); /* Safari 3-8  */
    transform-style: preserve-3d;
    transform: rotateY(10deg);
    padding: 15px;
    border-radius: 5px;
    /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    -webkit-box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);  
    /* Firefox 3.5 - 3.6 */
   -moz-box-shadow:    0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);  
   /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
   box-shadow:        0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);  
}

</style>
</head>
<body>
<h1>The transform Property</h1>

<div id="tilt_container">
<div class="right">Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!</div>
</div>
<div id="tilt_container">
<div class="left">Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!</div>
</div>
<br>

</body>
</html>















http://jsfiddle.net/farolan/5cj0eqfu/











<img class="tilt left" src="https://c1.staticflickr.com/5/4156/34304945980_ea560be157_z.jpg">

<img class="tilt" src="https://c1.staticflickr.com/5/4156/34304945980_ea560be157_z.jpg">




body {
  padding: 35px 35px;
  background-color: rgba(255, 255, 255, 0.9);
}

body > * {
  margin-bottom: 40px;
}

.tilt {
  width: 360px;
  -webkit-transform: perspective(20px) rotateZ(.8deg) rotateY(-.8deg);
          transform: perspective(20px) rotateZ(.8deg) rotateY(-.8deg);
  -webkit-box-shadow: 
            2px 4px 20px 0px rgba(0, 0, 0, 0.2),
            4px 6px 50px 8px rgba(0, 0, 0, 0.2);
          box-shadow: 
            2px 4px 20px 0px rgba(0, 0, 0, 0.2),
            4px 6px 50px 8px rgba(0, 0, 0, 0.2);
}

.tilt.left {
  -webkit-transform: perspective(20px) rotateZ(-.8deg) rotateY(.8deg);
          transform: perspective(20px) rotateZ(-.8deg) rotateY(.8deg);
  -webkit-box-shadow: 
            -2px 4px 20px 0px rgba(0, 0, 0, 0.2),
            -4px 6px 50px 8px rgba(0, 0, 0, 0.2);
          box-shadow: 
            -2px 4px 20px 0px rgba(0, 0, 0, 0.2),
            -4px 6px 50px 8px rgba(0, 0, 0, 0.2);
}
