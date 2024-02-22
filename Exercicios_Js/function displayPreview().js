function displayPreview() {
	var exp = document.getElementById("InputExp");

	var prw = document.getElementById("InputPreview");
	prw.innerHTML = exp.value.toLowerCase(); // In order to avoid ambiguity, upper case variables are converted to lower case
	
	// Manage bad chars
	prw.innerHTML = prw.innerHTML.replace(/(\x7C|\x02|\x03|\x04|\x05|\x08|\x09|\x20|\x22|\x27|\x3F|\x5C|\uFE0F|\u25AF)/g, ''); // pipe char (as cursor) and bad chars to be removed
	prw.innerHTML = prw.innerHTML.replace(/(\xD7|\xB7|\u2022|\u22C5|\u2716)/g, '*'); // bad char of multiplication
	prw.innerHTML = prw.innerHTML.replace(/\xF7/g, ':'); // bad char of division
	prw.innerHTML = prw.innerHTML.replace(/(\u2212|\u2013|\u23AF|\x5F|\xAD)/g, '-'); // bad char of subtraction
	prw.innerHTML = prw.innerHTML.replace(/\u02C6/g, '^');  // bad char of raising to a power
	prw.innerHTML = prw.innerHTML.replace(/=&gt;/g, '>=');  // bad inequalities
	prw.innerHTML = prw.innerHTML.replace(/=&lt;/g, '<=');  // bad inequalities
	
	// Manage not useful signs
	prw.innerHTML = prw.innerHTML.replace(/\x5e+/g, '^'); // ^^
	prw.innerHTML = prw.innerHTML.replace(/\x2a+/g, '*'); // **
	prw.innerHTML = prw.innerHTML.replace(/\x2f+/g, '/'); // //
	prw.innerHTML = prw.innerHTML.replace(/\x2b+/g, '+'); // ++
	prw.innerHTML = prw.innerHTML.replace(/\x5e\x2b/g, '^'); // ^+
	prw.innerHTML = prw.innerHTML.replace(/\x2a\x2b/g, '*'); // *+
	prw.innerHTML = prw.innerHTML.replace(/\x2f\x2b/g, '/'); // /+
	prw.innerHTML = prw.innerHTML.replace(/\x3a\x2b/g, ':'); // :+
	prw.innerHTML = prw.innerHTML.replace(/\x24\x2b/g, '$'); // $+
	prw.innerHTML = prw.innerHTML.replace(/\x26\x2b/g, '&'); // &+
		
	// Manage monomials
	patt = /[a-z][0-9]/i;
	s = new String(patt.exec(prw.innerHTML));
	while (s.valueOf()!="null") {
		a = s.charAt(0)+"^"+s.charAt(1);
		prw.innerHTML = prw.innerHTML.replace(s.valueOf(), a);
		s = new String(patt.exec(prw.innerHTML));
	}

	// Manage some MathJax's displays
	prw.innerHTML = prw.innerHTML.replace(/xx/g, 'x*x'); // xx is not displayed as wanted
	prw.innerHTML = prw.innerHTML.replace(/bb/g, 'b*b'); // bb is not displayed as wanted
	prw.innerHTML = prw.innerHTML.replace(/cc/g, 'c*c'); // cc is not displayed as wanted
	
	// Typeset preview
	prw.innerHTML = "`" + prw.innerHTML + "`";
	MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
}

function generateDefaultExample() {
	// Generate a random default example if it's not provided by the MTH_INPUT parameter in the URL
	var exp = document.getElementById("InputExp");
	exp.value = "";
	
	s = location.toString().split("?");
	if (s.length > 1) {
		s = s[1].split("&");
		for(var i = 0; i < s.length; i++) {
			u = s[i].split("=");
			if (u[0] == "MTH_INPUT") 
				exp.value = decodeURIComponent(u[1]);
		}
	}
		
	if (exp.value == "") {
		var Examples = [
			"(x+1+(2x+2)/(x-1))*(x/(x2+x))",
			"{(2/3-1/9)^2:[3/5:(2-1/5)]^4}*(1/5)^3+3",
			"x2-5x+6=0",
			"-ba^2-2ba+b^2-b+x^2+2xb=0",
			"(a4-b4)/(a2-b2)-(a+b)^4/(a+b)^2+1/2a*root(3)(b3+3b2+3b+1)"
		];
		
		exp.value = Examples[Math.floor(Math.random() * 5)];
	}
	
	hideKeyboard();
	displayPreview();
}

function generateExample() {
	var Examples = [
		"[(m2-9)/(m2+5m+6)]:[(-m+3)/(m+2)]",
		"{[(1/4)^-4]^-5*16^3:(1/8)^10}^-5",
		"[(1/2)^4*(1/2)^5:(1/2)^7]*{1/4:[(10/3-7/6-7/4)*9/5]}^2",
		"a/(a+1)+1/(a-1)+(2a)/(a2-1)",
		"(1/(x-2y)+1/(x+2y)):x/(x2-4y2)",
		"((x-y)/(5xy2)-(x-y)/(10x2y)):(1/(10x2y)-1/(5xy2))",
		"(x+y)/(x-y)+(x-y)/(x+y)+(x2+y2)/(x2-y2)",
		"(a4-b4)/(a2-b2)-(a+b)^4/(a+b)^2+1/2a*sqrt(16b2+8b+1)",
		"(2x)/(x2-9)-1/(x+3)-2/(x-3)",
		"(x4-9x2-4x+12)/(x3+5x2+2x-8)",
		"[-(3/2a2-1/2b)^2+1/4b2]^2:(-3/2a2)-3/2a2b*(3a2-b)",
		"(x-2-5/(x+2))*(x2-4)/(x-3)",
		"(1/9a2b-1/3ab2):(-1/4b)-2b*(a2+b)+(a2+b)^2+1/9*(2a-3b)^2",
		"(4x*(x2y2-3y3))/(2x*(5y2-y)-2y*(5xy+2x))",
		"(1+a/x)*(1-a/x)*(2x2)/(a2-x2)+(2x)/(x2-4)*(4+4/x+x)",
		"(a+b-4ab/(a+b)):(a-b)",
		"(a-1)/(5a2-6a+1)*((5a2+9a-2)/(a+2))*((a+5)/(5a2+21a-20))",
		"(1+(2xy)/(x-y)^2)/(x2+y2)",
		"(x+1+(2x+2)/(x-1))*(x/(x2+x))",
		"(2ab/(3xy))^2*(3x/(2a))^3*(y/b)^4",
		"(m/z-z/m)/(m+z)",
		"(xy^(-1)+yx^(-1))/(x^(-1)+y^(-1))",
		"(2z-1/(2z+1)+1):(1+1/(2z+1))",
		"(x2-25)/(x2-5x)-1",
		"1/(4a)-2/(3a)+1/(12a)",
		"x/(x-1)+2/(x-2)-1/(x-1)",
		"(1/(2x2)-1/(2y2)):(1/x+1/y)",
		"(y-z2/y):(1-z/y)",
		"((x2+3)/(x+3)-x)*((x+3)/(1-x))",
		"(1/y+1/(y+1))*(1-y/(2y+1))",
		"(x-x/(x+1)):(1-(2x)/(x-1))*(1/x2+2/x+1)",
		"(1/(4a2)-1/(4b2)):(1/(2a)+1/(2b))*4ab",
		"[(4/3-1/6):(1/4+1/3)]^2:[(7/6+6/8-3/2):(1+1/4)]^2",
		"{(2/3-1/9)^2:[3/5:(2-1/5)]^4}*(1/5)^3+3",
		"[(11/14+1/4)+(33/14-3/7)]*{(4/5+1/4-1/20)-[3-(1/4+1/3)*6/7]*2/5}",
		"[(3/7+2/14)*(5/6-1/3):5/14]*[9/4-3/8+3/4*(5/4-1/2)-2/8]-3/4",
		"1/3b*(-2a2-3/4a2+1/2a2)+(3/2a2b2+1/4a2b2):(7/2b)-5/4a2b",
		"[-3/2xy2*1/9x4y3-3/5x3y*(-5/6x2y4)]:(8/6x4y4)-1/3xy",
		"[(4/5x3y2z)*(5/12yz2)+5/6x3y3z3]:(7/3xy2z3)-3/4x2y",
		"(-3/5a7b7c3)/(-3ab)-(3/4a2b2c)*(5/3a4b4c2)",
		"(x+2)^2-3(x+2)*(x-2)+(x-2)^3-x^2(x-8)",
		"2(y-3x)^2+2(2x+y)*(y-2x)-9x^2-2xy-(2y-x)^2",
		"(12^2)^5/(12^2)^4-(5^3)^5*5^2/(5^5)^3+[(4^2)^3]^5/2^56-3*(3^2-2^2)",
		"(-5^5)^5:[(-125)^2*(-25^3)]^2+[(-5)^5]^5:(-125)^8",
		"sqrt(25x^4+20x^3+34x^2+12x+9)",
		"(x-b)*(x+b)+a(a-2x)=0",
		"x+y*(a+b)-a^2+b^2=x",
		"2(x-1)^2/3+(x+2)^2=5x*(x-2)/3+4x+1",
		"(x+m)^2+(x-m)*(x+n)-2n2=1/2x(2x-m)+7/2m(m+n)",
		"(a-b)*(x+b)-(a+b)*(x-a)=(x-a)*(x+b)+a2-ab-5b2",
		"(x-3)^2+(x+3)^2=(x-3)*(x+3)+30",
		"x-3(x+2)^2=-3x2",
		"32+x=10*(5+x)",
		"(m2-1)x2-2mx+1=0",
		"(11x)/12+5/12=x-2",
		"x2-x-11=0",
		"x2-5x+6=0",
		"-ba^2-2ba+b^2-b+x^2+2xb=0"
	];
	
	var exp = document.getElementById("InputExp");
	exp.value = Examples[Math.floor(Math.random() * 58)];
	hideKeyboard();
	displayPreview();
}

function generateEquation() {
	var Examples = [
		"(x-b)*(x+b)+a(a-2x)=0",
		"x+y*(a+b)-a^2+b^2=x",
		"2(x-1)^2/3+(x+2)^2=5x*(x-2)/3+4x+1",
		"(x+m)^2+(x-m)*(x+n)-2n2=1/2x(2x-m)+7/2m(m+n)",
		"(a-b)*(x+b)-(a+b)*(x-a)=(x-a)*(x+b)+a2-ab-5b2",
		"(x-3)^2+(x+3)^2=(x-3)*(x+3)+30",
		"x-3(x+2)^2=-3x2",
		"32+x=10*(5+x)",
		"(m2-1)x2-2mx+1=0",
		"(11x)/12+5/12=x-2",
		"x2-x-11=0",
		"x2-5x+6=0",
		"-ba^2-2ba+b^2-b+x^2+2xb=0"
	];

	var exp = document.getElementById("InputExp");
	exp.value = Examples[Math.floor(Math.random() * 13)];
	hideKeyboard();
	displayPreview();
}

function generateExpression() {
	var Examples = [
		"{[(1/4)^-4]^-5*16^3:(1/8)^10}^-5",
		"[(1/2)^4*(1/2)^5:(1/2)^7]*{1/4:[(10/3-7/6-7/4)*9/5]}^2",
		"[(4/3-1/6):(1/4+1/3)]^2:[(7/6+6/8-3/2):(1+1/4)]^2",
		"{(2/3-1/9)^2:[3/5:(2-1/5)]^4}*(1/5)^3+3",
		"[(11/14+1/4)+(33/14-3/7)]*{(4/5+1/4-1/20)-[3-(1/4+1/3)*6/7]*2/5}",
		"[(3/7+2/14)*(5/6-1/3):5/14]*[9/4-3/8+3/4*(5/4-1/2)-2/8]-3/4",
		"(12^2)^5/(12^2)^4-(5^3)^5*5^2/(5^5)^3+[(4^2)^3]^5/2^56-3*(3^2-2^2)",
		"(-5^5)^5:[(-125)^2*(-25^3)]^2+[(-5)^5]^5:(-125)^8",
		"2/3+sqrt(2/5*20/18)",
		"(7/2-1)-[(1/7+1/35)*(2-15/4)+1/5]:(-1/5)"
	];

	var exp = document.getElementById("InputExp");
	exp.value = Examples[Math.floor(Math.random() * 10)];
	hideKeyboard();
	displayPreview();
}

function toggleHelp() {
	var help = document.getElementById("dropdownhelp");
	if(help.style.display == "block")
		{ help.style.display = "none";}
	else
		{ help.style.display = "block";}
}

function toggleKeyboard() {
	var keyboard = document.getElementById("keyboard_buttons");
	var exp = document.getElementById("InputExp");

	if(keyboard.style.display == "block") {
		keyboard.style.display = "none";
		exp.value = exp.value.replace(/\u25AF/g, '');
	}
	else {
		keyboard.style.display = "block";
		exp.value = exp.value.replace(/\u25AF/g, '');
		exp.value = exp.value + "▯";
	}
}

function hideKeyboard() {
	var keyboard = document.getElementById("keyboard_buttons");

	if(keyboard.style.display == "block") {
		var exp = document.getElementById("InputExp");

		keyboard.style.display = "none";
		exp.value = exp.value.replace(/\u25AF/g, '');
	}
}

function differentiateBrackets() {
	var exp = document.getElementById("InputExp");
	var opened_bracket_level = []; var is_bracket_closed = [];
	var i = new Number(); var j = new Number(); var k = new Number(); var current_open_brackets = new Number(0);
	
	for (i = 0; i < exp.value.length; i++) {
		if (exp.value.charAt(i) == "(" || exp.value.charAt(i) == "[" || exp.value.charAt(i) == "{") {
			current_open_brackets++;
			opened_bracket_level.push(1);
			is_bracket_closed.push(false);
			k = 1;
			for (j = opened_bracket_level.length - 2; j >= 0; j--) {
				if (!is_bracket_closed[j]) {
					opened_bracket_level[j] = ++k;
				}
			}
		}
		
		if (exp.value.charAt(i) == ")" || exp.value.charAt(i) == "]" || exp.value.charAt(i) == "}") {
			current_open_brackets--;
			if (current_open_brackets >= 0) {
				j = opened_bracket_level.length - 1;
				while (j >= 0 && is_bracket_closed[j]) { j--; }
				if (j >= 0) {
					is_bracket_closed[j] = true;
				}
			}
			else {
				break;
			}
		}
	}

	if (opened_bracket_level.length > 0 && current_open_brackets >= 0) {
		var opening_br = ["{", "(", "["];
		var closing_br = ["}", ")", "]"];
		var brackets_to_be_closed = [];
		var s = new String("");

		for (i = j = 0; i < exp.value.length; i++) {
			if (exp.value.charAt(i) == "(" || exp.value.charAt(i) == "[" || exp.value.charAt(i) == "{") {
				s = s + opening_br[opened_bracket_level[j] % 3];
				brackets_to_be_closed.push(closing_br[opened_bracket_level[j] % 3]);
				j++;
			}
			else
				if (exp.value.charAt(i) == ")" || exp.value.charAt(i) == "]" || exp.value.charAt(i) == "}") {
					s = s + brackets_to_be_closed.pop();
				}
				else {
					s = s + exp.value.charAt(i);
				}
		}
		exp.value = s.valueOf();
	}
}

function insertExpString(s) {
	var exp = document.getElementById("InputExp");
	exp.value = exp.value.replace(/\u25AF/g, s + '▯');
	
	displayPreview();
}

function insertExpCharOpenBracket() {
	insertExpString("(");
	
	differentiateBrackets();	
	displayPreview();
}

function insertExpCharCloseBracket() {
	insertExpString(")");
	
	differentiateBrackets();	
	displayPreview();
}

function deleteLastExpChar() {
	var exp = document.getElementById("InputExp");
	var splittedExp = exp.value.split("▯");

	exp.value = splittedExp[0].valueOf().substr(0, splittedExp[0].length-1) + "▯" + splittedExp[1];
	
	displayPreview();
}

function moveCursorToLeft() {
	var exp = document.getElementById("InputExp");
	var splittedExp = exp.value.split("▯");

	exp.value = splittedExp[0].valueOf().substr(0, splittedExp[0].length-1) + "▯" + splittedExp[0].charAt(splittedExp[0].length - 1) + splittedExp[1];
	
	displayPreview();
}

function moveCursorToRight() {
	var exp = document.getElementById("InputExp");
	var splittedExp = exp.value.split("▯");

	exp.value = splittedExp[0] + splittedExp[1].charAt(0) + "▯" + splittedExp[1].valueOf().substr(1, splittedExp[1].length-1);
	
	displayPreview();
}

function resetExp() {
	var exp = document.getElementById("InputExp");
	exp.value = "▯";
	
	displayPreview();
}

function insertExpCharOne()				{ insertExpString("1");}
function insertExpCharTwo()				{ insertExpString("2");}
function insertExpCharThree()			{ insertExpString("3");}
function insertExpCharFour()			{ insertExpString("4");}
function insertExpCharFive()			{ insertExpString("5");}
function insertExpCharSix()				{ insertExpString("6");}
function insertExpCharSeven()			{ insertExpString("7");}
function insertExpCharEight()			{ insertExpString("8");}
function insertExpCharNine()			{ insertExpString("9");}
function insertExpCharZero()			{ insertExpString("0");}
function insertExpCharOpenRound()		{ insertExpString("(");}
function insertExpCharCloseRound()		{ insertExpString(")");}
function insertExpCharOpenSquare()		{ insertExpString("[");}
function insertExpCharCloseSquare()		{ insertExpString("]");}
function insertExpCharOpenBrace()		{ insertExpString("{");}
function insertExpCharCloseBrace()		{ insertExpString("}");}
function insertExpCharPlus()			{ insertExpString("+");}
function insertExpCharMinus()			{ insertExpString("-");}
function insertExpCharMultiplication()	{ insertExpString("*");}
function insertExpCharFraction()		{ insertExpString("/");}
function insertExpCharDivision()		{ insertExpString(":");}
function insertExpCharRaising()			{ insertExpString("^");}
function insertSQRT() 					{ insertExpString("sqrt(4)");}
function insertROOT() 					{ insertExpString("root(3)(8)");}
function insertExpCharSemicolon()		{ insertExpString(";");}
function insertExpCharDot()				{ insertExpString(".");}
function insertExpCharComma()			{ insertExpString(",");}
function insertExpCharA()				{ insertExpString("a");}
function insertExpCharB()				{ insertExpString("b");}
function insertExpCharC()				{ insertExpString("c");}
function insertExpCharD()				{ insertExpString("d");}
function insertExpCharE()				{ insertExpString("e");}
function insertExpCharH()				{ insertExpString("h");}
function insertExpCharK()				{ insertExpString("k");}
function insertExpCharM()				{ insertExpString("m");}
function insertExpCharN()				{ insertExpString("n");}
function insertExpCharX()				{ insertExpString("x");}
function insertExpCharZ()				{ insertExpString("z");}
function insertExpCharY()				{ insertExpString("y");}
function insertExpCharGCD()				{ insertExpString("$");}
function insertExpCharLCM()				{ insertExpString("&");}
function insertExpCharEqual()			{ insertExpString("=");}
function insertExpCharDecimal()			{ insertExpString(".");}

function submitCalculation(language) {
	// Hide the keyboard buttons
	hideKeyboard();
	
	// Not used; for future developments
	// Show the copyToClipboard button
	// var copyToClipboard = document.getElementById("copyToClipboard");
	// copyToClipboard.style.display = "block";

	// Hide the help texts
	var help = document.getElementById("dropdownhelp");
	help.style.display = "none";

	// Set-up calculation
	var exp = document.getElementById("InputExp");
	var mth = document.getElementById("MthInput");
	mth.value = exp.value.toLowerCase(); // In order to avoid ambiguity, upper case variables are converted to lower case

	// Manage bad chars
	mth.value = mth.value.replace(/(\x02|\x03|\x04|\x05|\x08|\x09|\x20|\x22|\x27|\x3F|\x5C|\uFE0F)/g, ''); // bad chars to be removed
	mth.value = mth.value.replace(/(\xD7|\xB7|\u2022|\u22C5|\u2716)/g, '*'); // bad char of multiplication
	mth.value = mth.value.replace(/\xF7/g, ':'); // bad char of division
	mth.value = mth.value.replace(/(\u2212|\u2013|\u23AF|\x5F|\xAD)/g, '-'); // bad char of subtraction
	mth.value = mth.value.replace(/\u02C6/g, '^');  // bad char of raising to a power 
	mth.value = mth.value.replace(/=>/g, '>=');  // bad inequalities
	mth.value = mth.value.replace(/=</g, '<=');  // bad inequalities
	
	// Only managed when submitting calculation - begin
	mth.value = mth.value.replace(/(\xBA|\xB0)/g, '^0');	// 0 superscript
	mth.value = mth.value.replace(/\xB9/g, '^1');			// 1 superscript
	mth.value = mth.value.replace(/\xB2/g, '^2');			// 2 superscript
	mth.value = mth.value.replace(/\xB3/g, '^3');			// 3 superscript
	mth.value = mth.value.replace(/\u2074/g, '^4');			// 4 superscript
	mth.value = mth.value.replace(/\u207F/g, '^n');			// n superscript
	mth.value = mth.value.replace(/\xAA/g, '^a');			// a superscript
	mth.value = mth.value.replace(/\xBC/g, '(1/4)');  // bad fractions
	mth.value = mth.value.replace(/\xBD/g, '(1/2)');  // bad fractions
	mth.value = mth.value.replace(/\xBE/g, '(3/4)');  // bad fractions
	mth.value = mth.value.replace(/\u2154/g, '(2/3)');  // bad fractions
	// end

	// Manage not useful signs
	mth.value = mth.value.replace(/\x5e+/g, '^'); // ^^
	mth.value = mth.value.replace(/\x2a+/g, '*'); // **
	mth.value = mth.value.replace(/\x2f+/g, '/'); // //
	mth.value = mth.value.replace(/\x2b+/g, '+'); // ++
	mth.value = mth.value.replace(/\x5e\x2b/g, '^'); // ^+
	mth.value = mth.value.replace(/\x2a\x2b/g, '*'); // *+
	mth.value = mth.value.replace(/\x2f\x2b/g, '/'); // /+
	mth.value = mth.value.replace(/\x3a\x2b/g, ':'); // :+
	mth.value = mth.value.replace(/\x24\x2b/g, '$'); // $+
	mth.value = mth.value.replace(/\x26\x2b/g, '&'); // &+
	
	// Deletion of = at the end of expression
	mth.value = mth.value.replace(/=$/, '');

	// Manage decimals
	var patt = /[0-9]+(\x2e|\x2c)[0-9]*\x28[0-9]+\x29/;
	var s = new String(patt.exec(mth.value));
	while (s.valueOf()!="null") {
	  s = s.valueOf().substr(0, s.length-2);
	  var i1 = s.valueOf().search(/(\x2e|\x2c)/);
	  var i2 = s.valueOf().search(/\x28/);
	  var i3 = s.valueOf().search(/\x29/);
	  var int_part = s.valueOf().substring(0,i1);
	  var ante_period = s.valueOf().substring(i1+1,i2);
	  var period = s.valueOf().substring(i2+1,i3);
	  var a = "((" + int_part + ante_period + period + "-" + int_part + ante_period + ")/";
	  i3 = period.length;
	  while (i3-->0) a = a + "9";
	  i2 = ante_period.length;
	  while (i2-->0) a = a + "0";
	  a = a + ")";
	  mth.value = mth.value.replace(s.valueOf(), a);
      var s = new String(patt.exec(mth.value));
	}

	patt = /[0-9]+(\x2e|\x2c)[0-9]+/;
	s = new String(patt.exec(mth.value));
	while (s.valueOf()!="null") {
	  s = s.valueOf().substr(0, s.length-2);
	  i1 = s.valueOf().search(/(\x2e|\x2c)/);
	  int_part = s.valueOf().substring(0,i1);
	  ante_period = s.valueOf().substring(i1+1);
	  a = "((" + int_part + ante_period + ")/";
      a = a + "1";
	  i2 = ante_period.length;
	  while (i2-->0) a = a + "0";
	  a = a + ")";
	  mth.value = mth.value.replace(s.valueOf(), a);
      s = new String(patt.exec(mth.value));
	}
	
	// Interpret . as a multiplication, if not used for decimals
	mth.value = mth.value.replace(/\x2e/g, '*');

	// Insert closing brackets at the bottom of expression, if missed
	var brackets_balance = 0;
	var strmatch = mth.value.match(/[\x28\x5b\x7b]/g);
	if (strmatch != null) {
		brackets_balance = strmatch.length;
		strmatch = mth.value.match(/[\x29\x5d\x7d]/g);
		if (strmatch != null) brackets_balance -= strmatch.length;
	}
	while (brackets_balance-- > 0) mth.value = mth.value + ")";
	
	// Generate errors for the CGI (if any)
	var InputError = document.getElementById("InputError");
	InputError.value = "0"; // NO_ERRORS
	
	if (!mth.value)
		InputError.value = "-17"; // EMPTY_EXPRESSION
	else {
		var n = mth.value.search(/(#|arccos|arcsin|arctan|cos|cosh|cot|coth|csc|csch|det|dim|exp|gcd|glb|lcm|ln|log|lub|max|min|mod|sec|sech|sin|sinh|tan|tanh|abs|floor|ceil|int|\u221A|\x7C|\x21|\x40)/i);
		if (n>=0) InputError.value = "-13"; // FUNCTION_NOT_SUPPORTED
	}
	
	// Set the input type
	var InputType = document.getElementById("InputType");
	InputType.value = "1"; // Expression

	if (InputError.value == "0") {
		// Manage SQRT and ROOT
		mth.value = mth.value.replace(/sqrt/gi, '@');
		mth.value = mth.value.replace(/root/gi, '|');

		// Manage ROOT operator - Begin
		var i = -1;
		var brackets_level = 0;
		while (++i < mth.value.length)
			if (mth.value.charAt(i) == "|" && i+1 < mth.value.length && (mth.value.charAt(i+1) == "(" || mth.value.charAt(i+1) == "[" || mth.value.charAt(i+1) == "{")) {
				brackets_level = 1;
				i++;
			}
			else
				if (brackets_level > 0 && (mth.value.charAt(i) == "(" || mth.value.charAt(i) == "[" || mth.value.charAt(i) == "{"))
					++brackets_level;
				else
					if (brackets_level > 0 && (mth.value.charAt(i) == ")" || mth.value.charAt(i) == "]" || mth.value.charAt(i) == "}"))
						if (brackets_level-1 == 0 && i+1 < mth.value.length && (mth.value.charAt(i+1) == "(" || mth.value.charAt(i+1) == "[" || mth.value.charAt(i+1) == "{"))  {
							mth.value = mth.value.substring(0, i) + ";" + mth.value.substring(i+2);
							brackets_level = 0;
						}
						else
							--brackets_level;
		// Manage ROOT operator - End

		// Manage equations and inequalities
		n = -1;
		if (n==-1) n = mth.value.search(/>=/);
		if (n>=0) {
			mth.value = mth.value.replace(/>=/, "-{");
			mth.value = mth.value + "}";
			InputType.value = "2"; // Inequality 2 ">="
			n = -2;
		}
		if (n==-1) n = mth.value.search(/<=/);
		if (n>=0) {
			mth.value = mth.value.replace(/<=/, "-{");
			mth.value = mth.value + "}";
			InputType.value = "3"; // Inequality 3 "<="
			n = -2;
		}
		if (n==-1) n = mth.value.search(/=/);
		if (n>=0) {
			mth.value = mth.value.replace(/=/, "-{");
			mth.value = mth.value + "}";
			InputType.value = "4"; // Equation
			n = -2;
		}
		if (n==-1) n = mth.value.search(/>/);
		if (n>=0) {
			mth.value = mth.value.replace(/>/, "-{");
			mth.value = mth.value + "}";
			InputType.value = "5"; // Inequality 5 ">"
			n = -2;
		}
		if (n==-1) n = mth.value.search(/</);
		if (n>=0) {
			mth.value = mth.value.replace(/</, "-{");
			mth.value = mth.value + "}";
			InputType.value = "6"; // Inequality 6 "<"
			n = -2;
		}
		mth.value = mth.value.replace(/-\x7b0\x7d/, ""); // Remove "-{0}"
		
		// Manage monomials
		patt = /[0-9][a-z]/i;
		s = new String(patt.exec(mth.value));
		a = "";
		while (s.valueOf()!="null") {
			a = s.charAt(0)+"#"+s.charAt(1);
			mth.value = mth.value.replace(s.valueOf(), a);
			s = new String(patt.exec(mth.value));
		}

		patt = /[a-z][a-z]/i;
		s = new String(patt.exec(mth.value));
		while (s.valueOf()!="null") {
			a = s.charAt(0)+"#"+s.charAt(1);
			mth.value = mth.value.replace(s.valueOf(), a);
			s = new String(patt.exec(mth.value));
		}

		patt = /[a-z][0-9]/i;
		s = new String(patt.exec(mth.value));
		while (s.valueOf()!="null") {
			a = s.charAt(0)+"^"+s.charAt(1);
			mth.value = mth.value.replace(s.valueOf(), a);
			s = new String(patt.exec(mth.value));
		}

		// Manage implicit multiplications
		patt = /[0-9][\x28\x5b\x7b]/i;
		s = new String(patt.exec(mth.value));
		while (s.valueOf()!="null") {
			a = s.charAt(0)+"*"+s.charAt(1);
			mth.value = mth.value.replace(s.valueOf(), a);
			s = new String(patt.exec(mth.value));
		}

		patt = /[a-z][\x28\x5b\x7b]/i;
		s = new String(patt.exec(mth.value));
		while (s.valueOf()!="null") {
			a = s.charAt(0)+"*"+s.charAt(1);
			mth.value = mth.value.replace(s.valueOf(), a);
			s = new String(patt.exec(mth.value));
		}

		patt = /[\x29\x5d\x7d][\x28\x5b\x7b]/i;
		s = new String(patt.exec(mth.value));
		while (s.valueOf()!="null") {
			a = s.charAt(0)+"*"+s.charAt(1);
			mth.value = mth.value.replace(s.valueOf(), a);
			s = new String(patt.exec(mth.value));
		}

		patt = /[\x29\x5d\x7d][a-z]/i;
		s = new String(patt.exec(mth.value));
		while (s.valueOf()!="null") {
			a = s.charAt(0)+"*"+s.charAt(1);
			mth.value = mth.value.replace(s.valueOf(), a);
			s = new String(patt.exec(mth.value));
		}

		patt = /[\x29\x5d\x7d][0-9]/i;
		s = new String(patt.exec(mth.value));
		while (s.valueOf()!="null") {
			a = s.charAt(0)+"*"+s.charAt(1);
			mth.value = mth.value.replace(s.valueOf(), a);
			s = new String(patt.exec(mth.value));
		}

		// Manage implicit multiplications in relation to roots
		patt = /[0-9][\x40\x7c]/i;
		s = new String(patt.exec(mth.value));
		while (s.valueOf()!="null") {
			a = s.charAt(0)+"*"+s.charAt(1);
			mth.value = mth.value.replace(s.valueOf(), a);
			s = new String(patt.exec(mth.value));
		}
		
		patt = /[a-z][\x40\x7c]/i;
		s = new String(patt.exec(mth.value));
		while (s.valueOf()!="null") {
			a = s.charAt(0)+"*"+s.charAt(1);
			mth.value = mth.value.replace(s.valueOf(), a);
			s = new String(patt.exec(mth.value));
		}

		patt = /[\x29\x5d\x7d][\x40\x7c]/i;
		s = new String(patt.exec(mth.value));
		while (s.valueOf()!="null") {
			a = s.charAt(0)+"*"+s.charAt(1);
			mth.value = mth.value.replace(s.valueOf(), a);
			s = new String(patt.exec(mth.value));
		}
	}
	else InputType.value = "0"; // Error input type
}

function loadFrame(language) {
	var iframe = document.getElementById("myframe");
	var doc = iframe.contentWindow.document;
	var res = document.getElementById("resultPrint");

	res.innerHTML = doc.body.innerHTML;
	
	// Change default html tag of result
	res.innerHTML = res.innerHTML.replace(/<pre/g, "<p");
	res.innerHTML = res.innerHTML.replace(/pre>/g, "p>");

	// Format result in html for MathJax (ASCII MATH)
	res.innerHTML = res.innerHTML.replace(/`\n`/g, "`</p><p>`");
	res.innerHTML = res.innerHTML.replace(/=`\n/g, "`</p><p>");
	res.innerHTML = res.innerHTML.replace(/`\n/g, "`</p><p>");
	res.innerHTML = res.innerHTML.replace(/\n<\x2fp/g, "</p");
	
	// Manage monomials
	var patt = /[0-9]\x2a[a-z]/i;
	var s = new String(patt.exec(res.innerHTML));
	var a = "";
	while (s.valueOf()!="null") {
		a = s.charAt(0)+s.charAt(2);
		res.innerHTML = res.innerHTML.replace(s.valueOf(), a);
		s = new String(patt.exec(res.innerHTML));
	}		
	
	/* Removed as MathJax does not display correctly xx, bb, cc ...
	patt = /[a-z]\x2a[a-z]/i;
	s = new String(patt.exec(res.innerHTML));
	while (s.valueOf()!="null") {
		a = s.charAt(0)+s.charAt(2);
		res.innerHTML = res.innerHTML.replace(s.valueOf(), a);
		s = new String(patt.exec(res.innerHTML));
	}
	*/

	patt = /[a-z][0-9]/i;
	s = new String(patt.exec(res.innerHTML));
	while (s.valueOf()!="null") {
		a = s.charAt(0)+"^"+s.charAt(1);
		res.innerHTML = res.innerHTML.replace(s.valueOf(), a);
		s = new String(patt.exec(res.innerHTML));
	}

	// Manage ROOT operator
	res.innerHTML = res.innerHTML.replace(/;/g, ")(");
	res.innerHTML = res.innerHTML.replace(/&gt;\x29\x28/g, ">");
	res.innerHTML = res.innerHTML.replace(/&ge;\x29\x28/g, ">=");
	res.innerHTML = res.innerHTML.replace(/&lt;\x29\x28/g, "<");
	res.innerHTML = res.innerHTML.replace(/&le;\x29\x28/g, "<=");
	res.innerHTML = res.innerHTML.replace(/&amp;\x29\x28/g, "&");

	// Manage some MathJax's displays
	res.innerHTML = res.innerHTML.replace(/xx/g, 'x*x'); // xx is not displayed as wanted
	res.innerHTML = res.innerHTML.replace(/bb/g, 'b*b'); // bb is not displayed as wanted
	res.innerHTML = res.innerHTML.replace(/cc/g, 'c*c'); // cc is not displayed as wanted
}

// To be used only if InputType.value = 1 (i.e an expression)

function copyToClipboardExpResult() {
	var iframe = document.getElementById("myframe");
	var doc = iframe.contentWindow.document;
	var copyable_res = doc.body.innerHTML;

	copyable_res = copyable_res.replace(/`\n</g, "`<");
	copyable_res = copyable_res.replace(/`.*`\n/g, "");
	copyable_res = copyable_res.replace(/<pre.*>`=/g, "");
	copyable_res = copyable_res.replace(/=`.*pre>/g, "");
	alert (copyable_res);
}
