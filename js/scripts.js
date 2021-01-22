$(document).ready(function() {
  $("form#survey-form").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    const email = $("input#email").val();
    const number = $("input#number").val();
    const experience = $("#experience").val();
    let selectedProducts = [];
    $("input:checkbox[name=product]:checked").each(function() {
      const selectedProduct = $(this).val();
      selectedProducts.push(selectedProduct);
    });
    const comments = $("#comments").val();  
    $("form#survey-form").hide();
    $("div.form-submitted").show();
  });

});
