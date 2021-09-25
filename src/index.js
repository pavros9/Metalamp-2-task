import Post from "./Post";
import json from "./assets/json";
import Logo from "./assets/logo.png";
import "./styles/style.css";

const post = new Post("Webpack Post Title", Logo);

console.log("Post to String", post.toString());

console.log("JSON:", json);
