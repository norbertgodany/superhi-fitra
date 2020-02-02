document.addEventListener("DOMContentLoaded", function() {
  const productSelector = document.querySelector("#variant-id");
  console.log(productSelector);

  productSelector.addEventListener("change", function() {
    let variant_id = this.value;
    console.log("this is the images variant id", variant_id);

    let variant_image = document.querySelector(`.single-product-image[data-variant="${variant_id}`);

    variant_image.style.display = "block";

    let imageChildren = Array.prototype.filter.call(variant_image.parentNode.children, function(child) {
      return child !== variant_image;
    });

    imageChildren.map(div => div.style.display = "none")
  });
});

// JQuery
// $(document).ready(function() {
//   $(document).on("change", "#variant-id", function() {
//     let variant_id = this.value;
//     let variant_image = $('.single-product-image[data-variant="' + variant_id + '"]');

//     variant_image
//       .show()
//       .siblings(":visible")
//       .hide();
//   });
// });
