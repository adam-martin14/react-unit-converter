import React, {Component} from 'react';
import DropDownMenuSelect from '../../../../../UI/DropDownMenu/DropDownMenuSelect/DropDownMenuSelect';
import DropDownMenuOptions from '../../../../../UI/DropDownMenu/DropDownMenuOptions/DropDownMenuOptions';
import ResultBox from '../../../../ResultBox/ResultBox';
import PageTertiaryHeading from '../../../../PageTertiaryHeading/PageTertiaryHeading';
import classes from '../../FromTo/FromTo.css';

var convert = require('convert-units');


const weightMeasurementUnits = [
    { value: 'gram', label: 'Gram' },
    { value: 'ounce', label: 'Ounce' },
    { value: 'milligram', label: 'Milligram' },
    { value: 'kilogram', label: 'Kilogram' },
    { value: 'pound', label: 'Pound' },
    { value: 'ton', label: 'US Ton' },
 ];

const weightMeasurementUnitsArray = weightMeasurementUnits.map(ctrl => (
    <option value={ctrl.value} key={ctrl.value}>{ctrl.label}</option>
));

let resultBox1 = '';
let resultBox2 = '';
let resultBoxId = '';
let unitDropDownId = '';
let topSelectedUnitDropDownValue = '';
let bottomSelectedUnitDropDownValue = '';
let inputValue = '';
let milligramToGramConversion = '';
let milligramToKilogramConversion = '';
let milligramToOunceConversion = '';
let milligramToPoundConversion = '';
let milligramToTonConversion = '';
let gramToMilligramConversion = '';
let gramToKilogramConversion = '';
let gramToOunceConversion = '';
let gramToPoundConversion = '';
let gramToTonConversion = '';
let kilogramToGramConversion = '';
let kilogramToMilligramConversion = '';
let kilogramToOunceConversion = '';
let kilogramToPoundConversion = '';
let kilogramToTonConversion = '';
let ounceToKilogramConversion = '';
let ounceToGramConversion = '';
let ounceToMilligramConversion = '';
let ounceToPoundConversion = '';
let ounceToTonConversion = '';
let poundToOunceConversion = '';
let poundToKilogramConversion = '';
let poundToGramConversion = '';
let poundToMilligramConversion = '';
let poundToTonConversion = '';
let tonToPoundConversion = '';
let tonToOunceConversion = '';
let tonToKilogramConversion = '';
let tonToGramConversion = '';
let tonToMilligramConversion = '';
let conversionResult = '';
let capitalizedTopPlaceholder = '';
let capitalizedBottomPlaceholder = '';



class FromToWeight extends Component {

    state = { 
        resultBoxOneValueState: '',
        resultBoxTwoValueState: '',
        topSelectedDropDownValueState: 'gram',
        bottomSelectedDropDownValueState: 'ounce'
    }


    weightConversionHandler = (event) => {

        inputValue = event.target.value;
        resultBoxId = event.target.id;

        milligramToGramConversion = convert(inputValue).from('mg').to('g').toFixed(2);
        milligramToKilogramConversion = convert(inputValue).from('mg').to('kg').toFixed(2);
        milligramToOunceConversion = convert(inputValue).from('mg').to('oz').toFixed(2);
        milligramToPoundConversion = convert(inputValue).from('mg').to('lb').toFixed(2);
        milligramToTonConversion = convert(inputValue).from('mg').to('t').toFixed(2);

        gramToMilligramConversion = convert(inputValue).from('g').to('mg').toFixed(2);
        gramToKilogramConversion = convert(inputValue).from('g').to('kg').toFixed(2);
        gramToOunceConversion = convert(inputValue).from('g').to('oz').toFixed(2);
        gramToPoundConversion = convert(inputValue).from('g').to('lb').toFixed(2);
        gramToTonConversion = convert(inputValue).from('g').to('t').toFixed(2);

        kilogramToGramConversion = convert(inputValue).from('kg').to('g').toFixed(2);
        kilogramToMilligramConversion = convert(inputValue).from('kg').to('mg').toFixed(2);
        kilogramToOunceConversion = convert(inputValue).from('kg').to('oz').toFixed(2);
        kilogramToPoundConversion = convert(inputValue).from('kg').to('lb').toFixed(2);
        kilogramToTonConversion = convert(inputValue).from('kg').to('t').toFixed(2);

        ounceToKilogramConversion = convert(inputValue).from('oz').to('kg').toFixed(2);
        ounceToGramConversion = convert(inputValue).from('oz').to('g').toFixed(2);
        ounceToMilligramConversion = convert(inputValue).from('oz').to('mg').toFixed(2);
        ounceToPoundConversion = convert(inputValue).from('oz').to('lb').toFixed(2);
        ounceToTonConversion = convert(inputValue).from('oz').to('t').toFixed(2);

        poundToOunceConversion = convert(inputValue).from('lb').to('oz').toFixed(2);
        poundToKilogramConversion = convert(inputValue).from('lb').to('kg').toFixed(2);
        poundToGramConversion = convert(inputValue).from('lb').to('g').toFixed(2);
        poundToMilligramConversion = convert(inputValue).from('lb').to('mg').toFixed(2);
        poundToTonConversion = convert(inputValue).from('lb').to('t').toFixed(2);

        tonToPoundConversion = convert(inputValue).from('t').to('lb').toFixed(2);
        tonToOunceConversion = convert(inputValue).from('t').to('oz').toFixed(2);
        tonToKilogramConversion = convert(inputValue).from('t').to('kg').toFixed(2);
        tonToGramConversion = convert(inputValue).from('t').to('g').toFixed(2);
        tonToMilligramConversion = convert(inputValue).from('t').to('mg').toFixed(2);
        

        if (this.state.topSelectedDropDownValueState === this.state.bottomSelectedDropDownValueState) {
            this.setState({resultBoxOneValueState: inputValue})
            this.setState({resultBoxTwoValueState: inputValue})
        }

        if (resultBoxId === 'result-box-milligram') {

            if (this.state.topSelectedDropDownValueState === 'gram' || this.state.bottomSelectedDropDownValueState === 'gram') {

                conversionResult = milligramToGramConversion;

                if (this.state.topSelectedDropDownValueState === 'milligram') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }
        
            if (this.state.topSelectedDropDownValueState === 'kilogram' || this.state.bottomSelectedDropDownValueState === 'kilogram') {

                conversionResult = milligramToKilogramConversion;

                if (this.state.topSelectedDropDownValueState === 'milligram') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            if (this.state.topSelectedDropDownValueState === 'ounce' || this.state.bottomSelectedDropDownValueState === 'ounce') {

                conversionResult = milligramToOunceConversion;

                if (this.state.topSelectedDropDownValueState === 'milligram') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            if (this.state.topSelectedDropDownValueState === 'pound' || this.state.bottomSelectedDropDownValueState === 'pound') {

                conversionResult = milligramToPoundConversion;

                if (this.state.topSelectedDropDownValueState === 'milligram') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            if (this.state.topSelectedDropDownValueState === 'ton' || this.state.bottomSelectedDropDownValueState === 'ton') {

                conversionResult = milligramToTonConversion;

                if (this.state.topSelectedDropDownValueState === 'milligram') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }
        }


        if (resultBoxId === 'result-box-gram') {

            if (this.state.topSelectedDropDownValueState === 'milligram' || this.state.bottomSelectedDropDownValueState === 'milligram') {

                conversionResult = gramToMilligramConversion;

                if (this.state.topSelectedDropDownValueState === 'gram') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            if (this.state.topSelectedDropDownValueState === 'kilogram' || this.state.bottomSelectedDropDownValueState === 'kilogram') {

                conversionResult = gramToKilogramConversion;

                if (this.state.topSelectedDropDownValueState === 'gram') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            if (this.state.topSelectedDropDownValueState === 'ounce' || this.state.bottomSelectedDropDownValueState === 'ounce') {

                conversionResult = gramToOunceConversion;

                if (this.state.topSelectedDropDownValueState === 'gram') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            if (this.state.topSelectedDropDownValueState === 'pound' || this.state.bottomSelectedDropDownValueState === 'pound') {

                conversionResult = gramToPoundConversion;

                if (this.state.topSelectedDropDownValueState === 'gram') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            if (this.state.topSelectedDropDownValueState === 'ton' || this.state.bottomSelectedDropDownValueState === 'ton') {

                conversionResult = gramToTonConversion;

                if (this.state.topSelectedDropDownValueState === 'gram') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }
        }


        if (resultBoxId === 'result-box-kilogram') {

            if (this.state.topSelectedDropDownValueState === 'gram' || this.state.bottomSelectedDropDownValueState === 'gram') {

                conversionResult = kilogramToGramConversion;

                if (this.state.topSelectedDropDownValueState === 'kilogram') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            if (this.state.topSelectedDropDownValueState === 'milligram' || this.state.bottomSelectedDropDownValueState === 'milligram') {

                conversionResult = kilogramToMilligramConversion;

                if (this.state.topSelectedDropDownValueState === 'kilogram') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            if (this.state.topSelectedDropDownValueState === 'ounce' || this.state.bottomSelectedDropDownValueState === 'ounce') {

                conversionResult = kilogramToOunceConversion;

                if (this.state.topSelectedDropDownValueState === 'kilogram') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            if (this.state.topSelectedDropDownValueState === 'pound' || this.state.bottomSelectedDropDownValueState === 'pound') {

                conversionResult = kilogramToPoundConversion;

                if (this.state.topSelectedDropDownValueState === 'kilogram') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            if (this.state.topSelectedDropDownValueState === 'ton' || this.state.bottomSelectedDropDownValueState === 'ton') {

                conversionResult = kilogramToTonConversion;

                if (this.state.topSelectedDropDownValueState === 'kilogram') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }
        }


        if (resultBoxId === 'result-box-ounce') {

            if (this.state.topSelectedDropDownValueState === 'kilogram' || this.state.bottomSelectedDropDownValueState === 'kilogram') {

                conversionResult = ounceToKilogramConversion;

                if (this.state.topSelectedDropDownValueState === 'ounce') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            if (this.state.topSelectedDropDownValueState === 'gram' || this.state.bottomSelectedDropDownValueState === 'gram') {

                conversionResult = ounceToGramConversion;

                if (this.state.topSelectedDropDownValueState === 'ounce') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            if (this.state.topSelectedDropDownValueState === 'milligram' || this.state.bottomSelectedDropDownValueState === 'milligram') {

                conversionResult = ounceToMilligramConversion;

                if (this.state.topSelectedDropDownValueState === 'ounce') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            if (this.state.topSelectedDropDownValueState === 'pound' || this.state.bottomSelectedDropDownValueState === 'pound') {

                conversionResult = ounceToPoundConversion;

                if (this.state.topSelectedDropDownValueState === 'ounce') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }
            
            if (this.state.topSelectedDropDownValueState === 'ton' || this.state.bottomSelectedDropDownValueState === 'ton') {

                conversionResult = ounceToTonConversion;

                if (this.state.topSelectedDropDownValueState === 'ounce') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }
        }


        if (resultBoxId === 'result-box-pound') {

            if (this.state.topSelectedDropDownValueState === 'ounce' || this.state.bottomSelectedDropDownValueState === 'ounce') {

                conversionResult = poundToOunceConversion

                if (this.state.topSelectedDropDownValueState === 'pound') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }
            }

            if (this.state.topSelectedDropDownValueState === 'kilogram' || this.state.bottomSelectedDropDownValueState === 'kilogram') {

                conversionResult = poundToKilogramConversion;

                if (this.state.topSelectedDropDownValueState === 'pound') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }
            }

            if (this.state.topSelectedDropDownValueState === 'gram' || this.state.bottomSelectedDropDownValueState === 'gram') {

                conversionResult = poundToGramConversion;

                if (this.state.topSelectedDropDownValueState === 'pound') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }
            }

            if (this.state.topSelectedDropDownValueState === 'milligram' || this.state.bottomSelectedDropDownValueState === 'milligram') {

                conversionResult = poundToMilligramConversion;

                if (this.state.topSelectedDropDownValueState === 'pound') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }
            }

            if (this.state.topSelectedDropDownValueState === 'ton' || this.state.bottomSelectedDropDownValueState === 'ton') {

                conversionResult = poundToTonConversion;

                if (this.state.topSelectedDropDownValueState === 'pound') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }
            }          
        }


        if (resultBoxId === 'result-box-ton') {

            if (this.state.topSelectedDropDownValueState === 'pound' || this.state.bottomSelectedDropDownValueState === 'pound') {

                conversionResult = tonToPoundConversion;

                if (this.state.topSelectedDropDownValueState === 'ton') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }
            }

            if (this.state.topSelectedDropDownValueState === 'ounce' || this.state.bottomSelectedDropDownValueState === 'ounce') {

                conversionResult = tonToOunceConversion;

                if (this.state.topSelectedDropDownValueState === 'ton') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }
            }

            if (this.state.topSelectedDropDownValueState === 'kilogram' || this.state.bottomSelectedDropDownValueState === 'kilogram') {

                conversionResult = tonToKilogramConversion;

                if (this.state.topSelectedDropDownValueState === 'ton') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }
            }

            if (this.state.topSelectedDropDownValueState === 'gram' || this.state.bottomSelectedDropDownValueState === 'gram') {

                conversionResult = tonToGramConversion;

                if (this.state.topSelectedDropDownValueState === 'ton') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }
            }

            if (this.state.topSelectedDropDownValueState === 'milligram' || this.state.bottomSelectedDropDownValueState === 'milligram') {

                conversionResult = tonToMilligramConversion;

                if (this.state.topSelectedDropDownValueState === 'ton') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }
            }
        }
    }
    

    unitDropDownValueHandler = (event) => {

        unitDropDownId = event.target.id;
        topSelectedUnitDropDownValue = event.target.value;
        bottomSelectedUnitDropDownValue = event.target.value;

        if (unitDropDownId === 'drop-down-1') {
            this.setState({topSelectedDropDownValueState: topSelectedUnitDropDownValue})

            if (topSelectedUnitDropDownValue === this.state.bottomSelectedDropDownValueState) {
                this.setState({resultBoxOneValueState: this.state.resultBoxTwoValueState})
            }

            if (topSelectedUnitDropDownValue === 'milligram') {

                if (this.state.bottomSelectedDropDownValueState === 'gram') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 1000)).toFixed(2)});
                }

                if (this.state.bottomSelectedDropDownValueState === 'kilogram') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 1e+6)).toFixed(2)});
                }

                if (this.state.bottomSelectedDropDownValueState === 'ounce') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 28350)).toFixed(2)});                    
                }

                if (this.state.bottomSelectedDropDownValueState === 'pound') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 453592)).toFixed(2)});                         
                }

                if (this.state.bottomSelectedDropDownValueState === 'ton') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 9.072e+8))});                                             
                }
            }

            if (topSelectedUnitDropDownValue === 'gram') {

                if (this.state.bottomSelectedDropDownValueState === 'milligram') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 1000)).toFixed(2)});
                }

                if (this.state.bottomSelectedDropDownValueState === 'kilogram') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 1000)).toFixed(2)});
                }

                if (this.state.bottomSelectedDropDownValueState === 'ounce') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 28.35)).toFixed(2)});                                        
                }

                if (this.state.bottomSelectedDropDownValueState === 'pound') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 454)).toFixed(2)});                                             
                }

                if (this.state.bottomSelectedDropDownValueState === 'ton') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 1e+6))});                                                                 
                }
            }

            if (topSelectedUnitDropDownValue === 'kilogram') {

                if (this.state.bottomSelectedDropDownValueState === 'gram') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 1000)).toFixed(2)});                                                                                     
                }

                if (this.state.bottomSelectedDropDownValueState === 'milligram') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 1e+6)).toFixed(2)});                                                                 
                }

                if (this.state.bottomSelectedDropDownValueState === 'ounce') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 35.274)).toFixed(2)});                                                                                     
                }

                if (this.state.bottomSelectedDropDownValueState === 'pound') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 2.205)).toFixed(2)});                                                                                                         
                }

                if (this.state.bottomSelectedDropDownValueState === 'ton') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 1000))});                                                                                                                             
                }
            }

            if (topSelectedUnitDropDownValue === 'ounce') {

                if (this.state.bottomSelectedDropDownValueState === 'kilogram') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 35.274)).toFixed(2)});                                                                                                                                                 
                }

                if (this.state.bottomSelectedDropDownValueState === 'gram') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 28.35)).toFixed(2)});                                                                                                                                                 
                }

                if (this.state.bottomSelectedDropDownValueState === 'milligram') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 28350)).toFixed(2)});                                                                                                                                                                     
                }

                if (this.state.bottomSelectedDropDownValueState === 'pound') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 16)).toFixed(2)});                                                                                                                                                                       
                }

                if (this.state.bottomSelectedDropDownValueState === 'ton') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 32000))});                                                                                                                                                                                           
                }
            }

            if (topSelectedUnitDropDownValue === 'pound') {

                if (this.state.bottomSelectedDropDownValueState === 'ounce') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 16)).toFixed(2)});                                                                                                                                                                                                               
                }

                if (this.state.bottomSelectedDropDownValueState === 'kilogram') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 2.205)).toFixed(2)});                                                                                                                                                                                           
                }

                if (this.state.bottomSelectedDropDownValueState === 'gram') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 454)).toFixed(2)});                                                                                                                                                                                                               
                }

                if (this.state.bottomSelectedDropDownValueState === 'milligram') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 453592)).toFixed(2)});                                                                                                                                                                                                               
                }

                if (this.state.bottomSelectedDropDownValueState === 'ton') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 2000))});                                                                                                                                                                                                               
                }
            }

            if (topSelectedUnitDropDownValue === 'ton') {

                if (this.state.bottomSelectedDropDownValueState === 'pound') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 2000)).toFixed(2)});                                                                                                                                                                                                                                   
                }

                if (this.state.bottomSelectedDropDownValueState === 'ounce') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 32000)).toFixed(2)});                                                                                                                                                                                                               
                }

                if (this.state.bottomSelectedDropDownValueState === 'kilogram') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 907)).toFixed(2)});                                                                                                                                                                                                                                   
                }

                if (this.state.bottomSelectedDropDownValueState === 'gram') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 907185)).toFixed(2)});                                                                                                                                                                                                                                   
                }

                if (this.state.bottomSelectedDropDownValueState === 'milligram') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 9.072e+8)).toFixed(2)});                                                                                                                                                                                                                                   
                }
            }
        }


        if (unitDropDownId === 'drop-down-2') {
            this.setState({bottomSelectedDropDownValueState: bottomSelectedUnitDropDownValue})

            if (bottomSelectedUnitDropDownValue === this.state.topSelectedDropDownValueState) {
                this.setState({resultBoxTwoValueState: this.state.resultBoxOneValueState})
            }

            if (bottomSelectedUnitDropDownValue === 'milligram') {

                if (this.state.topSelectedDropDownValueState === 'gram') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 1000)).toFixed(2)});
                }

                if (this.state.topSelectedDropDownValueState === 'kilogram') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 1e+6)).toFixed(2)});
                }

                if (this.state.topSelectedDropDownValueState === 'ounce') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 28350)).toFixed(2)});                    
                }

                if (this.state.topSelectedDropDownValueState === 'pound') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 453592)).toFixed(2)});                         
                }

                if (this.state.topSelectedDropDownValueState === 'ton') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 9.072e+8))});                                             
                }
            }

            if (bottomSelectedUnitDropDownValue === 'gram') {

                if (this.state.topSelectedDropDownValueState === 'milligram') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 1000)).toFixed(2)});
                }

                if (this.state.topSelectedDropDownValueState === 'kilogram') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 1000)).toFixed(2)});
                }

                if (this.state.topSelectedDropDownValueState === 'ounce') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 28.35)).toFixed(2)});                                        
                }

                if (this.state.topSelectedDropDownValueState === 'pound') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 454)).toFixed(2)});                                             
                }

                if (this.state.topSelectedDropDownValueState === 'ton') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 1e+6))});                                                                 
                }
            }

            if (bottomSelectedUnitDropDownValue === 'kilogram') {

                if (this.state.topSelectedDropDownValueState === 'gram') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 1000)).toFixed(2)});                                                                                     
                }

                if (this.state.topSelectedDropDownValueState === 'milligram') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 1e+6)).toFixed(2)});                                                                 
                }

                if (this.state.topSelectedDropDownValueState === 'ounce') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 35.274)).toFixed(2)});                                                                                     
                }

                if (this.state.topSelectedDropDownValueState === 'pound') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 2.205)).toFixed(2)});                                                                                                         
                }

                if (this.state.topSelectedDropDownValueState === 'ton') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 1000))});                                                                                                                             
                }
            }

            if (bottomSelectedUnitDropDownValue === 'ounce') {

                if (this.state.topSelectedDropDownValueState === 'kilogram') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 35.274)).toFixed(2)});                                                                                                                                                 
                }

                if (this.state.topSelectedDropDownValueState === 'gram') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 28.35)).toFixed(2)});                                                                                                                                                 
                }

                if (this.state.topSelectedDropDownValueState === 'milligram') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 28350)).toFixed(2)});                                                                                                                                                                     
                }

                if (this.state.topSelectedDropDownValueState === 'pound') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 16)).toFixed(2)});                                                                                                                                                                       
                }

                if (this.state.topSelectedDropDownValueState === 'ton') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 32000))});                                                                                                                                                                                           
                }
            }

            if (bottomSelectedUnitDropDownValue === 'pound') {

                if (this.state.topSelectedDropDownValueState === 'ounce') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 16)).toFixed(2)});                                                                                                                                                                                                               
                }

                if (this.state.topSelectedDropDownValueState === 'kilogram') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 2.205)).toFixed(2)});                                                                                                                                                                                           
                }

                if (this.state.topSelectedDropDownValueState === 'gram') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 454)).toFixed(2)});                                                                                                                                                                                                               
                }

                if (this.state.topSelectedDropDownValueState === 'milligram') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 453592)).toFixed(2)});                                                                                                                                                                                                               
                }

                if (this.state.topSelectedDropDownValueState === 'ton') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 2000))});                                                                                                                                                                                                               
                }
            }

            if (bottomSelectedUnitDropDownValue === 'ton') {

                if (this.state.topSelectedDropDownValueState === 'pound') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 2000)).toFixed(2)});                                                                                                                                                                                                                                   
                }

                if (this.state.topSelectedDropDownValueState === 'ounce') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 32000)).toFixed(2)});                                                                                                                                                                                                               
                }

                if (this.state.topSelectedDropDownValueState === 'kilogram') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 907)).toFixed(2)});                                                                                                                                                                                                                                   
                }

                if (this.state.topSelectedDropDownValueState === 'gram') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 907185)).toFixed(2)});                                                                                                                                                                                                                                   
                }

                if (this.state.topSelectedDropDownValueState === 'milligram') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 9.072e+8)).toFixed(2)});                                                                                                                                                                                                                                   
                }
            }
        }      
    }


    render() {

        capitalizedTopPlaceholder = this.state.topSelectedDropDownValueState.charAt(0).toUpperCase() + this.state.topSelectedDropDownValueState.slice(1);
        capitalizedBottomPlaceholder = this.state.bottomSelectedDropDownValueState.charAt(0).toUpperCase() + this.state.bottomSelectedDropDownValueState.slice(1);
        
        resultBox1 = (
            <ResultBox
                inputHandler={this.weightConversionHandler}
                conversionValue={this.state.resultBoxOneValueState}
                customID={'result-box-' + this.state.topSelectedDropDownValueState}
                customPlaceholder={'Enter a ' + capitalizedTopPlaceholder + ' Value'}
            /> 
        );
                
        resultBox2 = (
            <ResultBox
                inputHandler={this.weightConversionHandler}
                conversionValue={this.state.resultBoxTwoValueState}
                customID={'result-box-' + this.state.bottomSelectedDropDownValueState}
                customPlaceholder={'Enter a ' + capitalizedBottomPlaceholder + ' Value'}
            /> 
        );

            
        return (
            
            <div className={classes.FromToContainer}>

                <PageTertiaryHeading headingText={'From:'} />

                <DropDownMenuSelect
                    changed={this.unitDropDownValueHandler}
                    id={'drop-down-1'}
                >

                    <DropDownMenuOptions 
                        dropDownListOptions={weightMeasurementUnitsArray}
                    />
                </DropDownMenuSelect>

                {resultBox1}


                <PageTertiaryHeading headingText={'To:'} />

                <DropDownMenuSelect
                    changed={this.unitDropDownValueHandler}
                    defaultValue={weightMeasurementUnitsArray[1].props.value}
                    id={'drop-down-2'}
                >

                    <DropDownMenuOptions 
                        dropDownListOptions={weightMeasurementUnitsArray}
                    />
                </DropDownMenuSelect>
                
                {resultBox2}

            </div>
        )
    }
};

export default FromToWeight;
