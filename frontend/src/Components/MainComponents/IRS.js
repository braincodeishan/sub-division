import React, { useState, useRef } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import TextField from '@mui/material/TextField';
import IRFinal from '../sub-component/IR/Report/IRFinal';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const IRS = () => {
    var newArray;
    const [page1, setPage1] = useState({
        inspectionDate:"",
        BO: "",
        AO: "",
        HO: "",
        facilityID: "",
        profitCenter: "",
        BOopening: "",
        DLISSP: "",
        DLI: "",
        DLIby: "",
        SubsequentVisit: "",
        MOVisit: ""
    });
    const [page2, setPage2] = useState({
        rom: "1130 HRS",
        dom: "1145 HRS",
        lbc: "1345 HRS",
        dispatch: "1400 HRS",
        MAB_min: "RS 3500",
        MAB_max: "RS 5000",
        PSAB_min: "RS 200",
        PSAB_max: "RS 1000",
        location: "",
        mailArrangement: "सहायक शाखा डाकपाल द्वारा ",
        village: "",
        panchayat: ""
    });
    const [page3, setPage3] = useState([{
        Name: "",
        Designation: "",
        Community: "",
        EmployeeId: "",
        TRCA: "",
        DOB: "",
        DOJ: ""
    },
    {
        Name: "",
        Designation: "",
        Community: "",
        EmployeeId: "",
        TRCA: "",
        DOB: "",
        DOJ: ""
    },
    {
        Name: "",
        Designation: "",
        Community: "",
        EmployeeId: "",
        TRCA: "",
        DOB: "",
        DOJ: ""
    }]);
    const [page4, setPage4] = useState({
        complaintAvailable: true,
        complaintMaintained: true,
        postmarksAvailable: true,
        postmarksMaintained: true,
        stockAvailable: true,
        stockMaintained: true,
        enumerationAvailable: false,
        enumerationMaintained:  false,
        yearlyvaluereturnsAvailable: false,
        yearlyvaluereturnsMaintained:  false,
        errorbookAvailable: true,
        errorbookMaintained: true,
        villagesortinglistAvailable: false,
        villagesortinglistMaintained:  false,
        routelistAvailable: false,
        routelistMaintained:  false

    });
    const [page5, setPage5] = useState({
        mcd: "उपलब्ध नहीं है ",
        imeiNumber: "उपलब्ध नहीं है ",
        kaifa: "उपलब्ध नहीं है ",
        barcode: "उपलब्ध नहीं है ",
        ippbphone: "उपलब्ध नहीं है ",
        solar: "उपलब्ध नहीं है ",
        sim: "उपलब्ध नहीं है "
    });
    const [page6, setPage6] = useState({
        signal: 0,

        articleDeposit: "",
        articleBeyondPrescribedPeriod: "",
        Missent: "",
        VParticle: "",
        noLetterBox: "",
        sp: "",
        rl: "",
        parcel: "",
        emo: "",
        ord: "",
        vpcod: "",

        cash: 0,
        ps: 0,
        rs: 0,
        dtrTallied: true,
        emoPayment: "",


    });
    const [page6DTR, setPage6DTR] = useState([
        {
            date: "",
            boBal: "",
            dtrBal: ""
        },
        {
            date: "",
            boBal: "",
            dtrBal: ""
        },
        {
            date: "",
            boBal: "",
            dtrBal: ""
        },
        {
            date: "",
            boBal: "",
            dtrBal: ""
        },
        {
            date: "",
            boBal: "",
            dtrBal: ""
        },
        {
            date: "",
            boBal: "",
            dtrBal: ""
        }
    ]);
    const [abc, setAbc] = useState(true);
    const [sb26f, setsb26f] = useState([{
        bookNo: "",
        from: "",
        fromdate: "",
        fromamount: "",
        to: "",
        todate: "",
        toamount: ""
    }])
    const [ms87f, setms87f] = useState([{
        from: "",
        fromdate: "",
        fromamount: "",
        to: "",
        todate: "",
        toamount: ""
    }])
    const [sb28f, setsb28f] = useState([{
        bookNo: "",
        from: "",
        fromdate: "",
        fromamount: "",
        to: "",
        todate: "",
        toamount: ""
    }])
    const [plif, setplif] = useState([{
        bookNo: "",
        from: "",
        fromdate: "",
        fromamount: "",
        to: "",
        todate: "",
        toamount: ""
    }])
    const [ssbook, setSSBook] = useState([
        {
            accountNo: "",
            signature: "",
            photograph: ""
        },
        {
            accountNo: "",
            signature: "",
            photograph: ""
        },
        {
            accountNo: "",
            signature: "",
            photograph: ""
        },
        {
            accountNo: "",
            signature: "",
            photograph: ""
        },
        {
            accountNo: "",
            signature: "",
            photograph: ""
        },
        {
            accountNo: "",
            signature: "",
            photograph: ""
        }

    ])
    const [sbrd, setSBRD] = useState([
        {
            sbAccount: "",
            sbDLT: "",
            sbBAT: "",
            rdAccount: "",
            rdDLT: "",
            rdBAT: ""

        },
        {
            sbAccount: "",
            sbDLT: "",
            sbBAT: "",
            rdAccount: "",
            rdDLT: "",
            rdBAT: ""

        },
        {
            sbAccount: "",
            sbDLT: "",
            sbBAT: "",
            rdAccount: "",
            rdDLT: "",
            rdBAT: ""

        },
        {
            sbAccount: "",
            sbDLT: "",
            sbBAT: "",
            rdAccount: "",
            rdDLT: "",
            rdBAT: ""

        },
        {
            sbAccount: "",
            sbDLT: "",
            sbBAT: "",
            rdAccount: "",
            rdDLT: "",
            rdBAT: ""

        },
        {
            sbAccount: "",
            sbDLT: "",
            sbBAT: "",
            rdAccount: "",
            rdDLT: "",
            rdBAT: ""

        },
    ])
    const [ssatd, setSSATD] = useState([
        {
            ssaAccount: "",
            ssaDLT: "",
            ssaBAT: "",
            tdAccount: "",
            tdDLT: "",
            tdBAT: ""

        },
        {
            ssaAccount: "",
            ssaDLT: "",
            ssaBAT: "",
            tdAccount: "",
            tdDLT: "",
            tdBAT: ""

        },
        {
            ssaAccount: "",
            ssaDLT: "",
            ssaBAT: "",
            tdAccount: "",
            tdDLT: "",
            tdBAT: ""

        },
        {
            ssaAccount: "",
            ssaDLT: "",
            ssaBAT: "",
            tdAccount: "",
            tdDLT: "",
            tdBAT: ""

        },
        {
            ssaAccount: "",
            ssaDLT: "",
            ssaBAT: "",
            tdAccount: "",
            tdDLT: "",
            tdBAT: ""

        },
        {
            ssaAccount: "",
            ssaDLT: "",
            ssaBAT: "",
            tdAccount: "",
            tdDLT: "",
            tdBAT: ""

        },
    ])
    const [txn, setTXN] = useState([
        {
            date: "",
            sbd: "",
            sbw: "",
            date2:"",
            rdd: "",
            date3:"",
            tdd: "",
            date4:"",
            ssad: "",
            
        },
        {
            date: "",
            sbd: "",
            sbw: "",
            date2:"",
            rdd: "",
            date3:"",
            tdd: "",
            date4:"",
            ssad: "",

        },
        {
            date: "",
            sbd: "",
            sbw: "",
            date2:"",
            rdd: "",
            date3:"",
            tdd: "",
            date4:"",
            ssad: "",

        },
        {
            date: "",
            sbd: "",
            sbw: "",
            date2:"",
            rdd: "",
            date3:"",
            tdd: "",
            date4:"",
            ssad: "",

        }

    ])
    const [plipass, setplipass] = useState([
        {
            policyNo: "",
            dlc: "",
            premium: ""
        },
        {
            policyNo: "",
            dlc: "",
            premium: ""
        },
        {
            policyNo: "",
            dlc: "",
            premium: ""
        },
        {
            policyNo: "",
            dlc: "",
            premium: ""
        },
        {
            policyNo: "",
            dlc: "",
            premium: ""
        },
    ])
    const [pli, setpli] = useState([
        {
            date1: "",
            amount1: "",
            date2: "",
            amount2: "",
            date3: "",
            amount3: ""
        },
        {
            date1: "",
            amount1: "",
            date2: "",
            amount2: "",
            date3: "",
            amount3: ""
        },
        {
            date1: "",
            amount1: "",
            date2: "",
            amount2: "",
            date3: "",
            amount3: ""
        }
    ])

    const [page6Selects, setPage6Selects] = useState({
        solarAvailable: false,
        solarInstallationReport: false,
        solarworking: false,
        dtr: false,
        rollout: false,
    })

    const updateArrayState = (e, index, changeState) => {
        changeState((prev) => {
            return prev.map((item, i) => {
                if (index === i) {
                    return { ...item, [e.target.name]: e.target.value };
                } else {
                    return item;
                }
            })
        });
    };


    const updateTextbox = (e, changeState) => {
        changeState((prev)=>{
            return {...prev,[e.target.name]:e.target.value}
        })
        
    }

    const updateCheckBox = (e,changeState)=>{
        changeState((prev)=>{
            return {...prev, [e.target.name]:e.target.checked}
        })
    }

    return (
        <div className='container pageCenter'>
            {abc ? <div>

                {/* <IRPage1 /> */}


                <div style={{ width: '70%' }}>
                    <table className='table'>
                        <tr>
                            <th>Information</th>
                            <th>Details</th>
                        </tr>
                        <tr>
                            <td><p className='Details'>Inspection date</p></td>
                            <td><TextField id="standard-basic" label="Inspection date" variant="standard" name='inspectionDate' defaultValue={page1.inspectionDate}
                                onBlur={(e) => updateTextbox(e,  setPage1)}

                            /></td>
                            </tr>
                        <tr>
                            <td><p className='Details'>Name of The BO</p></td>
                            <td><TextField id="standard-basic" label="BO Name" variant="standard" name='BO' defaultValue={page1.BO}
                                onBlur={(e) => updateTextbox(e,  setPage1)}

                            /></td>
                        </tr><tr>
                            <td><p className='Details'>Name of The AO</p></td>
                            <td><TextField id="standard-basic" label="AO Name" variant="standard" name='AO' defaultValue={page1.AO}
                                onBlur={(e) => updateTextbox(e,  setPage1)}
                            /></td>
                        </tr><tr>
                            <td><p className='Details'>Name of The HO</p></td>
                            <td><TextField id="standard-basic" label="HO Name" variant="standard" name='HO' defaultValue={page1.HO}
                                onBlur={(e) => updateTextbox(e,  setPage1)}
                            /></td>
                        </tr><tr>
                            <td><p className='Details'>Facility ID</p></td>
                            <td><TextField id="standard-basic" label="Facility ID" variant="standard" defaultValue={page1.facilityID}
                                name='facilityID'
                                onBlur={(e) => updateTextbox(e,  setPage1)}
                            /></td>
                        </tr><tr>
                            <td><p className='Details'>Profit/Cost Center</p></td>
                            <td><TextField id="standard-basic" label="Profit Center" variant="standard" defaultValue={page1.profitCenter}
                                name='profitCenter'
                                onBlur={(e) => updateTextbox(e,  setPage1)} /></td>
                        </tr><tr>
                            <td><p className='Details'>Date of Opening of BO</p></td>
                            <td><TextField id="standard-basic" label="BO Opening Date" variant="standard" defaultValue={page1.BOopening}
                                name='BOopening'
                                onBlur={(e) => updateTextbox(e,  setPage1)}
                            /></td>
                        </tr><tr>
                            <td><p className='Details'>Date of Last inspection by SSPOs/SPOs</p></td>
                            <td><TextField id="standard-basic" label="DLI of SSPOs" variant="standard" defaultValue={page1.DLISSP}
                                name='DLISSP'
                                onBlur={(e) => updateTextbox(e,  setPage1)}
                            /></td>
                        </tr><tr>
                            <td><p className='Details'>Date of Last Inspection</p></td>
                            <td><TextField id="standard-basic" label="DLI" variant="standard" name='DLI' defaultValue={page1.DLI}
                                onBlur={(e) => updateTextbox(e,  setPage1)}
                            /></td>
                        </tr><tr>
                        </tr><tr>
                            <td><p className='Details'>Last Inspected By</p></td>
                            <td><TextField id="standard-basic" label="Inspected By" variant="standard" defaultValue={page1.DLIby}
                                name='DLIby'
                                onBlur={(e) => updateTextbox(e,  setPage1)}

                            /></td>
                        </tr><tr>
                        </tr><tr>
                            <td><p className='Details'>Date of Subsequential Visits</p></td>
                            <td><TextField id="standard-basic" label="Subsequential Visit" variant="standard" defaultValue={page1.SubsequentVisit}
                                name='SubsequentVisit'
                                onBlur={(e) => updateTextbox(e,  setPage1)} /></td>
                        </tr><tr>
                        </tr><tr>
                            <td><p className='Details'>Date of Visits by Mail Overseer</p></td>
                            <td><TextField id="standard-basic" label="Mail Overseer Visit" variant="standard" defaultValue={page1.MOVisit}
                                name='MOVisit'
                                onBlur={(e) => updateTextbox(e,  setPage1)} /></td>
                        </tr>
                    </table>
                </div>



                {/* <IRPage2 /> */}
                <div style={{ width: '70%' }}>
                    <table className='table'>
                        <tr>
                            <th>Information</th>
                            <th colSpan="2">Details</th>
                        </tr>
                        <tr>
                            <td><p className='Details'>Receipt of Mail</p></td>
                            <td colSpan="2"><TextField id="standard-basic" variant="standard" 
                                name='rom' 
                                onBlur={(e) => updateTextbox(e,  setPage2)} defaultValue={page2.rom} /></td>
                        </tr>
                        <tr>
                            <td><p className='Details'>Delivery of Mail</p></td>
                            <td colSpan="2"><TextField id="standard-basic" variant="standard"
                                name='dom'
                                onBlur={(e) => updateTextbox(e,  setPage2)} defaultValue={page2.dom} /></td>
                        </tr>
                        <tr>
                            <td><p className='Details'>LB Clearance</p></td>
                            <td colSpan="2"><TextField id="standard-basic" variant="standard" name='lbc'
                                onBlur={(e) => updateTextbox(e,  setPage2)} defaultValue={page2.lbc} /></td>
                        </tr>
                        <tr>
                            <td><p className='Details'>Despatch of Mails</p></td>
                            <td colSpan="2"><TextField id="standard-basic" variant="standard" name='dispatch'
                                onBlur={(e) => updateTextbox(e,  setPage2)} defaultValue={page2.dispatch} /></td>
                        </tr>
                        <tr>
                            <td><p className='Details'>Authorised Balance</p></td>
                            <td><TextField id="standard-basic" variant="standard" name='MAB_min'
                                onBlur={(e) => updateTextbox(e,  setPage2)} defaultValue={page2.MAB_min} /></td>
                            <td><TextField id="standard-basic" variant="standard" name='MAB_max'
                                onBlur={(e) => updateTextbox(e,  setPage2)} defaultValue={page2.MAB_max} /></td>
                        </tr>
                        <tr>
                            <td><p className='Details'>Postage Authorised Balance</p></td>
                            <td><TextField id="standard-basic" variant="standard" name='PSAB_min'
                                onBlur={(e) => updateTextbox(e,  setPage2)} defaultValue={page2.PSAB_min} /></td>
                            <td><TextField id="standard-basic" variant="standard" name='PSAB_max'
                                onBlur={(e) => updateTextbox(e,  setPage2)} defaultValue={page2.PSAB_max} /></td>
                        </tr>
                        <tr>
                            <td><p className='Details'>Location Of BO</p></td>
                            <td colSpan="2"><TextField id="standard-basic" label="BO Location" variant="standard" name='location' defaultValue={page2.location}
                                onBlur={(e) => updateTextbox(e,  setPage2)} /></td>
                        </tr>
                        <tr>
                            <td><p className='Details'>Villages Served</p></td>
                            <td colSpan="2"><TextField id="standard-basic" label="Villages Details" variant="standard" name='village' defaultValue={page2.village}
                                onBlur={(e) => updateTextbox(e,  setPage2)} /></td> 
                        </tr>
                        <tr>
                            <td><p className='Details'>Panchayat Headquarters</p></td>
                            <td colSpan="2"><TextField id="standard-basic" label="Panchayat HQ" variant="standard" name='panchayat' defaultValue={page2.panchayat}
                                onBlur={(e) => updateTextbox(e,  setPage2)} /></td>
                        </tr>
                        <tr>
                            <td><p className='Details'>Mail Arrangement</p></td>
                            <td colSpan="2"><TextField id="standard-basic" variant="standard" name='mailArrangement' 
                                onBlur={(e) => updateTextbox(e,  setPage2)} defaultValue={page2.mailArrangement} /></td>
                        </tr>
                    </table>
                </div>


                {/* <IRPage3 /> */}
                <table className='table'>
                    <tr>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Community</th>
                        <th>Employee Id</th>
                        <th>TRCA</th>
                        <th>Date of Birth</th>
                        <th>Date of Joining</th>

                    </tr>

                    {page3.map((data, index) => {
                        return <tr key={index}>
                            <td><TextField id="standard-basic" variant="standard" defaultValue={data.Name}
                                name='Name'
                                onBlur={(e) => updateArrayState(e, index,  setPage3)} /></td>
                            <td><TextField id="standard-basic" placeholder='GDSBPM' variant="standard" defaultValue={data.Designation}
                                name='Designation'
                                onBlur={(e) => updateArrayState(e, index,  setPage3)} /></td>
                            <td><TextField id="standard-basic" variant="standard"  defaultValue={data.Community}
                                name='Community'
                                onBlur={(e) => updateArrayState(e, index,  setPage3)} /></td>
                            <td><TextField id="standard-basic" variant="standard" defaultValue={data.EmployeeId}
                                name='EmployeeId'
                                onBlur={(e) => updateArrayState(e, index,  setPage3)} /></td>
                            <td><TextField id="standard-basic" variant="standard" defaultValue={data.TRCA}
                                name='TRCA'
                                onBlur={(e) => updateArrayState(e, index,  setPage3)} /></td>
                            <td><TextField id="standard-basic" variant="standard" defaultValue={data.DOB}
                                name='DOB'
                                onBlur={(e) => updateArrayState(e, index,  setPage3)} /></td>
                            <td><TextField id="standard-basic" variant="standard" defaultValue={data.DOJ}
                                name='DOJ'
                                onBlur={(e) => updateArrayState(e, index,  setPage3)} /></td>

                        </tr>
                    })}



                </table>


                {/* <IRPage4 /> */}
                <div style={{ width: '70%' }}>
                    <table className='table'>
                        <tr>
                            <th>Name of the Record</th>
                            <th>Remarks</th>
                        </tr>
                        <tr>
                            <td>Complaint and Suggestion Book</td>
                            <td><Checkbox label="Available" defaultChecked
                                name='complaintAvailable'
                                onChange={(e) => {updateCheckBox(e,setPage4)}} />
                                <>Available in BO </>

                                <Checkbox label="Maintained" defaultChecked
                                    name='complaintMaintained'
                                    onChange={(e) => {updateCheckBox(e,setPage4)}} /><>Maintained the document correctly</></td>
                        </tr>
                        <tr>
                            <td>Book of Postmarks</td>
                            <td><Checkbox label="Available" defaultChecked name='postmarksAvailable'
                                onChange={(e) => {updateCheckBox(e,setPage4)}} /><>Available in BO </>
                                <Checkbox label="Maintained" defaultChecked name='postmarksMaintained'
                                onChange={(e) => {updateCheckBox(e,setPage4)}} /><>Maintained the document correctly</></td>
                        </tr>
                        <tr>
                            <td>Stock Book</td>
                            <td><Checkbox label="Available" defaultChecked name='stockAvailable'
                                onChange={(e) => {updateCheckBox(e,setPage4)}} /><>Available in BO </>
                                <Checkbox label="Maintained" defaultChecked name='stockMaintained'
                                onChange={(e) => {updateCheckBox(e,setPage4)}} /><>Maintained the document correctly</></td>
                        </tr>
                        <tr>
                            <td>Half Yearly Enumeration</td>
                            <td><Checkbox label="Available" name='enumerationAvailable'
                                onChange={(e) => {updateCheckBox(e,setPage4)}} /><>Available in BO </>
                                <Checkbox label="Maintained" name='enumerationMaintained'
                                onChange={(e) => {updateCheckBox(e,setPage4)}} /><>Maintained the document correctly</></td>
                        </tr>
                        <tr>
                            <td>Yearly Value returns</td>
                            <td><Checkbox label="Available" name='yearlyvaluereturnsAvailable'
                                onChange={(e) => {updateCheckBox(e,setPage4)}} /><>Available in BO </>
                                <Checkbox label="Maintained" name='yearlyvaluereturnsMaintained'
                                onChange={(e) => {updateCheckBox(e,setPage4)}} /><>Maintained the document correctly</></td>
                        </tr>
                        <tr>
                            <td>Error Book</td>
                            <td><Checkbox label="Available" defaultChecked name='errorbookAvailable'
                                onChange={(e) => {updateCheckBox(e,setPage4)}} /><>Available in BO </>
                                <Checkbox label="Maintained" defaultChecked name='errorbookMaintained'
                                onChange={(e) => {updateCheckBox(e,setPage4)}} /><>Maintained the document correctly</></td>
                        </tr>
                        <tr>
                            <td>Village Sorting List</td>
                            <td><Checkbox label="Available" name='villagesortinglistAvailable'
                                onChange={(e) => {updateCheckBox(e,setPage4)}} /><>Available in BO </>
                                <Checkbox label="Maintained" name='villagesortinglistMaintained'
                                onChange={(e) => {updateCheckBox(e,setPage4)}} /><>Maintained the document correctly</></td>
                        </tr>
                        <tr>
                            <td>Route list and Beat Map</td>
                            <td><Checkbox label="Available" name='routelistAvailable'
                                onChange={(e) => {updateCheckBox(e,setPage4)}} /><>Available in BO </>
                                <Checkbox label="Maintained" name='routelistMaintained'
                                onChange={(e) => {updateCheckBox(e,setPage4)}} /><>Maintained the document correctly</></td>
                        </tr>
                    </table>
                </div>


                {/* <IRPage5 /> */}
                <div style={{ width: '70%' }}>
                    <table className='table'>
                        <tr>
                            <th>Name of the Record</th>
                            <th>Remarks</th>
                        </tr>
                        <tr>
                            <td>Main Computing Device (MCD)</td>
                            <td><TextField id="standard-basic" variant="standard" defaultValue={page5.mcd}
                                name='mcd'
                                onBlur={(e) => updateTextbox(e,  setPage5)}
                            /></td>
                        </tr>
                        <tr>
                            <td>IMEI Number of MCD</td>
                            <td><TextField id="standard-basic" variant="standard" defaultValue={page5.imeiNumber}
                                name='imeiNumber'
                                onBlur={(e) => updateTextbox(e,  setPage5)}
                            /></td>
                        </tr>
                        <tr>
                            <td>Kaifya/Sunyard Pin Pad (P-90)</td> 
                            <td><TextField id="standard-basic" variant="standard" defaultValue={page5.kaifa}
                                name='kaifa'
                                onBlur={(e) => updateTextbox(e,  setPage5)}
                            /></td>
                        </tr>
                        <tr>
                            <td>Barcode Scanner</td>
                            <td><TextField id="standard-basic" variant="standard" defaultValue={page5.barcode}
                                name='barcode'
                                onBlur={(e) => updateTextbox(e,  setPage5)}
                            /></td>
                        </tr>
                        <tr>
                            <td>IPPB Smart phone supplied to the BPM / ABPM</td>
                            <td><TextField id="standard-basic" variant="standard" defaultValue={page5.ippbphone}
                                name='ippbphone'
                                onBlur={(e) => updateTextbox(e,  setPage5)}
                            /></td>
                        </tr>
                        <tr>
                            <td>Solar UPS</td>
                            <td><TextField id="standard-basic" variant="standard" defaultValue={page5.solar}
                                name='solar'
                                onBlur={(e) => updateTextbox(e,  setPage5)}
                            /></td>
                        </tr>
                        <tr>
                            <td>Type of the NSP SIM supplied and activated in the Device</td>
                            <td><TextField id="standard-basic" variant="standard" defaultValue={page5.sim}
                                name='sim'
                                onBlur={(e) => updateTextbox(e,  setPage5)}
                            /></td>
                        </tr>

                    </table>
                </div>



                {/* <IRPage6 /> */}
                <div style={{ width: '70%' }}>
                    <table className='table'>
                        <tr>
                            <td>Signal Strength</td>
                            <td><TextField id="standard-basic" variant="standard"  defaultValue={page6.signal}
                            name='signal'
                            onBlur={(e) => updateTextbox(e,  setPage6)} /></td>
                        </tr>
                        <tr>
                            <td>Solar Panel Available</td>
                            <td>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name='solarAvailable'
                                    value={page6Selects.solarAvailable}
                                    defaultValue={false}
                                    onChange={(e) => {
                                        setPage6Selects((prev) => {
                                            return { ...prev, [e.target.name]: e.target.value }
                                        })

                                    }}
                                >
                                    <MenuItem value={true}>Available</MenuItem>
                                    <MenuItem value={false}>Not Available</MenuItem>
                                </Select>

                            </td>
                        </tr>
                        <tr>
                            <td>Solar Panel Installation Report</td>
                            <td><Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name='solarInstallationReport'
                                value={page6Selects.solarInstallationReport}
                                defaultValue={false}
                                onChange={(e) => {
                                    setPage6Selects((prev) => {
                                        return { ...prev, [e.target.name]: e.target.value }
                                    })

                                }}
                            >
                                <MenuItem value={true}>Available</MenuItem>
                                <MenuItem value={false}>Not Available</MenuItem>
                            </Select>

                            </td>
                        </tr>
                        <tr>
                            <td>Solar Panel And UPS Working</td>
                            <td><Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name='solarworking'
                                value={page6Selects.solarworking}
                                defaultValue={false}
                                onChange={(e) => {
                                    setPage6Selects((prev) => {
                                        return { ...prev, [e.target.name]: e.target.value }
                                    })

                                }}
                            >

                                <MenuItem value={true}>Working</MenuItem>
                                <MenuItem value={false}>Not Working</MenuItem>
                            </Select>
                            </td>
                        </tr>

                        <tr>
                            <td>DTR sent daily to BO</td>
                            <td><Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name='dtr'
                                value={page6Selects.dtr}
                                defaultValue={false}
                                onChange={(e) => {
                                    setPage6Selects((prev) => {
                                        return { ...prev, [e.target.name]: e.target.value }
                                    })

                                }}
                            >
                                <MenuItem value={true}>Yes</MenuItem>
                                <MenuItem value={false}>No</MenuItem>
                            </Select>
                            </td>
                        </tr>
                        <tr>
                            <td>Device Roll Out?</td>
                            <td><Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name='rollout'
                                value={page6Selects.rollout}
                                defaultValue={false}
                                onChange={(e) => {
                                    setPage6Selects((prev) => {
                                        return { ...prev, [e.target.name]: e.target.value }
                                    })

                                }}
                            >
                                <MenuItem value={true}>Yes</MenuItem>
                                <MenuItem value={false}>No</MenuItem>
                            </Select>
                            </td>
                        </tr>
                        <tr>
                            <td>Article in deposit</td>
                            <td><TextField id="standard-basic" variant="standard" defaultValue={page6.articleDeposit}
                            name='articleDeposit'
                            onBlur={(e) => updateTextbox(e,  setPage6)} /></td>
                        </tr>
                        <tr>
                            <td>Article Beyond prescribed period</td>
                            <td><TextField id="standard-basic" variant="standard" defaultValue={page6.articleBeyondPrescribedPeriod}
                            name='articleBeyondPrescribedPeriod'
                            onBlur={(e) => updateTextbox(e,  setPage6)} /></td>
                        </tr>
                        <tr>
                            <td>Missent Article</td>
                            <td><TextField id="standard-basic" variant="standard" defaultValue={page6.Missent}
                            name='Missent'
                            onBlur={(e) => updateTextbox(e,  setPage6)} /></td>
                        </tr>
                        <tr>
                            <td>VP Article since DLI if any</td>
                            <td><TextField id="standard-basic" variant="standard" defaultValue={page6.VParticle}
                            name='VParticle'
                            onBlur={(e) => updateTextbox(e,  setPage6)} /></td>
                        </tr>
                        <tr>
                            <td>Number of Letterboxes</td>
                            <td><TextField id="standard-basic" variant="standard" defaultValue={page6.noLetterBox}
                            name='noLetterBox'
                            onBlur={(e) => updateTextbox(e,  setPage6)} /></td>
                        </tr>
                        <tr>
                            <td>Number of EMO Payments in year</td>
                            <td><TextField id="standard-basic" variant="standard" defaultValue={page6.emoPayment}
                            name='emoPayment'
                            onBlur={(e) => updateTextbox(e,  setPage6)} /></td>
                        </tr>



                    </table>
                    <table className='table'>
                        <tr>
                            <td>Articles in bag on Inspection day</td>
                            <td><TextField id="standard-basic" label='SP' variant="standard"  defaultValue={page6.sp}
                            name='sp'
                            onBlur={(e) => updateTextbox(e,  setPage6)} /></td>
                            <td><TextField id="standard-basic" label='RL' variant="standard" defaultValue={page6.rl}
                            name='rl'
                            onBlur={(e) => updateTextbox(e,  setPage6)} /></td>
                            <td><TextField id="standard-basic" label='PARCEL' variant="standard" defaultValue={page6.parcel}
                            name='parcel'
                            onBlur={(e) => updateTextbox(e,  setPage6)} /></td>
                            <td><TextField id="standard-basic" label='EMO' variant="standard" defaultValue={page6.emo}
                            name='emo'
                            onBlur={(e) => updateTextbox(e,  setPage6)} /></td>
                            <td><TextField id="standard-basic" label='ORD' variant="standard" defaultValue={page6.ord}
                            name='ord'
                            onBlur={(e) => updateTextbox(e,  setPage6)} /></td>
                            <td><TextField id="standard-basic" label='VP/COD' variant="standard" defaultValue={page6.vpcod}
                            name='vpcod'
                            onBlur={(e) => updateTextbox(e,  setPage6)} /></td>
                        </tr>
                    </table>
                    <table className='table'>
                        <tr>
                            <th>Cash<Checkbox label="Available" defaultChecked name='dtrTallied' defaultValue={page6.dtrTallied}
                                onChange={(e) => {updateCheckBox(e,setPage6)}} /><>DTR Tallied </></th>
                            <th>Postage Stamp</th>
                            <th>Revenue Stamp</th>
                        </tr>
                        <tr>
                            <td><TextField id="standard-basic" label='CASH' variant="standard"  defaultValue={page6.cash}
                            name='cash'
                            onBlur={(e) => updateTextbox(e,  setPage6)} /></td>
                            <td><TextField id="standard-basic" label='PS' variant="standard" defaultValue={page6.ps}
                            name='ps'
                            onBlur={(e) => updateTextbox(e,  setPage6)} /></td>
                            <td><TextField id="standard-basic" label='RS' variant="standard" defaultValue={page6.rs}
                            name='rs'
                            onBlur={(e) => updateTextbox(e,  setPage6)} /></td>
                        </tr>
                    </table>
                    <table className='table'>
                        <tr>
                            <th>Date</th>
                            <th>Balance in BO</th>
                            <th>DTR Balance</th>
                        </tr>
                        {page6DTR.map((data, index) => {
                            return <><tr>

                                <td><TextField id="standard-basic" label='Date' variant="standard" name="date" defaultValue={page6.date}
                                    onBlur={(e) => updateArrayState(e, index,  setPage6DTR)} /></td>
                                <td><TextField id="standard-basic" label='BO Summary' variant="standard" name="boBal" defaultValue={page6.boBal} onBlur={(e) => updateArrayState(e, index,  setPage6DTR)} /></td>
                                <td><TextField id="standard-basic" label='DTR' variant="standard" name="dtrBal" defaultValue={page6.dtrBal} onBlur={(e) => updateArrayState(e, index,  setPage6DTR)} /></td>
                            </tr></>
                        })}

                    </table>
                </div>


                {/* <IRPage7 /> */}
                <div style={{ width: '100%' }}>

                    {/* ------------------------------sb26 data----------------------------- */}
                    <div>
                        <div className='pageCenter'>
                            <RemoveCircleIcon
                                onClick={() => {
                                    setsb26f((prev) =>
                                        prev.filter((data, index) => { return index !== prev.length - 1 })
                                    )
                                }}
                                className='cursorPointer'
                            />
                        </div>
                        <table className='table'>

                            {
                                sb26f.map((data, index) => {
                                    return (<tr key={index}>

                                        <td>SB26</td>
                                        <td><TextField id="standard-basic" label='BOOK NUMBER' variant="standard" name='bookNo'  defaultValue={data.bookNo} onBlur={(e) => updateArrayState(e, index,  setsb26f)} /></td>
                                        <td><TextField id="standard-basic" label='from RECEIPT NO' variant="standard" name='from'  defaultValue={data.from} onBlur={(e) => updateArrayState(e, index,  setsb26f)} /></td>
                                        <td><TextField id="standard-basic" label='DATE' variant="standard" name='fromdate'  defaultValue={data.fromdate} onBlur={(e) => updateArrayState(e, index,  setsb26f)} /></td>
                                        <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='fromamount'  defaultValue={data.fromamount} onBlur={(e) => updateArrayState(e, index,  setsb26f)} /></td>
                                        <td><TextField id="standard-basic" label='to RECEIPT NO' variant="standard" name='to' defaultValue={data.to}  onBlur={(e) => updateArrayState(e, index,  setsb26f)} /></td>
                                        <td><TextField id="standard-basic" label='DATE' variant="standard" name='todate' defaultValue={data.todate}  onBlur={(e) => updateArrayState(e, index,  setsb26f)} /></td>
                                        <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='toamount' defaultValue={data.toamount}  onBlur={(e) => updateArrayState(e, index,  setsb26f)} /></td>
                                    </tr>)

                                })
                            }

                        </table>
                        <div className='pageCenter'>
                            <AddCircleIcon
                                onClick={() => {
                                    setsb26f([...sb26f, {
                                        bookNo: "",
                                        from: "",
                                        fromdate: "",
                                        fromamount: "",
                                        to: "",
                                        todate: "",
                                        toamount: ""
                                    }])
                                }}
                                className='cursorPointer'
                            />
                        </div>
                    </div>

                    {/* ------------------------------sb28 data----------------------------- */}
                    <div>
                        <div className='pageCenter'>
                            <RemoveCircleIcon
                                onClick={() => {
                                    setsb28f((prev) =>
                                        prev.filter((data, index) => { return index !== prev.length - 1 })
                                    )
                                }}
                                className='cursorPointer'
                            />
                        </div>
                        <table className='table'>

                            {
                                sb28f.map((data, index) => {
                                    return (<tr key={index}>

                                        <td>SB28</td>
                                        <td><TextField id="standard-basic" label='BOOK NUMBER' variant="standard" name='bookNo'  defaultValue={data.bookNo} onBlur={(e) => updateArrayState(e, index,  setsb28f)} /></td>
                                        <td><TextField id="standard-basic" label='from RECEIPT NO' variant="standard" name='from'  defaultValue={data.from} onBlur={(e) => updateArrayState(e, index,  setsb28f)} /></td>
                                        <td><TextField id="standard-basic" label='DATE' variant="standard" name='fromdate'  defaultValue={data.fromdate} onBlur={(e) => updateArrayState(e, index,  setsb28f)} /></td>
                                        <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='fromamount'  defaultValue={data.fromamount} onBlur={(e) => updateArrayState(e, index,  setsb28f)} /></td>
                                        <td><TextField id="standard-basic" label='to RECEIPT NO' variant="standard" name='to'  defaultValue={data.to} onBlur={(e) => updateArrayState(e, index,  setsb28f)} /></td>
                                        <td><TextField id="standard-basic" label='DATE' variant="standard" name='todate'  defaultValue={data.todate} onBlur={(e) => updateArrayState(e, index,  setsb28f)} /></td>
                                        <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='toamount' defaultValue={data.toamount}  onBlur={(e) => updateArrayState(e, index,  setsb28f)} /></td>
                                    </tr>)

                                })
                            }

                        </table>
                        <div className='pageCenter'>
                            <AddCircleIcon
                                onClick={() => {
                                    setsb28f([...sb28f, {
                                        bookNo: "",
                                        from: "",
                                        fromdate: "",
                                        fromamount: "",
                                        to: "",
                                        todate: "",
                                        toamount: ""
                                    }])
                                }}
                                className='cursorPointer'
                            />
                        </div>
                    </div>

                    {/* ------------------------------pli/rpli data----------------------------- */}
                    <div>
                        <div className='pageCenter'>
                            <RemoveCircleIcon
                                onClick={() => {
                                    setplif((prev) =>
                                        prev.filter((data, index) => { return index !== prev.length - 1 })
                                    )
                                }}
                                className='cursorPointer'
                            />
                        </div>
                        <table className='table'>

                            {
                                plif.map((data, index) => {
                                    return (<tr key={index}>

                                        <td>PLI/RPLI</td>
                                        <td><TextField id="standard-basic" label='BOOK NUMBER' variant="standard" defaultValue={data.bookNo}
                                            name='bookNo'
                                            onBlur={(e) => updateArrayState(e, index,  setplif)} /></td>
                                        <td><TextField id="standard-basic" label='from RECEIPT NO' variant="standard" defaultValue={data.from}
                                            name='from'
                                            onBlur={(e) => updateArrayState(e, index,  setplif)} /></td>
                                        <td><TextField id="standard-basic" label='DATE' variant="standard" defaultValue={data.fromdate}
                                            name='fromdate'
                                            onBlur={(e) => updateArrayState(e, index,  setplif)} /></td>
                                        <td><TextField id="standard-basic" label='AMOUNT' variant="standard" defaultValue={data.fromamount}
                                            name='fromamount'
                                            onBlur={(e) => updateArrayState(e, index,  setplif)} /></td>
                                        <td><TextField id="standard-basic" label='to RECEIPT NO' variant="standard" defaultValue={data.to}
                                            name='to'
                                            onBlur={(e) => updateArrayState(e, index,  setplif)} /></td>
                                        <td><TextField id="standard-basic" label='DATE' variant="standard" defaultValue={data.todate}
                                            name='todate'
                                            onBlur={(e) => updateArrayState(e, index,  setplif)} /></td>
                                        <td><TextField id="standard-basic" label='AMOUNT' variant="standard" defaultValue={data.toamount}
                                            name='toamount'
                                            onBlur={(e) => updateArrayState(e, index,  setplif)} /></td>
                                    </tr>)

                                })
                            }

                        </table>
                        <div className='pageCenter'>
                            <AddCircleIcon
                                onClick={() => {
                                    setplif([...plif, {
                                        bookNo: "",
                                        from: "",
                                        fromdate: "",
                                        fromamount: "",
                                        to: "",
                                        todate: "",
                                        toamount: ""
                                    }])
                                }}
                                className='cursorPointer'
                            />
                        </div>
                    </div>

                    {/* ------------------------------ms87 data----------------------------- */}
                    <div>
                        <div className='pageCenter'>
                            <RemoveCircleIcon
                                onClick={() => {
                                    setms87f((prev) =>
                                        prev.filter((data, index) => { return index !== prev.length - 1 })
                                    )
                                }}
                                className='cursorPointer'
                            />
                        </div>
                        <table className='table'>

                            {
                                ms87f.map((data, index) => {
                                    return (<tr key={index}>

                                        <td>MS87</td>
                                        <td><TextField id="standard-basic" label='from RECEIPT NO' variant="standard" defaultValue={data.from}
                                            name='from'
                                            onBlur={(e) => updateArrayState(e, index,  setms87f)}
                                        /></td>
                                        <td><TextField id="standard-basic" label='DATE' variant="standard" defaultValue={data.fromdate}
                                            name='fromdate'
                                            onBlur={(e) => updateArrayState(e, index,  setms87f)}
                                        /></td>
                                        <td><TextField id="standard-basic" label='AMOUNT' variant="standard" defaultValue={data.fromamount}
                                            name='fromamount'
                                            onBlur={(e) => updateArrayState(e, index,  setms87f)}
                                        /></td>
                                        <td><TextField id="standard-basic" label='to RECEIPT NO' variant="standard" defaultValue={data.to}
                                            name='to'
                                            onBlur={(e) => updateArrayState(e, index,  setms87f)}
                                        /></td>
                                        <td><TextField id="standard-basic" label='DATE' variant="standard" defaultValue={data.todate}
                                            name='todate'
                                            onBlur={(e) => updateArrayState(e, index,  setms87f)}
                                        /></td>
                                        <td><TextField id="standard-basic" label='AMOUNT' variant="standard" defaultValue={data.toamount}
                                            name='toamount'
                                            onBlur={(e) => updateArrayState(e, index,  setms87f)}
                                        /></td>
                                    </tr>)

                                })
                            }

                        </table>
                        <div className='pageCenter'>
                            <AddCircleIcon
                                onClick={() => {
                                    setms87f([...ms87f, {
                                        from: "",
                                        fromdate: "",
                                        fromamount: "",
                                        to: "",
                                        todate: "",
                                        toamount: ""
                                    }])
                                }}
                                className='cursorPointer'
                            />
                        </div>
                    </div>

                    {/* specimen signature book */}
                    <div>
                        <p>SPECIMEN SIGNATURE BOOK VERIFICATION</p>
                        <table className='table'>
                            <tr>
                                <th>Account Number</th>
                                <th>Photograph available</th>
                                <th>Signature available</th>
                            </tr>
                            {
                                ssbook.map((data, index) => {
                                    return <>
                                        <tr>
                                            <td><TextField id="standard-basic" label='Acc Number' variant="standard" defaultValue={data.accountNo}
                                                name='accountNo'
                                                onBlur={(e) => updateArrayState(e, index,  setSSBook)}
                                            /></td>
                                            <td><TextField id="standard-basic" label='Available/Not Available' variant="standard" defaultValue={data.accountNo}
                                                name='signature'
                                                onBlur={(e) => updateArrayState(e, index,  setSSBook)}
                                            /></td>
                                            <td><TextField id="standard-basic" label='Available/Not Available' variant="standard" defaultValue={data.accountNo}
                                                name='photograph'
                                                onBlur={(e) => updateArrayState(e, index,  setSSBook)}
                                            /></td>
                                        </tr>
                                    </>
                                })

                            }
                        </table>
                    </div>

                    {/* Passbooks */}

                    <div>
                        <p>PASSBOOK INFORMATION</p>
                        <table className='table'>
                            <tr>
                                <th colSpan={3}>SB</th>
                                <th colSpan={3}>RD</th>
                            </tr>
                            <tr>
                                <th>Account Number</th>
                                <th>Date of Last Transaction</th>
                                <th>Balance after transaction</th>

                                <th>Account Number</th>
                                <th>Date of Last Transaction</th>
                                <th>Balance after transaction</th>


                            </tr>
                            {
                                sbrd.map((data, index) => {
                                    return <>
                                        <tr>
                                            <td><TextField id="standard-basic" label='Acc No' variant="standard" name='sbAccount' defaultValue={data.sbAccount} onBlur={(e) => updateArrayState(e, index,  setSBRD)} /></td>
                                            <td><TextField id="standard-basic" label='DLT' variant="standard" name='sbDLT' defaultValue={data.sbDLT} onBlur={(e) => updateArrayState(e, index,  setSBRD)} /></td>
                                            <td><TextField id="standard-basic" label='Balance' variant="standard" name='sbBAT' defaultValue={data.sbBAT} onBlur={(e) => updateArrayState(e, index,  setSBRD)} /></td>
                                            <td><TextField id="standard-basic" label='Acc No' variant="standard" name='rdAccount' defaultValue={data.rdAccount} onBlur={(e) => updateArrayState(e, index,  setSBRD)} /></td>
                                            <td><TextField id="standard-basic" label='DLT' variant="standard" name='rdDLT' defaultValue={data.rdDLT} onBlur={(e) => updateArrayState(e, index,  setSBRD)} /></td>
                                            <td><TextField id="standard-basic" label='Balance' variant="standard" name='rdBAT' defaultValue={data.rdBAT} onBlur={(e) => updateArrayState(e, index,  setSBRD)} /></td>

                                        </tr>
                                    </>
                                })
                            }
                        </table>

                        <table className='table'>
                            <tr>
                                <th colSpan={3}>SSA</th>
                                <th colSpan={3}>TD</th>
                            </tr>
                            <tr>
                                <th>Account Number</th>
                                <th>Date of Last Transaction</th>
                                <th>Balance after transaction</th>

                                <th>Account Number</th>
                                <th>Date of Last Transaction</th>
                                <th>Balance after transaction</th>

                            </tr>
                            {
                                ssatd.map((data, index) => {
                                    return <>
                                        <tr>
                                            <td><TextField id="standard-basic" label='Acc No' variant="standard" name='ssaAccount' defaultValue={data.ssaAccount} onBlur={(e) => updateArrayState(e, index,  setSSATD)} /></td>
                                            <td><TextField id="standard-basic" label='DLT' variant="standard" name='ssaDLT' defaultValue={data.ssaDLT} onBlur={(e) => updateArrayState(e, index,  setSSATD)} /></td>
                                            <td><TextField id="standard-basic" label='Balance' variant="standard" name='ssaBAT' defaultValue={data.ssaBAT} onBlur={(e) => updateArrayState(e, index,  setSSATD)} /></td>
                                            <td><TextField id="standard-basic" label='Acc No' variant="standard" name='tdAccount' defaultValue={data.tdAccount} onBlur={(e) => updateArrayState(e, index,  setSSATD)} /></td>
                                            <td><TextField id="standard-basic" label='DLT' variant="standard" name='tdDLT' defaultValue={data.tdDLT} onBlur={(e) => updateArrayState(e, index,  setSSATD)} /></td>
                                            <td><TextField id="standard-basic" label='Balance' variant="standard" name='tdBAT' defaultValue={data.tdBAT} onBlur={(e) => updateArrayState(e, index,  setSSATD)} /></td>

                                        </tr>
                                    </>
                                })
                            }


                        </table>
                    </div>

                    {/* Transaction details */}
                    <div>
                        <p>TRANSACTIONS OF THE BO</p>
                        <table className='table'>
                            <tr>
                                <th>Date</th>
                                <th>SB Dep</th>
                                <th>SB Wdl</th>
                                <th>Date</th>
                                <th>RD Dep</th>
                                <th>Date</th>
                                <th>TD Dep</th>
                                <th>Date</th>
                                <th>SSA Dep</th>
                               

                            </tr>
                            {
                                txn.map((data, index) => {
                                    return <>
                                        <tr>
                                            <td><TextField id="standard-basic" label='Date' variant="standard" name='date' defaultValue={data.date} onBlur={(e) => updateArrayState(e, index,  setTXN)} /></td>
                                            <td><TextField id="standard-basic" label='SB Dep' variant="standard" name='sbd' defaultValue={data.sbd} onBlur={(e) => updateArrayState(e, index,  setTXN)} /></td>
                                            <td><TextField id="standard-basic" label='SB Wid' variant="standard" name='sbw' defaultValue={data.sbw} onBlur={(e) => updateArrayState(e, index,  setTXN)} /></td>
                                            <td><TextField id="standard-basic" label='Date' variant="standard" name='date2' defaultValue={data.date2} onBlur={(e) => updateArrayState(e, index,  setTXN)} /></td>
                                            <td><TextField id="standard-basic" label='RD Dep' variant="standard" name='rdd' defaultValue={data.rdd} onBlur={(e) => updateArrayState(e, index,  setTXN)} /></td>
                                            <td><TextField id="standard-basic" label='Date' variant="standard" name='date3' defaultValue={data.date3} onBlur={(e) => updateArrayState(e, index,  setTXN)} /></td>
                                            <td><TextField id="standard-basic" label='TD Dep' variant="standard" name='tdd' defaultValue={data.tdd} onBlur={(e) => updateArrayState(e, index,  setTXN)} /></td>
                                            <td><TextField id="standard-basic" label='Date' variant="standard" name='date4' defaultValue={data.date4} onBlur={(e) => updateArrayState(e, index,  setTXN)} /></td>
                                            <td><TextField id="standard-basic" label='SSA Dep' variant="standard" name='ssad' defaultValue={data.ssad} onBlur={(e) => updateArrayState(e, index,  setTXN)} /></td>
                                            

                                        </tr>
                                    </>
                                })
                            }
                        </table>
                    </div>

                    {/* PLI passbook */}
                    <div>
                        <p>PLI/ RPLI PASSBOOK INFORMATION</p>
                        <table className='table'>

                            <tr>
                                <th>Policy Number</th>
                                
                                <th>DLC</th>
                                <th>Premium</th>
                            </tr>

                            {
                                plipass.map((data, index) => {
                                    return <>
                                        <tr>
                                            <td><TextField id="standard-basic" label='Policy Number' variant="standard" name='policyNo' defaultValue={data.policyNo} onBlur={(e) => updateArrayState(e, index,  setplipass)} /></td>
                                            <td><TextField id="standard-basic" label='DLC' variant="standard" name='dlc' defaultValue={data.dlc} onBlur={(e) => updateArrayState(e, index,  setplipass)} /></td>
                                            <td><TextField id="standard-basic" label='Premium' variant="standard" name='premium' defaultValue={data.premium} onBlur={(e) => updateArrayState(e, index,  setplipass)} /></td>


                                        </tr>
                                    </>
                                })
                            }
                        </table>


                    </div>

                    {/* PLI RPLI Transaction */}
                    <div>
                        <p>PLI/RPLI Transactions</p>
                        <table className='table'>
                            <tr>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Amount</th>
                            </tr>

                            {
                                pli.map((data, index) => {
                                    return <>
                                        <tr>
                                            <td><TextField id="standard-basic" label='Date' variant="standard" name='date1' defaultValue={data.date1} onBlur={(e) => updateArrayState(e, index,  setpli)} /></td>
                                            <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='amount1' defaultValue={data.amount1} onBlur={(e) => updateArrayState(e, index,  setpli)} /></td>
                                            <td><TextField id="standard-basic" label='Date' variant="standard" name='date2' defaultValue={data.date2} onBlur={(e) => updateArrayState(e, index,  setpli)} /></td>
                                            <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='amount2' defaultValue={data.amount2} onBlur={(e) => updateArrayState(e, index,  setpli)} /></td>
                                            <td><TextField id="standard-basic" label='Date' variant="standard" name='date3' defaultValue={data.date3} onBlur={(e) => updateArrayState(e, index,  setpli)} /></td>
                                            <td><TextField id="standard-basic" label='AMOUNT' variant="standard" name='amount3' defaultValue={data.amount3} onBlur={(e) => updateArrayState(e, index,  setpli)} /></td>

                                        </tr>
                                    </>
                                })
                            }
                        </table>
                    </div>

                </div>

                <button onClick={() => {

                    setAbc(false);
                }




                }>SUBMIT</button>

            </div> : <IRFinal pageS1={page1} pageS2={page2} pageS3={page3} pageS4={page4} pageS5={page5} pageS6={page6} pageS6DTR={page6DTR} sb26f={sb26f} ms87f={ms87f} sb28f={sb28f} plif={plif} ssbook={ssbook} sbrd={sbrd} ssatd={ssatd} txn={txn} plipass={plipass} pli={pli} page6Selects={page6Selects} setAbc={setAbc}/>}
        </div>
    )
}

export default IRS
