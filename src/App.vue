<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
// $color: #2c3e50;
// $top: top;
// $bg-color: #808080;
// $per: 30%;
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: $color;
//   margin-#{$top}: 60px;
//   // @if $per > 20% {background: darken($bg-color, $per)}
// }
// @function double($n: 300px) {
//   @return $n * 2
// }
// .a{
//   width: double();
//   height: double();
//   background: url('assets/logo.png') no-repeat;
// }
// $j:6;
// $i:6;
// $o:255;
// @while ($j>0)
// {
//     .kkk-#{$j}
//     {
//         width: (200px + $j);
//     }
//     $j : ($j - 1);   //递减操作
// }
// @while ($i>0)
// {
//     .item-#{$i}
//     {
//         height: (200px + $i);
//     }
//     $i : ($i - 1);   //递减操作
// }
// @while ($o>0){
//   .ooo-#{$o}
//   {
//     background: (#000 + #{$o})
//   }
//   $o: ($o - 50);
// }
// @each $member in a,b,c,d {
//   .#{$member} {
//     background-image: url("/image/#{$member}.jpg");
//   }
// }
// @for $i from 1 through 3
// {
//   .border-#{$i}
//   {
//     border: #{$i}px solid blue;
//   }
// }
// @for $i from 1 through 3
// {
//   .item-#{$i}
//   {
//     width:(20px * $i);
//   }
// }
// @for $j from 1 to 10{
//   .kkk-#{$j}{
//     height: $j * 100px;
//   }
// }
</style>
