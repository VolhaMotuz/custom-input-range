window.onload = function () {

    /*  RGB additive color  */
    var css1 = document.createElement('style');
    document.body.appendChild(css1);

    function updateThumbColor(hue) {
        var hslcolor = "hsl(" + hue + ", 100%, 50%)";
        css1.textContent = "#rainbowRange1::-webkit-slider-thumb { background: " + hslcolor + "; }";

        document.getElementById('preview1').style.backgroundColor = hslcolor;
    }
    updateThumbColor(180);

    var slider1 = document.getElementById('rainbowRange1');

    function onChange() {
        updateThumbColor(this.value);
    }

    slider1.addEventListener('input', onChange);


    /*  Color temperature  */
     var css2 = document.createElement('style');
     document.body.appendChild(css2);

    function updateThumb2Color(hue, saturation, lightness) {
        var hslcolor = "hsl(" + hue + ",  "+ saturation +"%,  " + lightness + "%)";
        css2.textContent = "#rainbowRange2::-webkit-slider-thumb { background: " + hslcolor + "; }";

        document.getElementById('preview2').style.backgroundColor = hslcolor;
    }
    updateThumb2Color(56, 100, 92);

    var slider2 = document.getElementById('rainbowRange2');


    var hue, saturation, lightness;
    function onChange2() {

        if (this.value == 0) {
            hue = 56; saturation = 100; lightness = 50;
        }
        if (this.value == 10) {
            hue = 56; saturation = 100; lightness = 57;
        }
        if (this.value == 20) {
            hue = 56; saturation = 100; lightness = 65;
        }
        if (this.value == 30) {
            hue = 56; saturation = 97; lightness = 70;
        }
        if (this.value == 40) {
            hue = 56; saturation = 87; lightness = 85;
        }
        if (this.value == 50) {
            hue = 56; saturation = 100; lightness = 92;
        }
        if (this.value == 60) {
            hue = 200; saturation = 100; lightness = 99;
        }
        if (this.value == 70) {
            hue = 199; saturation = 79; lightness = 95;
        }
        if (this.value == 80) {
            hue = 199; saturation = 100; lightness = 89;
        }
        if (this.value == 90) {
            hue = 199; saturation = 100; lightness = 68;
        }
        if (this.value == 100) {
            hue = 199; saturation = 95; lightness = 50;
        }

        updateThumb2Color(hue, saturation, lightness);
    }

    slider2.addEventListener('input', onChange2);


    /*  Lightness  */
    var slider3 = document.getElementById("rainbowRange3");
    var progress3 = document.getElementById("progress3");

    var startProgress3Width = 100 - slider3.value;
    progress3.style.width = startProgress3Width + '%';

    slider3.oninput = function() {
        var progress3Width = 100 - this.value;
        progress3.style.width = progress3Width + '%';
    };


    /*  Temperature  */
    var slider4 = document.getElementById("rainbowRange4");
    var progress4 = document.getElementById("progress4");
    var bluePart = document.getElementById("blue");
    var redPart = document.getElementById("red");

    colouringSLider4 (slider4.value);

    slider4.oninput = function() {

        colouringSLider4 (this.value);
    };

    function colouringSLider4 (elem) {
        if (elem < 0) {
            var progressBlue = Math.abs(elem * 3.3);
            bluePart.style.width = progressBlue + '%';
        } else {
            var progressRed = Math.abs(elem * 3.3);
            redPart.style.width = progressRed + '%';
        }
    }




};

