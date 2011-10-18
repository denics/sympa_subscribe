/* sympa_subscribe JavaScript */

// TODO Some of the ugly names remain...
function sympa_subscribe_finish_subscribe_form() {
  field1 = document.getElementById('emailfield1');
  field2 = document.getElementById('emailfield2');
  field3 = document.getElementById('emailfield3');
  field2.value = field1.value;
  field3.value = field1.value;

  form1 = document.getElementById('sympa_subscribe_subscribe_form');
  form2 = document.getElementById('sympa_subscribe_confirm_form');
  form1.style.display = 'none';
  form2.style.display = 'inline';
}

// TODO Some of the ugly names remain...
function sympa_subscribe_finish_confirm_form() {
  form2 = document.getElementById('sympa_subscribe_confirm_form');
  form3 = document.getElementById('sympa_subscribe_done');
  form2.style.display = 'none';
  form3.style.display = 'inline';
}

