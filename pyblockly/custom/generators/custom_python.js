Blockly.Python['custom_input'] = function(block) {
   var msg = Blockly.Python.quote_(block.getFieldValue('TEXT'));
  code='input('+msg+')';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['custom_convert'] = function(block) {
  var dropdown_op = block.getFieldValue('OP');
  var value_instr = Blockly.Python.valueToCode(block, 'INSTR',
        Blockly.Python.ORDER_NONE)
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  switch (dropdown_op) {
    case 'INT':
      code = 'int(' + value_instr + ')';
      break;
    case 'FLOAT':
      code = 'float(' + value_instr + ')';
      break;
    case 'STRING':
      code = 'str(' + value_instr + ')';
      break;
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};
