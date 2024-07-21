import React, { useState } from 'react';
import ManualNumber from './ManualNumber';
import AutomaticNumber from './AutomaticNumber';

function LottoMain(props) {

    const [showManualNumber, setShowManualNumber] = useState(false);
    const [showAutomaticNumber, setShowAutomaticNumber] = useState(false);

    return (
        <div>
            <div>
                <button
                    type="button"
                    onClick={() => setShowManualNumber(!showManualNumber)}>
                    수동 선택
                </button>
                <span> </span>
                <button
                    type="button"
                    onClick={() => setShowAutomaticNumber(!showAutomaticNumber)}>
                    자동 선택
                </button>
            </div>
            <br/>
            <div>
                {showManualNumber && <ManualNumber/>}
                <br/>
                {showAutomaticNumber && <AutomaticNumber/>}
            </div>
        </div>
    );
}

export default LottoMain;