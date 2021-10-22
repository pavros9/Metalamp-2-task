import "./normalize.css";
import "./style/global.scss";

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

requireAll(require.context("./common-blocks", true, /\.js$/));
requireAll(require.context("./pages", true, /\.js$/));
