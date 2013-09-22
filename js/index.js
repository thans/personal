$(document).ready(function() {
    global = {};
    $('#nav').on("mouseover", expand);
    $('#nav').on("mouseout", contract);
    $('#nav').load('nav.html', '', function() {});
    $('#footer').load('footer.html', '', function() {});

    function expand() {
        console.log('expanding');
        $('#nav').animate({
            height: '200px'
        }, {
            duration: 500,
            queue: false
        });
        $('#nav').animate({
            borderBottomRightRadius: '0px'
        }, {
            duration: 500,
            queue: false
        });

                    
    }

    function contract() {
        console.log('contracting');
        $('#nav').animate({
            height: '100px'
        }, {
            duration: 500,
            queue: false
        });
        $('#nav').animate({
            borderBottomRightRadius: '100px'
        }, {
            duration: 500,
            queue: false
        });
    }
});