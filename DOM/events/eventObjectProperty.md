# Event object property

// type, timestamp, preventDefault

// target, toElement, srcElement, currentTarget,

// clientX, clientY, screenX, screenY

// altkey, ctrlkey, shiftkey, keyCode

## type - (Returns the name of the event that was triggered)

```javascript
element.addEventListener("click", function (e) {
  console.log(e.type); // "click"
});

element.addEventListener("keydown", function (e) {
  console.log(e.type); // "keydown"
});
```

## timestamp - (Time (in ms) since the page loaded when the event fired. Useful for measuring performance or time between events)

```javascript
element.addEventListener("click", function (e) {
  console.log(e.timeStamp); // e.g. 3245.6 (milliseconds)
});
```

## preventDefault - (Returns true if preventDefault() was called, false otherwise)

```javascript
element.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e.defaultPrevented); // true
});
```

## target - (Element that triggered the event)

## currentTarget - (Element the listener is attached to)

```javascript
// HTML:
// <div id="parent">
//   <button id="child">Click</button>
// </div>

parent.addEventListener("click", function (e) {
  console.log(e.target); // <button> (what you clicked)
  console.log(e.currentTarget); // <div>    (where listener is)
});
```

## srcElement - (It is simply an old Internet Explorer (IE) alias for event.target) ❌Deprecated

```javascript
element.addEventListener("click", function (e) {
  console.log(e.target); // <button>
  console.log(e.srcElement); // <button>  ← same result
});
```

## toElement - (Element mouse is moving to (mouseover/out only))

```javascript
element.addEventListener("mouseover", function (e) {
  console.log(e.toElement); // element mouse moved INTO
});
```

## clientX / clientY - (Position relative to viewport)

## screenX / screenY - (Position relative to entire screen)

## pageX / pageY - (Position relative to full page (incl. scroll))

## offsetX / offsetY - (Position relative to target element)

```javascript
document.addEventListener("mousemove", function (e) {
  console.log(e.clientX, e.clientY); // e.g. 450, 300
  console.log(e.screenX, e.screenY); // e.g. 1450, 400
});
```

## altKey - (Alt held?)

## ctrlKey - (Ctrl held?)

## shiftKey - (Shift held?)

## keycode - (Returns a numeric code for the key pressed) ❌Deprecated, avoid

```javascript
document.addEventListener("click", function(e) {
  console.log(e.altKey);   // true if Alt held
  console.log(e.ctrlKey);  // true if Ctrl held
  console.log(e.shiftKey); // true if Shift held
  console.log(e.metaKey);  // true if Cmd (Mac) / Win key held
  console.log(e.keyCode); // e.g. 65 for "A"  ← OLD way
});
```

