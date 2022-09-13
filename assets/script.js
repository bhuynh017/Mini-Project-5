var timePTag = $("#time-p");

function keepCurrentTime () {
    var time = setInterval(function() {
       timePTag.text(moment().format("MMM-DD-YYYY [at] hh:mm:ss"))
    })
}

