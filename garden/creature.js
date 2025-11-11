$("#crAdd").click(
    function () {
        let crName = $("#crName").val();

        if ((crName != "") && (crName.length < 11)) {
            $("#creature-list").append("<br>" + crName);
        };

        $("#crName").val("");
    }
);