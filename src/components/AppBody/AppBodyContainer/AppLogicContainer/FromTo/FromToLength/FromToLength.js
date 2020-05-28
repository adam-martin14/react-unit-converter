// CLASS-BASED COMPONENT - STATE MANAGEMENT (STATEFUL COMPONENT)
import React, {Component} from 'react';
import DropDownMenuSelect from '../../../../../UI/DropDownMenu/DropDownMenuSelect/DropDownMenuSelect';
import DropDownMenuOptions from '../../../../../UI/DropDownMenu/DropDownMenuOptions/DropDownMenuOptions';
import ResultBox from '../../../../ResultBox/ResultBox';
import PageTertiaryHeading from '../../../../PageTertiaryHeading/PageTertiaryHeading';
import classes from '../../FromTo/FromTo.css';

var convert = require('convert-units')


const lengthMeasurementUnits = [
    { value: 'centimeter', label: 'Centimeter' },
    { value: 'millimeter', label: 'Millimeter' },
    { value: 'inch', label: 'Inch' },
    { value: 'meter', label: 'Meter' },
    { value: 'foot', label: 'Foot' },
    { value: 'mile', label: 'Mile' },
 ];

const lengthMeasurementUnitsArray = lengthMeasurementUnits.map(ctrl => (
    <option value={ctrl.value}>{ctrl.label}</option>
));

let resultBox1 = '';
let resultBox2 = '';
let resultBoxId = '';
let unitDropDownId = '';
let topSelectedUnitDropDownValue = '';
let bottomSelectedUnitDropDownValue = '';
let inputValue = '';
let millimeterToCentimeterConversion = '';
let millimeterToInchConversion = '';
let millimeterToMeterConversion = '';
let millimeterToFootConversion = '';
let millimeterToMileConversion = '';
let centimeterToMillimeterConversion = '';
let centimeterToInchConversion = '';
let centimeterToMeterConversion = '';
let centimeterToFootConversion = '';
let centimeterToMileConversion = '';
let inchToCentimeterConversion = '';
let inchToMillimeterConversion = '';
let inchToMeterConversion = '';
let inchToFootConversion = '';
let inchToMileConversion = '';
let meterToInchConversion = '';
let meterToCentimeterConversion = '';
let meterToMillimeterConversion = '';
let meterToFootConversion = '';
let meterToMileConversion = '';
let footToMeterConversion = '';
let footToInchConversion = '';
let footToCentimeterConversion = '';
let footToMillimeterConversion = '';
let footToMileConversion = '';
let mileToFootConversion = '';
let mileToMeterConversion = '';
let mileToInchConversion = '';
let mileToCentimeterConversion = '';
let mileToMillimeterConversion = '';
let conversionResult = '';
let capitalizedTopPlaceholder = '';
let capitalizedBottomPlaceholder = '';



class FromToLength extends Component {

    state = { 
        resultBoxOneValueState: '',
        resultBoxTwoValueState: '',
        topSelectedDropDownValueState: 'centimeter',
        bottomSelectedDropDownValueState: 'millimeter'
    }


    lengthConversionHandler = (event) => {

        inputValue = event.target.value;
        resultBoxId = event.target.id;

        millimeterToCentimeterConversion = convert(inputValue).from('mm').to('cm').toFixed(2);
        millimeterToInchConversion = convert(inputValue).from('mm').to('in').toFixed(2);
        millimeterToMeterConversion = convert(inputValue).from('mm').to('m').toFixed(2);
        millimeterToFootConversion = convert(inputValue).from('mm').to('ft').toFixed(2);
        millimeterToMileConversion = convert(inputValue).from('mm').to('mi');

        centimeterToMillimeterConversion = convert(inputValue).from('cm').to('mm').toFixed(2);
        centimeterToInchConversion = convert(inputValue).from('cm').to('in').toFixed(2);
        centimeterToMeterConversion = convert(inputValue).from('cm').to('m').toFixed(2);
        centimeterToFootConversion = convert(inputValue).from('cm').to('ft').toFixed(2);
        centimeterToMileConversion = convert(inputValue).from('cm').to('mi');

        inchToCentimeterConversion = convert(inputValue).from('in').to('cm').toFixed(2);
        inchToMillimeterConversion = convert(inputValue).from('in').to('mm').toFixed(2);
        inchToMeterConversion = convert(inputValue).from('in').to('m').toFixed(2);
        inchToFootConversion = convert(inputValue).from('in').to('ft').toFixed(2);
        inchToMileConversion = convert(inputValue).from('in').to('mi');

        meterToInchConversion = convert(inputValue).from('m').to('in').toFixed(2);
        meterToCentimeterConversion = convert(inputValue).from('m').to('cm').toFixed(2);
        meterToMillimeterConversion = convert(inputValue).from('m').to('mm').toFixed(2);
        meterToFootConversion = convert(inputValue).from('m').to('ft').toFixed(2);
        meterToMileConversion = convert(inputValue).from('m').to('mi');

        footToMeterConversion = convert(inputValue).from('ft').to('m').toFixed(2);
        footToInchConversion = convert(inputValue).from('ft').to('in').toFixed(2);
        footToCentimeterConversion = convert(inputValue).from('ft').to('cm').toFixed(2);
        footToMillimeterConversion = convert(inputValue).from('ft').to('mm').toFixed(2);
        footToMileConversion = convert(inputValue).from('ft').to('mi');

        mileToFootConversion = convert(inputValue).from('mi').to('ft').toFixed(2);
        mileToMeterConversion = convert(inputValue).from('mi').to('m').toFixed(2);
        mileToInchConversion = convert(inputValue).from('mi').to('in').toFixed(2);
        mileToCentimeterConversion = convert(inputValue).from('mi').to('cm').toFixed(2);
        mileToMillimeterConversion = convert(inputValue).from('mi').to('mm').toFixed(2);


        if (this.state.topSelectedDropDownValueState === this.state.bottomSelectedDropDownValueState) {
            this.setState({resultBoxOneValueState: inputValue})
            this.setState({resultBoxTwoValueState: inputValue})
        }

        if (resultBoxId === 'result-box-millimeter') {

            // TOP MM TO BOTTOM CM/ BOTTOM MM TO TOP CM
            if (this.state.topSelectedDropDownValueState === 'centimeter' || this.state.bottomSelectedDropDownValueState === 'centimeter') {

                conversionResult = millimeterToCentimeterConversion;

                if (this.state.topSelectedDropDownValueState === 'millimeter') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }
        
            // TOP MM TO BOTTOM IN/ BOTTOM MM TO TOP IN
            if (this.state.topSelectedDropDownValueState === 'inch' || this.state.bottomSelectedDropDownValueState === 'inch') {

                conversionResult = millimeterToInchConversion;

                if (this.state.topSelectedDropDownValueState === 'millimeter') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            // TOP MM TO BOTTOM M/ BOTTOM MM TO TOP M
            if (this.state.topSelectedDropDownValueState === 'meter' || this.state.bottomSelectedDropDownValueState === 'meter') {

                conversionResult = millimeterToMeterConversion;

                if (this.state.topSelectedDropDownValueState === 'millimeter') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            // TOP MM TO BOTTOM FT/ BOTTOM MM TO TOP FT
            if (this.state.topSelectedDropDownValueState === 'foot' || this.state.bottomSelectedDropDownValueState === 'foot') {

                conversionResult = millimeterToFootConversion;

                if (this.state.topSelectedDropDownValueState === 'millimeter') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            // TOP MM TO BOTTOM MI/ BOTTOM MM TO TOP MI
            if (this.state.topSelectedDropDownValueState === 'mile' || this.state.bottomSelectedDropDownValueState === 'mile') {

                conversionResult = millimeterToMileConversion;

                if (this.state.topSelectedDropDownValueState === 'millimeter') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }
        }


        if (resultBoxId === 'result-box-centimeter') {

            // TOP CM TO BOTTOM MM/ BOTTOM CM TO TOP MM
            if (this.state.topSelectedDropDownValueState === 'millimeter' || this.state.bottomSelectedDropDownValueState === 'millimeter') {

                conversionResult = centimeterToMillimeterConversion;

                if (this.state.topSelectedDropDownValueState === 'centimeter') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            // TOP CM TO BOTTOM IN/ BOTTOM CM TO TOP IN
            if (this.state.topSelectedDropDownValueState === 'inch' || this.state.bottomSelectedDropDownValueState === 'inch') {

                conversionResult = centimeterToInchConversion;

                if (this.state.topSelectedDropDownValueState === 'centimeter') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            // TOP CM TO BOTTOM M/ BOTTOM CM TO TOP M
            if (this.state.topSelectedDropDownValueState === 'meter' || this.state.bottomSelectedDropDownValueState === 'meter') {

                conversionResult = centimeterToMeterConversion;

                if (this.state.topSelectedDropDownValueState === 'centimeter') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            // TOP CM TO BOTTOM FT/ BOTTOM CM TO TOP FT
            if (this.state.topSelectedDropDownValueState === 'foot' || this.state.bottomSelectedDropDownValueState === 'foot') {

                conversionResult = centimeterToFootConversion;

                if (this.state.topSelectedDropDownValueState === 'centimeter') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            // TOP CM TO BOTTOM MI/ BOTTOM CM TO TOP MI
            if (this.state.topSelectedDropDownValueState === 'mile' || this.state.bottomSelectedDropDownValueState === 'mile') {

                conversionResult = centimeterToMileConversion;

                if (this.state.topSelectedDropDownValueState === 'centimeter') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }
        }


        if (resultBoxId === 'result-box-inch') {

            // TOP IN TO BOTTOM CM/ BOTTOM IN TO TOP CM
            if (this.state.topSelectedDropDownValueState === 'centimeter' || this.state.bottomSelectedDropDownValueState === 'centimeter') {

                conversionResult = inchToCentimeterConversion;

                if (this.state.topSelectedDropDownValueState === 'inch') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            // TOP IN TO BOTTOM MM/ BOTTOM IN TO TOP MM
            if (this.state.topSelectedDropDownValueState === 'millimeter' || this.state.bottomSelectedDropDownValueState === 'millimeter') {

                conversionResult = inchToMillimeterConversion;

                if (this.state.topSelectedDropDownValueState === 'inch') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            // TOP IN TO BOTTOM M/ BOTTOM IN TO TOP M
            if (this.state.topSelectedDropDownValueState === 'meter' || this.state.bottomSelectedDropDownValueState === 'meter') {

                conversionResult = inchToMeterConversion;

                if (this.state.topSelectedDropDownValueState === 'inch') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            // TOP IN TO BOTTOM FT/ BOTTOM IN TO TOP FT
            if (this.state.topSelectedDropDownValueState === 'foot' || this.state.bottomSelectedDropDownValueState === 'foot') {

                conversionResult = inchToFootConversion;

                if (this.state.topSelectedDropDownValueState === 'inch') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            // TOP IN TO BOTTOM MI/ BOTTOM IN TO TOP MI
            if (this.state.topSelectedDropDownValueState === 'mile' || this.state.bottomSelectedDropDownValueState === 'mile') {

                conversionResult = inchToMileConversion;

                if (this.state.topSelectedDropDownValueState === 'inch') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }
        }


        if (resultBoxId === 'result-box-meter') {

            // TOP M TO BOTTOM IN/ BOTTOM M TO TOP IN
            if (this.state.topSelectedDropDownValueState === 'inch' || this.state.bottomSelectedDropDownValueState === 'inch') {

                conversionResult = meterToInchConversion;

                if (this.state.topSelectedDropDownValueState === 'meter') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            // TOP M TO BOTTOM CM/ BOTTOM M TO TOP CM
            if (this.state.topSelectedDropDownValueState === 'centimeter' || this.state.bottomSelectedDropDownValueState === 'centimeter') {

                conversionResult = meterToCentimeterConversion;

                if (this.state.topSelectedDropDownValueState === 'meter') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            // TOP M TO BOTTOM MM/ BOTTOM M TO TOP MM
            if (this.state.topSelectedDropDownValueState === 'millimeter' || this.state.bottomSelectedDropDownValueState === 'millimeter') {

                conversionResult = meterToMillimeterConversion;

                if (this.state.topSelectedDropDownValueState === 'meter') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }

            // TOP M TO BOTTOM FT/ BOTTOM M TO TOP FT
            if (this.state.topSelectedDropDownValueState === 'foot' || this.state.bottomSelectedDropDownValueState === 'foot') {

                conversionResult = meterToFootConversion;

                if (this.state.topSelectedDropDownValueState === 'meter') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }
            
            // TOP M TO BOTTOM MI/ BOTTOM M TO TOP MI
            if (this.state.topSelectedDropDownValueState === 'mile' || this.state.bottomSelectedDropDownValueState === 'mile') {

                conversionResult = meterToMileConversion;

                if (this.state.topSelectedDropDownValueState === 'meter') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }      
            }
        }


        if (resultBoxId === 'result-box-foot') {

            // TOP FT TO BOTTOM M/ BOTTOM FT TO TOP M
            if (this.state.topSelectedDropDownValueState === 'meter' || this.state.bottomSelectedDropDownValueState === 'meter') {

                conversionResult = footToMeterConversion;

                if (this.state.topSelectedDropDownValueState === 'foot') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }
            }

            // TOP FT TO BOTTOM IN/ BOTTOM FT TO TOP IN
            if (this.state.topSelectedDropDownValueState === 'inch' || this.state.bottomSelectedDropDownValueState === 'inch') {

                conversionResult = footToInchConversion;

                if (this.state.topSelectedDropDownValueState === 'foot') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }
            }

            // TOP FT TO BOTTOM CM/ BOTTOM FT TO TOP CM
            if (this.state.topSelectedDropDownValueState === 'centimeter' || this.state.bottomSelectedDropDownValueState === 'centimeter') {

                conversionResult = footToCentimeterConversion;

                if (this.state.topSelectedDropDownValueState === 'foot') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }
            }

            // TOP FT TO BOTTOM MM/ BOTTOM FT TO TOP MM
            if (this.state.topSelectedDropDownValueState === 'millimeter' || this.state.bottomSelectedDropDownValueState === 'millimeter') {

                conversionResult = footToMillimeterConversion;

                if (this.state.topSelectedDropDownValueState === 'foot') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }
            }

            // TOP FT TO BOTTOM MI/ BOTTOM FT TO TOP MI
            if (this.state.topSelectedDropDownValueState === 'mile' || this.state.bottomSelectedDropDownValueState === 'mile') {

                conversionResult = footToMileConversion;

                if (this.state.topSelectedDropDownValueState === 'foot') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }
            }          
        }


        if (resultBoxId === 'result-box-mile') {

            // TOP MI TO BOTTOM FT/ BOTTOM MI TO TOP FT
            if (this.state.topSelectedDropDownValueState === 'foot' || this.state.bottomSelectedDropDownValueState === 'foot') {

                conversionResult = mileToFootConversion;

                if (this.state.topSelectedDropDownValueState === 'mile') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }
            }

            // TOP MI TO BOTTOM M/ BOTTOM MI TO TOP M
            if (this.state.topSelectedDropDownValueState === 'meter' || this.state.bottomSelectedDropDownValueState === 'meter') {

                conversionResult = mileToMeterConversion;

                if (this.state.topSelectedDropDownValueState === 'mile') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }
            }

            // TOP MI TO BOTTOM IN/ BOTTOM MI TO TOP IN
            if (this.state.topSelectedDropDownValueState === 'inch' || this.state.bottomSelectedDropDownValueState === 'inch') {

                conversionResult = mileToInchConversion;

                if (this.state.topSelectedDropDownValueState === 'mile') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }
            }

            // TOP MI TO BOTTOM CM/ BOTTOM MI TO TOP CM
            if (this.state.topSelectedDropDownValueState === 'centimeter' || this.state.bottomSelectedDropDownValueState === 'centimeter') {

                conversionResult = mileToCentimeterConversion;

                if (this.state.topSelectedDropDownValueState === 'mile') {
                    this.setState({resultBoxOneValueState: inputValue});
                    this.setState({resultBoxTwoValueState: conversionResult});

                } else {
                    this.setState({resultBoxTwoValueState: inputValue});
                    this.setState({resultBoxOneValueState: conversionResult});
                }
            }

            // TOP MI TO BOTTOM MM/ BOTTOM MI TO TOP MM
            if (this.state.topSelectedDropDownValueState === 'millimeter' || this.state.bottomSelectedDropDownValueState === 'millimeter') {

                conversionResult = mileToMillimeterConversion;

                if (this.state.topSelectedDropDownValueState === 'mile') {
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

        // TOP DROP-DOWN
        if (unitDropDownId === 'drop-down-1') {
            this.setState({topSelectedDropDownValueState: topSelectedUnitDropDownValue})
            console.log('Selected: ' + topSelectedUnitDropDownValue + ' in Box 1');

            if (topSelectedUnitDropDownValue === this.state.bottomSelectedDropDownValueState) {
                this.setState({resultBoxOneValueState: this.state.resultBoxTwoValueState})
            }

            if (topSelectedUnitDropDownValue === 'millimeter') {

                if (this.state.bottomSelectedDropDownValueState === 'centimeter') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 10)).toFixed(2)});
                }

                if (this.state.bottomSelectedDropDownValueState === 'inch') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 25.4)).toFixed(2)});
                }

                if (this.state.bottomSelectedDropDownValueState === 'meter') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 1000)).toFixed(2)});                    
                }

                if (this.state.bottomSelectedDropDownValueState === 'foot') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 305)).toFixed(2)});                         
                }

                if (this.state.bottomSelectedDropDownValueState === 'mile') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 1.609e+6))});                                             
                }
            }

            if (topSelectedUnitDropDownValue === 'centimeter') {

                if (this.state.bottomSelectedDropDownValueState === 'millimeter') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 10)).toFixed(2)});
                }

                if (this.state.bottomSelectedDropDownValueState === 'inch') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 2.54)).toFixed(2)});
                }

                if (this.state.bottomSelectedDropDownValueState === 'meter') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 100)).toFixed(2)});                                        
                }

                if (this.state.bottomSelectedDropDownValueState === 'foot') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 30.48)).toFixed(2)});                                             
                }

                if (this.state.bottomSelectedDropDownValueState === 'mile') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 160934))});                                                                 
                }
            }

            if (topSelectedUnitDropDownValue === 'inch') {

                if (this.state.bottomSelectedDropDownValueState === 'centimeter') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 2.54)).toFixed(2)});                                                                                     
                }

                if (this.state.bottomSelectedDropDownValueState === 'millimeter') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 25.4)).toFixed(2)});                                                                 
                }

                if (this.state.bottomSelectedDropDownValueState === 'meter') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 39.37)).toFixed(2)});                                                                                     
                }

                if (this.state.bottomSelectedDropDownValueState === 'foot') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 12)).toFixed(2)});                                                                                                         
                }

                if (this.state.bottomSelectedDropDownValueState === 'mile') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 63360))});                                                                                                                             
                }
            }

            if (topSelectedUnitDropDownValue === 'meter') {

                if (this.state.bottomSelectedDropDownValueState === 'inch') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 39.37)).toFixed(2)});                                                                                                                                                 
                }

                if (this.state.bottomSelectedDropDownValueState === 'centimeter') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 100)).toFixed(2)});                                                                                                                                                 
                }

                if (this.state.bottomSelectedDropDownValueState === 'millimeter') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 1000)).toFixed(2)});                                                                                                                                                                     
                }

                if (this.state.bottomSelectedDropDownValueState === 'foot') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 3.281)).toFixed(2)});                                                                                                                                                                       
                }

                if (this.state.bottomSelectedDropDownValueState === 'mile') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 1609))});                                                                                                                                                                                           
                }
            }

            if (topSelectedUnitDropDownValue === 'foot') {

                if (this.state.bottomSelectedDropDownValueState === 'meter') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 3.281)).toFixed(2)});                                                                                                                                                                                                               
                }

                if (this.state.bottomSelectedDropDownValueState === 'inch') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 12)).toFixed(2)});                                                                                                                                                                                           
                }

                if (this.state.bottomSelectedDropDownValueState === 'centimeter') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 30.48)).toFixed(2)});                                                                                                                                                                                                               
                }

                if (this.state.bottomSelectedDropDownValueState === 'millimeter') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 305)).toFixed(2)});                                                                                                                                                                                                               
                }

                if (this.state.bottomSelectedDropDownValueState === 'mile') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState * 5280))});                                                                                                                                                                                                               
                }
            }

            if (topSelectedUnitDropDownValue === 'mile') {

                if (this.state.bottomSelectedDropDownValueState === 'foot') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 5280)).toFixed(2)});                                                                                                                                                                                                                                   
                }

                if (this.state.bottomSelectedDropDownValueState === 'meter') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 1609)).toFixed(2)});                                                                                                                                                                                                               
                }

                if (this.state.bottomSelectedDropDownValueState === 'inch') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 63360)).toFixed(2)});                                                                                                                                                                                                                                   
                }

                if (this.state.bottomSelectedDropDownValueState === 'centimeter') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 160934)).toFixed(2)});                                                                                                                                                                                                                                   
                }

                if (this.state.bottomSelectedDropDownValueState === 'millimeter') {
                    this.setState({resultBoxOneValueState: Number((this.state.resultBoxTwoValueState / 1.609e+6)).toFixed(2)});                                                                                                                                                                                                                                   
                }
            }
        }


        // BOTTOM DROP-DOWN
        if (unitDropDownId === 'drop-down-2') {
            this.setState({bottomSelectedDropDownValueState: bottomSelectedUnitDropDownValue})
            console.log('Selected: ' + bottomSelectedUnitDropDownValue + ' in Box 2');

            if (bottomSelectedUnitDropDownValue === this.state.topSelectedDropDownValueState) {
                this.setState({resultBoxTwoValueState: this.state.resultBoxOneValueState})
            }

            if (bottomSelectedUnitDropDownValue === 'millimeter') {

                if (this.state.topSelectedDropDownValueState === 'centimeter') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 10)).toFixed(2)});
                }

                if (this.state.topSelectedDropDownValueState === 'inch') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 25.4)).toFixed(2)});
                }

                if (this.state.topSelectedDropDownValueState === 'meter') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 1000)).toFixed(2)});                    
                }

                if (this.state.topSelectedDropDownValueState === 'foot') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 305)).toFixed(2)});                         
                }

                if (this.state.topSelectedDropDownValueState === 'mile') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 1.609e+6))});                                             
                }
            }

            if (bottomSelectedUnitDropDownValue === 'centimeter') {

                if (this.state.topSelectedDropDownValueState === 'millimeter') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 10)).toFixed(2)});
                }

                if (this.state.topSelectedDropDownValueState === 'inch') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 2.54)).toFixed(2)});
                }

                if (this.state.topSelectedDropDownValueState === 'meter') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 100)).toFixed(2)});                                        
                }

                if (this.state.topSelectedDropDownValueState === 'foot') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 30.48)).toFixed(2)});                                             
                }

                if (this.state.topSelectedDropDownValueState === 'mile') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 160934))});                                                                 
                }
            }

            if (bottomSelectedUnitDropDownValue === 'inch') {

                if (this.state.topSelectedDropDownValueState === 'centimeter') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 2.54)).toFixed(2)});                                                                                     
                }

                if (this.state.topSelectedDropDownValueState === 'millimeter') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 25.4)).toFixed(2)});                                                                 
                }

                if (this.state.topSelectedDropDownValueState === 'meter') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 39.37)).toFixed(2)});                                                                                     
                }

                if (this.state.topSelectedDropDownValueState === 'foot') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 12)).toFixed(2)});                                                                                                         
                }

                if (this.state.topSelectedDropDownValueState === 'mile') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 63360))});                                                                                                                             
                }
            }

            if (bottomSelectedUnitDropDownValue === 'meter') {

                if (this.state.topSelectedDropDownValueState === 'inch') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 39.37)).toFixed(2)});                                                                                                                                                 
                }

                if (this.state.topSelectedDropDownValueState === 'centimeter') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 100)).toFixed(2)});                                                                                                                                                 
                }

                if (this.state.topSelectedDropDownValueState === 'millimeter') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 1000)).toFixed(2)});                                                                                                                                                                     
                }

                if (this.state.topSelectedDropDownValueState === 'foot') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 3.281)).toFixed(2)});                                                                                                                                                                       
                }

                if (this.state.topSelectedDropDownValueState === 'mile') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 1609))});                                                                                                                                                                                           
                }
            }

            if (bottomSelectedUnitDropDownValue === 'foot') {

                if (this.state.topSelectedDropDownValueState === 'meter') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 3.281)).toFixed(2)});                                                                                                                                                                                                               
                }

                if (this.state.topSelectedDropDownValueState === 'inch') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 12)).toFixed(2)});                                                                                                                                                                                           
                }

                if (this.state.topSelectedDropDownValueState === 'centimeter') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 30.48)).toFixed(2)});                                                                                                                                                                                                               
                }

                if (this.state.topSelectedDropDownValueState === 'millimeter') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 305)).toFixed(2)});                                                                                                                                                                                                               
                }

                if (this.state.topSelectedDropDownValueState === 'mile') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState * 5280))});                                                                                                                                                                                                               
                }
            }

            if (bottomSelectedUnitDropDownValue === 'mile') {

                if (this.state.topSelectedDropDownValueState === 'foot') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 5280)).toFixed(2)});                                                                                                                                                                                                                                   
                }

                if (this.state.topSelectedDropDownValueState === 'meter') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 1609)).toFixed(2)});                                                                                                                                                                                                               
                }

                if (this.state.topSelectedDropDownValueState === 'inch') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 63360)).toFixed(2)});                                                                                                                                                                                                                                   
                }

                if (this.state.topSelectedDropDownValueState === 'centimeter') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 160934)).toFixed(2)});                                                                                                                                                                                                                                   
                }

                if (this.state.topSelectedDropDownValueState === 'millimeter') {
                    this.setState({resultBoxTwoValueState: Number((this.state.resultBoxOneValueState / 1.609e+6)).toFixed(2)});                                                                                                                                                                                                                                   
                }
            }
        }    
    }


    render() {

        capitalizedTopPlaceholder = this.state.topSelectedDropDownValueState.charAt(0).toUpperCase() + this.state.topSelectedDropDownValueState.slice(1);
        capitalizedBottomPlaceholder = this.state.bottomSelectedDropDownValueState.charAt(0).toUpperCase() + this.state.bottomSelectedDropDownValueState.slice(1);
        
        resultBox1 = (
            <ResultBox
                inputHandler={this.lengthConversionHandler}
                conversionValue={this.state.resultBoxOneValueState}
                customID={'result-box-' + this.state.topSelectedDropDownValueState}
                customPlaceholder={'Enter a ' + capitalizedTopPlaceholder + ' Value'}
            /> 
        );
                
        resultBox2 = (
            <ResultBox
                inputHandler={this.lengthConversionHandler}
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
                        dropDownListOptions={lengthMeasurementUnitsArray}
                    />
                </DropDownMenuSelect>

                {resultBox1}


                <PageTertiaryHeading headingText={'To:'} />

                <DropDownMenuSelect
                    changed={this.unitDropDownValueHandler}
                    defaultValue={lengthMeasurementUnitsArray[1].props.value}
                    id={'drop-down-2'}
                >

                    <DropDownMenuOptions 
                        dropDownListOptions={lengthMeasurementUnitsArray}
                    />
                </DropDownMenuSelect>
                
                {resultBox2}

            </div>
        )
    }
};

export default FromToLength;