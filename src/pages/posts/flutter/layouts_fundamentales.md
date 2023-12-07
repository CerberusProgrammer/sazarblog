---
layout: "../../../layouts/LayoutBlog.astro"
title: Explorando los Layouts en Flutter
date: 23/11/2023
description: Una guía detallada de los diferentes layouts que ofrece Flutter y cómo utilizarlos.
image: https://th.bing.com/th/id/OIG.obHnDzipClqOpsLjg_4E?pid=ImgGn
tags: ['Flutter', 'Layouts']
---

# Container

El `Container` es un widget de conveniencia que combina widgets comunes de pintura y posicionamiento. Puedes controlar el tamaño, la decoración, el margen, el relleno y mucho más. Es útil cuando necesitas agregar un simple estilo visual a un widget.

<br>
<div class="mockup-code">
  <pre data-prefix="1"><code>Container(</code></pre> 
  <pre data-prefix="2"><code>  margin: EdgeInsets.all(10.0),</code></pre> 
  <pre data-prefix="3"><code>  color: Colors.amber,</code></pre> 
  <pre data-prefix="4"><code>  width: 48.0,</code></pre>
  <pre data-prefix="5"><code>  height: 48.0,</code></pre>
  <pre data-prefix="6"><code>)</code></pre>
</div>
<br>

# Row y Column

`Row` y `Column` son dos de los layouts más utilizados en Flutter. Permiten colocar varios widgets en una línea horizontal o vertical, respectivamente. Son útiles cuando quieres alinear widgets en relación con otros.

<br>
<div class="mockup-code">
  <pre data-prefix="1"><code>Row(</code></pre> 
  <pre data-prefix="2"><code>  mainAxisAlignment: MainAxisAlignment.spaceAround,</code></pre> 
  <pre data-prefix="3"><code>  children: [</code></pre> 
  <pre data-prefix="4"><code>    Icon(Icons.home),</code></pre>
  <pre data-prefix="5"><code>    Icon(Icons.business),</code></pre>
  <pre data-prefix="6"><code>    Icon(Icons.school),</code></pre>
  <pre data-prefix="7"><code>  ],</code></pre>
  <pre data-prefix="8"><code>)</code></pre>
</div>
<br>


# Stack

Un `Stack` permite superponer varios widgets. Los widgets se apilan en el orden en que se pasan a la propiedad `children`. Es útil cuando quieres superponer varios widgets.

<br>
<div class="mockup-code">
  <pre data-prefix="1"><code>Stack(</code></pre> 
  <pre data-prefix="2"><code>  alignment: const Alignment(0.6, 0.6),</code></pre> 
  <pre data-prefix="3"><code>  children: [</code></pre> 
  <pre data-prefix="4"><code>    CircleAvatar(</code></pre>
  <pre data-prefix="5"><code>      backgroundImage: AssetImage('images/pic.jpg'),</code></pre>
  <pre data-prefix="6"><code>      radius: 100.0,</code></pre>
  <pre data-prefix="7"><code>    ),</code></pre>
  <pre data-prefix="8"><code>    Container(</code></pre>
  <pre data-prefix="9"><code>      decoration: BoxDecoration(</code></pre>
  <pre data-prefix="10"><code>        color: Colors.black45,</code></pre>
  <pre data-prefix="11"><code>      ),</code></pre>
  <pre data-prefix="12"><code>      child: Text(</code></pre>
  <pre data-prefix="13"><code>        'Mia B',</code></pre>
  <pre data-prefix="14"><code>        style: TextStyle(</code></pre>
  <pre data-prefix="15"><code>          fontSize: 20.0,</code></pre>
  <pre data-prefix="16"><code>          fontWeight: FontWeight.bold,</code></pre>
  <pre data-prefix="17"><code>          color: Colors.white,</code></pre>
  <pre data-prefix="18"><code>        ),</code></pre>
  <pre data-prefix="19"><code>      ),</code></pre>
  <pre data-prefix="20"><code>    ),</code></pre>
  <pre data-prefix="21"><code>  ],</code></pre>
  <pre data-prefix="22"><code>)</code></pre>
</div>
<br>

