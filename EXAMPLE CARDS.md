Here you'll find the example <b>html</b> for the front and back templates of my most-used note-type.

# Peynman QnA note-type front template
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
# Peynman QnA note-type back template
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
# Peynman Cloze Pathology note-type front template
```html
<section class="text-box">

  <header class="heading2">
    <div class="heading">
      <span>Pathophysiology</span>
      {{#[stickynote]}}<span>🗐</span>{{/[stickynote]}}
    </div>
    <div class=PBL>Your patient has <span style=font-weight:bold>{{Clinical}}</span>.</div>
  </header>

  <main>
    {{edit:cloze:PATHOPHYSIOLOGY}}
    <div class="cit">{{Citation}}</div>
  </main>

  <footer class="extra redacted">
    {{#Context}}<hr>{{Context}}{{/Context}}
  </footer>

</section>

<script src="_randomisedlists.js"></script>
```
# Peynman Cloze Pathology note-type back template
```html
<section class="text-box">

  <header class="heading2">
    <div class="heading">
      <span>Pathophysiology</span>
      {{#[stickynote]}}<span>🗐</span>{{/[stickynote]}}
    </div>
    <div class=PBL>Your patient has <span style=font-weight:bold>{{Clinical}}</span>.</div>
  </header>

  <main>
    {{edit:cloze:PATHOPHYSIOLOGY}}
    <div class="cit">{{Citation}}</div>
  </main>

  <footer class="extra">
    {{#Context}}<hr>{{Context}}{{/Context}}
  </footer>

</section>

<script src="_randomisedlists.js" id="back"></script>
```
# Peynman Retardmaxxing note-type front template
```html
<section class="text-box">

  <header class="heading2">
    <div class="sourceheading">{{Tags}}</div>
    <div>{{edit:Question}}</div>
  </header>

  <main class="redacted">
    {{Answer}}
  </main>

  <footer class="extra redacted">
    {{#Context}}<hr>{{Context}}{{/Context}}
  </footer>

</section>

<script src="_randomisedlists.js"></script>
<script src="_tagtitle.js"></script>
```
# Peynman Retardmaxxing note-type back template
```html
<section class="text-box">

  <header class="heading2">
    <div class="sourceheading">{{Tags}}</div>
    <div>{{edit:Question}}</div>
  </header>

  <main>
    {{Answer}}
  </main>

  <footer class="extra">
    {{#Context}}<hr>{{Context}}{{/Context}}
  </footer>

</section>

<script src="_randomisedlists.js"></script>
<script src="_tagtitle.js"></script>
```
