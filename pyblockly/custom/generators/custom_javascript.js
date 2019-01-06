Blockly.JavaScript['rows'] = function(block) {
  var code = '5';
  return code;
};

Blockly.JavaScript['custom_print'] = function(block) {
  var value_custom_print_value = Blockly.JavaScript.valueToCode(block, 'custom_print_value', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'alert('+value_custom_print_value+');\n';
  return code;
};

Blockly.JavaScript['custom_repeat'] = function(block) {
  var value_repeat_input = Blockly.JavaScript.valueToCode(block, 'repeat_input', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_lab_do = Blockly.JavaScript.statementToCode(block, 'lab_do');
  var code='for (var count = 0; count <'+value_repeat_input+'; count++) {\n'+statements_lab_do +'}';
  return code;
};