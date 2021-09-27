import * as $ from "jquery";
import Post from "./Post";
import json from "./assets/json";
import xml from "./assets/data.xml";
import csv from "./assets/data.csv";
import Logo from "./assets/logo.png";
import "./styles/style.css";

const post = new Post("Webpack Post Title", Logo);

$("pre").html(post.toString());

console.log("Post to String", post.toString());

console.log("JSON:", json);
console.log("XML:", xml);
console.log("CSV:", csv);
