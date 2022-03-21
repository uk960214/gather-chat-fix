const $container = document.querySelector(".css-94aqvp");
const scrollHandler = () => {
  $container.scrollTo({ top: $container.scrollHeight, behavior: "smooth" });
};
$container.addEventListener("DOMNodeInserted", scrollHandler);
