function cassRingCalc(input) {
  var div = document.getElementById('results');
  var numNodes = input.nodes.value;
  var token = new BigInt("170141183460469231731687303715884105728");
  div.innerHTML = div.innerHTML + "<style type='text/css'>div.even, div.odd { width:525px; padding:5px; } div.even { background:#E8E8E8; }</style>";
  for (i = 0; i < numNodes; i++) {
    line = "odd"; if (i % 2 == 0) { line = "even" }
    if (i == 0) {
      div.innerHTML = div.innerHTML + "<div class='" + line + "'>Node: " + i + "<br>&nbsp;&nbsp;&nbsp;initial_token: " + i;
    } else {
      div.innerHTML = div.innerHTML + "<div class='" + line + "'>Node: " + i + "<br>&nbsp;&nbsp;&nbsp;initial_token: " + bigint_div(bigint_mul(token, i), numNodes);
    }
  }
  div.innerHTML = div.innerHTML + "<input type='submit' name='Reset' value='Reset'>";
}
