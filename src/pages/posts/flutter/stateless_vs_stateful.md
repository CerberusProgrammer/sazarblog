---
layout: "../../../layouts/LayoutBlog.astro"
title: Stateless vs Stateful Widgets
date: 12/23/2028
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

```dart
class MyStatefulWidget extends StatefulWidget {
  @override
  _MyStatefulWidgetState createState() => _MyStatefulWidgetState();
}

class _MyStatefulWidgetState extends State<MyStatefulWidget> {
  bool _isChecked = false;

  @override
  Widget build(BuildContext context) {
    return Checkbox(
      value: _isChecked,
      onChanged: (bool value) {
        setState(() {
          _isChecked = value;
        });
      },
    );
  }
}
```