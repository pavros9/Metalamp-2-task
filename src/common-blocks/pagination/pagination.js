import "../../../node_modules/paginationjs/dist/pagination.js";
import "./pagination.scss";

function simpleTemplating(data) {
  var html = "<ul>";
  $.each(data, function (index, item) {
    html += "<li>" + item + "</li>";
  });
  html += "</ul>";
  return html;
}
const fillArray = (n) => {
  let arr = [];
  if (n) for (let i = 1; i <= n; ) arr.push(i++);
  return arr;
};

$(".pagination-container").pagination({
  dataSource: fillArray(175),
  pageSize: 12,
  pageRange: 1,
  autoHidePrevious: true,
  autoHideNext: true,
  showNavigator: true,
  formatNavigator: "1 – 12 из 100+ вариантов аренды",
  position: "top",
  callback: function (data, pagination) {
    var html = simpleTemplating(data);
    $(".data-container").html(html);
  },
});
