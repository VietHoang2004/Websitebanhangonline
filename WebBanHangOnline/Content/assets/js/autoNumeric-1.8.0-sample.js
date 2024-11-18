$(document).ready(function (e) {
    /* demo samples */
    $('.demo').autoNumeric('init');
    $('#demoDefaults').bind('blur focusout keypress keyup', function () {
        var demoGet = $('#demoDefaults').autoNumeric('get');
        $('#demoGet').val(demoGet);
        $('#demoSet').autoNumeric('set', demoGet);
    });
    /* tutorial samples */
    $('#someID_defaults').autoNumeric('init');
    $('#someID_HTML5').autoNumeric('init');
    $('#someID_options').autoNumeric('init', {aSign: ' EUR', pSign: 's' });
    /* scripts for option & data code generator  */
    /* changes the selected radio button on altDec  */
    $('#altDecInput').focus(function () {
        $('#altDecDefault').attr('checked', false);
        $('#altDecUserDefined').attr('checked', 'checked');
    });
    /* rountine that prevents  numeric characters from being entered the the altDec field  */
    $('#altDecInput').keypress(function (e) {
        var cc = String.fromCharCode(e.which);
        if (e.which !== 32 && cc >= 0 && cc <= 9) {
            e.preventDefault();
        }
    });
    /* changes the selected radio button on aSign  */
    $('#aSignInput').focus(function () {
        $('#aSignDefault').attr('checked', false);
        $('#aSignUserDefined').attr('checked', 'checked');
    });
    /* rountine that prevents  apostrophe, comma, more than one period (full stop) or numeric characters from being entered the the aSign field  */
    $('#aSignInput').keypress(function (e) {
        var cc = String.fromCharCode(e.which);
        if ((e.which !== 32 && cc >= 0 && cc <= 9) || cc === ', ' || cc === "'" || (cc === "." && this.value.lastIndexOf('.') !== -1)) {
            e.preventDefault();
        }
    });
    /* changes the selected radio button on vMin  */
    $('#vMinInput').focus(function () {
        $('#vMinDefault').attr('checked', false);
        $('#vMinUserDefined').attr('checked', 'checked');
    });
    /* changes the selected radio button on vMax  */
    $('#vMaxInput').focus(function () {
        $('#vMaxDefault').attr('checked', false);
        $('#vMaxUserDefined').attr('checked', 'checked');
    });
    /* changes the selected radio button on anDefault  */
    $('#anDefaultInput').focus(function () {
        $('#anDefault').attr('checked', false);
        $('#anDefaultUserDefined').attr('checked', 'checked');
    });	
    /* changes the selected radio button on mDec  */
    $('#mDecInput').focus(function () {
        $('#mDecDefault').attr('checked', false);
        $('#mDecUserDefined').attr('checked', 'checked');
    });
    $("input.md").bind('click keyup blur', function () {
        var optionCode = '', aSepOption = '', dGroupOption = '', aDecOption = '', altDecOption = '', aSignOption = '', pSignOption = '', vMinOption = '', vMaxOption = '', mDecOption = '', mRoundOption = '', aPadOption = '', nBracketOption = '', wEmptyOption = '', lZeroOption = '', aFormOption = '', anDefaultOption = '';
        var dataCode = '', aSepData = '', dGroupData = '', aDecData = '', altDecData = '', aSignData = '', pSignData = '', vMinData = '', vMaxData = '', mDecData = '', mRoundData = '', aPadData = '', nBracketData = '', wEmptyData = '', lZeroData = '', aFormData = '', anDefaultData = '';
        var aSepOptionArray = ['', "aSep: '\\''", "aSep: '.'", "aSep: ' '", "aSep: ''"], aSepDataArray = ['', 'data-a-sep="\'"', 'data-a-sep="."', 'data-a-sep=" "', 'data-a-sep=""'];
        var dGroupOptionArray = ['', "dGroup: '2'", "dGroup: '4'"], dGroupDataArray = ['', 'data-d-group="2"', 'data-d-group="4"'];
        var aDecOptionArray = ['', "aDec: ','"], aDecDataArray = ['', 'data-a-dec=","'];
        var pSignOptionArray = ['',  "pSign: 's'"], pSignDataArray = ['', 'data-p-sign="s"'];
        var mRoundOptionArray = ['', "mRound: 'A'", "mRound: 's'", "mRound: 'a'", "mRound: 'B'", "mRound: 'U'", "mRound: 'D'", "mRound: 'C'", "mRound: 'F'", "mRound: 'CHF'"], mRoundDataArray = ['', 'data-m-round="A"', 'data-m-round="s"', 'data-m-round="a"', 'data-m-round="B"', 'data-m-round="U"', 'data-m-round="D"', 'data-m-round="C"', 'data-m-round="F"', 'data-m-round="CHF"'];
        var aPadOptionArray = ['', "aPad: false"], aPadDataArray = ['', 'data-a-pad="false"'];
        var nBracketOptionArray = ['', "nBracket: '(,)'", "nBracket: '[,]'", "nBracket: '{,}'", "nBracket: '<,>'"], nBracketDataArray = ['', 'data-n-bracket="(,)"', 'data-n-bracket="[,]"', 'data-n-bracket="{,}"', 'data-n-bracket="<,>"'];
        var wEmptyOptionArray = ['', "wEmpty: 'zero'", "wEmpty: 'sign'"], wEmptyDataArray = ['', 'data-w-empty="zero"', 'data-w-empty="sign"'];
        var lZeroOptionArray = ['', "lZero: 'deny'", "lZero: 'keep'"], lZeroDataArray = ['', 'data-l-zero="deny"', 'data-l-zero="keep"'];
        var aFormOptionArray = ['', "aForm: false"], aFormDataArray = ['', 'data-a-form="false"'];
        if ($("input:radio[name=aSep]:checked").attr('id') === 'aSepDefault') {
            $('input:radio[name=aDec]:nth(0)').removeAttr('disabled');
            $('input:radio[name=aDec]:nth(0)').attr('checked', true);
            $('input:radio[name=aDec]:nth(1)').attr('disabled', true);
        }
        if ($("input:radio[name=aSep]:checked").attr('id') === 'aSepPeriod') {
            $('input:radio[name=aDec]:nth(1)').removeAttr("disabled");
            $('input:radio[name=aDec]:nth(1)').attr('checked', true);
            $('input:radio[name=aDec]:nth(0)').attr("disabled", true);
        }
        if ($("input:radio[name=aSep]:checked").attr('id') !== 'aSepDefault' && $("input:radio[name=aSep]:checked").attr('id') !== 'aSepPeriod') {
            $('input:radio[name=aDec]:nth(0)').removeAttr("disabled");
            $('input:radio[name=aDec]:nth(1)').removeAttr("disabled");
        }
        aSepOption = aSepOptionArray[$("input:radio[name=aSep]:checked").val()];
        aSepData = aSepDataArray[$("input:radio[name=aSep]:checked").val()];
        dGroupOption = dGroupOptionArray[$("input:radio[name=dGroup]:checked").val()];
        dGroupData = dGroupDataArray[$("input:radio[name=dGroup]:checked").val()];
        aDecOption = aDecOptionArray[$("input:radio[name=aDec]:checked").val()];
        aDecData = aDecDataArray[$("input:radio[name=aDec]:checked").val()];
        if ($("input:radio[name=altDec]:checked").attr('id') === 'altDecDefault') {
            $('#altDecInput').val('');
        }
        var altDecEntered = $('#altDecInput').val();
        if (altDecEntered !== '') {
            altDecOption = "altDec: '" + altDecEntered + "'";
            altDecData = 'data-alt-dec="' + altDecEntered + '"';
        } else {
            altDecOption = '';
            altDecData = '';
        }
        if ($("input:radio[name=aSign]:checked").attr('id') === 'aSignDefault') {
            $('#aSignInput').val('');
        }
        var aSignEntered = $('#aSignInput').val();
        if (aSignEntered !== '') {
            aSignOption = "aSign: '" + aSignEntered + "'";
            aSignData = 'data-a-sign="' + aSignEntered + '"';
        } else {
            aSignOption = '';
            aSignData = '';
        }
        pSignOption = pSignOptionArray[$("input:radio[name=pSign]:checked").val()];
        pSignData = pSignDataArray[$("input:radio[name=pSign]:checked").val()];
        if ($("input:radio[name=vMin]:checked").attr('id') === 'vMinDefault') {
            $('#vMinInput').val('');
        }
        var vMinEntered = $('#vMinInput').val();
        if (vMinEntered !== '') {
            vMinOption = "vMin: '" + vMinEntered + "'";
            vMinData = 'data-v-min="' + vMinEntered + '"';
        } else {
            vMinOption = '';
            vMinData = '';
        }
        if ($("input:radio[name=vMax]:checked").attr('id') === 'vMaxDefault') {
            $('#vMaxInput').val('');
        }
        var vMaxEntered = $('#vMaxInput').val();
        if (vMaxEntered !== '') {
            vMaxOption = "vMax: '" + vMaxEntered + "'";
            vMaxData = 'data-v-max="' + vMaxEntered + '"';
        } else {
            vMaxOption = '';
            vMaxData = '';
        }
        var mDecEntered = $('#mDecInput').val();
        if (mDecEntered !== '') {
            mDecOption = "mDec: '" + mDecEntered + "'";
            mDecData = 'data-m-dec="' + mDecEntered + '"';
        } else {
            mDecOption = '';
            mDecData = '';
        }		
        mRoundOption = mRoundOptionArray[$("input:radio[name=mRound]:checked").val()];
        mRoundData = mRoundDataArray[$("input:radio[name=mRound]:checked").val()];
        aPadOption = aPadOptionArray[$("input:radio[name=aPad]:checked").val()];
        aPadData = aPadDataArray[$("input:radio[name=aPad]:checked").val()];
        nBracketOption = nBracketOptionArray[$("input:radio[name=nBracket]:checked").val()];
        nBracketData = nBracketDataArray[$("input:radio[name=nBracket]:checked").val()];
        wEmptyOption = wEmptyOptionArray[$("input:radio[name=wEmpty]:checked").val()];
        wEmptyData = wEmptyDataArray[$("input:radio[name=wEmpty]:checked").val()];
        lZeroOption = lZeroOptionArray[$("input:radio[name=lZero]:checked").val()];
        lZeroData = lZeroDataArray[$("input:radio[name=lZero]:checked").val()];
        aFormOption = aFormOptionArray[$("input:radio[name=aForm]:checked").val()];
        aFormData = aFormDataArray[$("input:radio[name=aForm]:checked").val()];
        var anDefaultEntered = $('#anDefaultInput').val();
        if (anDefaultEntered !== '') {
            anDefaultOption = "anDefault: '" + anDefaultEntered + "'";
            anDefaultData = 'data-an-default="' + anDefaultEntered + '"';
        } else {
            anDefaultOption = '';
            anDefaultData = '';
        }		
		if (aSepOption !== '') {
            optionCode = aSepOption;
            dataCode = aSepData;
        }
        if (dGroupOption !== '') {
            if (optionCode !== '') {
                optionCode = optionCode + ', ' + dGroupOption;
                dataCode = dataCode + ' ' + dGroupData;
            } else {
                optionCode = dGroupOption;
                dataCode = dGroupData;
            }
        }
        if (aDecOption !== '') {
            if (optionCode !== '') {
                optionCode = optionCode + ', ' + aDecOption;
                dataCode = dataCode + ' ' + aDecData;
            } else {
                optionCode = aDecOption;
                dataCode = aDecData;
            }
        }
        if (altDecOption !== '') {
            if (optionCode !== '') {
                optionCode = optionCode + ', ' + altDecOption;
                dataCode = dataCode + ' ' + altDecData;
            } else {
                optionCode = altDecOption;
                dataCode = altDecData;
            }
        }
        if (aSignOption !== '') {
            if (optionCode !== '') {
                optionCode = optionCode  + ', ' + aSignOption;
                dataCode = dataCode + ' ' + aSignData;
            } else {
                optionCode = aSignOption;
                dataCode = aSignData;
            }
        }
        if (pSignOption !== '') {
            if (optionCode !== '') {
                optionCode = optionCode + ', ' + pSignOption;
                dataCode = dataCode + ' ' + pSignData;
            } else {
                optionCode = pSignOption;
                dataCode = pSignData;
            }
        }
        if (vMinOption !== '') {
            if (optionCode !== '') {
                optionCode = optionCode + ', ' + vMinOption;
                dataCode = dataCode + ' ' + vMinData;
            } else {
                optionCode = vMinOption;
                dataCode = vMinData;
            }
        }
        if (vMaxOption !== '') {
            if (optionCode !== '') {
                optionCode = optionCode + ', ' + vMaxOption;
                dataCode = dataCode + ' ' + vMaxData;
            } else {
                optionCode = vMaxOption;
                dataCode = vMaxData;
            }
        }
        if (mDecOption !== '') {
            if (optionCode !== '') {
                optionCode = optionCode + ', ' + mDecOption;
                dataCode = dataCode + ' ' + mDecData;				
            } else {
                optionCode = mDecOption;
				dataCode = mDecData;
            }
        }
        if (mRoundOption !== '') {
            if (optionCode !== '') {
                optionCode = optionCode + ', ' + mRoundOption;
                dataCode = dataCode + ' ' + mRoundData;
            } else {
                optionCode = mRoundOption;
                dataCode = mRoundData;
            }
        }
        if (aPadOption !== '') {
            if (optionCode !== '') {
                optionCode = optionCode + ', ' + aPadOption;
                dataCode = dataCode + ' ' + aPadData;
            } else {
                optionCode = aPadOption;
                dataCode = aPadData;
            }
        }
        if (nBracketOption !== '') {
            if (optionCode !== '') {
                optionCode = optionCode + ', ' + nBracketOption;
                dataCode = dataCode + ' ' + nBracketData;
            } else {
                optionCode = nBracketOption;
                dataCode = nBracketData;
            }
        }
        if (wEmptyOption !== '') {
            if (optionCode !== '') {
                optionCode = optionCode + ', ' + wEmptyOption;
                dataCode = dataCode + ' ' + wEmptyData;
            } else {
                optionCode = wEmptyOption;
                dataCode = wEmptyData;
            }
        }
        if (lZeroOption !== '') {
            if (optionCode !== '') {
                optionCode = optionCode + ', ' + lZeroOption;
                dataCode = dataCode + ' ' + lZeroData;
            } else {
                optionCode = lZeroOption;
                dataCode = lZeroData;
            }
        }
        if (aFormOption !== '') {
            if (optionCode !== '') {
                optionCode = optionCode + ', ' + aFormOption;
                dataCode = dataCode + ' ' + aFormData;
            } else {
                optionCode = aFormOption;
                dataCode = aFormData;
            }
        }
        if (anDefaultOption !== '') {
            if (optionCode !== '') {
                optionCode = optionCode + ', ' + anDefaultOption;
                dataCode = dataCode + ' ' + anDefaultData;
            } else {
                optionCode = anDefaultOption;
                dataCode = anDefaultData;
            }
        }		
        $('#optionCode').text('');
        $('#dataCode').text('');
        if (optionCode !== '') {
            $('#optionCode').text('{' + optionCode + '}');
            $('#dataCode').text(dataCode);
        }
    });
    /* clears the metadata code  */
    $('#rd').click(function () {
        $('#optionCode').text('');
        $('#dataCode').text('');
    });
    /* ends scripts for metadata code generator  */

    /* script  for defaults demo  */
    $('#d_noMeta').blur(function () {
        var convertInput = '';
        convertInput = $(this).autoNumericGet();
        $('#d_Get').val(convertInput);
        $('#d_Set').autoNumericSet(convertInput);
    });
    /* end script  for defaults demo  */

	/* general init on the class="auto" */
	$('.auto').autoNumeric('init');

	/* init method */
    var test = {aSign: '€ '};
    $('#demoInit').autoNumeric(test);

	/* destroy method */
    $('#demoDestroyInput').autoNumeric('init');
    $('#demoDestroyButton').click(function () {
        $('#demoDestroyInput').autoNumeric('destroy');
    });
    $('#demoInitButton').click(function () {
        $('#demoDestroyInput').autoNumeric('init');
    });

	/* update method script */
    $('#demoUpdateInput').autoNumeric('init');
    $('#demoUpdateButton1').click(function () {
        $('#demoUpdateInput').autoNumeric('update', {aSign: '$ '});
    });
    $('#demoUpdateButton2').click(function () {
        $('#demoUpdateInput').autoNumeric('update', {aSign: '€ '});
    });

	/* set method script */
	$('.demoSet').autoNumeric('init');
	$('#demoSetValue').focus(function () {
        $('#demoSetInput').val('');
		$('#demoSetSpan').text('Number placed here:');
    });
	$('#demoSetButton').click(function () {
        var demoSetValue = $('#demoSetValue').val();
		$('.demoSet').autoNumeric('set', demoSetValue);		
    });

	/* get method script */
	$('#demoGetButton1').click(function () {
		 var getInput = $('#demoGetInput').autoNumeric('get');
		$('#demoGetValue1').val(getInput);
    });
	$('#demoGetButton2').click(function () {
		 var getTd = $('#demoGetTd').autoNumeric('get');	
		$('#demoGetValue2').val(getTd);
    });

	/* getString method script */
    $('#getStringButton').click(function () {
        console.log($('form:eq(11)').serialize());
       	var testGetString = $('form:eq(11)').autoNumeric('getString');
       	console.log(testGetString);
        return false;
    });

	/* getarray method script */
    var totalCost = $('#widget').autoNumeric('get') * $('#cost').autoNumeric('get');
    $('#total').autoNumeric('set', totalCost);
    $('#widget, #cost').keyup(function () {
        totalCost = $('#widget').autoNumeric('get') * $('#cost').autoNumeric('get');
        $('#total').autoNumeric('set', totalCost);
    });
    $('#getArrayButton').click(function () {
        console.log($('form:eq(12)').serializeArray());
        var testGetArray = $('form:eq(12)').autoNumeric('getArray');
        console.log(testGetArray);
        console.log(JSON.stringify(testGetArray));
        return false;
    });

	/* getSettings method script */
    $('#getSettingsButton').click(function () {
        var testGetSettings = $('#fi7').autoNumeric('getSettings');
        console.log(testGetSettings);
        return false;
    });

	/* mRound demo */
	$('.auto_mRound').autoNumeric('init');
    $('#mRoundValue').focus(function () {
		$('.auto_mRound').val('');
    });
	$('#mRoundDecimal').change(function () {
		var getValue = $('#mRoundValue').autoNumeric('get');
		var getDecimal = $('#mRoundDecimal').val();
		var getOption = $.parseJSON('{"mDec":  "' + getDecimal + '"}');
		console.log(getOption);
		$('.auto_mRound').autoNumeric('update', getOption);
		$('.auto_mRound').autoNumeric('set', getValue);
    });
    $('#mRoundButton').click(function () {
		var getValue = $('#mRoundValue').autoNumeric('get');
		var getDecimal = $('#mRoundDecimal').val();
		var getOption = $.parseJSON('{"mDec":  ' + getDecimal + '}');
		$('.auto_mRound').autoNumeric('update', getOption);
		$('.auto_mRound').autoNumeric('set', getValue);
    });

    $('#i1').keyup(function () {
        var strip = $('#i1').autoNumeric('get');
        $('#i2').val(strip);
        $('#i3').autoNumeric('set', strip);
        $('#span1').autoNumeric('set', strip);
    });

    $('#i6').autoNumeric('init');
    $('#b5').click(function () {
        $('#i6').val('');
        $('#i6').autoNumeric('update', {lZero: 'deny'});
        $('#i6').focus();
    });
    $('#b6').click(function () {
        $('#i6').val('');
        $('#i6').autoNumeric('update', {lZero: 'allow'});
        $('#i6').focus();
    });
    $('#b7').click(function () {
        $('#i6').val('');
        $('#i6').autoNumeric('update', {lZero: 'keep'});
        $('#i6').focus();
    });
    $('#fi7').autoNumeric('init');
    $('#fb8').click(function () {
        $('#fi7').autoNumeric('update', {nBracket: null});
    });
    $('#fb9').click(function () {
        $('#fi7').autoNumeric('update', {nBracket: '(,)'});
    });

    $('a').smoothScroll();
});