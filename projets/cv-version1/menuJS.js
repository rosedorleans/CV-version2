var block1 = document.getElementById('block1');
            var block2 = document.getElementById('block2');

            function showDiv1() {
                block1.style.display = "block";
            }

            function closeDiv1() {
                block1.style.display = "none";
            }

            function showDiv2() {
                block2.style.display = "block";
            }

            function closeDiv2() {
                block2.style.display = "none";
            }

            function showOrHide1() {
                if (block1.style.display === "block") {
                    closeDiv1()
                } else {
                    showDiv1()
                }
            }

            function showOrHide2() {
                if (block2.style.display === "block") {
                    closeDiv2()
                } else {
                    showDiv2()
                }
            }