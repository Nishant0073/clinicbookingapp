
import React from "react";



class Appointment extends React.Component {
    render() {
        return(
            <div>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <link rel="alternate" type="application/json+oembed" href="https://www.jotform.com/oembed/?format=json&url=https%3A%2F%2Fform.jotform.com%2F211443324499457" title="oEmbed Form" />
                <link rel="alternate" type="text/xml+oembed" href="https://www.jotform.com/oembed/?format=xml&url=https%3A%2F%2Fform.jotform.com%2F211443324499457" title="oEmbed Form" />
                <meta property="og:title" content="Request an Appointment Form" />
                <meta property="og:url" content="https://form.jotform.com/211443324499457" />
                <meta property="og:description" content="Please click the link to complete this form." />
                <meta name="slack-app-id" content="AHNMASS8M" />
                <link rel="shortcut icon" href="https://cdn.jotfor.ms/favicon.ico" />
                <link rel="canonical" href="https://form.jotform.com/211443324499457" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=2.0, user-scalable=1" />
                <meta name="HandheldFriendly" content="true" />
                <title>Request an Appointment Form</title>
                <link type="text/css" media="print" rel="stylesheet" href="https://cdn.jotfor.ms/css/printForm.css?3.3.25544" />
                <link id="custom-font" type="text/css" rel="stylesheet" href="https://cdn.jotfor.ms/opt/google-fonts/Didact Gothic/fontface.css" />
                <link type="text/css" rel="stylesheet" href="https://cdn.jotfor.ms/themes/CSS/5e6b428acc8c4e222d1beb91.css?themeRevisionID=5f30e2a790832f3e96009402" />
                <link type="text/css" rel="stylesheet" href="https://cdn.jotfor.ms/css/styles/payment/payment_styles.css?3.3.25544" />
                <link type="text/css" rel="stylesheet" href="https://cdn.jotfor.ms/css/styles/payment/payment_feature.css?3.3.25544" />
                <link rel="stylesheet" href="./style.css" type="text/css" media="all" />
                <form className="jotform-form" action="/" method="post" >

                    <div role="main" className="form-all">
                        <ul className="form-section page-section">
                            <li id="cid_3" className="form-input-wide" data-type="control_head">
                                <div className="form-header-group  header-large">
                                    <div className="header-text httal htvam">
                                        <h1 id="header_3" className="form-header" data-component="header">
                                            Request an Appointment
                                        </h1>
                                    </div>
                                </div>
                            </li>
                            <li className="form-line fixed-width jf-required" data-type="control_textbox" id="id_16">
                                <label className="form-label form-label-top form-label-auto" id="label_16" htmlFor="input_16">
                                    Mention Symptoms:
                                    <span className="form-required">
                                        *
                                    </span>
                                </label>
                                <div id="cid_16" className="form-input-wide jf-required" data-layout="half">
                                    <input type="text" id="input_16" name="q16_mentionSymptoms" data-type="input-textbox" className="form-textbox validate[required]" style={{width: 310}} size={310} defaultValue placeholder="Fever, Headache.." data-component="textbox" aria-labelledby="label_16" required />
    </div>
    </li>
    <li className="form-line" data-type="control_radio" id="id_7">
        <label className="form-label form-label-top form-label-auto" id="label_7" htmlFor="input_7"> First Time Visit? </label>
        <div id="cid_7" className="form-input-wide" data-layout="full">
            <div className="form-single-column" role="group" aria-labelledby="label_7" data-component="radio">
                <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_7_0" name="q7_firstTime" defaultValue="Yes" />
                    <label id="label_input_7_0" htmlFor="input_7_0"> Yes </label>
                </span>
                <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_7_1" name="q7_firstTime" defaultValue="No" />
                    <label id="label_input_7_1" htmlFor="input_7_1"> No </label>
                </span>
            </div>
        </div>
    </li>
    <li className="form-line jf-required form-field-hidden" style={{display: 'none'}} data-type="control_number" id="id_18">
        <label className="form-label form-label-top form-label-auto" id="label_18" htmlFor="input_18">
            Enter Case No:
            <span className="form-required">
                *
            </span>
        </label>
        <div id="cid_18" className="form-input-wide jf-required" data-layout="half">
            <input type="number" id="input_18" name="q18_enterCase" data-type="input-number" className=" form-number-input form-textbox validate[required]" style={{width: 310}} size={310} defaultValue={1234} data-component="number" aria-labelledby="label_18" required step="any" />
        </div>
    </li>
    <li className="form-line" data-type="control_appointment" id="id_15">
        <label className="form-label form-label-top" id="label_15" htmlFor="input_15"> Select an Appointment Date </label>
        <div id="cid_15" className="form-input-wide" data-layout="full">
            <div id="input_15" className="appointmentFieldWrapper jfQuestion-fields">
                <div className="appointmentField">
                    <input type="date" id="appointmentdate"/>
                </div>
            </div>
        </div>
    </li>
    <li className="form-line" data-type="control_button" id="id_2">
        <div id="cid_2" className="form-input-wide" data-layout="full">
            <div data-align="center" className="form-buttons-wrapper form-buttons-center   jsTest-button-wrapperField">
                <button id="input_2" type="submit" className="form-submit-button submit-button jf-form-buttons jsTest-submitField" data-component="button" data-content>
                    Submit Form
                </button>
            </div>
        </div>
    </li>
    </ul>
    </div>
    </form>

    </div>

);
}
}

export default Appointment;


