---
layout: "../../../layouts/LayoutBlog.astro"
title: Cambiando el Tema en Tiempo Real en Flutter Usando Provider
date: 12/23/2023
description: Una guía paso a paso para cambiar el tema en tiempo real en Flutter usando Provider.
image: https://th.bing.com/th/id/OIG.IrgPEeRXEt6X57DMFY5X?pid=ImgGn
tags: ['Flutter', 'Provider', 'Temas']
---

En Flutter, la personalización y la flexibilidad son dos de sus mayores fortalezas. Una de las características más útiles que ofrece es la capacidad de cambiar el tema de la aplicación en tiempo real. Esto puede ser especialmente útil si quieres ofrecer a tus usuarios la opción de cambiar entre un tema claro y oscuro. En esta guía, te mostraré cómo puedes lograr esto usando el paquete Provider.

<br>

# Configurando el Provider

<br>

Primero, necesitamos configurar el Provider en nuestra aplicación. El Provider es un paquete que simplifica el manejo del estado en Flutter. Para usarlo, necesitamos envolver nuestra aplicación en un `ChangeNotifierProvider`.

<br>
<div class="mockup-code">
  <pre data-prefix="1"><code>void main() {</code></pre> 
  <pre data-prefix="2"><code>  runApp(</code></pre> 
  <pre data-prefix="3"><code>    ChangeNotifierProvider(</code></pre>
  <pre data-prefix="4"><code>      create: (context) => ThemeProvider(),</code></pre>
  <pre data-prefix="5"><code>      child: MyApp(),</code></pre>
  <pre data-prefix="6"><code>    ),</code></pre>
  <pre data-prefix="7"><code>  );</code></pre>
  <pre data-prefix="8"><code>}</code></pre>
</div>
<br>

# Creando el ThemeProvider

<br>

A continuación, necesitamos crear nuestro `ThemeProvider`. Este es un `ChangeNotifier` que mantendrá el estado de nuestro tema actual.

<br>
<div class="mockup-code">
  <pre data-prefix="1"><code>class ThemeProvider extends ChangeNotifier {</code></pre>
  <pre data-prefix="2"><code>  ThemeData _themeData;</code></pre>
  <pre data-prefix="3"><code></code></pre>
  <pre data-prefix="4"><code>  ThemeProvider() {</code></pre>
  <pre data-prefix="5"><code>    _themeData = ThemeData.light();</code></pre>
  <pre data-prefix="6"><code>  }</code></pre>
  <pre data-prefix="7"><code></code></pre>
  <pre data-prefix="8"><code>  getTheme() => _themeData;</code></pre>
  <pre data-prefix="9"><code></code></pre>
  <pre data-prefix="10"><code>  setTheme(ThemeData theme) {</code></pre>
  <pre data-prefix="11"><code>    _themeData = theme;</code></pre>
  <pre data-prefix="12"><code>    notifyListeners();</code></pre>
  <pre data-prefix="13"><code>  }</code></pre>
  <pre data-prefix="14"><code>}</code></pre>
</div>
<br>

# Cambiando el Tema

<br>

Finalmente, podemos cambiar el tema llamando a `setTheme` en nuestro `ThemeProvider`. Aquí hay un ejemplo de cómo puedes hacer esto con un botón.

<br>
<div class="mockup-code">
  <pre data-prefix="1"><code>FloatingActionButton(</code></pre>
  <pre data-prefix="2"><code>  onPressed: () {</code></pre>
  <pre data-prefix="3"><code>    var themeProvider = Provider.of<ThemeProvider>(context, listen: false);</code></pre>
  <pre data-prefix="4"><code>    themeProvider.setTheme(</code></pre>
  <pre data-prefix="5"><code>      themeProvider.getTheme() == ThemeData.light()</code></pre>
  <pre data-prefix="6"><code>        ? ThemeData.dark()</code></pre>
  <pre data-prefix="7"><code>        : ThemeData.light(),</code></pre>
  <pre data-prefix="8"><code>    );</code></pre>
  <pre data-prefix="9"><code>  },</code></pre>
  <pre data-prefix="10"><code>  child: Icon(Icons.brightness_6),</code></pre>
  <pre data-prefix="11"><code>),</code></pre>
</div>
<br>