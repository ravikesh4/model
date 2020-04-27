
      var currentTab = 0; // Current tab is set to be the first tab (0)
      showTab(currentTab); // Display the current tab
      
      function showTab(n) {
        // This function will display the specified tab of the form...
        var x = document.getElementsByClassName("tab");
        x[n].style.display = "block";
        //... and fix the Previous/Next buttons:
        if (n == 0) {
          
          document.getElementById("prevBtn").style.display = "none";
        } else {
          document.getElementById("new_user").style.display = "none";
          
        }
        if (n == (x.length - 1)) {
          document.getElementById("nextBtn").innerHTML = "Submit";
        } else {
          document.getElementById("nextBtn").innerHTML = "Next";
        }
        //... and run a function that will display the correct step indicator:
        fixStepIndicator(n)
        fixSteptext(n)
        fixbtn(n)
      }
      
      function nextPrev(n) {
        var x = document.getElementsByClassName("tab");
        if (n == 1 && !validateForm()) return false;
        x[currentTab].style.display = "none";
        currentTab = currentTab + n;
        if (currentTab >= x.length) {
          document.getElementById("regForm").submit();
          return false;
        }
        showTab(currentTab);
      }
      
      function validateForm() {
        // This function deals with validation of the form fields
        var x, y, i, valid = true;
        x = document.getElementsByClassName("tab");
        y = x[currentTab].getElementsByTagName("input");
        // A loop that checks every input field in the current tab:
        for (i = 0; i < y.length; i++) {
          // If a field is empty...
          if (y[i].value == "") {
            // add an "invalid" class to the field:
            y[i].className += " invalid";
            // and set the current valid status to false
            valid = false;
          }
        }
        // If the valid status is true, mark the step as finished and valid:
        if (valid) {
          document.getElementsByClassName("step")[currentTab].className += " finish";
        }
        return valid; // return the valid status
      }
      
      function fixStepIndicator(n) {
        // This function removes the "active" class of all steps...
        var i, x = document.getElementsByClassName("step");
        for (i = 0; i < x.length; i++) {
          x[i].className = x[i].className.replace(" active", "");
        }
        //... and adds the "active" class on the current step:
        x[n].className += " active";
      }

      function fixSteptext(n) {
        // This function removes the "active" class of all steps...
        var i, x = document.getElementsByClassName("text-small");
        for (i = 0; i < x.length; i++) {
          x[i].className = x[i].className.replace(" text-active", "");
        }
        //... and adds the "active" class on the current step:
        x[n].className += " text-active";
      }

      // function fixbtn(n) {
      //   var i, x = document.getElementsByClassName("cus-btn");
      //   for (i = 0; i < 3; i++) {
      //     if( i === 2) {
      //     x[i].className = x[i].className.replace(" form-space", "");
      //     }
      //     else {
      //       continue;
      //     }
      //   }
       
      // }