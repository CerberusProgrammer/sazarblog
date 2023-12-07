---
layout: "../../../layouts/LayoutBlog.astro"
title: Stateless vs Stateful Widgets
date: 12/23/2023
description: Una explicación detallada de la diferencia entre los widgets Stateless y Stateful en Flutter.
image: https://th.bing.com/th/id/OIG.9EXlhkqZJTaKX.AZp2Ll?w=1024&h=1024&rs=1&pid=ImgDetMain
tags: ['Flutter', 'Widgets']
---

En Flutter, todo es un widget. Los widgets son los bloques de construcción fundamentales de la interfaz de usuario en Flutter y cada widget es una clase inmutable en Dart. Hay dos tipos principales de widgets en Flutter: `StatelessWidget` y `StatefulWidget`.

<br>

# StatelessWidget

<br>

Un `StatelessWidget` en Flutter es un widget que describe parte de la interfaz de usuario que puede cambiar dependiendo de la configuración y el contexto. No tiene estado mutable que cambie durante su vida útil. Es inmutable, lo que significa que una vez que se dibuja en la pantalla, no puede cambiar su estado mediante ninguna operación. Ejemplos de widgets sin estado son Icon, IconButton y Text.

<br>
<div class="mockup-code">
  <pre data-prefix="1"><code>class MyStatelessWidget extends StatelessWidget {</code></pre> 
  <pre data-prefix="2"><code>  @override</code></pre> 
  <pre data-prefix="3"><code>  Widget build(BuildContext context) {</code></pre>
  <pre data-prefix="4"><code>    return Container(</code></pre>
  <pre data-prefix="5"><code>      child: Text('Hola Mundo'),</code></pre>
  <pre data-prefix="6"><code>    );</code></pre>
  <pre data-prefix="7"><code>  }</code></pre>
  <pre data-prefix="8"><code>}</code></pre>
</div>
<br>

# StatefulWidget

<br>

Un StatefulWidget, por otro lado, es mutable. Un StatefulWidget puede cambiar su apariencia y estado durante su vida útil. Puede redibujarse en la pantalla con cambios en los datos. Ejemplos de widgets con estado son Checkbox, Radio, Slider, InkWell, Form y TextField.


<br>
<div class="mockup-code">
  <pre data-prefix="1"><code>class MyStatefulWidget extends StatefulWidget {</code></pre>
  <pre data-prefix="2"><code>  @override</code></pre>
  <pre data-prefix="3"><code>  _MyStatefulWidgetState createState() => _MyStatefulWidgetState();</code></pre>
  <pre data-prefix="4"><code>}</code></pre>
  <pre data-prefix="5"><code></code></pre>
  <pre data-prefix="6"><code>class _MyStatefulWidgetState extends State<MyStatefulWidget> {</code></pre>
  <pre data-prefix="7"><code>  bool _isChecked = false;</code></pre>
  <pre data-prefix="8"><code></code></pre>
  <pre data-prefix="9"><code>  @override</code></pre>
  <pre data-prefix="10"><code>  Widget build(BuildContext context) {</code></pre>
  <pre data-prefix="11"><code>    return Checkbox(</code></pre>
  <pre data-prefix="12"><code>      value: _isChecked,</code></pre>
  <pre data-prefix="13"><code>      onChanged: (bool value) {</code></pre>
  <pre data-prefix="14"><code>        setState(() {</code></pre>
  <pre data-prefix="15"><code>          _isChecked = value;</code></pre>
  <pre data-prefix="16"><code>        });</code></pre>
  <pre data-prefix="17"><code>      },</code></pre>
  <pre data-prefix="18"><code>    );</code></pre>
  <pre data-prefix="19"><code>  }</code></pre>
  <pre data-prefix="20"><code>}</code></pre>
</div>
<br>
