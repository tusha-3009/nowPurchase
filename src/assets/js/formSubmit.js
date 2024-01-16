$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();
    alert("Please enter");

    var payload = {
      text:
        "New enquiry:\n" +
        "Name: " +
        $("#name").val() +
        "\n" +
        "Contact Number: " +
        $("#phone").val() +
        "\n" +
        "Enquiry Purpose: " +
        $("#enquiry_purpose").val() +
        "\n" +
        "Remarks: " +
        $("textarea").val(),
    };

    $.ajax({
      url: "https://hooks.slack.com/services/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", // replace with your webhook URL
      type: "POST",
      data: JSON.stringify(payload),
      contentType: "application/json",
    })
      .done(function () {
        $("#offSubmit").show(); // show the success message
      })
      .fail(function () {
        alert("Error submitting enquiry");
      });
  });
});
