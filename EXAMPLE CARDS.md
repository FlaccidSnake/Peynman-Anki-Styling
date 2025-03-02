Here you'll find the example <b>html</b> for the front and back templates of my most-used note-type.

# Front Template
```html
<section class="text-box">

  <header class="heading2">
    <span class="heading">{{#Topic}}{{Topic}}{{/Topic}}</span>
    <span>{{edit:Question 1}}</span>
  </header>

  <main class="redacted">
    <p>{{Common}}</p>  

    {{#Extra}}
    <details class="extra">
      <summary>Extra</summary>
      <p>{{Extra}}</p>
    </details>
    {{/Extra}}
  </main>

  <footer class="ref redacted">
    <hr>
    {{#Tags}}
    <span class="prettify-tags">{{clickable:Tags}}</span>
    {{/Tags}}
  </footer>

</section>

<script src="_clickabletags.js"></script>
```
# Back Template
```html
<section class="text-box">

  <header class="heading2">
    <span class="heading">{{#Topic}}{{Topic}}{{/Topic}}</span>
    <span>{{edit:Question 1}}</span>
  </header>

  <main>
    <p>{{Common}}</p>  

    {{#Extra}}
    <details class="extra">
      <summary>Extra</summary>
      <p>{{edit:Extra}}</p>
    </details>
    {{/Extra}}
  </main>

  <footer class="ref">
    <hr>
    {{#Tags}}
    <span class="prettify-tags">{{clickable:Tags}}</span>
    {{/Tags}}
  </footer>

</section>

<script src="_clickabletags.js"></script>
```
