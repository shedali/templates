
// import * as d3 from "d3";
import viz from "viz.js"
import d3 from "d3-graphviz"

d3.select("#graph").graphviz()
    .fade(false)
    .renderDot('digraph  {a -> b}');
